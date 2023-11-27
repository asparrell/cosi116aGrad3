import os
import re
import json
from spacy.lang.en import English
from typing import List
from collections import Counter, defaultdict

spacy_tokenizer = English()
spacy_tokenizer.add_pipe("sentencizer")
tokenizer = spacy_tokenizer.tokenizer

START_TOKEN = "<START>"
END_TOKEN = "<END>"


def load_texts(dir_name: str) -> None:
    texts = {}
    fulldoc = ""
    for file in os.listdir(dir_name):
        if not file.endswith(".txt"):
            continue
        filename = file[:-4]
        filepath = os.path.join(dir_name, file)
        with open(filepath, encoding="utf-8") as f:
            doc = f.read()
            recomposed = re.sub(r"\s+", " ", doc)
            de_illustrate = re.sub(r"\[Illustration.*?]", "", recomposed)
            fulldoc += de_illustrate
            doc = spacy_tokenizer(de_illustrate)
            texts[filename] = build_dictionary(doc)
    # texts["fulldoc"] = build_dictionary(spacy_tokenizer(fulldoc))

    with open("./data/output.json", "w") as outf:
        outf.write(json.dumps(texts, indent=4))


def build_dictionary(doc) -> dict[str, dict[str, dict]]:
    doc_dict = {}
    uni_counts = Counter()
    bi_counts = Counter()
    tri_counts = Counter()
    bigram_probs = defaultdict(Counter)
    trigram_probs = defaultdict(Counter)
    for line in doc.sents:
        cleaned = clean_line(str(line))
        uni_counts.update(cleaned)
        bigramified = bigrams(cleaned)
        bi_counts.update(bigramified)
        for context, target in bigramified:
            bigram_probs[context][target] += 1
        trigramified = trigrams(cleaned)
        tri_counts.update(trigramified)
        for first, second, target in trigramified:
            trigram_probs[(first, second)][target] += 1

    doc_dict["unigrams"] = {"counts": {key: val for key, val in uni_counts.most_common()},
                            "probs": counts_to_probs(uni_counts)}
    doc_dict["bigrams"] = {"counts": {str(key): val for key, val in bi_counts.most_common()},
                           "probs": normalize(bigram_probs)}
    doc_dict["trigrams"] = {"counts": {str(key): val for key, val in tri_counts.most_common()},
                            "probs": normalize(trigram_probs)}

    return doc_dict


def clean_line(line: str) -> List[str]:
    line = re.sub(r"-{3,}|[_*\ufeff]+", "", line).lower().strip()
    line = re.sub(r"’", "'", line)
    line = re.sub(r"[^A-Za-z0-9 \-']", "", line)
    tokens = [str(word) for word in tokenizer(line) if line]
    return tokens


def bigrams(sentence: List[str]) -> List[tuple[str, str]]:
    output = []
    sentence_list = [START_TOKEN] + sentence + [END_TOKEN]
    for i in range(len(sentence_list) - 1):
        output.append((sentence_list[i], sentence_list[i + 1]))
    return output


def trigrams(sentence: List[str]) -> List[tuple[str, str, str]]:
    output = []
    sentence_list = [START_TOKEN, START_TOKEN] + sentence + [END_TOKEN]
    for i in range(len(sentence_list) - 2):
        output.append((sentence_list[i], sentence_list[i + 1], sentence_list[i + 2]))
    return output


def counts_to_probs(counts: Counter[str]) -> dict[str, float]:
    prob_dict = {}
    total = counts.total()
    for val in counts:
        prob_dict[val] = counts[val] / total
    return prob_dict


def normalize(prob_dict: defaultdict[Counter]) -> dict[str, dict[str, float]]:
    output_probs = {}
    for key in prob_dict:
        output_probs[str(key)] = counts_to_probs(prob_dict[key])
    return output_probs


load_texts("./data")

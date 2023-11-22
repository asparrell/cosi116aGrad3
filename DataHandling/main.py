import pandas as pd

df = pd.read_json("./data/output.json", orient="index")


def refactor(df: pd.DataFrame, ngram_level: str, count_or_prob: str) -> pd.DataFrame:
    data = pd.concat([pd.DataFrame(df.loc[text, ngram_level]).loc[:, [count_or_prob]].dropna().T for text in df.index],
                       keys=[text for text in df.index])
    return data.fillna(0).reset_index(level=1).drop("level_1", axis=1)


unicounts = refactor(df, "unigrams", "counts")
unicounts.to_csv("./data/unicounts.csv")

bicounts = refactor(df, "bigrams", "counts")
bicounts.to_csv("./data/bicounts.csv")

tricounts = refactor(df, "trigrams", "counts")
tricounts.to_csv("./data/tricounts.csv")

unicounts = refactor(df, "unigrams", "probs")
unicounts.to_csv("./data/uniprobs.csv")

bicounts = refactor(df, "bigrams", "probs")
bicounts.to_csv("./data/biprobs.csv")

tricounts = refactor(df, "trigrams", "probs")
tricounts.to_csv("./data/triprobs.csv")

print(unicounts)

// Immediately Invoked Function Expression to limit access to our 
// variables and prevent 
// Define the passages
const passages = [
  `"Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into
   the book her sister was reading, but it had no pictures or conversations in it, “and what is the use of a book,” thought Alice “without 
   pictures or conversations?”

  So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of
   making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close
    by her.
  
  There was nothing so very remarkable in that; nor did Alice think it so very much out of the way to hear the Rabbit say to itself, “Oh dear! 
  Oh dear! I shall be late!” (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time
  it all seemed quite natural); but when the Rabbit actually took a watch out of its waistcoat-pocket, and looked at it, and then hurried on,
  Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch 
  to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large
   rabbit-hole under the hedge."`
  ,
  `"It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife.
  
  However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well 
  fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.
  
  “My dear Mr. Bennet,” said his lady to him one day, “have you heard that Netherfield Park is let at last?”
  
  Mr. Bennet replied that he had not.
  
  “But it is,” returned she; “for Mrs. Long has just been here, and she told me all about it.”
  
  Mr. Bennet made no answer.
  
  “Do not you want to know who has taken it?” cried his wife, impatiently.
  
  “You want to tell me, and I have no objection to hearing it.”"`
  ,
  `"In my younger and more vulnerable years my father gave me some advice that I’ve been turning over in my mind ever since.
  “Whenever you feel like criticizing anyone,\” he told me, \“just remember that all the people in this world haven’t had the 
  advantages that you’ve had.”
  He didn’t say any more, but we’ve always been unusually communicative in a reserved way, and I understood that
   he meant a great deal more than that. In consequence, I’m inclined to reserve all judgements, a habit that 
  has opened up many curious natures to me and also made me the victim of not a few veteran bores. The abnormal mind is quick to 
  detect and attach itself to this quality when it appears in a normal person, and so it came about that in college I was unjustly 
  accused of being a politician, because I was privy to the secret griefs of wild, unknown men. Most of the confidences were 
  unsought—frequently I have feigned sleep, preoccupation, or a hostile levity when I realized by some unmistakable sign that an 
  intimate revelation was quivering on the horizon; for the intimate revelations of young men, or at least the terms in which they express
   them, are usually plagiaristic and marred by obvious suppressions. Reserving judgements is a matter of infinite hope. I am still a 
   little afraid of missing something if I forget that, as my father snobbishly suggested, and I snobbishly repeat, a sense of the 
   fundamental decencies is parcelled out unequally at birth."`
];

// Immediately Invoked Function Expression to limit access to our
// variables and prevent race conditions
((() => {

  // Load the data from a json file (you can make these using
  // JSON.stringify(YOUR_OBJECT), just remove the surrounding "")
  d3.csv("data/uniprobs_reversed.csv", (data) => {
    // General event type for selections, used by d3-dispatch
    // https://github.com/d3/d3-dispatch
    const dispatchString = "selectionUpdated";

    const top = 5;

    aliceSort = data.sort(function(b, a) {
        return b.alice - a.alice;
      }).slice(data.length-top, data.length);

    austenSort = data.sort(function(b, a) {
        return b.austen - a.austen;
      }).slice(data.length-top, data.length);

    gatsbySort = data.sort(function(b, a) {
        return b.gatsby - a.gatsby;
      }).slice(data.length-top, data.length);

    // Create a line chart given x and y attributes, labels, offsets;
    // a dispatcher (d3-dispatch) for selection events;
    // a div id selector to put our svg in; and the data to use.
    function createChart(id, sortData) {
      if (id === "#barchart_alice") {
        obj = barchart_alice();
        attr = "alice";
      }
      if (id === "#barchart_austen") {
        obj = barchart_austen();
        attr = "austen";
      }
      if (id === "#barchart_gatsby") {
        obj = barchart_gatsby();
        attr = "gatsby";
      }
      return obj.x(d => d[attr])
      .xLabel("UNIPROB")
      .y(d => d.unigram)
      .yLabel("UNIGRAM")
      .yLabelOffset(40)
      .selectionDispatcher(d3.dispatch(dispatchString))
      (id, sortData);
    }

    let alice_bar = createChart("#barchart_alice", aliceSort);
  
    let austen_bar = createChart("#barchart_austen", austenSort);

    let gatsby_bar = createChart("#barchart_gatsby", gatsbySort);

      function replaceChart(data_idx) {
        ids = ["#barchart_alice", "#barchart_austen", "#barchart_gatsby"]
        sortedData = [aliceSort, austenSort, gatsbySort]
        d3.select("#textbox").property("value", passages[data_idx]);
        for (i = 0; i < ids.length; i++) {
          selection = d3.select(ids[i]);
          selection.selectAll("svg").remove();
          selection.append(createChart(ids[i], sortedData[data_idx]))
        }
      }

      d3.select("#barchart_alice").on("click", () => replaceChart(0));
      d3.select("#barchart_austen").on("click", () => replaceChart(1));
      d3.select("#barchart_gatsby").on("click", () => replaceChart(2));
  });

})());
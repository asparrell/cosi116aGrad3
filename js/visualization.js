let selected;

const vis = (newTop = 5) => {

    d3.csv("data/dataset.csv", (data) => {
        // General event type for selections, used by d3-dispatch
        // https://github.com/d3/d3-dispatch
        const dispatchString = "selectionUpdated";

        let top = newTop;
        const colors = ["#52b7d8", "#e16031", "#ffab40"];
        const ids = ["#barchart_alice", "#barchart_austen", "#barchart_gatsby"];

        // Get the top n bars for the selected n, sorted by the given text.
        function getTopSorted(text, top) {
            return data.sort(function (b, a) {
                return b[text] - a[text];
            }).slice(data.length - top, data.length);
        }

        let aliceSort = getTopSorted("alice_prob", top);
        let austenSort = getTopSorted("austen_prob", top);
        let gatsbySort = getTopSorted("gatsby_prob", top);
        let sortedData = [aliceSort, austenSort, gatsbySort];

        if (selected != null) {
            deleteChartsKeepSelection(selected);
        } else {
            deleteCharts();
        }

        // create charts based on a given text and the sorted, sliced data obtained from getTopSorted.
        function createChart(id, sortData) {
            if (id === "#barchart_alice") {
                obj = barchart_alice();
                attr = "alice_prob";
            }
            if (id === "#barchart_austen") {
                obj = barchart_austen();
                attr = "austen_prob";
            }
            if (id === "#barchart_gatsby") {
                obj = barchart_gatsby();
                attr = "gatsby_prob";
            }
            return obj.x(d => d[attr])
                .xLabel("UNIPROB")
                .y(d => d.unigram)
                .yLabel("UNIGRAM")
                .yLabelOffset(40)
                .selectionDispatcher(d3.dispatch(dispatchString))(id, sortData);
        }

        createChart("#barchart_alice", aliceSort);
        createChart("#barchart_austen", austenSort);
        createChart("#barchart_gatsby", gatsbySort);

        // obtain user selection of a chart
        d3.select("#barchart_alice").on("click", () => {
            selected = 0;
            replaceChart(0)
        });
        d3.select("#barchart_austen").on("click", () => {
            selected = 1;
            replaceChart(1)
        });
        d3.select("#barchart_gatsby").on("click", () => {
            selected = 2;
            replaceChart(2)
        });

        // replace the charts with the selected chart ordering (implementation of reordering bars)
        function replaceChart(data_idx) {
            deleteChartsKeepSelection(data_idx)
            for (let i = 0; i < ids.length; i++) {
                createChart(ids[i], sortedData[data_idx]);
            }
        }

        function deleteChartsKeepSelection(data_idx) {
            d3.select("#textbox").html(passages[data_idx]);
            for (let i = 0; i < sortedData[data_idx].length; i++) {
                d3.select("#textbox").selectAll("." + sortedData[data_idx][i].unigram).style("color", colors[data_idx]);
            }
            deleteCharts();
        }

        // remove the old charts to replace with new ones
        function deleteCharts() {
            for (let i = 0; i < ids.length; i++) {
                let selection = d3.select(ids[i]);
                selection.selectAll("svg").remove();
            }
        }

        // brushing and linking from text to bars
        function getSelectedText() {
            if (window.getSelection) {
                d3.select("#textbox").selectAll("p").selectAll("mark").style("color", "black")
                let words = window.getSelection().getRangeAt(0);
                expandToWord(words);
                return words.toString();
            } else if (document.selection && document.selection.type != "Control") {
                return document.selection.createRange().text;
            }
            return '';
        }

        // Make selection only select whole words, credit to Stack Overflow (in acknowledgements)
        function expandToWord(range) {
            if (range.collapsed) {
                return;
            }
            while (range.startOffset > 0 && range.toString()[0].match(/\w/)) {
                range.setStart(range.startContainer, range.startOffset - 1);
            }
            while (range.endOffset < range.endContainer.length && range.toString()[range.toString().length - 1].match(/\w/)) {
                range.setEnd(range.endContainer, range.endOffset + 1);
            }
        }

        // Function to update charts based on selected text
        function updateChartsWithSelectedText() {
            const selectedText = getSelectedText();
            if (!selectedText.trim().length) {
                return;
            }
            const selectedWords = selectedText.toLowerCase().split(/[\s,.—“”)\-;:!(?]+/).filter(Boolean);
            for (let i = 0; i < selectedWords.length; i++) {
                d3.select("#textbox").selectAll("." + selectedWords[i]).style("color", colors[selected]);
            }
            for (let i = 0; i < ids.length; i++) {
                  updateChartForSelectedWords(ids[i], selectedWords);
              }
        }

        function updateChartForSelectedWords(chartId, selectedWords) {
            let text_order = ["alice_prob", "austen_prob", "gatsby_prob"]
            let filteredData = getTopSorted(text_order[selected], data.length).filter(d => selectedWords.includes(d.unigram)).slice(0, 20);
            d3.select(chartId).selectAll("svg").remove();
            createChart(chartId, filteredData);
        }

        // Attach event listener to the textbox for text selection
        document.getElementById('textbox').addEventListener('mouseup', () => {
            setTimeout(updateChartsWithSelectedText, 10);
        });
    });

};

vis();
function barchart_alice() {

    // Based on Mike Bostock's margin convention
    // https://bl.ocks.org/mbostock/3019563
    let margin = {
        top: 60,
        left: 50,
        right: 30,
        bottom: 20
      },
      width = 500 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom,
      xLabelText = "",
      yLabelText = "",
      yLabelOffsetPx = 0,
      xScale = d3.scaleLinear(),
      yScale = d3.scaleBand(),
      selectableElements = d3.select(null),
      // tooltip = d3.select('.tooltip-area'),
      dispatcher;
  
    // Create the chart by adding an svg to the div with the id 
    // specified by the selector using the given data
    function chart(selector, data) {
      let svg = d3.select(selector)
        .append("svg")
          .attr("preserveAspectRatio", "xMidYMid meet")
          .attr("viewBox", [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom].join(' '))
          .classed("svg-content", true);
  
      svg = svg.append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      //Define scales
      xScale
        .domain([0, d3.max(data, d => xValue(d))])
        .rangeRound([0, width]);
  
      yScale
        .domain(d3.map(data, yValue).keys())
        .rangeRound([height, 0]);
  
      // X axis
      let xAxis = svg.append("g")
          .attr("transform", "translate(0," + (height) + ")")
          .call(d3.axisBottom(xScale));
          
      // X axis label
      xAxis.append("text")        
          .attr("class", "axisLabel")
          .attr("transform", "translate(" + (width - 50) + ",-10)")
          .text(xLabelText);
      
      // Y axis and label
      let yAxis = svg.append("g")
          .call(d3.axisLeft(yScale))
        .append("text")
          .attr("class", "axisLabel")
          .attr("transform", "translate(" + yLabelOffsetPx + ", -12)")
          .text(yLabelText);

      let tooltip = d3.select("body")
        .append("div")
        .attr("class", "tooltip")
        
      let mouseover = function(d) {
        let prob = d.alice_prob
        let count = d.alice_count

        tooltip
          .html("<b>Probability:</b> " + prob + "<br><b>Count:</b> " + count)
          .style("visibility", "visible")
      }

      let mousemove = function() {
        tooltip
        .style("left", (d3.event.pageX-55) + "px")
        .style("top", (d3.event.pageY-40) + "px")
      }

      let mouseleave = function() {
        tooltip
          .style("visibility", "hidden")
      }

      let onClick = function() {
        tooltip
          .html('')
          .style("visibility", "hidden")
      }

      let barHeight = function() {
        if (yScale.bandwidth()-30 <= 0) {
          return yScale.bandwidth()-5;
        }
        return yScale.bandwidth()-30;
      }

      let yScaleHeight = function(d) {
        if (yScale.bandwidth()-30 <= 0) {
          return yScale(d.unigram)+3;
        }
        return yScale(d.unigram)+16;
      }

      let bars = svg.append("g")
          .attr("fill", "#52b7d8")
        .selectAll()
        .data(data)
        .enter().append("rect")
          .attr("x", xScale(0)+1)
          .attr("y", (d) => yScaleHeight(d))
          .attr("width", (d) => xScale(d.alice_prob))
          .attr("height", barHeight())
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave)
        .on("click", onClick);
          
      selectableElements = bars;
  
      return chart;
    }
  
    // The x-accessor from the datum
    function X(d) {
      return xScale(xValue(d));
    }
  
    // The y-accessor from the datum
    function Y(d) {
      return yScale(yValue(d));
    }
  
    chart.margin = function (_) {
      if (!arguments.length) return margin;
      margin = _;
      return chart;
    };
  
    chart.width = function (_) {
      if (!arguments.length) return width;
      width = _;
      return chart;
    };
  
    chart.height = function (_) {
      if (!arguments.length) return height;
      height = _;
      return chart;
    };
  
    chart.x = function (_) {
      if (!arguments.length) return xValue;
      xValue = _;
      return chart;
    };
  
    chart.y = function (_) {
      if (!arguments.length) return yValue;
      yValue = _;
      return chart;
    };
  
    chart.xLabel = function (_) {
      if (!arguments.length) return xLabelText;
      xLabelText = _;
      return chart;
    };
  
    chart.yLabel = function (_) {
      if (!arguments.length) return yLabelText;
      yLabelText = _;
      return chart;
    };
  
    chart.yLabelOffset = function (_) {
      if (!arguments.length) return yLabelOffsetPx;
      yLabelOffsetPx = _;
      return chart;
    };
  
    // Gets or sets the dispatcher we use for selection events
    chart.selectionDispatcher = function (_) {
      if (!arguments.length) return dispatcher;
      dispatcher = _;
      return chart;
    };
  
    // Given selected data from another visualization 
    // select the relevant elements here (linking)
    chart.updateSelection = function (selectedData) {
      if (!arguments.length) return;
  
      // Select an element if its datum was selected
      selectableElements.classed("selected", d => {
        return selectedData.includes(d)
      });
    };
  
    return chart;
  }
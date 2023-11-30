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
      ourBrush = null,
      selectableElements = d3.select(null),
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

<<<<<<< HEAD
      // sort data from greatest to least
      data.sort(function(b, a) {
        return b.alice - a.alice;
      });

      // function to show top [#] bars
      function topBars(top, data){
        return data.slice(data.length-top, data.length)
      };

      data = topBars(5, data);

=======
>>>>>>> main
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

      let bars = svg.append("g")
          .attr("fill", "#52b7d8")
        .selectAll()
        .data(data)
        .enter().append("rect")
          .attr("x", (d) => xScale(0) + 1)
          .attr("y", (d) => yScale(d.unigram)+15)
          .attr("width", (d) => {console.log(width, xScale(d.alice)); return xScale(d.alice)})
          .attr("height", yScale.bandwidth()-30);
          
      selectableElements = bars;
      
      // leaving this brush here in case we need it
      svg.call(brush);
  
      // Highlight points when brushed
      function brush(g) {
        const brush = d3.brush()
          .on("start brush", highlight)
          .on("end", brushEnd)
          .extent([
            [-margin.left, -margin.bottom],
            [width + margin.right, height + margin.top]
          ]);
  
        ourBrush = brush;
  
        g.call(brush); // Adds the brush to this element
  
        // Highlight the selected circles.
        function highlight() {
          if (d3.event.selection === null) return;
          const [
            [x0, y0],
            [x1, y1]
          ] = d3.event.selection;
          bars.classed("selected", d =>
            x0 <= X(d) && X(d) <= x1 && y0 <= Y(d) && Y(d) <= y1
          );
  
          // Get the name of our dispatcher's event
          let dispatchString = Object.getOwnPropertyNames(dispatcher._)[0];
  
          // Let other charts know
          dispatcher.call(dispatchString, this, svg.selectAll(".selected").data());
        }
        
        function brushEnd() {
          // We don't want an infinite recursion
          if (d3.event.sourceEvent.type != "end") {
            d3.select(this).call(brush.move, null);
          }
        }
      }
  
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
// Returns sum of the array, including multidimensional arrays
function arraySum(array) {
  var total = 0;
  // iterate through array elements
  array.forEach(function(arrElement) {
    // checks if array element is an array
    if (Array.isArray(arrElement)) {
      // if it's in an array then recursively call arrSum to get its total;
      total += arraySum(arrElement);
    } else {
      // else adds to the total
      total += arrElement;
    }
  });
  return total;
}

// Function that draws a bar chart for each element in data, style based on a option object and appends to a provided element
function drawBarChart(data, option, element) {
  var chart = $("<ul class='chart'></ul>");
  var labels = $("<ul class='labels'></ul>");
  var title = $("<h3 class='title'></h3>");
  var chartLabels = $("<div class='chart-labels'></div>");
  var chartContainer = $("<div class='chart-container'></div>");
  var xAxis = $("<div class='x-axis'></div>");

  // Set CSS option for title
  title.css("color", option.fontColour);
  title.css("fontSize", option.fontSize);
  title.css("textAlign", option.titlePosition);
  // Set CSS options in chart element
  element.css("width", option.width);
  element.css("height", option.height);
  
  // Set title
  title.text(option.title);
  $(element).prepend(title);
  
  // Create a new item for each element in array && add the correspondent label
  for (var i = 0; i < data.length; i++) {
    var item = $("<li></li>");
    var label = $("<li></li>");
    // Set item width according to the biggest value of data
    var barWidth;
    if (Array.isArray(data[i])) {
      barWidth = (arraySum(data[i]) / option.xAxis) * 100 + "%";
    } else {
      barWidth = (data[i] / option.xAxis) * 100 + "%";
    }

    // Sets bar spacing and width
    item.css("marginBottom", option.barSpacing);
    item.css("width", barWidth);

    // Sets bar properties for multiple valued bar
    if (Array.isArray(data[i])) {
      var totalValue = arraySum(data[i]);
      item.css("padding", "0");

      for (var k = 0; data[i][k]; k++) {
        var subBar = $("<span class='sub-bar'></span>").text(data[i][k]);
        var subBarWidth = (data[i][k] / totalValue) * 100 + "%";
        subBar.css("width", subBarWidth);
        subBar.css("backgroundColor", option.multipleColors[k % option.multipleColors.length]);
        item.append(subBar);
      }
      // Sets properties for single valued bar
    } else {
      item.text(data[i]);
      item.css("textAlign", option.textPosition);
      item.css("backgroundColor", option.barColor);
    }
    label.text(option.labels[i]);

    // Append item and labels to its respectively divs
    chart.append(item);
    labels.append(label);
  }

  // Set an appropriate x-axis values according to the biggest data value
  var xValue = (option.xAxis / 4).toFixed(2);
  for (var j = 0; j < 5; j++) {
    var xValueElem = $("<p></p>").text(xValue * j);
    xAxis.append(xValueElem);
  }

  // Add chart and labels ul to its respect div
  chartContainer.append(chart);
  chartLabels.append(labels);

  // Add div to element
  element.append(chartLabels);
  element.append(chartContainer);
  element.append(xAxis);
}


// ==============================
// Test Code
// ==============================
var element = $("div.container");

var data = [[1, 2, 3], [2, 3, 4], 5];

var option = {
  title: "Favourite JS Framework",
  labels: ["Angular", "React", "Vue.js"],
  width: "700px",
  height: data.length * 80 + "px",
  textPosition: "left",
  barColor: "lightpink",
  barSpacing: "40px",
  xAxis: data.reduce(function(a, b) {
    var aTotal = 0;
    var btotal = 0;
    if (Array.isArray(a)) {
      aTotal = arraySum(a);
    } else {
      aTotal = a;
    }

    if (Array.isArray(b)) {
      bTotal = arraySum(b);
    } else {
      bTotal = b;
    }
    return Math.max(aTotal, bTotal);
  }),
  fontSize: "32px",
  fontColour: "red",
  multipleColors: ["lightpink", "lightblue", "lightgreen"]
};

drawBarChart(data, option, element);
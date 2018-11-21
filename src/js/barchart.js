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
    var item = $("<li></li>").text(data[i]);
    var label = $("<li></li>").text(option.labels[i]);
    // Set item width according to the biggest value of data
    var barWidth = (data[i] / option.xAxis) * 100 + "%";
    item.css("textAlign", option.textPosition);
    item.css("backgroundColor", option.barColor);
    item.css("marginBottom", option.barSpacing);
    item.css("width", barWidth);
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

var data = [3, 6, 9];

var option = {
  title: "Favourite Programming Language",
  labels: ["Angular", "React", "Vue.js"],
  width: "960px",
  height: data.length * 80 + "px",
  textPosition: "left",
  barColor: "lightpink",
  barSpacing: "40px",
  xAxis: data.reduce(function(a, b) {
    return Math.max(a, b);
  }),
  fontSize: "32px",
  fontColour: "red"
};

drawBarChart(data, option, element);
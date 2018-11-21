function drawBarChart(data, option, element) {
  var chart = $("<ul class='chart'></ul>");
  var labels = $("<ul class='labels'></ul>");
  var title = $("<h3 class='title'></h3>");
  var chartLabels = $("<div class='chart-labels'></div>");
  var chartContainer = $("<div class='chart-container'></div>");
  
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
    item.css("textAlign", option.textPosition);
    item.css("backgroundColor", option.barColor);
    item.css("marginBottom", option.barSpacing);
    item.css("width", data[i] * 10 + "%");
    chart.append(item);
    labels.append(label);
  }
  // Add chart and labels ul to its respect div
  chartContainer.append(chart);
  chartLabels.append(labels);

  // Add div to element
  element.append(chartLabels);
  element.append(chartContainer);
}


// Test Code
var element = $("div.container");

var data = [6, 9, 5];

var option = {
  title: "Favourite Programming Language",
  labels: ["Angular", "React", "Vue.js"],
  width: "960px",
  height: data.length * 80 + "px",
  textPosition: "left",
  barColor: "lightpink",
  barSpacing: "40px",
  barChartAxes: "",
  fontSize: "32px",
  fontColour: "red"
};

drawBarChart(data, option, element);
# Bar Chart Library

Create simple and customizable bar charts in HTML files.

## Getting Started

Clone chart-lib repository: `git clone https://github.com/baiyjmatheus/chart-lib`

## How to use

1. Make sure that your HTML file includes jQuery, barchart.js and barchart.css

2. Create a <div> element that will contain the bar chart.

```
<div id="demo"></div>
```

3. drawBarChart(data, option, element) receives 3 three arguments:
  a) data: An array of numbers. Each element will be a bar in a chart. If an element is an array of numbers, the bar will be subdivided into different sections.
  b) option: An object that holds the chart preferences.
  ```
  var option = {
    title: "Favourite JS Framework", // Chart title text
    fontSize: "32px", // Title font size
    fontColour: "#123123", // Title font color
    labels: ["Angular", "React", "Vue.js"], // Labels of the chart, have to follow the same sequence as data array
    width: "700px", // chart width
    height: data.length * 80 + "px", // chart height based on the number of elements in data
    textPosition: "left", // Text alignment in the bars
    barColor: "#123123", // Bar color
    barSpacing: "40px", // Space between bars
    xAxis: "15", // Max value of the xAxis
    multipleColors: ["lightpink", "lightblue", "lightgreen"] // Array of colors of the multi-valued bars
  };
  ```
  c) element: DOM element that will render the chart
  ```
  var element = $("div#demo");
  ```

4. After setting all the required arguments of drawBarChart function, call the function:
```
drawBarChart(data, option, element);
```

### Installing


```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

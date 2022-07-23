var trace = {
     x: ["burrito", "pizza", "chicken"],
     y: [10, 18, 5],
     type: "bar"
  };
var layout = {
     title: "Luncheon Survey",
     xaxis: {title: "Food Option"},
     yaxis: {title: "Number of Respondents"}
};

Plotly.newPlot("plot", [trace], layout);


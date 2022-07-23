var trace = {
     x: [1, 8, 3, 4, 15, 11, 6, 8, 29, 20],
     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
     mode: "markers",
     type: "scatter"
  };
var layout = {
     title: "'Scatter' Plot",
};

Plotly.newPlot("plot", [trace], layout);


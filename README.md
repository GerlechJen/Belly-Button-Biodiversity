# Belly Button Biodiversity
## Overview
Rosa, a biological researcher in a prominent microbiology laboratory wants to discover and document different bacteria species that are unknown to science. 
Improbable Beef, a food start-up is partnering with her laboratory to research candidate bacterial species. They want bacteria that can synthesize proteins to have a perfect taste like beef. Rosa’s hypothesis is that bacteria found on the human body, specifically the belly button may be the ideal bacteria species to make synthetic beef.
She sampled the navels of people across the country to identify bacterial species that colonize their belly buttons. The participants’ identity has been kept anonymous and they have been assigned an ID number instead.  

In this project, engaging and dynamic charts will be created from belly button data to effectively convey information to the participants and other researchers. The data is contained in an external samples.json file. It was retrieved using the D3.js library and a local server. An index.html page was created with links to CDNs and the JavaScript file (charts.js). In the charts.js file, the data was iterated through to retrieve the necessary information required for the dashboard. To make the visualizations on the dashboard interactive, JavaScript event listener was included.

## Results

A dropdown menu that lists the ID numbers of all the participants was built for the dashboard. A function was also created which displays the demographic information, as well as 3 visualizations once a user chooses an ID from the dropdown menu. These visualizations help the participants to identify bacterial species in their belly buttons and draw conclusions. The three visualizations created are a Horizontal Bar Chart, a Bubble Chart and a Gauge Chart.
 
By default, when a user first opens the page, an init() function is called and demographic data and charts for ID 940 are displayed. The visualizations keep on changing as different participant IDs are selected from the dropdown menu. Upon selection of different IDs, an optionChanged() function is called. 
 
 ``` JS
 function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);  
}
```
Once the above function is called 2 things happen.
1. The demographic information panel is populated with the specific volunteer's information.
2. The volunteer's data is visualized in three charts (Bar, Bubble and Gauge).
 
The image below shows the demographic information associated with the participant with ID 954.

![image1](https://github.com/GerlechJen/Belly-Button-Biodiversity/blob/main/images/demographic%20info.png)
 
The horizontal bar chart shows the top 10 bacterial species (OTUs). It displays the sample_values as the values, the otu_ids as the labels, and the otu_labels as the hover text for the bars on the chart. The Bar Chart for participant with ID 1280 is shown below. 

![image2](https://github.com/GerlechJen/Belly-Button-Biodiversity/blob/main/images/barchart.png)


The Bubble Chart displays the otu_ids as the x-axis values, the sample_values as the y-axis values, sample_values as marker size, otu_ids as marker colors and otu_labels as hover-text values. The bubble chart displayed when participant with ID 1530 is selected from the dropdown menu is shown below.

![image4](https://github.com/GerlechJen/Belly-Button-Biodiversity/blob/main/images/bubblechart.png)


The Gauge Chart displays the weekly washing frequency's value. The value is displayed as a measure from 0-10 on the progress bar in the gauge chart when a participant's ID is selected from the dropdown menu. The Gauge Chart for ID 960 is shown below

![image3](https://github.com/GerlechJen/Belly-Button-Biodiversity/blob/main/images/gaugechart.png)

### Customizing the Dashboard
Using bootstrap and HTML, the webpage was cuustomised by:
1. Adding an image to the jumbotron.
2. Adding a background color to the webpage(rgb(250, 255, 255)).
3. Adding more information about the project as a paragraph on the page.

## Summary
Using Plotly.js, attractive, accessible, and interactive data visualizations with buttons and drop-down menus were created and deployed to the web.  The webpage can be accessed by the participants, and fellow researchers. Once a participant enters their id number, they can determine not just the most common bacteria species, by count, that live in their navel but also, the top 10 bacteria species. This way, if Improbable Beef identifies a species as a candidate to manufacture synthetic beef, the participants will be able to identify whether that species is found in their navel.

The completed webpage can be accessed by using this [link](https://gerlechjen.github.io/Belly-Button-Biodiversity/).

----

**Completed by:** Jennifer Anno-Kusi

**Email:** jannokusi@gmail.com 

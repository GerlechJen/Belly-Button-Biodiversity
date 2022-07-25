# Belly Button Biodiversity
## Overview
Rosa, a biological researcher in a prominent microbiology laboratory wants to discover and document different bacteria species that are unknown to science. 
Improbable Beef, a food start-up is partnering with her laboratory to research candidate bacterial species. They want bacteria that can synthesize proteins to have a perfect taste like beef. Rosa’s hypothesis is that bacteria found on the human body, specifically the belly button may be the ideal bacteria species to make synthetic beef.
She sampled the navels of people across the country to identify bacterial species that colonize their belly buttons. The participants’ identity has been kept anonymous and they have been assigned an ID number instead.  

In this project, engaging and dynamic charts will be created from belly button data to effectively convey information to the participants and other researchers. The data is contained in an external samples.json file. It was retrieved using the D3.js library and a local server. An index.html page was created with links to CDNs and the JavaScript file (charts.js). In the charts.js file, the data was iterated through to retrieve the necessary information required for the dashboard. To make the visualizations on the dashboard interactive, JavaScript event listener was included.

## Results

A dropdown menu that lists the ID numbers of all the participants was built for the dashboard. A function was also created which displays the demographic information, as well as 3 visualizations once a user chooses an ID from the dropdown menu. These visualizations help the participants to identify the top 10 bacterial species in their belly buttons. This way, if Improbable Beef identifies a species as a candidate to manufacture synthetic beef, the participants will be able to identify whether that species is found in their navel.The three visualizations created are a Horizontal Bar Chart, a Bubble Chart and a Gauge Chart.
 
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
2. The volunteer's data is visualized in three charts. (bar, bubble and gauge)
 
The image below shows the demographic information associated with the participant with ID 954.

![image1](https://github.com/GerlechJen/Belly-Button-Biodiversity/blob/main/Module%2012%20Challenge/images/demographic%20info.png)
 
The horizontal bar chart shows the top 10 bacterial species (OTUs). It displays the sample_values as the values, the otu_ids as the labels, and the otu_labels as the hover text for the bars on the chart.

Bar Chart for 1280 

![image2](https://github.com/GerlechJen/Belly-Button-Biodiversity/blob/main/Module%2012%20Challenge/images/barchart.png)


Gauge Chart for 960 

![image3](https://github.com/GerlechJen/Belly-Button-Biodiversity/blob/main/Module%2012%20Challenge/images/gaugechart.png)
weekly washing frequency of the belly button

## Summary
Using Plotly.js, a JavaScript data visualization library, attractive, accessible, and interactive data visualizations were created and deployed to the web. Buttons and drop-down menus were included. The dashboard built displays the most common bacterial species, by count, in the navel and will be accessible to the research participants as well as fellow researchers. Once a participant enters his or her id number, they can determine which top 10 bacteria species live in their navel. This is a great way for them to better understand the data and draw conclusions. 


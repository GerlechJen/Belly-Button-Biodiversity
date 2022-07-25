# Belly Button Biodiversity
## Overview
Rosa a biological researcher in a prominent microbiology laboratory wants to discover and document different bacteria species that are unknown to science. 
Improbable Beef, a food start-up is partnering with her laboratory to research candidate bacterial species. They want bacteria that can synthesize proteins to have a perfect taste like beef. Rosa’s hypothesis is that bacteria found on the human body, specifically the belly button may be the ideal bacteria species to make synthetic beef.
She sampled the navels of people across the country to identify bacterial species that colonize their belly buttons. Each of these participants carries a variety of bacterial species in their belly button. The participants’ identity has been kept anonymous and they have been assigned an id number instead.  
In this project, engaging and dynamic charts will be created specifically a bar chart, bubble chart, and gauge chart to best convey the belly button data to the participants and other researchers. 

data contained in samples.json
## Results
The belly button data was retrieved from an external JSON file using the D3.js library and a local server. The data was iterated through to retrieve the necessary data.

To make the visualizations interactive, JavaScript event listeners were created.
manipulate and parse the data 

An index.html page was created with links to CDNs and the JavaScript file (charts.js). 

A dropdown menu that lists the ID numbers of all the participants was built for the dashboard. 

A function is created which displays the demographic data as well as all the 3 charts once a user chooses an id from the dropdown menu
 
By default, when a user first opens the page, the init()  function is called and data and charts for ID 940 are displayed. The visualizations keep on changing as different participant IDs are selected from the dropdown menu. Upon selection of different IDS, the optionChanged() function is called. 
 
 ``` JS
 function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);  
}
```
Once the function is called 2 things happen.
1. The demographic information panel is populated with the specific volunteer's information.
2. The volunteer's data is visualized in three charts. (bar, bubble and gauge)
 
The image below shows the demographic information associated with the participant with ID 954.

![image1](https://github.com/GerlechJen/Belly-Button-Biodiversity/blob/main/Module%2012%20Challenge/images/demographic%20info.png)
 
The bar chart shows how   data??? is distributed across several categories(specify)
weekly washing frequency of the belly button

## Summary
Using Plotly.js, a JavaScript data visualization library, attractive, accessible, and interactive data visualizations were created and deployed to the web. Buttons and drop-down menus were included. The dashboard built displays the most common bacterial species, by count, in the navel and will be accessible to the research participants as well as fellow researchers. Once a participant enters his or her id number, they can determine which top 10 bacteria species live in their navel. This is a great way for them to better understand the data and draw conclusions. 


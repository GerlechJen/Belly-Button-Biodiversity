const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

// Attempt to print all latitudes and logitudes
d3.json(url).then(receivedData => console.log(receivedData[0].location.latitude))
d3.json(url).then(receivedData => 
    console.log(receivedData.map(name => name.location.latitude))); 
        // other => other.location.latitude)));
// var data = d3.json(url).then(receivedData => console.log(receivedData));
// data
// latandlong = data.map(city => city[0].location.latitude, city[0].location.longitude)
// console.log(latandlong);
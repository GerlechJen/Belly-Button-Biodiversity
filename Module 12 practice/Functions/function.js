var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

var colours = ["red", "yellow", "orange", "green"]
var uppercase = colours.map(colour => colour.toUpperCase())
console.log(uppercase);

var numbers = [0,2,4,6,8];
var surplus = numbers.map(number => number + 5)
console.log(surplus);

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
// var cityNames = cities.map(city => city.City);
console.log(cityNames);

var populations = cities.map(function(city){
    return city.population;
});
console.log(populations);

var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var swords = words.filter(keep => keep[0] =='s');
console.log(swords);

var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);
console.log(sortedAge.reverse());

var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => b - a);
console.log(sortedAge);

var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);
console.log(slice1);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var firstthree = words.slice(0,3);
console.log(firstthree);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
last = words.slice(3, );
console.log(last);

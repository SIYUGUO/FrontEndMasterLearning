const cities = [
    "SEATTKE",
    "SAN FRANCISCO",
    "SALT LAKE CITY",
    "AMSTERDAM",
    "HONG KONG"
];

let numberOfTimesRan = 0;
cities.forEach(function(i) {
    numberOfTimesRan++;
    console.log(i.toLowerCase());
    
});
console.log(numberOfTimesRan)
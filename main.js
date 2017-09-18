zipCode = process.argv[2]
console.log("We will look up the wather for your zipCode...")
console.log(zipCode)


var http = require('http');

var request = new XMLHttpRequest();

request.open("GET", "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA", true);

console.log(request)
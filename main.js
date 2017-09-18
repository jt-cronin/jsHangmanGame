const request = require('request');
var lat, lng;
 
request('http://maps.googleapis.com/maps/api/geocode/json?components=postal_code:68022', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  	res.on('response', function(response){
  		lat = response.results[0].geometry.location.lat;
  	});
  	// console.log("the latitude is:", body.results[0].geometry.location.lat);
});

request('http://maps.googleapis.com/maps/api/geocode/json?components=postal_code:68022', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  res.on('response', function(response){
  	lng = body.results[0].geometry.location.lng;
  });
  // console.log("the longitude is:", body.results[0].geometry.location.lng);
});


console.log("Hello world")
console.log("the lat and lng should be")
console.log(lat + lng )
console.log("inbetween this sentence")
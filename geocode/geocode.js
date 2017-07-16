
const request = require('request');


var geocodeAddress = (uri, callback) => {
var uri = encodeURIComponent(uri);
  request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address= ${uri}`,
    json: true
  }, (error,response,body) => {



    if(error){
      callback('Unable to connect to Servers..');
    }
    else if(body.status === 'ZERO_RESULTS'){
      callback('Unable to Find the Address');
    }
  else if(body.status === 'OK'){
callback(undefined, {
  address: body.results[0].formatted_address,
  latitude: body.results[0].geometry.location.lat,
  longitude: body.results[0].geometry.location.lng
});
  }
  });

};

module.exports = {
  geocodeAddress
};
const request = require('request');


let geocodeAddress = (address, callback) => {
    request({
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(address)+'&key=AIzaSyBmbkSACt_FhEuTBqZKGkPR_usvUVbDW-s',
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Google Servers.')
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address.')
        } else if (body.status === 'OK'){
            callback(undefined, {
                address: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            });

        }
    });
}

module.exports = {
    geocodeAddress
}
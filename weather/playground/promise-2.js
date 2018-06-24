const request = require('request');

let geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        request({
            url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(address),
            json: true
        }, (err, response, body) => {
            if (err) reject('Unable to connect to google servers');
            else if (body.status === 'ZERO_RESULTS') reject('Please enter real location');
            else if (body.status === 'OK') resolve({
                address: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            });
        });            
        
    });
}

// Real Location
geocodeAddress('19146').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errMes) => {
    console.log(errMes)
});

// Catches errors
geocodeAddress('000000000000000').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});
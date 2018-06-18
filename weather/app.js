const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=4040%207th%20AVE%20NE%20Seattle,%20WA',
    json: true
}, (error, response, body) => {
    console.log(JSON.stringify(body, undefined, 2));
})
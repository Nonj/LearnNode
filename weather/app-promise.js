const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

let encodedAddress = encodeURIComponent(argv.address);
let geocodeURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(encodedAddress)+'&key=AIzaSyBmbkSACt_FhEuTBqZKGkPR_usvUVbDW-s';

axios.get(geocodeURL).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address.')
    }
    let lat = response.data.results[0].geometry.location.lat;
    let lng =response.data.results[0].geometry.location.lng;

    let forecast = `https://api.darksky.net/forecast/58ee9e61e7d59d2b5dd672e921601210/${lat},${lng}`

    console.log(response.data.results[0].formatted_address);
    return axios.get(forecast);
}).then((response) => {
    let temperature = response.data.currently.temperature;
    let appTemp = response.data.currently.apparentTemperature;
    console.log(`Temp: ${temperature}, AppTemp: ${appTemp}`);
}).catch((e) => {
    switch (e.code) {
        case 'ENOTFOUND':
            console.log('Could not connect to Google Servers');
            break;
        default:
            console.log(e.message);
    }
});
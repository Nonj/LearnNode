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

let encodedAddress = encodeURI(argv.encodedAddress);
let geocodeURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURIComponent(encodedAddress);

axios.get(geocodeURL).then((response) => {
    console.log(response.data);
});
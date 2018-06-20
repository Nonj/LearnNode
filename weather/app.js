const yargs = require('yargs');
const request = require('request');


const geocode = require('./geocode/geocode');

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


geocode.geocodeAddress(argv.address, (errorMessage,results) => {
    if (errorMessage) {
        console.log('1');
        console.log(errorMessage);
    } else {
        console.log("2");
        console.log(JSON.stringify(results, undefined, 2));
    }
})


let duh = (address) => {
    request({
        url: "https://api.darksky.net/forecast/58ee9e61e7d59d2b5dd672e921601210/37.8267,-122.4233",
        json: true
    }, (error, response, body) => {
        if (error) console.log('Unable to connect to ForecastIO');
        else if (response.statusCode == 404) console.log('Unable to fetch weather');
        else console.log(body.currently);
    });
}

duh('blah');
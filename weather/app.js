const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./forecast/forecast')

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
        console.log(results.address);
        weather.getWeather(results.lat, results.lng, (errorMessage, weatherResults) => {
            if (errorMessage) console.log(errorMessage);
            else console.log(`It's currently ${weatherResults.temperature}, and it feels like ${weatherResults.appTemperature}`);
        });
    }
})



// weather.getWeather(1, 1, (errorMessage, weatherResults) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(JSON.stringify(weatherResults, undefined, 2));
//     }
// });
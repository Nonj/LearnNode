const yargs = require('yargs');

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


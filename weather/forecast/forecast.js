const request = require('request');

let getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/58ee9e61e7d59d2b5dd672e921601210/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) callback('Unable to connect to Forecast.io Server');
        else if (response.statusCode == 404) callback('Unable to fetch weather');
        else callback(undefined, {
            temperature: body.currently.temperature,
            appTemperature: body.currently.apparentTemperature
        });
    });
}

module.exports = {
    getWeather
}
const request = require('request');

var getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/41a9d3cf4977eafb571d8af15de49780/${latitude},${longitude}`,
        json: true
    }, (err, res, body) => {
        if (err) {
            callback('Unable to connect to Forecast.io server.');
        } else if (res.statusCode === 404) {
            callback('Unable to fetch weather.');
        } else if (res.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
};

module.exports.getWeather = getWeather;
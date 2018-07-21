const apiKey = '2f14e555ad7a955d4d48e6e6aec368c9';
// const accessKey = '6382d8285f84aac211a817826e2de9dd926b7747db1681012f36998f3d7a531b';
const request = require('request');

exports.store = (req, res) => {
    const city = req.body.city;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    request(url, function (err, response, body) {
        if (err) {
            res.render('solution', {weather: null, error: 'Error, please try again'});
        } else {
            const weather = JSON.parse(body);
            if (weather.main == undefined)
            {
                res.render('solution', {weather: null, error: 'Error, not proper name of city etc'});
            }
            else
            {
                const temp = weather.main.temp;
                temp = Math.floor(temp - 273.15);
                const cityName = weather.name;
                res.render('solution', {weatherTemp: temp, cityName, error: null});
            }
        }
    });
}
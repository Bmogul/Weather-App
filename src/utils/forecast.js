const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=53cd81ddb9a6d7e7196090ae12cf3a9e&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'&units=f'
    request({url, json:true}, (error, {body} = {}) => {
        if(error){
            callback('Unable to connect to weather service', undefined)
        } else if (body.error){
            callback('Unable to find location', undefined)
        } else {
            const currentWeather = body.current
            callback(undefined, currentWeather.weather_descriptions[0] + '. It is currently ' + currentWeather.temperature + ' degrees out. It feels like ' + currentWeather.feelslike)
        }
    })
}

module.exports = forecast
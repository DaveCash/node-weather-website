const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.positionstack.com/v1/forward?access_key=1d0964b5b3e4fe6977e9157f80b9f282&limit=1&query=' + address

    request({url, json: true}, (error, {body}) => {
     console.log(body);
       if (error) {
            callback('Unable to connect to location services')
       }
       else if (body.error || body.data.length === 0) {
            callback('Unable to find location. Try another search.')
       }
       else {
          const {latitude, longitude, label: location } = body.data[0]

            callback(undefined, {
                latitude,
                longitude,
                location
            })
       }
    })
}

module.exports = geocode
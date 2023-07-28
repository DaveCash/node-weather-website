const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const locationEl = document.querySelector('#location')
const forecastEl = document.querySelector('#forecast')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    locationEl.textContent = 'Loading...'
    forecastEl.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
            locationEl.textContent = data.error
        }
        else {
            console.log(data.location, data.forecast)

            locationEl.textContent = data.location
            forecastEl.textContent = data.forecast
        }
    })
})
})
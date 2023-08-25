import { baseApp, weatherDetails } from "./utils.js"
import { forecastWeather } from "./api.js"

const main = document.querySelector('.main')
const baseHTML = baseApp()
const weatherBase = weatherDetails()

document.addEventListener('DOMContentLoaded', () => {
    fetchTemp()
})

const fetchTemp = () => {
    fetch(forecastWeather)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const temperature = data.current.temp_c
        const city = data.location.name
        const weatherDetail = data.current.condition.text
        const weatherMax = Math.trunc(data.forecast.forecastday[0].day.maxtemp_c)
        const weatherMin = Math.trunc(data.forecast.forecastday[0].day.mintemp_c)
        const getTempHtml = document.querySelector('#temp')
        const getCityHtml = document.querySelector('#city')
        const getDetailHtml = document.querySelector('#weather-detail')
        const getMaxHtml = document.querySelector('#temp-max')
        const getMinHtml = document.querySelector('#temp-min')
        getTempHtml.innerHTML = `${parseInt(temperature)}º`
        getCityHtml.innerHTML = city
        getDetailHtml.innerHTML = weatherDetail
        getMaxHtml.innerHTML = `H: ${weatherMax}`
        getMinHtml.innerHTML = `L: ${weatherMin}`
    })
    .catch( error => {
        console.log('error fetching weather', error)
    })
}

main.appendChild(baseHTML)
main.appendChild(weatherBase)
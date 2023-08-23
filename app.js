import { baseApp, weatherDetails } from "./utils.js"
import { currentWeather, searchCity } from "./api.js"

const main = document.querySelector('.main')
const baseHTML = baseApp()
const weatherBase = weatherDetails()

document.addEventListener('DOMContentLoaded', () => {
    fetchTemp();
    
});

const fetchTemp = () => {
    fetch(currentWeather)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const temperature = data.main.temp
        const city = data.name
        const wholeTemp = Math.trunc(temperature)
        const weatherDetail = data.weather[0].description
        const getTempHtml = document.querySelector('#temp')
        const getCityHtml = document.querySelector('#city')
        const getDetailHtml = document.querySelector('#weather-detail')
        console.log(weatherDetail)
        getTempHtml.innerHTML = `${parseInt(wholeTemp)}º`
        getCityHtml.innerHTML = city
        getDetailHtml.innerHTML = weatherDetail
    })
    .catch( error => {
        console.log('error fetching weather', error)
    })
}

main.appendChild(baseHTML)
main.appendChild(weatherBase)
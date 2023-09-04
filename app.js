import { baseApp, weatherDetails, bottomBar, weatherModal } from "./utils.js"
import { forecastWeather, apiData, updateCity } from "./api.js"

const main = document.querySelector('.main')
const baseHTML = baseApp()
const weatherBase = weatherDetails()
const getBottomBarHtml = bottomBar()
const getModalHtml = weatherModal()

document.addEventListener('click', function(e) {
    if(e.target.closest('.hamburguer-btn')) {
        main.append(getModalHtml)
        const getModalHeading = document.querySelector('#search-modal-heading')
        getModalHeading.innerHTML = 'Weather'
    } if(e.target.matches('.overlay')) {
        getModalHtml.remove()
    } if(e.target.closest('.submit-btn') && e.target.dataset.formbtn) {
        const errorMsg = document.querySelector('.error-div')
        let newCity = document.querySelector('.search-input').value 
        updateCity(newCity)
            fetchTemp(apiData.currentCity)
                .then(() => {
                    errorMsg.textContent = ''
                    getModalHtml.remove() 
                })
            .catch((error) => {
               errorMsg.textContent = 'The city is wrong'
                console.log('error fetching weather', error)
            })
        }
    })

document.addEventListener('DOMContentLoaded', () => {
    fetchTemp()
})

const fetchTemp = (currentCity) => {
    return new Promise((resolve, reject) => {
        fetch(forecastWeather)
            .then((response) => {
                if(!response.ok) {
                    throw new Error('Netowrk response was not ok')
                }
               return response.json()
            })
            .then((data) => {
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
                getTempHtml.textContent = `${parseInt(temperature)}º`
                getCityHtml.textContent = city
                getDetailHtml.textContent = weatherDetail
                getMaxHtml.textContent = `H: ${weatherMax}`
                getMinHtml.textContent = `L: ${weatherMin}`
                const getForecastElementHtml = document.querySelector('.day-forecast')
                //console.log(data.forecast.forecastday[0].hour)
                let getHoursDayArr = data.forecast.forecastday[0].hour
                
                resolve()
    })
    .catch((error) => {
        const errorThrown = document.createElement('div')
        errorThrown.textContent = 'This is an error'
        console.log('error fetchin weather', error)
        reject(error)
    })
    })
}

main.append(baseHTML, weatherBase, getBottomBarHtml)

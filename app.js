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
                let temperature = data.current.temp_c
                let city = data.location.name
                let weatherDetail = data.current.condition.text
                let weatherMax = Math.trunc(data.forecast.forecastday[0].day.maxtemp_c)
                let weatherMin = Math.trunc(data.forecast.forecastday[0].day.mintemp_c)
                let getTempHtml = document.querySelector('#temp')
                let getCityHtml = document.querySelector('#city')
                let getDetailHtml = document.querySelector('#weather-detail')
                let getMaxHtml = document.querySelector('#temp-max')
                let getMinHtml = document.querySelector('#temp-min')
                getTempHtml.textContent = `${parseInt(temperature)}º`
                getCityHtml.textContent = city
                getDetailHtml.textContent = weatherDetail
                getMaxHtml.textContent = `H: ${weatherMax}`
                getMinHtml.textContent = `L: ${weatherMin}`
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

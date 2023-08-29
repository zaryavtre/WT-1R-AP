const time = new Date();
const hours = time.getHours()

function baseApp() {
    const base = document.createElement('div')
    base.classList.add('base')

    const videoBG = document.createElement('video')
    videoBG.classList.add('changing-video')
    videoBG.setAttribute('autoplay', '')
    videoBG.setAttribute('mute', '')
    videoBG.setAttribute('loop', '')
    const sourceVideo = document.createElement('source')
    if(hours >= 12 && hours < 0) {
        sourceVideo.src = './assets/blue_sky.mp4'
    } else {
        sourceVideo.src = './assets/nightsky.mp4'
    }
    sourceVideo.type = 'video/mp4'

    videoBG.appendChild(sourceVideo)

    base.appendChild(videoBG)

    return base
}

function weatherDetails() {
    const weatherWrapper = document.createElement('div')
    weatherWrapper.classList.add('weather-wrapper')

    const weatherCity = document.createElement('h2')
    weatherCity.classList.add('heading-medium')
    weatherCity.setAttribute('id', 'city')
    const weatherTemp = document.createElement('h1')
    weatherTemp.classList.add('heading-large')
    weatherTemp.setAttribute('id', 'temp')
    const weatherDetail = document.createElement('p')
    weatherDetail.classList.add('paragraph-custom-1')
    weatherDetail.setAttribute('id', 'weather-detail')
    const tempMinMax = document.createElement('div')
    tempMinMax.classList.add('min-max-wrapper')
    const tempMax = document.createElement('p')
    tempMax.setAttribute('id', 'temp-max')
    tempMax.classList.add('paragraph-custom-1')
    const tempMin = document.createElement('p')
    tempMin.setAttribute('id', 'temp-min')
    tempMin.classList.add('paragraph-custom-1')

    const forecastBase = document.createElement('div')
    forecastBase.classList.add('forecast-base')

    forecastBase.append(
        forecastDetails()
    )

    weatherWrapper.append(
        weatherTemp, 
        weatherCity, 
        weatherDetail, 
        tempMinMax,
        forecastBase
        )
    tempMinMax.append(tempMax, tempMin)

    return weatherWrapper
}

function forecastDetails() {
    const dayForecastWrapper = document.createElement('div')
    const forecastHeading = document.createElement('h1')
    forecastHeading.classList.add('paragraph-custom-1')
    forecastHeading.textContent = '7-Day Forecast'

    dayForecastWrapper.append(
        forecastHeading
    )

    return dayForecastWrapper
}

function bottomBar() {
    const mainBar = document.createElement('div')
    mainBar.setAttribute('id', 'bottom-bar')
    mainBar.classList.add('main-bar')

    const hamburguerBtn = document.createElement('button')
    hamburguerBtn.classList.add('hamburguer-btn')
    const hamburguerBar1 = document.createElement('div')
    hamburguerBar1.classList.add('burguer-width')
    const hamburguerBar2 = document.createElement('div')
    hamburguerBar2.classList.add('burguer-width')
    const hamburguerBar3 = document.createElement('div')
    hamburguerBar3.classList.add('burguer-width')

    hamburguerBtn.append(hamburguerBar1, hamburguerBar2, hamburguerBar3)
    mainBar.append(hamburguerBtn)
    return mainBar
}

function weatherModal() {
    const overlay = document.createElement('div')
    overlay.classList.add('overlay')

    const baseModal = document.createElement('div')
    baseModal.classList.add('base-modal')
    const modalHeading = document.createElement('h2')
    modalHeading.classList.add('heading-medium')
    modalHeading.setAttribute('id', 'search-modal-heading')

    const cityFormSearch = document.createElement('div')
    cityFormSearch.classList.add('search-form')
    const cityInput = document.createElement('input')
    cityInput.classList.add('search-input')
    cityInput.setAttribute('placeholder', 'Search for a City')
    const submitBtn = document.createElement('button')
    submitBtn.setAttribute('type', 'submit')
    submitBtn.dataset.formbtn = 'btn-submit'
    submitBtn.classList.add('submit-btn')
    submitBtn.textContent = 'Search'
    const errorDiv = document.createElement('div')
    errorDiv.classList.add('error-div')
    cityFormSearch.append(cityInput, errorDiv, submitBtn)
    baseModal.append(modalHeading, cityFormSearch)
    overlay.append(baseModal)

    return overlay
}
export {baseApp, weatherDetails, bottomBar, weatherModal}
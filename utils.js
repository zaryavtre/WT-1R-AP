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
    weatherWrapper.append(
        weatherTemp, 
        weatherCity, 
        weatherDetail, 
        tempMinMax
        )
    tempMinMax.append(tempMax, tempMin)

    return weatherWrapper
}

function bottomBar() {
    const mainBar = document.createElement('div')
    mainBar.setAttribute('id', 'bottom-bar')
    mainBar.classList.add('main-bar')
}
export {baseApp, weatherDetails, bottomBar}
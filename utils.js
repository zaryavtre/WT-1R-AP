const time = new Date();
const hours = time.getHours()

function baseApp() {
    const base = document.createElement('div')
    base.classList.add('base')

    const videoBG = document.createElement('video')
    videoBG.classList.add('changing-video')
    videoBG.setAttribute('controls', '')
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
    const weatherTemp = document.createElement('h1')
    weatherTemp.classList.add('heading-large')
    const weatherDetail = document.createElement('p')
    weatherDetail.classList.add('paragraph-custom-1')
}

export {baseApp, weatherDetails}
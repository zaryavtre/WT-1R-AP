const key = ''
let lat = ''
let lon = ''
let city = ''
const weatherAPI = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${key}`
const currentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
const searchCity = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit={5}&appid=${key}`

export {weatherAPI, currentWeather}
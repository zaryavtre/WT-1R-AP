const key = ''
let lat = '39.7436'
let lon = '-8.8071'
let currentCity = 'Leiria'
let forecastWeather = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${currentCity}&days=5&aqi=no&alerts=no`

export const updateCity = (newCity) => {
  currentCity = newCity
  forecastWeather = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${currentCity}&days=5&aqi=no&alerts=no`
}

export { forecastWeather }
export const apiData = {
  currentCity,
}

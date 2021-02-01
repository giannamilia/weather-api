var apikey = "4a28b8660168fee0639b10bbc4371e09"
const inputForm = $("#cityName");
{ { returns ;    
function buildQueryURL(city = "Boston" , type = weather) {
    var baseURL = "https://api.openweathermap.org/data/2.5/" ;
    baseURL += type ;
    const params = {
        q:city,
        units:"imperial",
        appid:"4a28b8660168fee0639b10bbc4371e09",
    } ;
    baseURL += parseParams(params);
    return baseURL
}
function parseParams(p) {
    var queryString = [];
    for (const key in p) {
        queryString.push(key + "=" + p[key])
    }
    return '?' + queryString.join("&");
}
$("#city-form").on("submit", function (event) {
    event.preventDefault() ;
var city = inputForm.val().trim() ;
var queryURL = buildQueryURL(city) ;
inputForm.val("") ;
var cityList = $('#city-list') ;
var cityElement = $(`<li class="list-group=item" id="cityElement" value = ${city}>`).text(city) ;
cityList.append(cityElement)
var searchHistory = JSON.parse(localStorage.getItem(search-history) ) ;
if (!searchHistory) {
    searchHistory = [] ;
}
else {
    searchHistory [q] = city ;
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory)) ;
}
$.ajaxx({
    url: queryURL,
    method: "GET",
}).then(updatePage) ;
var queryForecastURL = buildQueryURL (city,"forecast") ;
console.log (queryForecastURL) ;
$.ajaxx({
    url: queryForecastURL,
    method: "GET",
}). then(updateForecast) ; 
});
var cityName = "" ;
var cityDate = "" ;
var temperature = "" ;
var humidity = "" ;
var wind = "" ;
var uvIndex = "" ;
var weatherC = "" ;
var currentIcon = "" ;
var latitude = "" ;
var longitude = "" ;
function updatePage(weatherData) {
    console.log(weatherData) ;
    cityName = weatherData.name;
    cityDate = weatherData.dt ;
    cityDate = moment().format("MMMM D, YYYY") ;
    currentIcon = weatherData.weather[0].icon
    temperature = weatherData.main.temperature ;
    humidity = weatherData.main.humidity ;
    wind = weatherData.main.wind ;
    latitude = weatherData.coord.latitude ;
    longitude = weatherData.coord.longitude ;
var uvin = `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=1424a66e027bad341d5f8deb9f817274` ;
$.ajaxx({
    url: uvin,
    method: "GET"
}).then(setuvIndex) ;
function setuvIndex(uvData) {
    uvIndex = uvData.value ;
    if (uvIndex < 3) {
        weatherCon = "good"
    }
    else if (uvIndex > 5) {
        weatherCon = "danger"
    }
    else{
        weatherCon = "warning"
    }
    currentDisplay(weatherCon) ;
    }
function currentDisplay() {
    const currentCityWeather = $('#currentCityWeather') ;
    const cityDisplay = $('<h2 id="cityDisplay">') ;
    const currentIconDisplay = $('<img id="currentIconDisplay" alt="icon">') ;
    const temperatureDisplay = $('<p id="temperatureDisplay">') ;
    const humidityDisplay = $('<p id="humidityDisplay">') ;
    const windDisplay = $('<p id="windDisplay>') ;
    const uvIndexLabelDisplay = $('<p id="uvIndexLabelDisplay"') ;
    const uvIndexDisplay = $('<p id="uvIndexDisplay"') ;

currentCityWeather.append(cityDisplay, currentIconDisplay, temperatureDisplay, humidityDisplay, windDisplay, uvIndexLabelDisplay, uvIndexDisplay) ;
currentIconURL = `http://openweathermap.org/img/wn/${currIcon}@2x.png` ;
$("#currentIconDisplay").attr("src", currentIconURL) ;
cityDisplay.text(`${cityName} ${cityDate}`) ;
temperatureDisplay.text(`Temperature ${temperature}`) ;
humidityDisplay.text(`Humidity ${humidity}`) ;
windDisplay.text(`Wind ${wind}`) ;
uvIndexLabelDisplay.text (`UV Index`) ;
uvIndexDisplay.text(`${uvIndex}`)
}
}
function updateForecast (forecastData) {
    console.log (forecastData) ;
var fcCard = "" ;
var fcBody = "" ;
var fcDate = "" ;
var fcIcon = "" ;
var fcTemp = "" ;
var fcHumidity = "" ;
var fiveDayForecast = $('#fcGroup') ;

for(var i = 0 ; i < 40 ; i = i+8) {
    fcCard = $('<div class="card bg-primary bg-gradient id="fiveDayForecast">') ;
    fcIcon = $('<img id="icon" alt="icon">') ;
    fcBody = $('<div class="card-body" id="fiveDayForecast">') ;
    fcDate = $('<p class="card-text id="forecastDate">') ;
    fcTemp = $('<p class="card-text id="forecastTemperature">') ;
    fcHumidity = $('<p id="forecastHumidity>') ;
    fcBody.append(fcDate, fcIcon, fcTemp, fcHumidity) ;
    fcCard.append(fcBody) ;
    fiveDayForecast.append(fcCard) ;
    forecastDate = (forecastData.list[i].dt_txt) ;
    forecastIcon = (forecastData.list[i].weather[0].icon) ;
    forecastTemp = (forecastData.list[i].main.temperature) ;
    forecastHumidity = (forecastData.list[i].main.humidity) ;
    iconURL = `http://openweathermap.org/img/wn/${forecastIcon}@2x.png
    console.log(iconURL) ;
    $("#icon").attr("src", iconURL) ;
    fcDate.text(forecastDate) ;
} {
    $("#cityElement").on "click", function (event) 
   

    var savedCity = $(this).val() ;
    console.log ("test") ;
    buildQueryURL(savedCity) ;
}

// Start of Script

// Create DOM variables
var userSearchEl = document.querySelector('#citySearch');
var citySearchBtnEl = document.querySelector('#searchBtn');
var pastSearchListEl = document.querySelector('#pastSearchList');

var mainForecastCardEl = document.querySelector('#mainForecastCard');
var fiveDayForecastEl = document.querySelector('#fiveDayForecastCards');

// API Key
var apiKey = "918ec6ef4bd5ab69437f6dfdec4048eb"


// Form Submit Handler function

var formSubmitHandler = function (event) {
    event.preventDefault();
  
    let currentSearch = userSearchEl.value.trim();

    if (currentSearch) {
        userSearchEl.value = '';
        mainForecastCardEl.textContent = '';

        getMainForecast(currentSearch);
        // Have a function that adds it to a past list
    } else {
        alert('Please enter a city');
    }
};

// Main Forecast Handler Function

 var getMainForecast = function (city) {
     let apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + apiKey;

     fetch(apiUrl).then(function (response) {
        return response.json();        
     }).then(function(data){
        console.log(data);
        let cityLat = data[0].lat;
        let cityLong = data[0].lon;
        cityFiveDayConversion(cityLat, cityLong);
        cityCurrentConversion(cityLat, cityLong);
     })
 }
 var cityCurrentConversion = function (lat, lon) {
    let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=' + apiKey;

    fetch(apiUrl).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
        // Create Elements then set the text content to the imported object values then
        // Append Elements to the div
    })
 }



 var cityFiveDayConversion = function (lat, lon) {
    let apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=' + apiKey;

    fetch(apiUrl).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
        // Create a separate array for the 5-day fourcast only taking values at 24hour intervals
        // Instead of at 3 like they do
        let fiveDayArray = [data.list[0], data.list[8],]
        // For each element in the array
        // Create Elements then set the text content to the imported object values then
        // Append Elements to the div
        for (let i = 0; i < fiveDayArray.length; i++) {
        
            
        }

    })
 }



// var displayMainCard = function (weatherInfo, currentSearch) {
//     if (weatherInfo.length === 0) {
//         mainForecastCardEl.textContent = 'City not found.';
//         return;
//     }


// }





// Event Listeners
citySearchBtnEl.addEventListener('submit', formSubmitHandler);
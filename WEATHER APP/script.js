// Select DOM elements
var cityInput = document.getElementById("cityInput");
var fetchWeatherBtn = document.getElementById("fetchWeather");
var weatherDataDiv = document.getElementById("weatherData");
// API Key & URL
var API_KEY = "862fc421930ab8c120811674ab8ee55a";
var API_URL = "https://api.openweathermap.org/data/2.5/weather";
// Fetch Weather Data without Promise
function getWeather(city) {
    var xhr = new XMLHttpRequest();
    var url = "".concat(API_URL, "?q=").concat(city, "&units=metric&appid=").concat(API_KEY);
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                displayWeather(data);
            }
            else {
                weatherDataDiv.innerHTML = "<p style=\"color:red;\">City not found. Please try again.</p>";
            }
        }
    };
    xhr.send();
}
// Display Weather Data
function displayWeather(data) {
    weatherDataDiv.innerHTML = "\n        <h2>Weather in ".concat(data.name, "</h2>\n        <p>Temperature: ").concat(data.main.temp, "\u00B0C</p>\n        <p>Humidity: ").concat(data.main.humidity, "%</p>\n        <p>Condition: ").concat(data.weather[0].description, "</p>\n    ");
}
// Event Listener
fetchWeatherBtn.addEventListener("click", function () {
    console.log("Button clicked!"); // Debugging log
    var city = cityInput.value.trim();
    console.log("City entered:", city);
    if (city) {
        getWeather(city);
    }
    else {
        alert("Please enter a city name.");
    }
});

// Define API response type
interface WeatherResponse {
    main: {
        temp: number;
        humidity: number;
    };
    weather: { description: string }[];
    name: string;
}

// Select DOM elements
const cityInput = document.getElementById("cityInput") as HTMLInputElement;
const fetchWeatherBtn = document.getElementById("fetchWeather") as HTMLButtonElement;
const weatherDataDiv = document.getElementById("weatherData") as HTMLDivElement;

// API Key & URL
const API_KEY = "862fc421930ab8c120811674ab8ee55a";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

// Fetch Weather Data without Promise
function getWeather(city: string) {
    const xhr = new XMLHttpRequest();
    const url = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;

    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const data: WeatherResponse = JSON.parse(xhr.responseText);
                displayWeather(data);
            } else {
                weatherDataDiv.innerHTML = `<p style="color:red;">City not found. Please try again.</p>`;
            }
        }
    };

    xhr.send();
}

// Display Weather Data
function displayWeather(data: WeatherResponse) {
    weatherDataDiv.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Condition: ${data.weather[0].description}</p>
    `;
}

// Event Listener
fetchWeatherBtn.addEventListener("click", () => {
    console.log("Button clicked!"); // Debugging log
    const city = cityInput.value.trim();
    console.log("City entered:", city);
    if (city) {
        getWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});

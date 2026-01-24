document.addEventListener("DOMContentLoaded", () => {
    const cityInput = document.getElementById("cityInput");
    const getWeatherBtn = document.getElementById("getWeatherBtn");
    const weatherResult = document.getElementById("weatherResult");
    const cityName = document.getElementById("cityName");
    const temperature = document.getElementById("temperature");
    const weatherCondition = document.getElementById("weatherCondition");
    const errorMessage = document.getElementById("errorMessage");

    const apiKey = "0565ebe17d2812d5bbd352529e40e196";

    getWeatherBtn.addEventListener("click", async () => {
        const city = cityInput.value.trim();

        if (city === "") {
            displayError("Please enter a city name");
            return;
        }

        try {
            const weatherData = await fetchWeatherData(city);
            displayWeatherData(weatherData);
        } catch (error) {
            displayError("City not found. Please try again.");
        }
    });

    async function fetchWeatherData(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        return await response.json();
    }

    function displayWeatherData(data) {
        const { name, main, weather } = data;

        cityName.textContent = name;
        temperature.textContent = `Temperature: ${main.temp}°C`;
        weatherCondition.textContent = `Weather: ${weather[0].description}`;

        weatherResult.classList.remove("hidden");
        errorMessage.classList.add("hidden");
    }

    function displayError(message) {
        weatherResult.classList.add("hidden");
        errorMessage.textContent = message;
        errorMessage.classList.remove("hidden");
    }
});

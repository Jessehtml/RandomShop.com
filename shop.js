async function Weather() {
    try {
        var response = await fetch('https://api.weather.gov/points/40.857508723945614,-74.38772943478352');
        var data = await response.json();
        var forecastUrl = data.properties.forecast;
        var forecastResponse = await fetch(forecastUrl);
        var forecastData = await forecastResponse.json();
        var currentForecast = forecastData.properties.periods[0].detailedForecast;
        alert('Current Weather: ' + currentForecast);
    } catch (error) {
        alert('Error fetching weather: ' + error.message);
    }
}
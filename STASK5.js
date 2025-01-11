const apiKey = '776c7377732a489e9c13c4bede04ee8d'; // Replace with your Weatherbit API key

document.getElementById('fetch-weather').addEventListener('click', () => {
    const location = document.getElementById('location-input').value;
    if (location) {
        fetchWeather(location);
    } else {
        alert('Please enter a location.');
    }
});

document.getElementById('current-location').addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            fetchWeatherByCoordinates(latitude, longitude);
        }, () => {
            alert('Unable to retrieve your location.');
        });
    } else {
        alert('Geolocation is not supported by your browser.');
    }
});

function fetchWeather(location) {
    showLoading(true);
    const url = `https://api.weatherbit.io/v2.0/current?city=${location}&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            showLoading(false);
            displayWeather(data);
        })
        .catch(error => {
            showLoading(false);
            console.error('Error fetching weather data:', error);
            alert('Failed to fetch weather data.');
        });
}

function fetchWeatherByCoordinates(lat, lon) {
    showLoading(true);
    const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            showLoading(false);
            displayWeather(data);
        })
        .catch(error => {
            showLoading(false);
            console.error('Error fetching weather data:', error);
            alert('Failed to fetch weather data.');
        });
}

function displayWeather(data) {
    if (data.data && data.data.length > 0) {
        const weather = data.data[0];
        document.getElementById('city').innerText = `Weather in ${weather.city_name}`;
        document.getElementById('description').innerText = weather.weather.description;
        document.getElementById('temperature').innerText = `Temperature: ${weather.temp}°C`;
        document.getElementById('humidity').innerText = `Humidity: ${weather.rh}%`;
        document.getElementById('pressure').innerText = `Pressure: ${weather.pres} hPa`;
        document.getElementById('wind-speed').innerText = `Wind Speed: ${weather.wind_spd} m/s`;
        document.getElementById('uv-index').innerText = `UV Index: ${weather.uv}`;
        document.getElementById('sunrise').innerText = `Sunrise: ${weather.sunrise}`;
        document.getElementById('sunset').innerText = `Sunset: ${weather.sunset}`;
        document.getElementById('visibility').innerText = `Visibility: ${weather.vis} km`;

        setWeatherIcon(weather.weather.description);
        setWeatherEmoji(weather.weather.description);
        setBackground(weather.weather.description);

        document.getElementById('weather-result').style.display = 'block';
    } else {
        alert('Location not found. Please try again.');
    }
}

function showLoading(show) {
    const loadingElement = document.getElementById('loading');
    if (show) {
        loadingElement.style.display = 'block';
    } else {
        loadingElement.style.display = 'none';
    }
}

function setWeatherIcon(description) {
    const iconElement = document.getElementById('weather-icon');
    if (description.toLowerCase().includes('clear')) {
        iconElement.className = 'fas fa-sun';
    } else if (description.toLowerCase().includes('cloud')) {
        iconElement.className = 'fas fa-cloud';
    } else if (description.toLowerCase().includes('rain')) {
        iconElement.className = 'fas fa-cloud-showers-heavy';
    } else if (description.toLowerCase().includes('thunder')) {
        iconElement.className = 'fas fa-bolt';
    } else if (description.toLowerCase().includes('snow')) {
        iconElement.className = 'fas fa-snowflake';
    } else if (description.toLowerCase().includes('fog') || description.toLowerCase().includes('mist')) {
        iconElement.className = 'fas fa-smog';
    } else {
        iconElement.className = 'fas fa-cloud-sun';
    }
}

function setWeatherEmoji(description) {
    const emojiElement = document.getElementById('weather-emoji');
    if (description.toLowerCase().includes('clear')) {
        emojiElement.innerText = '☀️';
    } else if (description.toLowerCase().includes('cloud')) {
        emojiElement.innerText = '☁️';
    } else if (description.toLowerCase().includes('rain')) {
        emojiElement.innerText = '🌧️';
    } else if (description.toLowerCase().includes('thunder')) {
        emojiElement.innerText = '⚡';
    } else if (description.toLowerCase().includes('snow')) {
        emojiElement.innerText = '❄️';
    } else if (description.toLowerCase().includes('fog') || description.toLowerCase().includes('mist')) {
        emojiElement.innerText = '🌫️';
    } else {
        emojiElement.innerText = '🌥️';
    }
}

function setBackground(description) {
    const body = document.querySelector('body');
    if (description.toLowerCase().includes('clear')) {
        body.style.background = 'linear-gradient(to bottom, #ff7e5f, #feb47b)';
    } else if (description.toLowerCase().includes('cloud')) {
        body.style.background = 'linear-gradient(to bottom, #bdc3c7, #2c3e50)';
    } else if (description.toLowerCase().includes('rain')) {
        body.style.background = 'linear-gradient(to bottom, #00b4db, #0083b0)';
    } else if (description.toLowerCase().includes('thunder')) {
        body.style.background = 'linear-gradient(to bottom, #1f4037, #99f2c8)';
    } else if (description.toLowerCase().includes('snow')) {
        body.style.background = 'linear-gradient(to bottom, #e0eafc, #cfdef3)';
    } else if (description.toLowerCase().includes('fog') || description.toLowerCase().includes('mist')) {
        body.style.background = 'linear-gradient(to bottom, #a6a6a6, #1d1d1d)';
    } else {
        body.style.background = 'linear-gradient(to bottom, #6a11cb, #2575fc)';
    }
}

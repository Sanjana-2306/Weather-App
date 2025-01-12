# **Weather App**

This web app fetches real-time weather data based on your location or a manually entered city. The app displays the current weather conditions, temperature, and other relevant details, all while giving off a cute and interesting vibe. The background dynamically changes to match the current weather, adding a fun and immersive touch.

## **Features**

The application offers the following features:

- **Auto-detect Location:** Automatically fetches weather data based on the user's current location.
- **Manual Location Input:** Allows users to search for weather data by entering a city name or location manually.
- **Current Weather Details:** Displays real-time weather conditions, including temperature, humidity, wind speed, and weather descriptions.
- **User-Friendly UI:** Simple and intuitive interface for seamless user experience.

## **Tech Stack**

- **HTML, CSS, JavaScript:** Frontend technologies for building the user interface and functionality.
- **Weather API:** Integrated with a weather API (e.g., OpenWeatherMap) to fetch real-time weather data.

## **Setup Instructions**

### Prerequisites

- A modern web browser (e.g., Google Chrome, Mozilla Firefox, or Safari).
- A text editor (e.g., Visual Studio Code) if you plan to edit the code.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd weather-app
   ```

3. **Set up API Key:**

   - Sign up at [OpenWeatherMap](https://openweathermap.org/) (or another weather API provider).
   - Get your API key.
   - Replace the placeholder API key in the JavaScript file (`script.js`) with your API key:
     ```javascript
     const apiKey = 'YOUR_API_KEY';
     ```

4. **Run the application:**

   - Open the `index.html` file in your browser.

## How It Works

1. **Geolocation:**

   - When the user visits the webpage, the browser prompts for location access.
   - If granted, the app fetches the user's coordinates using the Geolocation API and retrieves weather data for that location.

2. **Manual Search:**

   - Users can input a city or location in the search bar to get weather information for that location.

3. **Display:**

   - The weather data is displayed dynamically, including:
     - Temperature (in Celsius or Fahrenheit)
     - Weather description (e.g., sunny, cloudy, etc.)
     - Humidity
     - Wind speed

## Future Enhancements

- Add a 7-day weather forecast feature.
- Provide additional details like sunrise,sunset timings and air quality.
- future weather predicitions.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.






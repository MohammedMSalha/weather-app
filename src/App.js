import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import axios from 'axios';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const key = process.env.REACT_APP_WEATHER_API_KEY;
      if (!key) {
        alert('API key is missing');
        return;
      }
      if (!city) {
        alert('Please enter a city name');
        return;
      }
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
      );
      setWeather(res.data);
    } catch (err) {
      alert('City not found');
    }
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <input type="text" placeholder="City name" onChange={(e) => setCity(e.target.value)} />
      <button onClick={fetchWeather}>Search</button>
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;

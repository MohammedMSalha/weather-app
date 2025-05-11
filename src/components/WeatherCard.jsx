import React from 'react';

const WeatherCard = ({ weather }) => (
  <div className="card">
    <h2>{weather.name}</h2>
    <p>{weather.weather[0].description}</p>
    <p>🌡 Temp: {weather.main.temp}°C</p>
    <p>💧 Humidity: {weather.main.humidity}%</p>
    <p>💨 Wind: {weather.wind.speed} m/s</p>
  </div>
);

export default WeatherCard;

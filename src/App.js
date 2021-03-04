import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';

require('dotenv').config();



export default function App() {
  const [weather, getWeather] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=minutely,hourly&appid=c7e5d3212e53bd975eb6fd75f018e514&units=imperial`

  const getWeatherData = () => {
    axios.get(`${url}`)
    .then((response) => {
      const locationWeather = response.data
      getWeather(locationWeather)
    })
  }

  useEffect(() => {
    getWeatherData();
  }, [])

  return (
    <WeatherWidget weather={weather}/>
  );
}

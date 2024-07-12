import React, { useState, useEffect } from "react";
import * as images from "./img/img";
import styles from "./styles/Basic.module.css";

export default function Info() {
  const [city, setCity] = useState('');
  const [error, setError] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const api_key = "9aba1954eb6b6b23bc6bc6dcfeb1891b";
  const apiURL =
    "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

  const weatherComponents = {
    clear: images.clear,
    clouds: images.clouds,
    drizzle: images.drizzle,
    hail: images.hail,
    humidity: images.humidity,
    mist: images.mist,
    rain: images.rain,
    search: images.search,
    snow: images.snow,
    wind: images.wind,
  };

  useEffect(() => {
    if (city !== "") {
      fetchWeather();
    }
  }, [city]);

  const fetchWeather = async () => {
    if (city !== "") {
      const response = await fetch(apiURL + city + `&appid=${api_key}`);
      if (response.status === 404) {
        setError(true);
        setWeatherData(null);
      } else {
        const data = await response.json();
        setWeatherData(data);
        setError(false);
      }
    } else {
      alert("Enter a City to Continue");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const city = e.target.elements[0].value;
    if (city !== "") {
      setCity(city);
    } else {
      alert("Enter a City to Continue");
    }
  };

  const weathers = [
    "clear",
    "clouds",
    "drizzle",
    "hail",
    "humidity",
    "mist",
    "rain",
    "search",
    "snow",
    "wind",
  ];

  return (
    <div className={styles.centerColumn}>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter City" />
        <button type="submit">Submit</button>
      </form>
      <div id="extra" className={styles.centerColumn}>
        <div id="changeOfRain" className={styles.columnWide}>
          {!weatherData ? null : (
            <>
              {weathers.includes(weatherData.weather[0].main) ? (
                <></>
              ) : (
                <h1> </h1>
              )}
              <div id="imgContainer" className={styles.center}>
              <img
                src={
                  weatherComponents[weatherData.weather[0].main.toLowerCase()]
                }
                alt={`${weatherData.weather[0].main}Img`}
                style={{ height: "80%"}}
              />
              </div>


              <div id="extra">
                <p className={styles.pStyle}>weather: {weatherData.weather[0].main}</p>
                <p className={styles.pStyle}>humidity: {weatherData.main.humidity}</p>
                <p className={styles.pStyle}>wind: {weatherData.wind.speed}</p>
              </div>

              <div id="temp">
                <p className={styles.pStyle}>temp: {weatherData.main.temp}</p>
                <p className={styles.pStyle}>min temp: {weatherData.main.temp_min}</p>
                <p className={styles.pStyle}>max temp: {weatherData.main.temp_max}</p>
              </div>
            </>
          )}
          {error && <p className="error">Error: City not found</p>}
        </div>
      </div>
    </div>
  );
}
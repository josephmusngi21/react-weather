import React from "react";
import styles from "./styles/Basic.module.css";

export default function Block({ weatherData, weatherComponents }) {
  return (
    <div className="item">
      <div id="imgContainer" className={styles.center}>
        <img
          src={weatherComponents[weatherData.weather[0].main.toLowerCase()]}
          alt={`${weatherData.weather[0].main}Img`}
          style={{ height: "80%" }}
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
    </div>
  );
}

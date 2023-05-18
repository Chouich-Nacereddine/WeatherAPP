import React from "react";
import "./current-weather.css";
import WeatherIconO4n from "../../assets/04n.png";

const CurrentWeather = ({data}) => {
  const icon = data.weather[0].icon;
let weatherIcon;

switch (icon) {
  case "04n":
    weatherIcon = WeatherIconO4n;
    break;
  
  default:
    weatherIcon = null; // Gérez les cas où l'icône n'est pas définie ou inconnue
}
  return (
    <div className="weather">
      <div className="top">
        <span>
          <p className="city">{data.city}</p>
          <p className="description">{data.weather[0].description}</p>
        </span>
        <img src={weatherIcon} alt="weather" className="icon" />
      </div>
      <div className="bottom">
        <p className="temp">18°C</p>
        <div className="details">
          <div className="rom-parametre">
            <span className="parametre-label top">Details</span>
          </div>
          <div className="rom-parametre">
            <span className="parametre-label">Feels like :</span>
            <span className="parametre-value">22°C</span>
          </div>
          <div className="rom-parametre">
            <span className="parametre-label">Wind :</span>
            <span className="parametre-value">2 m/s</span>
          </div>
          <div className="rom-parametre">
            <span className="parametre-label">Humidity :</span>
            <span className="parametre-value">15%</span>
          </div>
          <div className="rom-parametre">
            <span className="parametre-label">Pressure :</span>
            <span className="parametre-value">15%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;

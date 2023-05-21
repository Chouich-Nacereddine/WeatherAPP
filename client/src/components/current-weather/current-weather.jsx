import React from "react";
import "./current-weather.css";
import WeatherIcon01d from "../../assets/01d.png";
import WeatherIcon01n from "../../assets/01n.png";
import WeatherIcon02d from "../../assets/02d.png";
import WeatherIcon02n from "../../assets/03n.png";
import WeatherIcon03d from "../../assets/03d.png";
import WeatherIcon03n from "../../assets/03n.png";
import WeatherIcon04d from "../../assets/04d.png";
import WeatherIcon04n from "../../assets/04n.png";
import WeatherIcon09d from "../../assets/09d.png";
import WeatherIcon09n from "../../assets/09n.png";
import WeatherIcon10d from "../../assets/10d.png";
import WeatherIcon10n from "../../assets/10n.png";
import WeatherIcon11d from "../../assets/11d.png";
import WeatherIcon11n from "../../assets/11n.png";
import WeatherIcon13d from "../../assets/13d.png";
import WeatherIcon13n from "../../assets/13n.png";
import WeatherIcon50d from "../../assets/50d.png";
import WeatherIcon50n from "../../assets/50n.png";

const CurrentWeather = ({ data }) => {
  const icon = data.weather[0].icon;
  let WeatherIcon;

  switch (icon) {
    case "01d":
      WeatherIcon = WeatherIcon01d;
      break;
    case "01n":
      WeatherIcon = WeatherIcon01n;
      break;
    case "02d":
      WeatherIcon = WeatherIcon02d;
      break;
    case "02n":
      WeatherIcon = WeatherIcon02n;
      break;
    case "03d":
      WeatherIcon = WeatherIcon03d;
      break;
    case "03n":
      WeatherIcon = WeatherIcon03n;
      break;
    case "04d":
      WeatherIcon = WeatherIcon04d;
      break;
    case "04n":
      WeatherIcon = WeatherIcon04n;
      break;
    case "09d":
      WeatherIcon = WeatherIcon09d;
      break;
    case "09n":
      WeatherIcon = WeatherIcon09n;
      break;
    case "10d":
      WeatherIcon = WeatherIcon10d;
      break;
    case "10n":
      WeatherIcon = WeatherIcon10n;
      break;
    case "11d":
      WeatherIcon = WeatherIcon11d;
      break;
    case "11n":
      WeatherIcon = WeatherIcon11n;
      break;
    case "13d":
      WeatherIcon = WeatherIcon13d;
      break;
    case "13n":
      WeatherIcon = WeatherIcon13n;
      break;
    case "50d":
      WeatherIcon = WeatherIcon50d;
      break;
    case "50n":
      WeatherIcon = WeatherIcon50n;
      break;
      WeatherIcon = WeatherIcon50d;
      break;
    // Ajoutez d'autres cas pour les autres icônes météo si nécessaire
    default:
      WeatherIcon = null; // Gérez les cas où l'icône n'est pas définie ou inconnue
  }

  return (
    <div className="weather">
      <div className="top">
        <span>
          <p className="city">{data.city}</p>
          <p className="description">{data.weather[0].description}</p>
        </span>
        <img src={WeatherIcon} alt="weather" className="icon" />
      </div>
      <div className="bottom">
        <p className="temp">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="rom-parametre">
            <span className="parametre-label top">Details</span>
          </div>
          <div className="rom-parametre">
            <span className="parametre-label">Feels like :</span>
            <span className="parametre-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="rom-parametre">
            <span className="parametre-label">Wind :</span>
            <span className="parametre-value">{data.wind.speed}m/s</span>
          </div>
          <div className="rom-parametre">
            <span className="parametre-label">Humidity :</span>
            <span className="parametre-value">{data.main.humidity}%</span>
          </div>
          <div className="rom-parametre">
            <span className="parametre-label">Pressure :</span>
            <span className="parametre-value">{data.main.pressure}hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./Forecast.css";
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
const Days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const day = new Date().getDay();
  const forecastDays = Days.slice(day, Days.length).concat(Days.slice(0, day));

  console.log(data);
  const iconsArray = [];
  const icondata = data.list.splice(0, 7);

  switch (icondata[0].weather[0].icon) {
    case "01d":
      iconsArray[0] = WeatherIcon01d;
      break;
    case "01n":
      iconsArray[0] = WeatherIcon01n;
      break;
    case "02d":
      iconsArray[0] = WeatherIcon02d;
      break;
    case "02n":
      iconsArray[0] = WeatherIcon02n;
      break;
    case "03d":
      iconsArray[0] = WeatherIcon03d;
      break;
    case "03n":
      iconsArray[0] = WeatherIcon03n;
      break;
    case "04d":
      iconsArray[0] = WeatherIcon04d;
      break;
    case "04n":
      iconsArray[0] = WeatherIcon04n;
      break;
    case "09d":
      iconsArray[0] = WeatherIcon09d;
      break;
    case "09n":
      iconsArray[0] = WeatherIcon09n;
      break;
    case "10d":
      iconsArray[0] = WeatherIcon10d;
      break;
    case "10n":
      iconsArray[0] = WeatherIcon10n;
      break;
    case "11d":
      iconsArray[0] = WeatherIcon11d;
      break;
    case "11n":
      iconsArray[0] = WeatherIcon11n;
      break;
    case "13d":
      iconsArray[0] = WeatherIcon13d;
      break;
    case "13n":
      iconsArray[0] = WeatherIcon13n;
      break;
    case "50d":
      iconsArray[0] = WeatherIcon50d;
      break;
    case "50n":
      iconsArray[0] = WeatherIcon50n;
      break;
    // Ajoutez d'autres cas pour les autres icônes météo si nécessaire
    default:
      iconsArray[0] = null; // Gérez les cas où l'icône n'est pas définie ou inconnue
  }

  switch (icondata[1].weather[0].icon) {
    case "01d":
      iconsArray[1] = WeatherIcon01d;
      break;
    case "01n":
      iconsArray[1] = WeatherIcon01n;
      break;
    case "02d":
      iconsArray[1] = WeatherIcon02d;
      break;
    case "02n":
      iconsArray[1] = WeatherIcon02n;
      break;
    case "03d":
      iconsArray[1] = WeatherIcon03d;
      break;
    case "03n":
      iconsArray[1] = WeatherIcon03n;
      break;
    case "04d":
      iconsArray[1] = WeatherIcon04d;
      break;
    case "04n":
      iconsArray[1] = WeatherIcon04n;
      break;
    case "09d":
      iconsArray[1] = WeatherIcon09d;
      break;
    case "09n":
      iconsArray[1] = WeatherIcon09n;
      break;
    case "10d":
      iconsArray[1] = WeatherIcon10d;
      break;
    case "10n":
      iconsArray[1] = WeatherIcon10n;
      break;
    case "11d":
      iconsArray[1] = WeatherIcon11d;
      break;
    case "11n":
      iconsArray[1] = WeatherIcon11n;
      break;
    case "13d":
      iconsArray[1] = WeatherIcon13d;
      break;
    case "13n":
      iconsArray[1] = WeatherIcon13n;
      break;
    case "50d":
      iconsArray[1] = WeatherIcon50d;
      break;
    case "50n":
      iconsArray[1] = WeatherIcon50n;
      break;
    // Ajoutez d'autres cas pour les autres icônes météo si nécessaire
    default:
      iconsArray[1] = null; // Gérez les cas où l'icône n'est pas définie ou inconnue
  }

  switch (icondata[2].weather[0].icon) {
    case "01d":
      iconsArray[2] = WeatherIcon01d;
      break;
    case "01n":
      iconsArray[2] = WeatherIcon01n;
      break;
    case "02d":
      iconsArray[2] = WeatherIcon02d;
      break;
    case "02n":
      iconsArray[2] = WeatherIcon02n;
      break;
    case "03d":
      iconsArray[2] = WeatherIcon03d;
      break;
    case "03n":
      iconsArray[2] = WeatherIcon03n;
      break;
    case "04d":
      iconsArray[2] = WeatherIcon04d;
      break;
    case "04n":
      iconsArray[2] = WeatherIcon04n;
      break;
    case "09d":
      iconsArray[2] = WeatherIcon09d;
      break;
    case "09n":
      iconsArray[2] = WeatherIcon09n;
      break;
    case "10d":
      iconsArray[2] = WeatherIcon10d;
      break;
    case "10n":
      iconsArray[2] = WeatherIcon10n;
      break;
    case "11d":
      iconsArray[2] = WeatherIcon11d;
      break;
    case "11n":
      iconsArray[2] = WeatherIcon11n;
      break;
    case "13d":
      iconsArray[2] = WeatherIcon13d;
      break;
    case "13n":
      iconsArray[2] = WeatherIcon13n;
      break;
    case "50d":
      iconsArray[2] = WeatherIcon50d;
      break;
    case "50n":
      iconsArray[2] = WeatherIcon50n;
      break;
    // Ajoutez d'autres cas pour les autres icônes météo si nécessaire
    default:
      iconsArray[2] = null; // Gérez les cas où l'icône n'est pas définie ou inconnue
  }

  switch (icondata[3].weather[0].icon) {
    case "01d":
      iconsArray[3] = WeatherIcon01d;
      break;
    case "01n":
      iconsArray[3] = WeatherIcon01n;
      break;
    case "02d":
      iconsArray[3] = WeatherIcon02d;
      break;
    case "02n":
      iconsArray[3] = WeatherIcon02n;
      break;
    case "03d":
      iconsArray[3] = WeatherIcon03d;
      break;
    case "03n":
      iconsArray[3] = WeatherIcon03n;
      break;
    case "04d":
      iconsArray[3] = WeatherIcon04d;
      break;
    case "04n":
      iconsArray[3] = WeatherIcon04n;
      break;
    case "09d":
      iconsArray[3] = WeatherIcon09d;
      break;
    case "09n":
      iconsArray[3] = WeatherIcon09n;
      break;
    case "10d":
      iconsArray[3] = WeatherIcon10d;
      break;
    case "10n":
      iconsArray[3] = WeatherIcon10n;
      break;
    case "11d":
      iconsArray[3] = WeatherIcon11d;
      break;
    case "11n":
      iconsArray[3] = WeatherIcon11n;
      break;
    case "13d":
      iconsArray[3] = WeatherIcon13d;
      break;
    case "13n":
      iconsArray[3] = WeatherIcon13n;
      break;
    case "50d":
      iconsArray[3] = WeatherIcon50d;
      break;
    case "50n":
      iconsArray[3] = WeatherIcon50n;
      break;
    // Ajoutez d'autres cas pour les autres icônes météo si nécessaire
    default:
      iconsArray[3] = null; // Gérez les cas où l'icône n'est pas définie ou inconnue
  }

  switch (icondata[4].weather[0].icon) {
    case "01d":
      iconsArray[4] = WeatherIcon01d;
      break;
    case "01n":
      iconsArray[4] = WeatherIcon01n;
      break;
    case "02d":
      iconsArray[4] = WeatherIcon02d;
      break;
    case "02n":
      iconsArray[4] = WeatherIcon02n;
      break;
    case "03d":
      iconsArray[4] = WeatherIcon03d;
      break;
    case "03n":
      iconsArray[4] = WeatherIcon03n;
      break;
    case "04d":
      iconsArray[4] = WeatherIcon04d;
      break;
    case "04n":
      iconsArray[4] = WeatherIcon04n;
      break;
    case "09d":
      iconsArray[4] = WeatherIcon09d;
      break;
    case "09n":
      iconsArray[4] = WeatherIcon09n;
      break;
    case "10d":
      iconsArray[4] = WeatherIcon10d;
      break;
    case "10n":
      iconsArray[4] = WeatherIcon10n;
      break;
    case "11d":
      iconsArray[4] = WeatherIcon11d;
      break;
    case "11n":
      iconsArray[4] = WeatherIcon11n;
      break;
    case "13d":
      iconsArray[4] = WeatherIcon13d;
      break;
    case "13n":
      iconsArray[4] = WeatherIcon13n;
      break;
    case "50d":
      iconsArray[4] = WeatherIcon50d;
      break;
    case "50n":
      iconsArray[4] = WeatherIcon50n;
      break;
    // Ajoutez d'autres cas pour les autres icônes météo si nécessaire
    default:
      iconsArray[4] = null; // Gérez les cas où l'icône n'est pas définie ou inconnue
  }

  switch (icondata[5].weather[0].icon) {
    case "01d":
      iconsArray[5] = WeatherIcon01d;
      break;
    case "01n":
      iconsArray[5] = WeatherIcon01n;
      break;
    case "02d":
      iconsArray[5] = WeatherIcon02d;
      break;
    case "02n":
      iconsArray[5] = WeatherIcon02n;
      break;
    case "03d":
      iconsArray[5] = WeatherIcon03d;
      break;
    case "03n":
      iconsArray[5] = WeatherIcon03n;
      break;
    case "04d":
      iconsArray[5] = WeatherIcon04d;
      break;
    case "04n":
      iconsArray[5] = WeatherIcon04n;
      break;
    case "09d":
      iconsArray[5] = WeatherIcon09d;
      break;
    case "09n":
      iconsArray[5] = WeatherIcon09n;
      break;
    case "10d":
      iconsArray[5] = WeatherIcon10d;
      break;
    case "10n":
      iconsArray[5]  = WeatherIcon10n;
      break;
    case "11d":
      iconsArray[5]  = WeatherIcon11d;
      break;
    case "11n":
      iconsArray[5]  = WeatherIcon11n;
      break;
    case "13d":
      iconsArray[5]  = WeatherIcon13d;
      break;
    case "13n":
      iconsArray[5]  = WeatherIcon13n;
      break;
    case "50d":
      iconsArray[5]  = WeatherIcon50d;
      break;
    case "50n":
      iconsArray[5]  = WeatherIcon50n;
      break;
    // Ajoutez d'autres cas pour les autres icônes météo si nécessaire
    default:
      iconsArray[5] = null; // Gérez les cas où l'icône n'est pas définie ou inconnue
  }

  switch (icondata[6].weather[0].icon) {
    case "01d":
      iconsArray[6] = WeatherIcon01d;
      break;
    case "01n":
      iconsArray[6] = WeatherIcon01n;
      break;
    case "02d":
      iconsArray[6] = WeatherIcon02d;
      break;
    case "02n":
      iconsArray[6] = WeatherIcon02n;
      break;
    case "03d":
      iconsArray[6] = WeatherIcon03d;
      break;
    case "03n":
      iconsArray[6] = WeatherIcon03n;
      break;
    case "04d":
      iconsArray[6] = WeatherIcon04d;
      break;
    case "04n":
      iconsArray[6] = WeatherIcon04n;
      break;
    case "09d":
      iconsArray[6] = WeatherIcon09d;
      break;
    case "09n":
      iconsArray[6] = WeatherIcon09n;
      break;
    case "10d":
      iconsArray[6] = WeatherIcon10d;
      break;
    case "10n":
      iconsArray[6]  = WeatherIcon10n;
      break;
    case "11d":
      iconsArray[6]  = WeatherIcon11d;
      break;
    case "11n":
      iconsArray[6]  = WeatherIcon11n;
      break;
    case "13d":
      iconsArray[6]  = WeatherIcon13d;
      break;
    case "13n":
      iconsArray[6]  = WeatherIcon13n;
      break;
    case "50d":
      iconsArray[6]  = WeatherIcon50d;
      break;
    case "50n":
      iconsArray[6]  = WeatherIcon50n;
      break;
    // Ajoutez d'autres cas pour les autres icônes météo si nécessaire
    default:
      iconsArray[6] = null; // Gérez les cas où l'icône n'est pas définie ou inconnue
  }

  return (
    <>
      <label className="title">Daitly</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img src={iconsArray[idx]} alt="" className="icon" />
                  <label className="days">{forecastDays[idx]}:</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="max-min">
                    {Math.round(item.main.temp_min)}
                    <b>°C /</b>
                    {Math.round(item.main.temp_max)}
                    <b>°C</b>
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details">
                <div className="daily-details-item">
                  <label className="detail">Pressure:</label>
                  <label>{item.main.pressure}hPa</label>
                </div>
                <div className="daily-details-item">
                  <label className="detail">Humidity:</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className="daily-details-item">
                  <label className="detail">Clouds:</label>
                  <label>{item.clouds.all}</label>
                </div>
                <div className="daily-details-item">
                  <label className="detail">Wind Speed:</label>
                  <label>{item.wind.speed}m/s</label>
                </div>
                <div className="daily-details-item">
                  <label className="detail">Sea Level:</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="daily-details-item">
                  <label className="detail">Feels Like:</label>
                  <label>{Math.round(item.main.feels_like)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;

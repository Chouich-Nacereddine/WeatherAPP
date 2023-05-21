import React, { useState } from "react";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/Forecast/Forecast";
import "./App.css";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./APIs/api";

const App = () => {
  const [current_weather, setCurrent_weather] = useState(null);
  const [current_forecast, setCurrent_forecast] = useState(null);

  const handleOnchange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const current_weather_api_fetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecast_fetch = fetch(
      `${WEATHER_API_URL}//forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );
    Promise.all([current_weather_api_fetch, forecast_fetch])
      .then(async (response) => {
        const weather_data = await response[0].json();
        const forecast_data = await response[1].json();
        setCurrent_weather({ city: searchData.label, ...weather_data });
        setCurrent_forecast({ city: searchData.label, ...forecast_data });
      })
      .catch((err) => console.log(err));
  };

  console.log(current_forecast);

  return (
    <>
      <div className="container">
        <Search onSearchChange={handleOnchange} />
        {current_weather && <CurrentWeather data={current_weather} />}
        {current_forecast && <Forecast data={current_forecast }/>}
      </div>
    </>
  );
};

export default App;

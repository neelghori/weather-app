import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Weather from "./component/Weather";
import WeatherCard from "./component/WeatherCard";
import { weather_app } from "./component/WeatherForm";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [originalArray, setOriginalArray] = useState(weather_app);

  const originalArr = (arry) => {
    setOriginalArray(arry);
  };
  //console.log(originalArray);
  return (
    <div>
      <Routes>
        <Route path="/" element={<WeatherCard weatherData={originalArray} />} />
        <Route
          path="/addWeather"
          element={<Weather onHandArray={originalArr} />}
        />
        <Route
          path="/allweather"
          element={<WeatherCard weatherData={originalArray} />}
        />
        <Route path="/" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
};

export default App;

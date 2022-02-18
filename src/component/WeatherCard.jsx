import React from "react";
import Layout from "./Layout";
import Card from "./Card";
const WeatherCard = (props) => {
  return (
    <div>
      <Layout />
      <h1 style={{ textAlign: "center", marginTop: "30px", fontSize: "50px" }}>
        Weather Infomation
      </h1>
      {props.weatherData.length === 0 ? (
        <h3 style={{ textAlign: "center", margin: "90px", fontSize: "60px" }}>
          No Data Found
        </h3>
      ) : (
        <ul>
          {props.weatherData
            .slice(0)
            .reverse()
            .map((curelem) => {
              return (
                <Card
                  key={curelem.id}
                  id={curelem.id}
                  cityName={curelem.cityName}
                  dates={curelem.dates}
                  foreCasting={curelem.foreCasting}
                  tempUnits={curelem.tempUnits}
                  tempeature={curelem.tempeature}
                  times={curelem.times}
                  icons={curelem.icon}
                />
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default WeatherCard;

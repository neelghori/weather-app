import React, { useState } from "react";
import Layout from "./Layout";
import Card from "./Card";

const WeatherCard = (props) => {
  const [city, setCity] = useState("");
  const getData = (event) => {
    //console.log(event.target.value);
    setCity(event.target.value);
  };

  return (
    <div>
      <Layout />

      <h1
        style={{
          textAlign: "center",
          marginTop: "30px",
          fontSize: "50px",
        }}
      >
        Weather Infomation
      </h1>
      <div style={{ textAlign: "center" }}>
        <input
          type="text"
          style={{
            textAlign: "center",
            marginTop: "30px",

            padding: "20px 100px 20px 100px",
            border: "none",
            outline: "none",
            borderRadius: "50px",
            fontSize: "20px",
            backgroundColor: "#fff",
            color: "#000",
          }}
          onChange={getData}
          placeholder="Search City..."
        />
      </div>

      {props.weatherData.length === 0 ? (
        <h3 style={{ textAlign: "center", margin: "90px", fontSize: "60px" }}>
          No Data Found
        </h3>
      ) : (
        <ul>
          {props.weatherData
            .filter((val) => {
              //console.log(val.cityName);
              if (city === "") {
                return val;
              } else if (
                val.cityName.toLowerCase().includes(city.toLowerCase())
              ) {
                console.log(val.cityName);
                return val;
              }
            })
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

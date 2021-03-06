import React, { useRef } from "react";
import "./weatherCard.css";
import "./card.css";
const Card = (props) => {
  let color = useRef();
  const convertDate = new Date(props.dates);
  const ResultDate = convertDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  //console.log(ResultDate);
  const timeConver = props.times.split(":");
  const AMPM = timeConver[0] >= 12 ? "PM" : "AM";
  const hours = timeConver[0] % 12;
  const finalHours = hours ? hours : 12;
  const minutes =
    timeConver[1].length < 2 ? `0${timeConver[1]}` : timeConver[1];
  const time = `${finalHours}:${minutes}  ${AMPM}`;
  if (timeConver[0] >= 1 && timeConver[0] <= 7) {
    color = "night";
  } else if (timeConver[0] > 7 && timeConver[0] <= 12) {
    color = "white";
  } else if (timeConver[0] > 12 && timeConver[0] <= 19) {
    color = "yellow";
  } else if (timeConver[0] > 19 && timeConver[0] <= 23) {
    color = "night";
  } else {
    color = "night";
  }
  return (
    <>
      <div className={`widget ${color}`}>
        <div className="left-panel panel">
          <div className="date">
            {time}/{ResultDate}
          </div>
          <div className="city">{props.cityName}</div>
          <div className="forecast">{props.foreCasting}</div>
          <div className="temp">
            {props.tempeature}&deg;
            {props.tempUnits === "fahrenheit" ? "F" : "C"}
          </div>
        </div>
        <div className="right-panel panel">
          <h1>
            <span className={`wi ${props.icons}`}></span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Card;

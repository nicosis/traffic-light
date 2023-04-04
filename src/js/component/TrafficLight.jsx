import React, { useState } from "react";
import "../../styles/TrafficLight.css";
// import skyImage from "../../img/sky.jpg";

const TrafficLight = () => {
  const [lightOn, setLightOn] = useState("none");

  const handleRedClick = (event) => {
    event.stopPropagation();
    setLightOn("red");
  };
  const handleYellowClick = (event) => {
    event.stopPropagation();
    setLightOn("yellow");
  };
  const handleGreenClick = (event) => {
    event.stopPropagation();
    setLightOn("green");
  };
  const handleOffClick = (event) => {
    event.stopPropagation();
    setLightOn("");
  };

  let lightRed = "light light-red";
  let lightYellow = "light light-yellow";
  let lightGreen = "light light-green";

  lightOn === "red" ? (lightRed += " light--selected") : "";
  lightOn === "yellow" ? (lightYellow += " light--selected") : "";
  lightOn === "green" ? (lightGreen += " light--selected") : "";

  return (
    <div onClick={handleOffClick} className="contenedor">
        <div className="stick"></div>
      <div className="box">
        <div onClick={handleRedClick} className={lightRed}></div>
        <div onClick={handleYellowClick} className={lightYellow}></div>
        <div onClick={handleGreenClick} className={lightGreen}></div>
      </div>
    </div>
  );
};

export default TrafficLight;

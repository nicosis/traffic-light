import React, { useState, useEffect } from "react";
import "../../styles/TrafficLight.css";

const TrafficLight = () => {
  const [lightOn, setLightOn] = useState("");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "r") setLightOn("red");
      if (event.key === "y") setLightOn("yellow");
      if (event.key === "g") setLightOn("green");
      
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  console.log(lightOn);

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

  lightOn === "red" ? (lightRed += " light_selected") : "";
  lightOn === "yellow" ? (lightYellow += " light_selected") : "";
  lightOn === "green" ? (lightGreen += " light_selected") : "";

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

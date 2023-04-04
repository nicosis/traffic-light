import React, { useState } from "react";
import "../../styles/TrafficLight.css";
// import skyImage from "../../img/sky.jpg";

const TrafficLight = () => {
  const [redLightOn, setRedLight] = useState(false);
  const [yellowLightOn, setYellowLight] = useState(false);
  const [greenLightOn, setGreenLight] = useState(false);

  let redLightClass = "light light-red";
  let yellowLightClass = "light light-yellow";
  let greenLightClass = "light light-green";

  if (redLightOn) {
    redLightClass += " light--selected";
  }
  if (yellowLightOn) {
    yellowLightClass += " light--selected";
  }
  if (greenLightOn) {
    greenLightClass += " light--selected";
  }

  const handlerOffClick = () => {
    setRedLight(false);
    setYellowLight(false);
    setGreenLight(false);
  };
  const handleRedClick = (event) => {
    event.stopPropagation();
    setRedLight(true);
    setYellowLight(false);
    setGreenLight(false);
  };
  const handleYellowClick = (event) => {
    event.stopPropagation();
    setRedLight(false);
    setYellowLight(true);
    setGreenLight(false);
  };
  const handleGreenClick = (event) => {
    event.stopPropagation();
    setRedLight(false);
    setYellowLight(false);
    setGreenLight(true);
  };

  return (
    <div onClick={handlerOffClick} className="contenedor">
      <div onClick={handleRedClick} className={redLightClass}></div>
      <div onClick={handleYellowClick} className={yellowLightClass}></div>
      <div onClick={handleGreenClick} className={greenLightClass}></div>
    </div>
  );
};

export default TrafficLight;

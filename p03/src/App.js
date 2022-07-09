import React, { useState } from "react";

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const incrementValue = () => {
    const tempValue = temperatureValue + 1;
    if (temperatureValue >= 14) {
      setTemperatureColor("hot");
    }
    setTemperatureValue(tempValue);
  };

  const decrementValue = () => {
    const tempValue = temperatureValue - 1;
    if (temperatureValue <= 15) {
      setTemperatureColor("cold");
    }
    setTemperatureValue(tempValue);
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}ºC
        </div>
      </div>
      <div className="button-container"> </div>
      <button onClick={() => incrementValue()}>+</button>
      <button onClick={() => decrementValue()}>-</button>
    </div>
  );
};
export default App;

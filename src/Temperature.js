import React from "react";
import "./Temperature.css";
import sol from "./images/icon_sol.png";

export default function Temperature() {
  return (
    <div>
      <img src={sol} alt="Sun" className="Sun-icon" />
      <div>
        <h1 className="Temperature">13</h1>
        <p className="Units">ºC </p>
      </div>
    </div>
  );
}

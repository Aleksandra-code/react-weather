import React from "react";
import img from "./images/icon-2.png";
import "./Icon.css";

export default function Icon() {
  return (
    <div>
      <img className="Icon" src={img} alt="icon" />
    </div>
  );
}

import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <a
        href="https://github.com/Aleksandra-code/vanilla-weather-app"
        target="_blank"
        class="author"
      >
        Open-source code
      </a>
      , by{" "}
      <a
        href="https://www.linkedin.com/in/aleksandrastaszynska/"
        target="_blank"
        class="author"
      >
        Aleksandra Staszynska
      </a>
    </div>
  );
}

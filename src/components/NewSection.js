 import React, { useState } from "react";
import "./NewSection.css";
import {Link} from "react-router-dom";

import new1 from "./pic/PROMOTION.png";
import new2 from "./pic/BUY2GET1.png";
import new3 from "./pic/FREETOP.png";

function NewSection() {
    const slides = [new1, new2, new3];
    const [curr, setCurr] = useState(0);
    
    const next = () => {
        setCurr((prev) => (prev + 1) % slides.length);
    };
    const prev = () => {
        setCurr((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
    <div className="body">
      <div className="slider">
        <button className="arrow left" onClick={prev}>
          ❮
        </button>

        <div
          className="slide-track"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`summer drink ${index + 1}`}
              className="slide-img"
            />
          ))}
        </div>

        <button className="arrow right" onClick={next}>
          ❯
        </button>

        <Link to="/menu" className="overlay-link">
          <button className="see-button">See More</button>
        </Link>
      </div>
    </div>
  );
}

export default NewSection;
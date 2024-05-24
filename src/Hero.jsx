import React from "react";
import logo from "/logo.png";
import "./style.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>GREEN CARD SPONSORSHIP PROGRAM THROUGH EMPLOYMENT</h1>
        <img src={logo} alt="Workforce Logo" />
      </div>
    </div>
  );
};

export default Hero;

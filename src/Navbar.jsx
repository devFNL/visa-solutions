import React from "react";
import typo from "/typo.png";

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <img src={typo} className="logo" alt="Logo" />
        <div className="list">
          <ul>
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#about">
              <li>About Us</li>
            </a>
            <a href="#how">
              <li>How it Works</li>
            </a>
            <a href="#benefits">
              <li>Benefits</li>
            </a>
            <a href="#requirements">
              <li>Requirements</li>
            </a>
            <a href="#process">
              <li>Our Process</li>
            </a>
            <a href="#included">
              <li>What's Included</li>
            </a>
            <a href="#cover">
              <li>Contact Us</li>
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

import React from "react";
import typo from "/typo.png";

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <img src={typo} className="logo" alt="" />
        <div className="list">
          <ul>
            <a href=".">
              <li>Home</li>
            </a>
            <a href=".">
              <li>About Us</li>
            </a>
            <a href=".">
              <li>How it Works</li>
            </a>
            <a href=".">
              <li>Benefits</li>
            </a>
            <a href=".">
              <li>Requirements</li>
            </a>
            <a href=".">
              <li>Our Process</li>
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

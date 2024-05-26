import React from "react";
import cover from "/cover.png";
import darklogo from "/darklogo.png";
import yt from "/yt.png";
import fb from "/fb.png";
import ig from "/ig.png";
import top from "/top.png";

const Cover = () => {
  return (
    <div className="cover">
      <div className="cover_img">
        <img src={cover} alt="" />
      </div>
      <img src={darklogo} width={"200px"} alt="" />
      <h1>THE FUTURE IS IN YOUR HANDS!</h1>

      <h3>Visit Us</h3>
      <a
        href="https://visasolutionsworkforce.com/"
        className="home"
        target="blank_"
      >
        www.visasolutionsworkforce.com
      </a>
      <div className="social">
        <a
          href="https://www.facebook.com/visasolutionsworkforce/"
          target="blank_"
        >
          <img src={fb} alt="" />
        </a>
        <a
          href="https://www.instagram.com/visasolutionsworkforce/?hl=es-la"
          target="blank_"
        >
          <img src={ig} alt="" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCo6z7Og269MBOYmoPjEAMBA"
          target="blank_"
        >
          <img src={yt} alt="" />
        </a>
      </div>
      <div className="foot">
        <p>© Visa Solutions Workforce, LLC 2023 All Rights Reserved.</p>
        <a href="#">
          <img src={top} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Cover;

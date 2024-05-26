import React from "react";
import Card from "./Card";

import star from "/star.png";
import globe from "/globe.png";
import company from "/company.png";
import people from "/people.png";

const About = () => {
  return (
    <div className="about">
      <div className="about_head">
        <h1>ABOUT US</h1>
        <p className="about_info">
          For over a decade, Visa Solutions has been the leading international
          recruitment and migration company, successfully helping thousands of
          people from over 70 countries to process their visas and move to the
          United States of America. As an organization founded by immigrants,
          our passion is to help others achieve their American Dream and live
          life to the fullest. Through our program, you will have the
          opportunity to live, work, and thrive in the United States with your
          family by obtaining Permanent Resident status, commonly known as a
          Green Card, through employment sponsorship.
        </p>
      </div>
      <div className="cards">
        <Card number="+14" data="Years of Experience" img={star} />
        <Card number="+6" data="Offices around the world" img={company} />
        <Card number="+70" data="Countries" img={globe} />
        <Card number="+1000" data="Success stories" img={people} />
      </div>
    </div>
  );
};

export default About;

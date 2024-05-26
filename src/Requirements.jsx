import React from "react";
import RequirementElement from "./RequirementElement";
import req1 from "/req1.png";
import req2 from "/req2.png";
import req3 from "/req3.png";
import req4 from "/req4.png";
import req5 from "/req5.png";
import req6 from "/req6.png";
import req7 from "/req7.png";

const Requirements = () => {
  return (
    <div className="requirements">
      <h1>REQUIREMENTS</h1>
      <div className="requirements_list">
        <ul>
          <RequirementElement
            img={req1}
            title="AGE"
            data="Must be at least 21 years old."
          />
          <RequirementElement
            img={req2}
            title="EXPERIENCE"
            data="Have a clean and stable work history."
          />
          <RequirementElement
            img={req5}
            title="GOOD HEALTH"
            data="You should be in good health and physical condition."
          />
          <RequirementElement
            img={req3}
            title="VERIFIABLE REFERENCES"
            data="You should be able to provide recommendation letters to endorse your experience."
          />
          <RequirementElement
            img={req4}
            title="CLEAN CRIMINAL AND MIGRATORY RECORD"
            data="Thorough background checks will be conducted, and any false statement or omission of required information will result in the denial of the application.
            "
          />

          <RequirementElement
            img={req6}
            title="EXCELLENT ATTITUDE"
            data="We are looking for motivated, reliable, and professional individuals who are ready to adopt a new culture and seek an opportunity to improve their lives."
          />
          <RequirementElement
            img={req7}
            title="COMMITMENT"
            data="Your commitment to the sponsoring employer company that will sponsor your Green Card is important, it will provide you with a competitive salary and benefits."
          />
        </ul>
      </div>
      {/* <div className="extra">
        <h3>Honesty is our policy.</h3>
        <p>
          We expect you to be honest about your skills, work experience, and
          personal information. We will verify your background, and any
          inaccurate or false information provided will result in your
          application being rejected.
        </p>
      </div> */}
    </div>
  );
};

export default Requirements;

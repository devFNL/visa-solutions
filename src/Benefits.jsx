import React from "react";
import BenefitCard from "./BenefitCard";
import bene1 from "/bene1.png";
import bene2 from "/bene2.png";
import bene3 from "/bene3.png";
import bene4 from "/bene4.png";
import bene5 from "/bene5.png";
import bene6 from "/bene6.png";

const Benefits = () => {
  return (
    <div className="benefits">
      <h1>BENEFITS</h1>
      <div className="bene_cards">
        <BenefitCard
          title="OPPORTUNITY TO OBTAIN A GREEN CARD"
          img={bene1}
          data="The EB-3 visa is valid for 10 years and can be renewed if you meet the requirements."
        />
        <BenefitCard
          title="BRING YOUR FAMILY WITH YOU"
          img={bene2}
          data="You can include in your application your spouse and children under 21 years old."
        />
        <BenefitCard
          title="BETTER EDUCATION FOR YOUR CHILDREN"
          img={bene3}
          data="Your children can attend public schools in the country for free."
        />
        <BenefitCard
          title="ATTRACTIVE BENEFITS"
          img={bene4}
          data="You will be able to receive life insurance, medical expenses insurance, a retirement plan, and much more!"
        />
        <BenefitCard
          title="COMPETITIVE SALARY"
          img={bene5}
          data="Work in the best companies in the United States and earn an attractive salary."
        />
        <BenefitCard
          title="LIVE YOUR AMERICAN DREAM"
          img={bene6}
          data="Enjoy a better quality of life in one of the safest and most stable countries in the world."
        />
      </div>
    </div>
  );
};

export default Benefits;

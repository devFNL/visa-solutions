import React from "react";
import IncludedItem from "./IncludedItem";

const Included = () => {
  return (
    <div className="included">
      <div className="included_head">
        <h1>WHAT’S INCLUDED IN THE PROGRAM?</h1>
        <p>
          If you decide to join our program to achieve your American Dream, you
          can rest assured that we will be committed to supporting you every
          step of the way.
        </p>
      </div>
      <div className="included_list">
        <div className="included_items">
          <IncludedItem
            data={
              "Preparation, submission, and management of your immigration."
            }
          />
          <IncludedItem data={"Applicable government fees. "} />
          <IncludedItem
            data={"Assistance throughout your entire immigration process."}
          />
          <IncludedItem
            data={
              "Useful information and advice to start your new life in the United States."
            }
          />
          <IncludedItem data={"Access to a customer service hotline."} />
          <IncludedItem data={"Pre-arrival orientation."} />
          <IncludedItem
            data={
              "Support to open your bank account, obtain your Social Security number, and more."
            }
          />
        </div>

        <div className="banner">
          <h2>FINANCING AVAILABLE!</h2>
          <p>
            “We are committed to helping you achieve your American Dream.
            Therefore, Visa Solutions Workforce will support you by financing
            our immigration and relocation services.”
          </p>
          <hr />
          <h4 className="note">*Family fees are not included.</h4>
        </div>
      </div>
    </div>
  );
};

export default Included;

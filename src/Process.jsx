import React from "react";
import Bubble from "./Bubble";
import bub1 from "/bub1.png";
import bub2 from "/bub2.png";
import bub3 from "/bub3.png";
import bub4 from "/bub4.png";
import bub5 from "/bub5.png";
import bub6 from "/bub6.png";
import bub7 from "/bub7.png";
import bub8 from "/bub8.png";

const Process = () => {
  return (
    <div className="process">
      <div className="process_head">
        <h1>OUR PROCESS</h1>
        <p>
          Important things take time. Our program consists of 8 steps that will
          bring you closer and closer to living your American Dream. Remember
          that during the duration of your process, you can continue with your
          regular life. We take care of everything!
        </p>
      </div>
      <div className="bubbles">
        <div className="bubbles_first">
          <Bubble
            title="1. REGISTER"
            img={bub1}
            data="Fill out the online form"
          />
          {/* <p className="arrow">{"→"}</p> */}
          <Bubble
            title="2. DOCUMENT"
            img={bub2}
            data="Send all requested documents"
          />
          {/* <p className="arrow">{"→"}</p> */}
          <Bubble
            title="3. INTERVIEW"
            img={bub3}
            data="Virtual interview with the employer"
          />
          {/* <p className="arrow">{"→"}</p> */}
          <Bubble
            title="4. JOB OFFER"
            img={bub4}
            data="Receive the job terms"
          />
        </div>
        <div className="bubbles_second">
          <Bubble
            title="5. MIGRATION PROCESS"
            img={bub5}
            data="Approximately 18 months"
          />
          {/* <p className="arrow">{"→"}</p> */}
          <Bubble
            title="6. RELOCATION"
            img={bub6}
            data="Receive assistance in starting your new life"
          />
          {/* <p className="arrow">{"→"}</p> */}
          <Bubble
            title="7. START WORKING"
            img={bub7}
            data="Begin your new job"
          />
          {/* <p className="arrow">{"→"}</p> */}
          <Bubble
            title="8. LIVE YOUR AMERICAN DREAM"
            img={bub8}
            data="Start your new life and share your history"
          />
        </div>
      </div>
      <div className="extra">
        <p>
          The United States government issues a limited number of EB-3 visas
          each year. Don’t miss the opportunity to start living your American
          Dream!
        </p>
      </div>
    </div>
  );
};

export default Process;

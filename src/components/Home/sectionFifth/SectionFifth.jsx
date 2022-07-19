import React from "react";
import "./SectionFifth.css";
import CountUp from "react-countup";

const SectionFifth = () => {
  return (
    <>
      <div className="sectionFifth">
        <div className="wrapperSecond">
          <div className="sectionFifth_content">
            <div className="fifth_card">
              <CountUp className="count" end={36000} duration={5} />
              <p>User Trust</p>
            </div>
            <div className="fifth_card">
              <CountUp className="count" end={42000} duration={5} />
              <p>Brand Vision</p>
            </div>
            <div className="fifth_card without-border">
              <CountUp className="count" end={150} duration={5} />
              <p>Achievement</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionFifth;

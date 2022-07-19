import React from "react";
import "./SectionFourth.css";
import AdUnitsIcon from "@mui/icons-material/AdUnits";

const SectionFourth = () => {
  return (
    <>
      <div className="sectionFourth">
        <div className="wrapperSecond">
          <div className="sectionFourth_content">
            <div className="fourthCard1">
              <AdUnitsIcon fontSize="large" />
              <h5>Years Experince</h5>
              <p>
                Fashion yourself as a <br />
                Payfast application user
              </p>
              <a href="">Read More</a>
              <button>See More</button>
            </div>
            <div className="fourthCard2">
              <AdUnitsIcon />
              <h5>Achievment</h5>
              <p>
                Create a new Fashion for <br />
                you to use anytime and
                <br />
                anywhere
              </p>
              <a href="">Read More</a>
              <button>See More</button>
            </div>
            <div className="fourthCard3">
              <AdUnitsIcon />
              <h5>Positiv Review</h5>
              <p>
                You can use T-shirt in peace <br />
                and all its facilities
              </p>
              <a href="">Read More</a>
              <button>See More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionFourth;

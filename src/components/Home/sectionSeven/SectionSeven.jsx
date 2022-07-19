import React from "react";
import "./SectionSeven.css";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import OfflinePinIcon from "@mui/icons-material/OfflinePin";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
const SectionSeven = () => {
  return (
    <>
      <div className="sectionSeven">
        <div className="wrapperSecond">
          <div className="sectionSeven_content">
            <div className="partFirst">
              <h2>Have Any Question?</h2>
              <div className="sevenBorder">
                <div className="sevenCatalog">
                  <ul>
                    <li>PAYMENTS</li>
                    <li>REFUNDS</li>
                    <li>PRICING</li>
                    <li>SHIPPING</li>
                    <li>OTHER</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="sevenPartSecond">
              <div className="sevenPartSecond_left">
                <div className="personal">
                  <h4>Personal</h4>
                  <TaskAltIcon fontSize="large" />
                </div>
                <div className="month">
                  <h4>$12</h4>
                  <p className="month_small">/month</p>
                </div>
                <div className="listLeft">
                  <OfflinePinIcon color="warning" />
                  <p className="unlock">Unlock special figure</p>
                </div>
                <div className="listLeft">
                  <OfflinePinIcon color="warning" />
                  <p className="unlock">Cloud Service</p>
                </div>
                <div className="listLeft">
                  <OfflinePinIcon color="warning" />
                  <p className="unlock">Unlimited Saved</p>
                </div>
                <div className="listLeft">
                  <OfflinePinIcon color="warning" />
                  <p className="unlock">All Types of File</p>
                </div>
                <div className="listLeft">
                  <OfflinePinIcon color="warning" />
                  <p className="unlock">Update Support</p>
                </div>
                <div className="listLeft">
                  <OfflinePinIcon color="warning" />
                  <p className="unlock">For 2 device</p>
                </div>
                <button className="sevenBtn">GET STARTED</button>
              </div>
              <div className="sevenPartSecond_right">
                <div className="sevenPartSecond_left">
                  <div className="personal add">
                    <h4>Team</h4>
                    <AllInclusiveIcon fontSize="large" />
                  </div>
                  <div className="month">
                    <h4>$12</h4>
                    <p className="month_small">/month</p>
                  </div>
                  <div className="listLeft">
                    <OfflinePinIcon color="primary" />
                    <p className="unlock">Unlock special figure</p>
                  </div>
                  <div className="listLeft">
                    <OfflinePinIcon color="primary" />
                    <p className="unlock">Cloud Service</p>
                  </div>
                  <div className="listLeft">
                    <OfflinePinIcon color="primary" />
                    <p className="unlock">Unlimited Saved</p>
                  </div>
                  <div className="listLeft">
                    <OfflinePinIcon color="primary" />
                    <p className="unlock">All Types of File</p>
                  </div>
                  <div className="listLeft">
                    <OfflinePinIcon color="primary" />
                    <p className="unlock">Update Support</p>
                  </div>
                  <div className="listLeft">
                    <OfflinePinIcon color="primary" />
                    <p className="unlock">For 2 device</p>
                  </div>
                  <button className="sevenBtn">GET STARTED</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionSeven;

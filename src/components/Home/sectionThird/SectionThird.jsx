import React from "react";
import "./SectionThird.css";
import VideoPlayer from "react-video-js-player";
import Nike from "../../video/Nike.mp4";

const SectionThird = () => {
  const videoSrc = Nike;
  return (
    <>
      <div className="sectionThird">
        <div className="wrapperSecond">
          <div className="sectionThird_content">
            <div className="part1">
              <h2>Looking for favourite t-shirt?</h2>
              <div className="catalog">
                <ul>
                  <li>All</li>
                  <li>Accesories</li>
                  <li>Catagories</li>
                  <li>T-Shirt</li>
                </ul>
              </div>
            </div>
            <div className="part2">
              <div>
                <VideoPlayer src={videoSrc} width="400px" height="350px" />
              </div>
              <img
                className="part2_img"
                src="https://5.imimg.com/data5/XG/CU/DX/IOS-25129935/product-jpeg-500x500.png"
                alt=""
              />
              <div className="part2_title">
                <h2>
                  Why <br />
                  Choose Us
                </h2>
                <p>
                  Get lost on the beautiful beaches of United or get <br />
                  caught up in the wildness of the night life.It's up to you.
                  <br />
                  Nihili quoque moderatuis quo ut,eu vix noster fierent.
                </p>
                <button>ORDER NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionThird;

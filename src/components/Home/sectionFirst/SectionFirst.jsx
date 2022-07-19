import React from "react";
import "./SectionFirst.css";
import VideoPlayer from "react-video-js-player";
import Nike from "../../video/Nike.mp4";

const SectionFirst = () => {
  const videoSrc = Nike;
  return (
    <>
      <div className="sectionFirst">
        <div className="wrapperSecond">
          <div className="sectionFirst_content">
            <p>
              Our experience to always <br /> update the latest stayles
              <em>"</em>
            </p>
            <img
              className="sectionFirst_content_photo1"
              src="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F211001142811-nike-store-0927.jpg"
              alt=""
            />
            <VideoPlayer
              className="sectionFirst_content_photo2"
              src={videoSrc}
              width="200px"
              height="150px"
            />
            <img
              className="sectionFirst_content_photo3"
              src="https://thumbs.dreamstime.com/b/nike-logo-white-background-editorial-illustration-company-168841205.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionFirst;

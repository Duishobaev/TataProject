import React from "react";
import "./SectionSecond.css";

const SectionSecond = () => {
  return (
    <>
      <div className="sectionSecond">
        <div className="wrapperSecond">
          <div className="title_content">
            <h2>Our best seller product</h2>
            <button>See all Product</button>
          </div>
          <div className="cards">
            <div className="card">
              <img
                src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ciftv1we0zgqjvudzgl5/sportswear-older-t-shirt-GnxC5L.png"
                alt=""
              />
              <div className="card_desc">
                <div>
                  <h5>Smart t-skirt</h5>
                  <div className="card_desc_price">
                    <h5>40</h5>
                    <h5 className="dollar">$</h5>
                  </div>
                  <p className="discount">100$</p>
                </div>
                <button>BUY</button>
              </div>
            </div>
            <div className="card">
              <img
                src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a66c7a57-96f4-4eae-b4c3-fe6061c0f1f4/sportswear-t-shirt-wZHr9Q.png"
                alt=""
              />
              <div className="card_desc">
                <div>
                  <h5>Smart t-skirt</h5>
                  <div className="card_desc_price">
                    <h5>40</h5>
                    <h5 className="dollar">$</h5>
                  </div>
                  <p className="discount">100$</p>
                </div>
                <button>BUY</button>
              </div>
            </div>
            <div className="card">
              <img
                src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/811c92e6-7ff9-4bdd-9a10-6df89be73cc4/sportswear-t-shirt-HWS2lF.png"
                alt=""
              />
              <div className="card_desc">
                <div>
                  <h5>Smart t-skirt</h5>
                  <div className="card_desc_price">
                    <h5>40</h5>
                    <h5 className="dollar">$</h5>
                  </div>
                  <p className="discount">100$</p>
                </div>
                <button>BUY</button>
              </div>
            </div>
            <div className="card">
              <img
                src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/jepby6pclgyh4zoqc6wr/sportswear-essential-t-shirt-R9S8Fx.png"
                alt=""
              />
              <div className="card_desc">
                <div>
                  <h5>Smart t-skirt</h5>
                  <div className="card_desc_price">
                    <h5>40</h5>
                    <h5 className="dollar">$</h5>
                  </div>
                  <p className="discount">100$</p>
                </div>
                <button>BUY</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionSecond;

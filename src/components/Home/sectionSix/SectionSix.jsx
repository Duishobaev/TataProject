import React from "react";
import "./SectionSix.css";

const SectionSix = () => {
  return (
    <>
      <div className="sectionSix">
        <div className="wrapperSecond">
          <div className="sectionSix_content">
            <div className="sixPart1">
              <h2>
                Trending Ourfit Of
                <br />
                The Day
              </h2>
              <div className="sixPart1_right">
                <p>
                  The e-commerce site has an eye catching
                  <br /> design and is perfect for people who want to
                  <br /> buy different items,but don't have time for
                  <br /> shopping.
                </p>
                <button>Explore</button>
              </div>
            </div>
            <div className="sixPart2">
              <div className="sixCard">
                <img
                  src="https://static.nike.com/a/images/t_default/y0pys5jfozblhxlsqzxq/dri-fit-mens-training-t-shirt-nhgSHx.png"
                  alt=""
                />
                <div className="sixCard_des">
                  <div className="sixCard_des__field">
                    <p className="sixCard_des__field_title">
                      New Lookbook Summer
                    </p>
                    <p className="sixCard_des__field_mini">Collection 2021</p>
                  </div>
                  <p className="sixPrice">$173</p>
                </div>
              </div>
              <div className="sixCard">
                <img
                  src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ipttcwh6nq5okipcwyxa/sportswear-mens-t-shirt-WMplNS.png"
                  alt=""
                />
                <div className="sixCard_des">
                  <div className="sixCard_des__field">
                    <p className="sixCard_des__field_title">New Lookbook</p>
                    <p className="sixCard_des__field_mini">Collection 2021</p>
                  </div>
                  <p className="sixPrice">$210</p>
                </div>
              </div>
              <div className="sixCard">
                <img
                  src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9075baf1-f6e6-43b9-9e3d-236236517ffa/sportswear-mens-allover-print-t-shirt-DSvdFz.png"
                  alt=""
                />
                <div className="sixCard_des">
                  <div className="sixCard_des__field">
                    <p className="sixCard_des__field_title">
                      New Lookbook Winter
                    </p>
                    <p className="sixCard_des__field_mini">Collection 2021</p>
                  </div>
                  <p className="sixPrice">$344</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionSix;

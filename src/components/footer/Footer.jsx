import React from "react";
import "./Footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="wrapperSecond">
          <div className="footer_content">
            <div className="footer1">
              <h4>Nike</h4>
              <p>
                Looking for commerce web site? We <br />
                after a turn key ecommerse website with <br />
                the latest technology.Get your online store <br />
                today!
              </p>
              <div>
                <a href="https://twitter.com">
                  <TwitterIcon className="icons" color="warning" />
                </a>
                <a href="https://whatsApp.com">
                  <WhatsAppIcon className="icons" color="warning" />
                </a>
                <a href="https://instagram.com">
                  <InstagramIcon className="icons" color="warning" />
                </a>
              </div>
            </div>
            <div className="footer2">
              <div className="footer_nav">
                <h3>Home</h3>
                <ul>
                  <Link to="/draft">
                    <li>Discover</li>
                  </Link>
                  <Link to="/draft">
                    <li>Explore</li>
                  </Link>
                  <Link to="/draft">
                    <li>Join</li>
                  </Link>
                </ul>
              </div>
              <div className="footer_nav">
                <h3>Company</h3>
                <ul>
                  <Link to="/draft">
                    <li>Corporation</li>
                  </Link>

                  <Link to="/draft">
                    <li>Fashion</li>
                  </Link>

                  <Link to="/draft">
                    <li>About Us</li>
                  </Link>
                </ul>
              </div>
              <div className="footer_nav">
                <h3>Features</h3>
                <ul>
                  <Link to="/draft">
                    <li>Shop</li>
                  </Link>

                  <Link to="/draft">
                    <li>Cart</li>
                  </Link>

                  <Link to="/draft">
                    <li>Notifications</li>
                  </Link>

                  <Link to="/draft">
                    <li>Sale</li>
                  </Link>
                </ul>
              </div>
              <div className="footer_nav">
                <h3>Contact Us</h3>
                <ul>
                  <Link to="/draft">
                    <li>Privacy & Policy</li>
                  </Link>

                  <Link to="/draft">
                    <li>+996 500 20 78 45</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="end"></div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import "../header/Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="wrapper">
          <div className="header_content">
            <div>
              <Link to="/">
                <img
                  className="header_logo"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YPik4rdgNmhIDKMomSpRB1xtvd4AiOU5hg&usqp=CAU"
                  alt=""
                />
              </Link>
            </div>
            <div>
              <ul className="nav">
                <Link to="/home">
                  <li>Home</li>
                </Link>
                <Link to="/shop">
                  <li>Shop</li>
                </Link>
                <Link to="/features">
                  <li>Features</li>
                </Link>
                <Link to="/pricing">
                  <li>Pricing</li>
                </Link>
              </ul>
            </div>
            <button className="header_btn">
              <a href="tel:+99656565656">Contact Us</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

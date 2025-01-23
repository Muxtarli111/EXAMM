import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
    <Helmet>
      <title>

        Navbar
      </title>
    </Helmet>
      <div className="container">
        <div className="header">
          <div className="right">
            <div className="logo"></div>
            <img
              src="	https://preview.colorlib.com/theme/estore/assets/img/logo/logo.png"
              alt=""
            />
          </div>
          <div className="center">
            <div className="lists">
              <ul>
                <li>
                  <Navlink className="list">Home</Navlink>
                </li>
                <li>
                  <Navlink className="list">Category</Navlink>
                </li>
                <li>
                  <Navlink className="list">Home</Navlink>
                </li>
                <li>
                  <Navlink className="list">Home</Navlink>
                </li>
                <li>
                  <Navlink className="list">Home</Navlink>
                </li>
                <li>
                  <Navlink className="list">Home</Navlink>
                </li>
              </ul>
            </div>
          </div>
          <div className="left">
            <div className="icons">
              <i class="fa-solid fa-cart-shopping"></i>
              <i class="fa-solid fa-heart"></i>

              <button className="buttonx">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

import React, { useState, useEffect } from "react";
import Image from "next/image";

import Pic from "../public/assets/brand/4.png";

const Navigations = () => {
  return (
    <div className="navigation-container">
      <div className="navigation-overlay">
        <div className="wrap">
          <div className="navbar">
            <div className="logo">
              <Image src={Pic} height="60" width="60" alt="logo" />
              <h2> express </h2>
            </div>
            <div className="ul">
              <ul>
                <li>Home</li>
                <li>Shipping</li>
                <li>Tracking</li>
                <li>Account</li>
                <li>Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigations;

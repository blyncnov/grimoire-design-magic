import React from "react";
import Image from "next/image";

// Image Assest
import PhotoShopImage from "./assests/photoshop.png";

const BuyNowCard = () => {
  return (
    <>
      <div className="buy-now-card-container">
        <div className="buy-now-card-top-section">
          <div className="buy-now-card-row">
            <div className="buy-now-card-img">
              <Image src={PhotoShopImage} alt="photoshop" />
            </div>
            <div className="buy-now-card-opposite-text ">
              <p>Photoshop</p>
            </div>
          </div>
        </div>
        <div className="buy-now-card-bottom-section">
          <h4 className="buy-now-card-bottom-title">
            Nok 200.99/ <sup>mo</sup>
          </h4>
          <p className="buy-now-card-bottom-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            eaque iure animi tenetur ullam, debitis maxime! Commodi explicabo
            cumque culpa animi tenetur ullam, debitis maxime! Commodi explicabo
            cumque culpa.
          </p>
          <a
            className="buy-now-card-bottom-link"
            target="_blank"
            rel="noreferrer"
            href="https://pro-blyncnov.vercel.app"
          >
            Plan & Pricing details
          </a>
          <button className="buy-now-card-button">Buy Now</button>
        </div>
      </div>
    </>
  );
};

export default BuyNowCard;

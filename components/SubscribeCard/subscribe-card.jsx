import React from "react";

// import statement for next js image
import Image from "next/image";

// Image Assest
// import PhotoShopImage from "./assests/photoshop.png";

const SubscribeCard = () => {
  return (
    <>
      {/* HTML & CSS user can Start Copy Here */}
      <div className="subscribe-card-container">
        <div className="subscribe-card-section">
          <div className="subscribe-card-text">
            <h2>Try it Now!</h2>
            <p>Free trial , no obligation</p>
          </div>
          <div className="subscribe-card-input-section">
            <form action="post">
              <div className="single-input">
                <label htmlFor="email">Work Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input-form-control"
                />
              </div>

              <div className="single-input-checkbox">
                <input type="checkbox" name="check" id="check" />
                <label htmlFor="check">
                  I Agree to the terms and conditions.
                </label>
              </div>

              <div className="single-input-checkbox">
                <input type="checkbox" name="check" id="check" />
                <label htmlFor="check">Subscribe to our newsletter.</label>
              </div>

              <div className="single-input-checkbox">
                <input type="checkbox" name="check" id="check" />
                <label htmlFor="check">
                  Subscribe to our trial onboarding emails.
                </label>
              </div>

              <div>
                <button className="subscribe-card-button" type="submit">
                  Download Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* HTML & CSS user End Copy Here */}
    </>
  );
};

export default SubscribeCard;

// IMPORTANT :::::::::::::::::::::::::::>>>>>>>
// The CSS style for this design can be found in the STYLES Folder in the Root Directory
// ::::::::::::::::::::::::::::::::::::::::::>>>>>>>>

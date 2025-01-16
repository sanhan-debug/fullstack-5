import React from "react";
import "../Collections/style.css";

function Collections() {

  return (
    <>
      <div className="collec-container">
        <div className="collect">
          <img className="collect-img"
            src="https://preview.colorlib.com/theme/shoppers/images/women.jpg"
            alt=""
          />
          <div className="text">
            <p>Collections</p>
            <h1>WOMEN</h1>
          </div>
        </div>
        <div className="collect">
          <img className="collect-img"
            src="https://preview.colorlib.com/theme/shoppers/images/men.jpg"
            alt=""
          />
          <div className="text">
            <p>Collections</p>
            <h1>MEN</h1>
          </div>
        </div>
        <div className="collect">
          <img className="collect-img"
            src="https://preview.colorlib.com/theme/shoppers/images/children.jpg"
            alt=""
          />
          <div className="text">
            <p>Collections</p>
            <h1>Children</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Collections;

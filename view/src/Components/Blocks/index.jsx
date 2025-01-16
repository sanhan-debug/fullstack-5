import React from "react";
import { FaTruck } from "react-icons/fa";
import { MdRefresh } from "react-icons/md";
import { MdContactSupport } from "react-icons/md";
import "../Blocks/style.css";

function Blocks() {
  return (
    <>
      <div className="container-blocks">
        <div className="site-blocks">
          <div className="block">
            <div className="block-icon">
              <FaTruck />
            </div>
            <div className="block-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
              </p>
            </div>
          </div>
          <div className="block">
            <div className="block-icon">
              <MdRefresh />
            </div>
            <div className="block-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
              </p>
            </div>
          </div>
          <div className="block">
            <div className="block-icon">
              <MdContactSupport />
            </div>
            <div className="block-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blocks;

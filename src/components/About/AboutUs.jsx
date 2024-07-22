import React from "react";
import "./style.css";
import aboutusimage from "../images/aboutusimage.png";
import "../../layout.css";

function About() {
  return (
    <>
      <div className="section1">
        <div className="container1">
          <h4 className="h4">Bizim haqqımızda</h4>
          <h2>Dizaynlarımız problemləri həll edir</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <img src={aboutusimage} alt="img" />
      </div>
    </>
  );
}

export default About;

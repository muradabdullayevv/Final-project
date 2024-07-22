import React from "react";
import "./style.css";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import Caruselswiper from "./Caruselswip";

function TheBenefits() {
  return (
    <>
      <section className="section5">
        <h2>Bizimlə işləməyin faydaları</h2>
        <div className="cards">
          <div className="card">
            <img src={icon1} alt="icon" />
            <h6>Asanlıqla fərdiləşdirin</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim.
            </p>
          </div>
          {/* card2 */}
          <div className="card">
            <img src={icon2} alt="icon" />
            <h6>Mükəmməl Cavab</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim.
            </p>
          </div>
          {/* card3 */}
          <div className="card">
            <img src={icon3} alt="icon" />
            <h6>Dost Dəstəyi</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim.
            </p>
          </div>
        </div>
        <Caruselswiper />
      </section>
    </>
  );
}

export default TheBenefits;

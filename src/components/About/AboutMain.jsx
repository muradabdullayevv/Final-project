import React from "react";
import AboutUs from "./AboutUs";
import WhoAreWe from "./WhoAreWe";
import TheProcess from "./TheProcess";
import OurMission from "./OurMission";
import TheBenefits from "./TheBenefits";
import OurTeam from "./OurTeam";
import "../../layout.css";

const AboutMain = () => {
  return (
    <>
      <div className="contain" data-aos="fade-right">
        <div className="container">
          <AboutUs />
          <WhoAreWe />
          <TheProcess />
          <OurMission />
          <TheBenefits />
          <OurTeam />
        </div>
      </div>
    </>
  );
};

export default AboutMain;

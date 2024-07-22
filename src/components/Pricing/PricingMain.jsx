import React from "react";
import OurPricing from "./OurPricing";
import PricingCards from "./PricingCards";
import Faq from "../Faq/Faq";

function PricingMain() {
  return (
    <>
      <div className="contain" data-aos="fade-right">
        <OurPricing />
        <PricingCards />
        <Faq />
      </div>
    </>
  );
}

export default PricingMain;

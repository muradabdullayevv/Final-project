import React from "react";
import Header from "../../components/Header";
import Homehero from "../../components/HomeHero/homehero";
import Homewework from "../../components/Homewework/homewework";
import View from "../../components/Viewprojects/view";
import Features from "../../components/Features1";
import Client from "../../components/Client/Client";
import Faq from "../../components/Faq/Faq";
import Inquiry from "../../components/Inquiry/Inquiry";
import Blog from "../../components/Blog/Blog";
import Footer from "../../components/Footer/footer";
import Footerbottom from "../../components/Footerbottom/footerbottom";

const Home = () => {
  return (
    <>
    <div className="contain" data-aos="fade-left">
      <Homehero />
      <Homewework />
      <View />
      <Features />
      <Client />
      <Faq />
      <Inquiry />
      <Blog />
      </div>
    </>
  );
};

export default Home;

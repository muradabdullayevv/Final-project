import React from "react";
import { Route, Routes } from "react-router";
import { MyRouts } from "../MyRouts";
import Header from "../components/Header";
import Footer from "../components/Footer/footer";
import Footerbottom from "../components/Footerbottom/footerbottom";

const Routing = () => {
  return (
    <>
      <Header />

      <Routes>
        {MyRouts.map(({ id, element, title, path }) => {
          return <Route key={id} element={element} title={title} path={path} />;
        })}
      </Routes>
      <Footer />
      <Footerbottom />
    </>
  );
};

export default Routing;

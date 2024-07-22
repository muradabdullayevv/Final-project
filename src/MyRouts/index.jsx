import React from "react";

import Home from "../Pages/Home";
import Features from "../Pages/Features";
import ContactUs from "../Pages/ContactUs";
import ReadMore from "../Pages/ReadMore";
import Ourworkportfolio from "../Pages/Ourportfolio";

import AboutPage from "../Pages/AboutPage";
import PricingPage from "../Pages/PricingPage";


import BlogPage from "../Pages/BlogPage";
import FAQ from "../Pages/FAQ";
import WorkMain from "../components/Work/WorkMain";

export const MyRouts = [
  {
    path: "/",
    element: <Home />,
    id: 1,
    title: "Home",
  },
  {
    path: "/about",
    element: <AboutPage />,
    id: 2,
    title: "About Us",
  },
  {
    path: "/features",
    element: <Features />,
    id: 3,
    title: "Features",
  },
  {
    path: "/pricing",
    element: <PricingPage />,
    id: 4,
    title: "Pricing",
  },
  {
    path: "/Faq",
    element: <FAQ />,
    id: 5,
    title: "Faq",
  },
  {
    path: "/contactus",
    element: <ContactUs />,
    id: 6,
    title: "Contact Us",
  },

  {
    path: "/readblog",
    element: <ReadMore />,
    id: 7,
    title: "ReadBlog",
  },

  {
    path: "/work",
    element: <WorkMain />,
    id: 8,
    title: "work",
  },

  {
    path: "/blog",
    element: <BlogPage />,
    id: 9,
    title: "BlogPage",
  },
  {
    path: "/home",
    element: <Home />,
    id: 10,
    title: "Home",
  },
];

import React from "react";
import "./main.scss";
import LandingManual from "../LandingManual/LandingManual";
import About from "../About/About";
import Work from "../Work/Work";
import Resume from "../Resume/Resume";
import Contact from "../Contact/Contact";

export default function Main() {
  return (
    <div className="main-wrap">
      <LandingManual />
      <Work />
      <About />
      <Resume />
      <Contact />
    </div>
  )
};
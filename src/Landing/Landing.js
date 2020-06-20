import React from "react";
import Fade from "react-reveal/Fade";
import "./landing.scss";

export default function Landing() {
  return (
    <div className="landing-wrap">
      <Fade duration={1500}><div className="landing-bkg content"></div></Fade>
      <Fade duration={1000} delay={100}>
        <div className="landing-container">
          <p className="title content">MORGAN</p>
          <p className="title content">ELLIS</p>
          <div className="subtitle-wrap content">
            <div className="divider"></div>
            <p className="subtitle">FULL STACK DEVELOPER</p>
          </div>
        </div>
      </Fade>
    </div>
  )
};
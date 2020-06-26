import React from "react";
import "./travel.scss";

export default function Travel() {
  return (
    <div className="travel-wrap project-wrap">
      <div className="banner">
        <p className="title">ARIIX TRAVEL</p>
      </div>
      <div className="project-details">
        <div className="section">
          <div className="travel-slider-wrap">
            <img className="desktop-overlay" src={require("../../assets/img/main/desktop-no-bkg.png")} alt="" />
            <video className="travel-slider" loop autoPlay><source src="https://i.imgur.com/4pDlnuT.mp4" type="video/ogg" />
            Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="section">
          <img className="desktop fullpage" src={require("../../assets/img/work/travel/travel-desktop-home-2.png")} alt="" />
        </div>

        <div className="mobile-section section">
          <img className="mobile-framed" src={require("../../assets/img/work/travel/travel-mobile-home.png")} alt="" />
        </div>

      </div>
      <div className="padding"></div>
    </div>
  )
}

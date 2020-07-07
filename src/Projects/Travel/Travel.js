import React from "react";
import { checkIfMobile} from "../../utils/helpers";
import "./travel.scss";

export default function Travel(props) {

  return (
    <div className="travel-wrap project-wrap">
      <div className="banner">
        <p className="title">ARIIX TRAVEL</p>
      </div>
      <div className="project-details">
        <div className="section">

          {checkIfMobile() === true ?
            <img className="travel-desktop-view" src={require("../../assets/img/work/travel/travel-desktop-view.png")} alt="ARIIX Travel" />
            :
            <div className="dektop-montior-view travel-slider-wrap">
              <img className="desktop-overlay" src={require("../../assets/img/main/desktop-no-bkg.png")} alt="" />
              <video className="travel-slider" loop autoPlay muted><source src="https://i.imgur.com/4pDlnuT.mp4" type="video/ogg" />Your browser does not support the video tag.</video>
            </div>
          }
        </div>

        <div className="section">
          <img className="fullpage" src={require("../../assets/img/work/travel/travel-desktop-home-2.png")} alt="" />
        </div>

        <div className="mobile-section section">
          <img className="mobile-framed" src={require("../../assets/img/work/travel/travel-mobile-home.png")} alt="" />
        </div>

      </div>
      <div className="padding"></div>
    </div>
  )
}
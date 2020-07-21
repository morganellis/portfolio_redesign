import React from "react";
import { checkIfMobile } from "../../utils/helpers";
import "./travel.scss";

export default function Travel(props) {

  return (
    <div className="travel-wrap project-wrap">
      <div className="banner">
        <p className="title">ARIIX TRAVEL</p>
      </div>
      <div className="project-details">
        <div className="section">

          <div className="vid-wrap">
            <img className="desktop-overlay" src={require("../../assets/img/main/desktop-no-bkg.png")} alt="" />
            {checkIfMobile() === true ?
              <iframe title="travel" src="https://giphy.com/embed/kBqnuFehR1LvWb8pqz" frameBorder="0" class="gif vid giphy-embed" allowFullScreen></iframe>
              :
              <video className="vid" loop autoPlay muted><source src="https://i.imgur.com/4pDlnuT.mp4" type="video/ogg" />Your browser does not support the video tag.</video>
            }
          </div>
        </div>

        <div className="sect-below-vid section">
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
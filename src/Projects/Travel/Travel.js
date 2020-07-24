import React, { useState } from "react";
import * as $ from "jquery";
import Loader from "../../Loader/Loader";
import { checkIfMobile } from "../../utils/helpers";
import "./travel.scss";

export default function Travel(props) {
  const [state, setState] = useState({ loading: checkIfMobile() === true ? true : false });

  function doneLoading() {
    $("#loadWrap").addClass("hide");
    setState({ loading: false });
  };

  return (
    <div className="travel-wrap project-wrap">
      <div className="banner">
        <p className="title">ARIIX TRAVEL</p>
      </div>

      {state.loading && (<Loader />)}

      <div className={state.loading ? "hide" : "project-details"}>
        <div className="section">
          <div className="first-vid vid-wrap">
            <img className="travel-desktop-overlay desktop-overlay" src={require("../../assets/img/main/desktop-no-bkg.png")} alt="" />
            {checkIfMobile() === true ?
              <iframe onLoad={doneLoading} title="travel" loop autoPlay muted src="https://giphy.com/gifs/lpt44CNIBsmqTbHMyv/html5" allow="autoplay; encrypted-media" frameBorder="0" class="travel-gif gif vid giphy-embed" allowFullScreen></iframe>
              :
              <video className="vid" loop autoPlay muted><source src="https://i.imgur.com/ApZIB9X.mp4" type="video/ogg" />Your browser does not support the video tag.</video>
            }
          </div>
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
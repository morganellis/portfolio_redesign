import React, { useState } from "react";
import Slider from "react-slick";
import * as $ from "jquery";
import Loader from "../../Loader/Loader";
import { checkIfMobile } from "../../utils/helpers";
import "./slenderiiz.scss";

export default function Slenderiiz(props) {
  const [state, setState] = useState({ loading: checkIfMobile() === true ? true : false });

  function doneLoading() {
    $("#loadWrap").addClass("hide");
    setState({ loading: false });
    // $("#loadWrap").fadeOut();
    // setTimeout(() => {
    //   setState({ loading: false });
    // }, 200);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <img className="chevron-right chevron" src={require("../../assets/img/main/next.png")} alt="Next" />,
    prevArrow: <img className="chevron-left chevron" src={require("../../assets/img/main/prev.png")} alt="Previous" />
  };

  return (
    <div className="slenderiiz-wrap project-wrap">
      <div className="banner">
        <p className="title">SLENDERIIZ</p>
      </div>

      {state.loading && (<Loader />)}
      {/* {state.loading && (<div id="loadWrap"><div className="loading-bkg"></div><div id="loading" className="project-loading-wrap"><div className="loading-ring"><div></div><div></div><div></div><div></div></div></div></div>)} */}

      <div className="project-details">
        <div className="section">
          <div className="first-vid vid-wrap">
            <img className="desktop-overlay" src={require("../../assets/img/main/desktop-no-bkg.png")} alt="" />
            {checkIfMobile() === true ?
              <iframe onLoad={doneLoading} title="slenderiiz" loop autoPlay muted src="https://giphy.com/gifs/UTBGkbzH44xLgS5vgF/html5" allow="autoplay; encrypted-media" frameBorder="0" class="gif vid giphy-embed" allowFullScreen></iframe>
              :
              <video className="vid" loop autoPlay muted><source src="https://i.imgur.com/AfzQ4ZF.mp4" type="video/ogg" />Your browser does not support the video tag.</video>
            }
          </div>
        </div>


        <div className="section">
          <img className="fullpage" src={require("../../assets/img/work/slenderiiz/slenderiiz-fullpage-home.png")} alt="" />
        </div>

        <div className="mobile-slider-wrap">
          <div className="mobile-slider-container">
            <div className="chevron-wrap">
              <div className="chevron-container-left chevron-container left"><span className="chevron left"></span></div>
            </div>
            <Slider {...settings}>
              <div className="mobile-section section">
                <img className="mobile-framed" src={require("../../assets/img/work/slenderiiz/slenderiiz-giving-greens-mobile.png")} alt="" />
              </div>

              <div className="mobile-section section">
                <img className="mobile-framed" src={require("../../assets/img/work/slenderiiz/slenderiiz-slenderiix-mobile.png")} alt="" />
              </div>
            </Slider>

            <div className="chevron-wrap">
              <div className="chevron-container chevron-container-right right"><span className="chevron right"></span></div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="second-slen-vid vid-wrap">
            <img className="desktop-overlay" src={require("../../assets/img/main/desktop-no-bkg.png")} alt="" />
            {checkIfMobile() === true ?
              <iframe onLoad={doneLoading} title="slenderiiz-tooltip" loop autoPlay muted src="https://giphy.com/gifs/LmSufA9PJjyN6auD3h/html5" allow="autoplay; encrypted-media" frameBorder="0" class="gif vid giphy-embed" allowFullScreen></iframe>
              :
              <video className="vid" loop autoPlay muted><source src="https://i.imgur.com/oiTLPnJ.mp4" type="video/ogg" />Your browser does not support the video tag.</video>
            }
          </div>
        </div>

        <div className="fullpage-sect section">
          <img className="fullpage" src={require("../../assets/img/work/slenderiiz/slenderiiz-fullpage-purenourish.png")} alt="" />
        </div>

      </div>
      <div className="padding"></div>
    </div>
  )
};
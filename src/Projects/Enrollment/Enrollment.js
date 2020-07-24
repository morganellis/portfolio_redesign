import React, { useState } from "react";
import Slider from "react-slick";
import * as $ from "jquery";
import Loader from "../../Loader/Loader";
import { checkIfMobile } from "../../utils/helpers";
import "./enrollment.scss";

export default function Enrollment(props) {
  const [state, setState] = useState({ loading: checkIfMobile() === true ? true : false });

  function doneLoading() {
    $("#loadWrap").addClass("hide");
    setState({ loading: false });
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
    <div className="enroll-wrap project-wrap">
      <div className="banner">
        <p className="title">ARIIX</p>
        <p className="title">ENROLLMENT</p>
      </div>

      {/* {state.loading && (<Loader className={!state.loading ? "hide" : ""} />)} */}

      <div className="project-details">
        <div className="section">
          <div className="first-vid vid-wrap">
            <img className={checkIfMobile() === true ? "mobile-enroll-desktop-overlay enroll-desktop-overlay desktop-overlay" : "enroll-desktop-overlay desktop-overlay"} src={require("../../assets/img/main/desktop-no-bkg.png")} alt="" />
            {checkIfMobile() === true ?
              state.loading ?
                <Loader />
                :
              <iframe onLoad={doneLoading} title="enroll" loop autoPlay muted src="https://giphy.com/gifs/KxVgo2QHlVLdZ3RHQh/html5" allow="autoplay; encrypted-media" frameBorder="0" class="enroll-gif gif vid giphy-embed" allowFullScreen></iframe>
              :
              <video className="vid" loop autoPlay muted><source src="https://i.imgur.com/Qujm49k.mp4" type="video/ogg" />Your browser does not support the video tag.</video>
            }
          </div>
        </div>

        <div className="first-sect section">
          <img className="fullpage" src={require("../../assets/img/work/enrollment/enroll-home.png")} alt="" />
        </div>

        <div className="screenshot-sect section">
          <img className="fullpage" src={require("../../assets/img/work/enrollment/enroll-pg-2.png")} alt="" />
        </div>

        <div className="screenshot-sect section">
          <img className="customize-modal fullpage" src={require("../../assets/img/work/enrollment/enroll-customize-modal.png")} alt="" />
        </div>

        <div className="mobile-slider-wrap">
          <div className="mobile-slider-container">
            <div className="chevron-wrap">
              <div className="chevron-container-left chevron-container left"><span className="chevron left"></span></div>
            </div>
            <Slider {...settings}>
              <div className="mobile-section section">
                <img className="mobile-framed" src={require("../../assets/img/work/enrollment/enroll-mobile-home.png")} alt="" />
              </div>

              <div className="mobile-section section">
                <img className="mobile-framed" src={require("../../assets/img/work/enrollment/enroll-mobile-pg-2.png")} alt="" />
              </div>

              <div className="mobile-section section">
                <img className="mobile-framed" src={require("../../assets/img/work/enrollment/enroll-mobile-customize.png")} alt="" />
              </div>

              <div className="mobile-section section">
                <img className="mobile-framed" src={require("../../assets/img/work/enrollment/enroll-mobile-customize-cart.png")} alt="" />
              </div>

              <div className="mobile-section section">
                <img className="mobile-framed" src={require("../../assets/img/work/enrollment/enroll-mobile-business.png")} alt="" />
              </div>
            </Slider>

            <div className="chevron-wrap">
              <div className="chevron-container chevron-container-right right"><span className="chevron right"></span></div>
            </div>
          </div>
        </div>

        <div className="section">
          <img className="fullpage" src={require("../../assets/img/work/enrollment/enroll-your-sponsor.png")} alt="" />
        </div>

        <div className="screenshot-sect section">
          <img className="fullpage" src={require("../../assets/img/work/enrollment/enroll-your-info.png")} alt="" />
        </div>

        <div className="screenshot-sect section">
          <img className="fullpage" src={require("../../assets/img/work/enrollment/enroll-business.png")} alt="" />
        </div>

        <div className="screenshot-sect section">
          <img className="fullpage" src={require("../../assets/img/work/enrollment/enroll-ship-and-pay.png")} alt="" />
        </div>

        <div className="screenshot-sect section">
          <img className="fullpage" src={require("../../assets/img/work/enrollment/enroll-confirm-entries.png")} alt="" />
        </div>

        <div className="screenshot-sect section">
          <img className="fullpage" src={require("../../assets/img/work/enrollment/enroll-pg-4.png")} alt="" />
        </div>

      </div>
      <div className="padding"></div>
    </div>
  )
};
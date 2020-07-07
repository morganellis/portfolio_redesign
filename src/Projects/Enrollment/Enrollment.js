import React from "react";
import Slider from "react-slick";
import { checkIfMobile } from "../../utils/helpers";
import "./enrollment.scss";

export default function Enrollment(props) {

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
    <div className="enrollment-wrap project-wrap">
      <div className="banner">
        <p className="title">ARIIX ENROLLMENT</p>
      </div>
      <div className="project-details">
        <div className="section">
          {checkIfMobile() === true ?
            <img className="mobile-monitor-view" src={require("../../assets/img/work/slenderiiz/slenderiiz-monitor-view-mobile.png")} alt="Slenderiiz" />
            :
            <div className="vid-wrap">
              <img className="desktop-overlay" src={require("../../assets/img/main/desktop-no-bkg.png")} alt="" />
              <video className="vid" loop autoPlay muted><source src="https://i.imgur.com/cqP3jlL.mp4" type="video/ogg" />Your browser does not support the video tag.</video>
            </div>
          }
        </div>

        <div className="section">
          <img className="fullpage" src={require("../../assets/img/work/slenderiiz/slenderiiz-fullpage-purenourish.png")} alt="" />
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
          <img className="fullpage" src={require("../../assets/img/work/slenderiiz/slenderiiz-fullpage-home.png")} alt="" />
        </div>

      </div>
      <div className="padding"></div>
    </div>
  )
};
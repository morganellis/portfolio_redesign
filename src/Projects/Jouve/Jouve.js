import React from "react";
import Slider from "react-slick";
import { checkIfMobile } from "../../utils/helpers";
import "./jouve.scss";

export default function Jouve(props) {

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
    <div className="jouve-wrap project-wrap">
      <div className="banner">
        <p className="title">JOUVÉ</p>
      </div>
      <div className="project-details">
        <div className="vid-sect section">
          {checkIfMobile() !== true ?
            // <img src={require("../../assets/img/work/jouve/jouve-monitor-view.png")} alt="jouve" />
            <div className="vid-wrap">
              <img className="desktop-overlay" src={require("../../assets/img/main/desktop-no-bkg.png")} alt="" />
              <video className="vid" loop autoPlay muted><source src="https://i.imgur.com/f2sCHD2.mp4" type="video/ogg" />Your browser does not support the video tag.</video>
            </div>
            :
            <div className="vid-wrap">
              <img className="desktop-overlay" src={require("../../assets/img/main/desktop-no-bkg.png")} alt="" />
              <video className="vid" loop autoPlay muted><source src="https://i.imgur.com/mnj3mg3.mp4" type="video/ogg" />Your browser does not support the video tag.</video>
            </div>
          }
        </div>

        <div className="section">
          {checkIfMobile() === true ?
            <img className="fullpage" src={require("../../assets/img/work/jouve/jouve-fullpage-home.png")} alt="" />
            :
            <img className="fullpage" src={require("../../assets/img/work/jouve/jouve-fullpage-tight.png")} alt="" />
          }
        </div>

        <div className="mobile-slider-wrap">
          <div className="mobile-slider-container">
            <div className="chevron-wrap">
              <div className="chevron-container-left chevron-container left"><span className="chevron left"></span></div>
            </div>
            <Slider {...settings}>
              <div className="mobile-section section">
                <img className="mobile-framed" src={require("../../assets/img/work/jouve/jouve-mobile-science.png")} alt="" />
              </div>

              <div className="mobile-section section">
                <img className="mobile-framed" src={require("../../assets/img/work/jouve/jouve-mobile-celeb.png")} alt="" />
              </div>

              <div className="mobile-section section">
                <img className="mobile-framed" src={require("../../assets/img/work/jouve/jouve-mobile-all-prods.png")} alt="" />
              </div>
            </Slider>

            <div className="chevron-wrap">
              <div className="chevron-container chevron-container-right right"><span className="chevron right"></span></div>
            </div>
          </div>
        </div>

        {checkIfMobile() === false && (
          <div className="vid-sect section">
            <div className="vid-wrap">
              <img className="desktop-overlay" src={require("../../assets/img/main/desktop-no-bkg.png")} alt="" />
              <video className="celeb-vid vid" loop autoPlay muted><source src="https://i.imgur.com/HomuiX0.mp4" type="video/ogg" />Your browser does not support the video tag.</video>
            </div>
          </div>
        )}

        <div className="section">
          <img className="fullpage" src={require("../../assets/img/work/jouve/jouve-fullpage-app.png")} alt="" />
        </div>

      </div>
      <div className="padding"></div>
    </div>
  )
};
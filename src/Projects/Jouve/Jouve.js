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

          <div className="vid-wrap">
            <img className="desktop-overlay" src={require("../../assets/img/main/desktop-no-bkg.png")} alt="" />
            {checkIfMobile() === true ?
              <iframe title="slenderiiz" loop autoPlay muted src="https://giphy.com/gifs/dvrwjt7giMQ5ldT7kV/html5" allow="autoplay; encrypted-media" frameBorder="0" class="slen-gif gif vid giphy-embed" allowFullScreen></iframe>
              :
              <video className="vid" loop autoPlay muted><source src="https://i.imgur.com/olsU4Lz.mp4" type="video/ogg" />Your browser does not support the video tag.</video>
            }
          </div>
          {/* <div className="vid-wrap">
            <img className="desktop-overlay" src={require("../../assets/img/main/desktop-no-bkg.png")} alt="" />
            {checkIfMobile() === true ?
              <iframe title="jouve" src="https://giphy.com/embed/SwHldGqQLQ9RUMhB6d" frameBorder="0" class="gif vid giphy-embed" allowFullScreen></iframe>
              :
              <video className="jouve-vid vid" loop autoPlay muted><source src="https://i.imgur.com/mnj3mg3.mp4" type="video/ogg" />Your browser does not support the video tag.</video>
            }
          </div> */}
        </div>

        <div className="section">
          <img className="fullpage" src={require("../../assets/img/work/jouve/jouve-fullpage-tight.png")} alt="" />
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

        {/* <div className="celeb-sect section">
          <img className="fullpage" src={require("../../assets/img/work/jouve/jouve-fullpage-celeb.png")} alt="" />
        </div> */}

        <div className="vid-sect section">
          <div className="vid-wrap">
            <img className="desktop-overlay" src={require("../../assets/img/main/desktop-no-bkg.png")} alt="" />
            {checkIfMobile() === true ?
              <iframe title="jouve-celeb" src="https://giphy.com/embed/ci0AWSFfmbkgtMFuAv" frameBorder="0" class="celeb-gif gif vid giphy-embed" allowFullScreen></iframe>
              :
              <video className="cel-vid vid" loop autoPlay muted><source src="https://i.imgur.com/HomuiX0.mp4" type="video/ogg" />Your browser does not support the video tag.</video>
            }
          </div>
        </div>

        <div className="section">
          <img className="fullpage" src={require("../../assets/img/work/jouve/jouve-fullpage-app.png")} alt="" />
        </div>

      </div>
      <div className="padding"></div>
    </div>
  )
};
import React, { useState } from "react";
import Slider from "react-slick";
import * as $ from "jquery";
import Loader from "../../Loader/Loader";
import { checkIfMobile } from "../../utils/helpers";
import "./diamonds.scss";

export default function Diamonds(props) {
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
    <div className="diamonds-wrap project-wrap">
      <div className="banner">
        <p className="title">ARIIX DIAMONDS</p>
      </div>

      {state.loading && (<Loader />)}

      <div className="project-details">
        <div className="vid-sect section">
          <div className="vid-wrap">
            <img className="diamonds-desktop-overlay desktop-overlay" src={require("../../assets/img/main/desktop-no-bkg.png")} alt="" />
            {checkIfMobile() === true ?
              <iframe onLoad={doneLoading} title="diamonds" loop autoPlay muted src="https://giphy.com/gifs/fq6yImeRAPR3FGMcek/html5" allow="autoplay; encrypted-media" frameBorder="0" class="gif vid giphy-embed" allowFullScreen></iframe>
              :
              <video className="vid" loop autoPlay muted><source src="https://i.imgur.com/7lQ4vhg.mp4" type="video/ogg" />Your browser does not support the video tag.</video>
            }
          </div>
        </div>

        <div className="section">
          <img className="fullpage" src={require("../../assets/img/work/diamonds/diamonds-home.png")} alt="" />
        </div>

        <div className="mobile-slider-wrap">
          <div className="mobile-slider-container">
            <div className="chevron-wrap">
              <div className="chevron-container-left chevron-container left"><span className="chevron left"></span></div>
            </div>
            <Slider {...settings}>
              <div className="mobile-section section">
                <img className="mobile-framed" src={require("../../assets/img/work/diamonds/diamonds-mobile-home.png")} alt="" />
              </div>

              <div className="mobile-section section">
                <img className="mobile-framed" src={require("../../assets/img/work/diamonds/diamonds-mobile-represent.png")} alt="" />
              </div>

              <div className="mobile-section section">
                <img className="mobile-framed" src={require("../../assets/img/work/diamonds/diamonds-mobile-diamond-difference.png")} alt="" />
              </div>
            </Slider>

            <div className="chevron-wrap">
              <div className="chevron-container chevron-container-right right"><span className="chevron right"></span></div>
            </div>
          </div>
        </div>

        <div className="section">
          <img className="fullpage" src={require("../../assets/img/work/diamonds/diamonds-fine-jewelry.png")} alt="" />
        </div>

        <div className="section">
          <img className="fullpage" src={require("../../assets/img/work/diamonds/diamonds-fr-009.png")} alt="" />
        </div>

        <div className="section">
          <img className="fullpage" src={require("../../assets/img/work/diamonds/diamonds-review-modal.png")} alt="" />
        </div>

        <div className="vid-sect section">
          <div className="vid-wrap">
            <img className="diamonds-desktop-overlay desktop-overlay" src={require("../../assets/img/main/desktop-no-bkg.png")} alt="" />
            {checkIfMobile() === true ?
              <iframe onLoad={doneLoading} title="diamonds-product" loop autoPlay muted src="https://giphy.com/gifs/UTwPCq3dvhORkEoqDF/html5" allow="autoplay; encrypted-media" frameBorder="0" class="gif vid giphy-embed" allowFullScreen></iframe>
              :
              <video className="vid" loop autoPlay muted><source src="https://i.imgur.com/Qgnw9H1.mp4" type="video/ogg" />Your browser does not support the video tag.</video>
            }
          </div>
        </div>

        <div className="section">
          <img className="fullpage" src={require("../../assets/img/work/diamonds/diamonds-review-cart.png")} alt="" />
        </div>

        <div className="section">
          <img className="fullpage" src={require("../../assets/img/work/diamonds/diamonds-checkout.png")} alt="" />
        </div>

        <div className="mobile-slider-wrap">
          <div className="mobile-slider-container">
            <div className="chevron-wrap">
              <div className="chevron-container-left chevron-container left"><span className="chevron left"></span></div>
            </div>
            <Slider {...settings}>
              <div className="mobile-section section">
                <img className="mobile-framed" src={require("../../assets/img/work/diamonds/diamonds-mobile-custom-quotes.png")} alt="" />
              </div>

              <div className="mobile-section section">
                <img className="mobile-framed" src={require("../../assets/img/work/diamonds/diamonds-mobile-single-product.png")} alt="" />
              </div>

              <div className="mobile-section section">
                <img className="mobile-framed" src={require("../../assets/img/work/diamonds/diamonds-mobile-education.png")} alt="" />
              </div>

              <div className="mobile-section section">
                <img className="mobile-framed" src={require("../../assets/img/work/diamonds/diamonds-mobile-cut.png")} alt="" />
              </div>
            </Slider>

            <div className="chevron-wrap">
              <div className="chevron-container chevron-container-right right"><span className="chevron right"></span></div>
            </div>
          </div>
        </div>

        <div className="section">
          <img className="fullpage" src={require("../../assets/img/work/diamonds/diamonds-account-orders.png")} alt="" />
        </div>

        <div className="section">
          <img className="fullpage" src={require("../../assets/img/work/diamonds/diamonds-custom-quotes.png")} alt="" />
        </div>

        <div className="section">
          <img className="fullpage" src={require("../../assets/img/work/diamonds/diamonds-saved-items.png")} alt="" />
        </div>

        <div className="vid-sect section">
          <div className="vid-wrap">
            <img className="diamonds-desktop-overlay desktop-overlay" src={require("../../assets/img/main/desktop-no-bkg.png")} alt="" />
            {checkIfMobile() === true ?
              <iframe onLoad={doneLoading} title="diamonds-request" loop autoPlay muted src="https://giphy.com/gifs/iDOPoUPn2z4ur9XeUM/html5" allow="autoplay; encrypted-media" frameBorder="0" class="gif vid giphy-embed" allowFullScreen></iframe>
              :
              <video className="vid" loop autoPlay muted><source src="https://i.imgur.com/7GpHogP.mp4" type="video/ogg" />Your browser does not support the video tag.</video>
            }
          </div>
        </div>

        <div className="section">
          <img className="fullpage" src={require("../../assets/img/work/diamonds/diamonds-education.png")} alt="" />
        </div>

      </div>
      <div className="padding"></div>
    </div>
  )
};
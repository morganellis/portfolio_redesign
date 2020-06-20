import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import "./landing-manual.scss";

export default function LandingManual() {
  const [state, setState] = useState({ loading: true, img1Loaded: false, img2Loaded: false });

  return (
    <div className="landing-main">
      {(state.loading && !state.img1Loaded && !state.img2Loaded) && (<div id="loading" className="loading-wrap"></div>)}

      <div className={state.loading ? "hide" : "landing-wrap"} >
        <Fade duration={600} left ><img className="corner-left bkg-graphic slide-left" src={require("../assets/img/graphics/corner-left.png")} alt="" /></Fade>
        <Fade duration={600} right><img onLoad={() => setState(prevState => { return { ...prevState, loading: false } })} className="corner-right bkg-graphic fade-right" src={require("../assets/img/graphics/corner-right.png")} alt="" /></Fade>
        <Fade duration={600} top delay={25}><img className="gray-triangle-large bkg-graphic fade-top" src={require("../assets/img/graphics/gray-triangle-large.png")} alt="" /></Fade>
        <Fade duration={600} right delay={25}><img className="gray-triangle-right bkg-graphic fade-top" src={require("../assets/img/graphics/gray-triangle-right.png")} alt="" /></Fade>
        <Fade duration={600} left delay={50}><img className="gray-square-outlined bkg-graphic fade-left" src={require("../assets/img/graphics/gray-square-outlined.png")} alt="" /></Fade>
        <Fade duration={600} right delay={100}><img className="gray-square-outlined-xl bkg-graphic fade-right" src={require("../assets/img/graphics/gray-square-outlined-xl.png")} alt="" /></Fade>
        <Fade duration={600} left onLoad={() => setState(prevState => { return { ...prevState, img1Loaded: true } })}><img className="gray-dots-medium bkg-graphic fade-left" src={require("../assets/img/graphics/gray-dots-medium.png")} alt="" /></Fade>
        <Fade duration={600} right><img className="gray-dots-large bkg-graphic fade-right" src={require("../assets/img/graphics/gray-dots-large.png")} alt="" /></Fade>
        <Fade duration={600} left><img className="yellow-circle-striped bkg-graphic fade-left" src={require("../assets/img/graphics/yellow-circle-striped.png")} alt="" onLoad={() => setState(prevState => { return { ...prevState, img2Loaded: true } })} /></Fade>
        <Fade duration={600} right><img className="pink-squares bkg-graphic fade-right" src={require("../assets/img/graphics/pink-squares.png")} alt="" /></Fade>
        <Fade duration={600} bottom delay={150}><img className="blue-circle-with-ring bkg-graphic fade-bottom" src={require("../assets/img/graphics/blue-circle-with-ring.png")} alt="" /></Fade>
        <Fade duration={600} left delay={300}><img className="blue-circle bkg-graphic fade-left" src={require("../assets/img/graphics/blue-circle.png")} alt="" /></Fade>
        <Fade duration={600} right delay={300}><img className="pink-circle-2 bkg-graphic Slide-right" src={require("../assets/img/graphics/pink-circle.png")} alt="" /></Fade>
        <Fade duration={600} right><img className="pink-circle-striped bkg-graphic fade-right" src={require("../assets/img/graphics/pink-circle-striped.png")} alt="" /></Fade>
        <Fade duration={600} right delay={50}><img className="blue-circle-striped bkg-graphic fade-right" src={require("../assets/img/graphics/blue-circle-striped.png")} alt="" /></Fade>
        <Fade duration={600} bottom delay={150}><img className="yellow-circle bkg-graphic fade-bottom" src={require("../assets/img/graphics/yellow-circle.png")} alt="" /></Fade>
        <Fade duration={600} left delay={150}> <img className="pink-circle bkg-graphic fade-left" src={require("../assets/img/graphics/pink-circle.png")} alt="" /></Fade>
        <Fade duration={600} top delay={150}><img className="yellow-circle-small bkg-graphic fade-top" src={require("../assets/img/graphics/yellow-circle.png")} alt="" /></Fade>

        <Fade duration={800} delay={200}>
          <div className="landing-container content">
            <p className="title">MORGAN</p>
            <p className="title">ELLIS</p>
            <div className="divider"></div>
            <p className="subtitle">FULL STACK DEVELOPER</p>
          </div>
        </Fade>
      </div>
    </div >
  )
}

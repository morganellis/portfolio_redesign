import React from "react";
// import Fade from "react-reveal/Fade";
import "./work.scss";

export default function Work() {
  return (
    <div className="work-wrap">

      <div className="slenderiiz row">
        <div className="txt left col">
          <p className="hdr">Slenderiiz</p>
          <p className="para">Lorem ipsum</p>
        </div>
        <div className="img right col">
          <img className="graphic-bkg" src={require("../assets/img/graphics/yellow-square-outlined.png")} alt="" />
          <img className="project-img" src={require("../assets/img/main/slenderiiz-shadow.png")} alt="Slenderiiz" />
        </div>
      </div>

      <div className="diamonds row">
        <div className="img left col">
          <img className="graphic-bkg" src={require("../assets/img/graphics/blue-circle-large.png")} alt="" />
          <img className="project-img" src={require("../assets/img/main/diamonds-shadow.png")} alt="ARIIX Diamonds" />
        </div>
        <div className="txt right col">
          <p className="hdr">ARIIX Diamonds</p>
          <p className="para">Lorem ipsum</p>
        </div>
      </div>

      <div className="enrollment row">
        <div className="txt left col">
          <p className="hdr">ARIIX Enrollment</p>
          <p className="para">Lorem ipsum</p>
        </div>
        <div className="img right col">
          <img className="graphic-bkg" src={require("../assets/img/graphics/gray-dots-xl.png")} alt="" />
          <img className="project-img" src={require("../assets/img/main/enrollment-shadow.png")} alt="Slenderiiz" />
        </div>
      </div>

      <div className="transformations row">
        <div className="img left col">
          <img className="graphic-bkg" src={require("../assets/img/graphics/pink-square.png")} alt="" />
          <img className="project-img" src={require("../assets/img/main/transformations-shadow.png")} alt="ARIIX Transformations" />
        </div>
        <div className="txt right col">
          <p className="hdr">ARIIX Transformations</p>
          <p className="para">Lorem ipsum</p>
        </div>
      </div>

    </div>
  )
};
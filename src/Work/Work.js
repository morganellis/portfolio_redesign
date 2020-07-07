import React from "react";
import { Link } from "react-router-dom";
// import Fade from "react-reveal/Fade";
import "./work.scss";

export default function Work() {
  return (
    <div className="work-wrap">

      <div className="slenderiiz row">
        <div className="txt left col">
          <div className="txt-container">
            <p className="hdr">Slenderiiz™</p>
            <div className="divider"></div>
            <p className="para">Slenderiiz™ brand information site. Supports multiple languages and provides product information about the Slenderiiz™ weight management supplements.</p>
            <p className="tech para">Angular / jQuery / SASS</p>
            </div>

        </div>
        <div className="img right col">
          {/* <img className="graphic-bkg" src={require("../assets/img/graphics/yellow-square-outlined.png")} alt="" /> */}
          <Link to="/slenderiiz"><img className="project-img" src={require("../assets/img/main/slenderiiz.png")} alt="Slenderiiz" /></Link>
        </div>
      </div>

      <div className="diamonds row">
        <div className="img left col">
          {/* <img className="graphic-bkg" src={require("../assets/img/graphics/blue-circle-large.png")} alt="" /> */}
          <Link to="/diamonds"><img className="project-img" src={require("../assets/img/main/diamonds.png")} alt="ARIIX Diamonds" /></Link>
        </div>
        <div className="txt right col">
          <div className="txt-container">
            <p className="hdr">ARIIX Diamonds</p>
            <div className="divider"></div>
            <p className="para">Jewelry shopping site for the ARIIX perks diamonds program. Purchase products, save favorites, request custom designs, and check your order history/status. Supports multiple currencies and languages.</p>
            <p className="tech para">React / Redux / MongoDB / Express / Node / jQuery / SASS</p>
          </div>
        </div>
      </div>

      <div className="enrollment row">
        <div className="txt left col">
          <div className="txt-container">
            <p className="hdr">ARIIX Enrollment</p>
            <div className="divider"></div>
            <p className="para mobile">Enrollment and shopping site for new ARIIX representatives. Built with complex conditional data and views to support the country and market-specific variations. Supports multiple currencies and languages.</p>
            <p className="para desktop">Enrollment and shopping site for new ARIIX representatives. Built with complex conditional data and views to support the variations between countries and market-specific requirements. Supports multiple currencies and languages.</p>
            <p className="tech para">React / Redux / Axios / SASS</p>
          </div>
        </div>
        <div className="img right col">
          {/* <img className="graphic-bkg" src={require("../assets/img/graphics/gray-dots-xl.png")} alt="" /> */}
          <Link to="/enrollment"><img className="project-img" src={require("../assets/img/main/enrollment.png")} alt="ARIIX Enrollment" /></Link>
        </div>
      </div>

      <div className="jouve row">
        <div className="img left col">
          {/* <img className="graphic-bkg" src={require("../assets/img/graphics/pink-square.png")} alt="" /> */}
          <Link to="/jouve"><img className="project-img" src={require("../assets/img/main/jouve.png")} alt="Jouvé" /></Link>
        </div>
        <div className="txt right col">
          <div className="txt-container">
            <p className="hdr">Jouvé™</p>
            <div className="divider"></div>
            <p className="para">Jouvé™ brand information site. Supports multiple languages and provides information about the Jouvé™ beauty product line.</p>
            <p className="tech para">Angular / jQuery / SASS</p>
          </div>
        </div>
      </div>

      <div className="travel row">
        <div className="txt left col">
          <div className="txt-container">
            <p className="hdr">ARIIX Travel</p>
            <p className="para">Travel rewards program site for preferred ARIIX representatives. Supports multiple languages.</p>
            <p className="tech para">Angular / jQuery / SASS</p>
          </div>
        </div>
        <div className="img right col">
          {/* <img className="graphic-bkg" src={require("../assets/img/graphics/yellow-circle-striped.png")} alt="" /> */}
          <Link to="/travel"><img className="project-img" src={require("../assets/img/main/travel.png")} alt="ARIIX Travel" /></Link>
        </div>
      </div>

    </div>
  )
};
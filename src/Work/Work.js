import React from "react";
// import Fade from "react-reveal/Fade";
import "./work.scss";

export default function Work() {
  return (
    <div className="work-wrap">

      <div className="slenderiiz row">
        <div className="txt left col">
          <p className="hdr">Slenderiiz™</p>
          <div className="divider"></div>
          <p className="para">Slenderiiz™ brand information site. Supports multiple languages and provides product information about the Slenderiiz™ weight management supplements.</p>
          <p className="tech para">Angular / jQuery / SASS</p>
        </div>
        <div className="img right col">
          <img className="graphic-bkg" src={require("../assets/img/graphics/yellow-square-outlined.png")} alt="" />
          <img className="project-img" src={require("../assets/img/main/slenderiiz.png")} alt="Slenderiiz" />
        </div>
      </div>

      <div className="diamonds row">
        <div className="img left col">
          <img className="graphic-bkg" src={require("../assets/img/graphics/blue-circle-large.png")} alt="" />
          <img className="project-img" src={require("../assets/img/main/diamonds.png")} alt="ARIIX Diamonds" />
        </div>
        <div className="txt right col">
          <p className="hdr">ARIIX Diamonds</p>
          <div className="divider"></div>
          <p className="para">Jewelry shopping site for the ARIIX perks diamonds program. Purchase products, save favorites, request custom designs, and check your order history/status. Supports multiple currencies and languages.</p>
          <p className="tech para">React / Redux / MongoDB / Express / Node / jQuery / SASS</p>
        </div>
      </div>

      <div className="enrollment row">
        <div className="txt left col">
          <p className="hdr">ARIIX Enrollment</p>
          <div className="divider"></div>
          <p className="para">Enrollment site for ARIIX representatives and customers. Supports multiple languages and built with complex conditional data/views to support the variations between countries and other market-specific requirements.</p>
          <p className="tech para">React / Redux / Axios / SASS</p>
        </div>
        <div className="img right col">
          <img className="graphic-bkg" src={require("../assets/img/graphics/gray-dots-xl.png")} alt="" />
          <img className="project-img" src={require("../assets/img/main/enrollment.png")} alt="ARIIX Enrollment" />
        </div>
      </div>

      <div className="jouve row">
        <div className="img left col">
          <img className="graphic-bkg" src={require("../assets/img/graphics/pink-square.png")} alt="" />
          {/* <img className="graphic-bkg" src={require("../assets/img/graphics/pink-square-outlined.png")} alt="" /> */}
          <img className="project-img" src={require("../assets/img/main/jouve.png")} alt="Jouvé" />
        </div>
        <div className="txt right col">
          <p className="hdr">Jouvé™</p>
          <div className="divider"></div>
          <p className="para">Jouvé™ brand information site. Supports multiple languages and provides information about the Jouvé™ beauty product line.</p>
          <p className="tech para">Angular / jQuery / SASS</p>
        </div>
      </div>

      {/* <div className="transformations row">
        <div className="txt left col">
          <p className="hdr">ARIIX Transformations</p>
          <p className="para">Lorem ipsum</p>
        </div>
        <div className="img right col">
          <img className="graphic-bkg" src={require("../assets/img/graphics/yellow-square.png")} alt="" />
          <img className="project-img" src={require("../assets/img/main/transformations.png")} alt="ARIIX Transformations" />
        </div>
      </div> */}

    </div>
  )
};
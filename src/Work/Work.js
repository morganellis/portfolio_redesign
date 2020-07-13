import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import "./work.scss";

export default function Work() {
  let iOS = navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
  //<Fade duration={600} left ><img className="corner-left bkg-graphic slide-left" src={require("../assets/img/graphics/corner-left.png")} alt="" /></Fade>
  return (
    <div className="work-wrap">

      {/* SLENDERIIZ */}
      <div className={iOS ? "ios-bkg slenderiiz row" : "slenderiiz row"}>
        <Fade duration={600} left>
          <div className="txt left col">
            <div className="txt-container">
              <p className="hdr">Slenderiiz™</p>
              <div className="divider"></div>
              <p className="para">Slenderiiz™ brand information site. Supports multiple languages and provides product information about the Slenderiiz™ weight management supplements.</p>
              <p className="tech para">Angular / jQuery / SASS</p>
            </div>
          </div>
        </Fade>

        <div className="mobile">
          <Fade duration={600} right>
            <div className="img right col">
              <Link to="/slenderiiz"><img className="project-img" src={require("../assets/img/main/slenderiiz.png")} alt="Slenderiiz" /></Link>
            </div>
          </Fade>
        </div>

        <Fade duration={600} left>
          <div className="img right col desktop">
            <Link to="/slenderiiz"><img className="project-img desktop" src={require("../assets/img/main/slenderiiz.png")} alt="Slenderiiz" /></Link>
          </div>
        </Fade>
      </div>

      {/* DIAMONDS */}
      <div className={iOS ? "ios-bkg diamonds row" : "diamonds row"}>
        <Fade duration={600} right>
          <div className="img left col">
            <Link to="/diamonds"><img className="project-img" src={require("../assets/img/main/diamonds.png")} alt="ARIIX Diamonds" /></Link>
          </div>
        </Fade>

        <div className="mobile">
          <Fade duration={600} left>
            <div className="txt right col">
              <div className="txt-container">
                <p className="hdr">ARIIX Diamonds</p>
                <div className="divider"></div>
                <p className="para">Jewelry shopping site for the ARIIX perks diamonds program. Purchase products, save favorites, request custom designs, and check your order history/status. Supports multiple currencies and languages.</p>
                <p className="tech para">React / Redux / MongoDB / Express / Node / jQuery / SASS</p>
              </div>
            </div>
          </Fade>
        </div>

        <Fade duration={600} right>
          <div className="txt right col desktop">
            <div className="txt-container">
              <p className="hdr">ARIIX Diamonds</p>
              <div className="divider"></div>
              <p className="para">Jewelry shopping site for the ARIIX perks diamonds program. Purchase products, save favorites, request custom designs, and check your order history/status. Supports multiple currencies and languages.</p>
              <p className="tech para">React / Redux / MongoDB / Express / Node / jQuery / SASS</p>
            </div>
          </div>
        </Fade>
      </div>

      {/* ENROLLMENT */}
      <div className={iOS ? "ios-bkg enrollment row" : "enrollment row"}>
        <Fade duration={600} left>
          <div className="txt left col">
            <div className="txt-container">
              <p className="hdr">ARIIX Enrollment</p>
              <div className="divider"></div>
              <p className="para mobile">Enrollment and shopping site for new ARIIX representatives. Built with complex conditional data and views to support the country and market-specific variations. Supports multiple currencies and languages.</p>
              <p className="para desktop">Enrollment and shopping site for new ARIIX representatives. Built with complex conditional data and views to support the variations between countries and market-specific requirements. Supports multiple currencies and languages.</p>
              <p className="tech para">React / Redux / Axios / SASS</p>
            </div>
          </div>
        </Fade>

        <div className="mobile">
          <Fade duration={600} right>
            <div className="img right col">
              <Link to="/enrollment"><img className="project-img" src={require("../assets/img/main/enrollment.png")} alt="ARIIX Enrollment" /></Link>
            </div>
          </Fade>
        </div>

        <Fade duration={600} left>
          <div className="img right col desktop">
            <Link to="/enrollment"><img className="project-img" src={require("../assets/img/main/enrollment.png")} alt="ARIIX Enrollment" /></Link>
          </div>
        </Fade>
      </div>

      {/* JOUVE */}
      <div className={iOS ? "ios-bkg jouve row" : "jouve row"}>
        <Fade duration={600} right>
          <div className="img left col">
            <Link to="/jouve"><img className="project-img" src={require("../assets/img/main/jouve.png")} alt="Jouvé" /></Link>
          </div>
        </Fade>

        <div className="mobile">
          <Fade duration={600} left>
            <div className="txt right col">
              <div className="txt-container">
                <p className="hdr">Jouvé™</p>
                <div className="divider"></div>
                <p className="para">Jouvé™ brand information site. Supports multiple languages and provides information about the Jouvé™ beauty product line.</p>
                <p className="tech para">Angular / jQuery / SASS</p>
              </div>
            </div>
          </Fade>
        </div>

        <Fade duration={600} right>
          <div className="txt right col desktop">
            <div className="txt-container">
              <p className="hdr">Jouvé™</p>
              <div className="divider"></div>
              <p className="para">Jouvé™ brand information site. Supports multiple languages and provides information about the Jouvé™ beauty product line.</p>
              <p className="tech para">Angular / jQuery / SASS</p>
            </div>
          </div>
        </Fade>
      </div>

      {/* TRAVEL */}
      <div className={iOS ? "ios-bkg travel row" : "travel row"}>
        <Fade duration={600} left>
          <div className="txt left col">
            <div className="txt-container">
              <p className="hdr">ARIIX Travel</p>
              <p className="para">Travel rewards program site for preferred ARIIX representatives. Supports multiple languages.</p>
              <p className="tech para">Angular / jQuery / SASS</p>
            </div>
          </div>
        </Fade>

        <div className="mobile">
          <Fade duration={600} right>
            <div className="img right col">
              <Link to="/travel"><img className="project-img" src={require("../assets/img/main/travel.png")} alt="ARIIX Travel" /></Link>
            </div>
          </Fade>
        </div>

        <Fade duration={600} left>
          <div className="img right col desktop">
            <Link to="/travel"><img className="project-img" src={require("../assets/img/main/travel.png")} alt="ARIIX Travel" /></Link>
          </div>
        </Fade>
      </div>

    </div>
  )
};
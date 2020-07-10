import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer-wrap">
      <div className="col-1 col">
        <a href="https://www.linkedin.com/in/morgan-shiloh-ellis/" target="_blank" rel="noopener noreferrer"><img className="social-icon" src={require("../assets/img/main/linkedin-gray.png")} alt="LinkedIn" /></a>
        <a href="https://github.com/morganellis" target="_blank" rel="noopener noreferrer"><img className="social-icon" src={require("../assets/img/main/github-gray.png")} alt="GitHub" /></a>
        <a href="mailto: morganellis.dev@gmail.com"><img className="social-icon" src={require("../assets/img/main/email-gray.png")} alt="Email" /></a>
      </div>

      <div className="col">
        <p className="para">© 2020 Morgan Ellis</p>
        </div>

    </div>
  )
}

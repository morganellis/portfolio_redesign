import React from "react";
import "./about.scss"

export default function About() {
  return (
    <div className="about-wrap">
      <img className="profile-img" src={require("../assets/img/main/self-image.png")} alt="Morgan Ellis" />
    </div>
  )
}
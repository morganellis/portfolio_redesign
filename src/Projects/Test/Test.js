import React from "react";
import "./test.scss";

export default function Test() {
  return (
    <div className="test-wrap">
      <div className="vid-wrap">
        <img className="desktop-overlay" src={require("../../assets/img/main/desktop-no-bkg.png")} alt="" />
        <iframe className="test-gif" src="https://giphy.com/embed/d7AzrBk9cZPqAoVgyz" title="slenderiiz" frameBorder="0" allowFullScreen></iframe>
        {/* <img className="gify-embed" src="https://media.giphy.com/media/jRSkPu47CihbhKG9be/giphy.gif"></img> */}
      </div>
    </div>
  )
}
import React from "react";
import "./loader.scss";

export default function Loader() {
  return (

    <div id="loadWrap">
      <div className="loading-bkg"></div>
      <div className="loader-wrap"> <span class="loader"></span></div>
    </div>
  )
}
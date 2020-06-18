import React from "react";
import * as $ from "jquery";
import fullpage from "../node_modules/fullpage.js";
import Landing from "./Landing/Landing";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Resume from "./Resume/Resume";
import Contact from "./Contact/Contact";

function App() {

  function initFullpage() {
    fullpage("#fullpage", {
      navigationPosition: "right",
      normalScrollElements: "#normal-scroll",
      sectionsColor: ["#FFFFF", "#FA4D85", "#49CFDA", "#F8D241", "#CBCCCE"],
      navigation: true,
      licenseKey: "OPEN-SOURCE-GPLV3-LICENSE"
    });
  } 

  $(document).ready(function () {
    initFullpage();
  });

  return (
    <div className="app-wrap" id="fullpage">
      <div className="section"><Landing /></div>
      <div className="section"><About /></div>
      <div className="section"><Projects /></div>
      <div className="section"><Resume /></div>
      <div className="section"><Contact /></div>
    </div>
  );
}

export default App;
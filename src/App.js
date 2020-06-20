import React from "react";
// import Landing from "./Landing/Landing";
import LandingManual from "./LandingManual/LandingManual";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Resume from "./Resume/Resume";
import Contact from "./Contact/Contact";

function App() {

  return (
    <div className="app-wrap">
      {/* <div className="section"><Landing /></div> */}
      <div className="section"><LandingManual /></div>
      <div className="section"><About /></div>
      <div className="section"><Projects /></div>
      <div className="section"><Resume /></div>
      <div className="section"><Contact /></div>
    </div>
  );
}

export default App;
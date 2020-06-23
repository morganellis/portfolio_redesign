import React from "react";
// import Landing from "./Landing/Landing";
import LandingManual from "./LandingManual/LandingManual";
import About from "./About/About";
import Work from "./Work/Work";
import Resume from "./Resume/Resume";
import Contact from "./Contact/Contact";

function App() {

  return (
    <div className="app-wrap">
      {/* <Landing /> */}
      <LandingManual />
      <Work />
      <About />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
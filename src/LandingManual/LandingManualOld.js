import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import "./landing-manual.scss";

export default function LandingManualOld() {
  const [state, setState] = useState({ initialized: false });
  const { initialized } = state;

  useEffect(() => {
    if (!initialized) {
      init();
    };
  });

  function init() {
    ScrollReveal().reveal(".fade-top", fadeTop);
    ScrollReveal().reveal(".fade-left", fadeLeft);
    ScrollReveal().reveal(".fade-right", fadeRight);
    ScrollReveal().reveal(".fade-bottom", fadeBottom);
    ScrollReveal().reveal(".content", fadeContent);
    setState(prevState => { return { ...prevState, initialized: true } });
  };

  const fadeContent = {
    duration: 1200,
    // interval: 500,
    interval: 10,
    delay: 300,
    reset: false
  };

  const fadeTop = {
    duration: 1200,
    origin: "top",
    distance: "100px",
    interval: 50,
    delay: 300,
    reset: false
  };

  const fadeLeft = {
    duration: 1200,
    origin: "left",
    distance: "100px",
    interval: 50,
    reset: false
  };

  const fadeRight = {
    duration: 1200,
    origin: "right",
    distance: "100px",
    interval: 50,
    reset: false
  };

  const fadeBottom = {
    duration: 1200,
    origin: "bottom",
    distance: "100px",
    interval: 50,
    reset: false
  };

  return (
    <div className="landing-wrap">
      {/* <img className="main content" src={require("../assets/img/main/landing-bkg.jpg")} alt="" /> */}
      <img className="corner-left bkg-graphic fade-left" src={require("../assets/img/graphics/corner-left.png")} alt="" />
      <img className="corner-right bkg-graphic fade-right" src={require("../assets/img/graphics/corner-right.png")} alt="" />
      <img className="gray-triangle-large bkg-graphic fade-top" src={require("../assets/img/graphics/gray-triangle-large.png")} alt="" />
      <img className="gray-triangle-right bkg-graphic fade-top" src={require("../assets/img/graphics/gray-triangle-large.png")} alt="" />
      <img className="gray-square-outlined bkg-graphic fade-left" src={require("../assets/img/graphics/gray-square-outlined.png")} alt="" />
      <img className="gray-square-outlined-xl bkg-graphic fade-right" src={require("../assets/img/graphics/gray-square-outlined-xl.png")} alt="" />
      <img className="gray-dots-medium bkg-graphic fade-left" src={require("../assets/img/graphics/gray-dots-medium.png")} alt="" />
      <img className="gray-dots-large bkg-graphic fade-right" src={require("../assets/img/graphics/gray-dots-large.png")} alt="" />
      <img className="pink-squares bkg-graphic fade-right" src={require("../assets/img/graphics/pink-squares.png")} alt="" />
      <img className="blue-circle-with-ring bkg-graphic fade-bottom" src={require("../assets/img/graphics/blue-circle-with-ring.png")} alt="" />
      <img className="blue-circle bkg-graphic fade-left" src={require("../assets/img/graphics/blue-circle.png")} alt="" />
      <img className="pink-circle-2 bkg-graphic fade-right" src={require("../assets/img/graphics/pink-circle.png")} alt="" />
      <img className="pink-circle-striped bkg-graphic fade-right" src={require("../assets/img/graphics/pink-circle-striped.png")} alt="" />
      <img className="yellow-circle-striped bkg-graphic fade-left" src={require("../assets/img/graphics/yellow-circle-striped.png")} alt="" />
      <img className="blue-circle-striped bkg-graphic fade-right" src={require("../assets/img/graphics/blue-circle-striped.png")} alt="" />
      <img className="yellow-circle bkg-graphic fade-bottom" src={require("../assets/img/graphics/yellow-circle.png")} alt="" />
      <img className="pink-circle bkg-graphic fade-left" src={require("../assets/img/graphics/pink-circle.png")} alt="" />
      <img className="yellow-circle-small bkg-graphic fade-top" src={require("../assets/img/graphics/yellow-circle.png")} alt="" />

      <div className="landing-container content">
        <p className="title">MORGAN</p>
        <p className="title">ELLIS</p>
        <div className="divider"></div>
        <p className="subtitle">FULL STACK DEVELOPER</p>
      </div>
    </div>
  )
}





// import React, { useEffect, useState } from "react";
// // import ScrollReveal from "scrollreveal";
// import Fade from "react-reveal/Fade";
// // import * as $ from "jquery";
// import "./landing.scss";

// export default function Landing() {
//   const [state, setState] = useState({ initialized: false });
//   const { initialized } = state;

//   useEffect(() => {
//     if (!initialized) {
//       init();
//     };
//   });

//   function init() {
//     // ScrollReveal().reveal(".landing-wrap", fadePage);
//     // ScrollReveal().reveal(".content", fadeContent);
//     setState(prevState => { return { ...prevState, initialized: true } });
//   };

//   // const fadePage = {
//   //   duration: 500,
//   //   reset: false
//   // };

//   // const fadeContent = {
//   //   duration: 1200,
//   //   interval: 150,
//   //   // delay: 200,
//   //   reset: false
//   // };

//   return (
//     <div className="landing-wrap">
//       <Fade duration={1500}><div className="landing-bkg content"></div></Fade>
//       {/* <Fade duration={700} delay={100} cascade><p className="title content">MORGAN</p></Fade>
//       <Fade duration={700} delay={250} cascade><p className="title content">ELLIS</p></Fade>
//       <Fade duration={700} delay={300} cascade><div className="subtitle-wrap content">
//         <div className="divider"></div>
//         <p className="subtitle">FULL STACK DEVELOPER</p>
//       </div>
//       </Fade> */}
//       <Fade duration={1000} delay={100} cascade>
//         <div className="landing-container">
//           <p className="title content">MORGAN</p>
//           <p className="title content">ELLIS</p>
//           <div className="subtitle-wrap content">
//             <div className="divider"></div>
//             <p className="subtitle">FULL STACK DEVELOPER</p>
//           </div>
//         </div>
//       </Fade>
//     </div>
//   )
// };
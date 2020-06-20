import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import "./landing.scss";

export default function Landing() {
  const [state, setState] = useState({ initialized: false });
  const { initialized } = state;

  useEffect(() => {
    if (!initialized) {
      init();
    };
  });

  function init() {
    ScrollReveal().reveal(".content", fadeContent);
    setState(prevState => { return { ...prevState, initialized: true } });
  };

  const fadeContent = {
    duration: 1200,
    interval: 150,
    delay: 100,
    reset: false
  };

  return (
    <div className="landing-wrap">
      <div className="landing-bkg content"></div>
      <div className="landing-container">
        <p className="title content">MORGAN</p>
        <p className="title content">ELLIS</p>
        <div className="subtitle-wrap content">
        <div className="divider"></div>
        <p className="subtitle">FULL STACK DEVELOPER</p>
        </div>
      </div>
    </div>
  )
};
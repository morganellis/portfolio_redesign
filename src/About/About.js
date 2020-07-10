import React from "react";
import "./about.scss"

export default function About() {
  return (
    <div className="about-wrap">
      <div className="about-container">
        <p className="hdr">HELLO</p>
        <div className="row">
          <div className="col-1 col">
            <img className="profile-img" src={require("../assets/img/main/self-image.png")} alt="Morgan Ellis" />
          </div>
          <div className="col-2 col">
            <p className="para">
              My name is Morgan Ellis. I'm a full stack developer out of Salt Lake City, UT and I specialize in the MEAN & MERN stacks. My passion is programming. Nothing in the world beats that feeling I get when I figure out a really cool solution to a new problem, or when I finally fix that bug! I love problem-solving, especially when it's a problem that I've never encountered before. I'm well-versed with Node, and have a JavaScript-focused skillset. I'm versatile when it comes to the front end and have a thorough knowledge of Angular, but I'm <span className="italic">really</span> into React. That's always my go-to! (You can check out some of my work below.) There you have it- my developer self in a nutshell.
          </p>
          </div>
        </div>
      </div>
    </div>
  )
};
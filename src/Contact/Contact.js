import React from "react";
import "./contact.scss"

export default function Contact() {
  return (
    <div className="contact-wrap">
      <div className="row">
        <div className="col-1 col">
          <p className="hdr">GET IN TOUCH</p>
        </div>
        <div className="col-2 col">
          <p className="para">Questions?  Comments? <br />Need some freelance work done? <br /> Just want to chat with a super awesome person? <br />Shoot me an email!</p>
          <div className="divider"></div>
          {/* <p className="para">morganellis.dev@gmail.com</p> */}
          <a className="contact-btn hdr" href="mailto: morganellis.dev@gmail.com">CONTACT ME</a>
          {/* <button className="btn"><a className="btn btn-txt hdr" href="mailto: morganellis.dev@gmail.com">CONTACT ME</a></button> */}
        </div>
      </div>
    </div>
  )
};
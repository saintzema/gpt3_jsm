import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/GPT-3.svg";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into the future before the crowd?
        </h1>
        <div className="gpt3__footer-btn">
          <p>Request Early Access</p>
        </div>
        <div className="gpt3__footer-links">
          <div className="gpt3__footer-links_logo">
            <img src={gpt3Logo} alt="gpt3_logo" />
            <p>12 New Market Road, Abuja, Nigeria</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>

          <div className="gpt3__footer-links_div">
            <h4>Company</h4>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Get in touch</h4>
            <p>12 New Market Road, Abuja, Nigeria</p>
            <p>+2348162816305</p>
            <p>info@zemaai.com</p>
            <p>Contact</p>
          </div>
        </div>

        <div className="gpt3__footer-copyright">
          <p>GPT-4. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import "../../containers/possibility/possibility.css";
import possibilityImage from "../../assets/FeatureImage.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding">
      <div className="gpt3__possibility_image">
        <img src={possibilityImage} alt="possibility_image"></img>
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          The possibilites and opportunities of AI are endless and would
          revolutionize industries.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;

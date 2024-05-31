import React from "react";
import "./header.css";
import people from "../../assets/Group81.png";
import ai from "../../assets/Illustration.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something Amazing with GPT-3 OpenAI
        </h1>
        <p>
          AI is shaping the future of humanity and this advancement in
          technology has made many thought leaders proclaim AI as the new
          electricity.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Enter your email here"></input>
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people"></img>
          <p>1600 people requested access</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;

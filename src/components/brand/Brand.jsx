import React from "react";
import "./brand.css";
import { google, atlassian, slack, dropbox, shopify } from "./import.js";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding" id="brand">
      <img src={google} alt="google" />
      <img src={atlassian} alt="atlassian" />
      <img src={slack} alt="slack" />
      <img src={dropbox} alt="dropbox" />
      <img src={shopify} alt="shopify" />
    </div>
  );
};

export default Brand;

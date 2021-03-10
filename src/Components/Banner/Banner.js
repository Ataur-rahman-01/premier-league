import React from "react";
import banner from "../../Img/epl-top-banner_new.png";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <img className="banner" src={banner} alt="" />
      <h1>Premier League Clubs</h1>
    </>
  );
};

export default Banner;

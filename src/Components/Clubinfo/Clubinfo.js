import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faFlag,
  faBaseballBall,
  faVenusMars,
} from "@fortawesome/free-solid-svg-icons";
import maleimg from "../../Img/male.png";
import femaleimg from "../../Img/female.png";
import "./Clubinfo.css";
import fb from "../../Img/facebook.png";
import ig from "../../Img/instagram.png";
import tw from "../../Img/twitter.png";

const Clubinfo = (props) => {
  const {
    strTeamBanner,
    strTeam,
    intFormedYear,
    strCountry,
    strSport,
    strGender,
    strDescriptionDE,
    strDescriptionEN,
    strFacebook,
    strTwitter,
    strInstagram,
  } = props.club;
  return (
    <div>
      <img className="banner" src={strTeamBanner} alt="" />

      <div className="display-style">
        <div className="container simple-card">
          <h2>{strTeam}</h2>
          <h5>
            <FontAwesomeIcon className="iconi" icon={faLocationArrow} />
            Founded:{intFormedYear}
          </h5>

          <h5>
            <FontAwesomeIcon className="iconi" icon={faFlag} />
            Country:{strCountry}
          </h5>

          <h5>
            <FontAwesomeIcon className="iconi" icon={faBaseballBall} />
            Sports-Type:{strSport}
          </h5>

          <h5>
            <FontAwesomeIcon className="iconi" icon={faVenusMars} />
            Gender:{strGender}
          </h5>
        </div>
        <div>
          <img
            className="condition-img"
            src={strGender === "Male" ? maleimg : femaleimg}
            alt=""
          />
        </div>
      </div>
      <p>{strDescriptionDE}</p>
      <p>{strDescriptionEN}</p>
    </div>
  );
};

export default Clubinfo;

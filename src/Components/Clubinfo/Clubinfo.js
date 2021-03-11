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
import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";

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
        <div className="simple-card">
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
      <div className="center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={"https://" + strFacebook}
        >
          <Facebook className="fa" size={50} />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href={"https://" + strInstagram}
        >
          <Instagram className="fa" size={50} />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href={"https://" + strTwitter}
        >
          <Twitter className="fa" size={50} />
        </a>
      </div>
    </div>
  );
};

export default Clubinfo;

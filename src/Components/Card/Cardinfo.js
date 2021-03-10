import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Cardinfo = (props) => {
  const { strTeam, strTeamBadge, strSport, idTeam } = props.team;
  return (
    <div className="club-container">
      <img src={strTeamBadge} alt="" />
      <div className="card-info">
        <h2>{strTeam}</h2>
        <p>Sport Type:{strSport}</p>
        <Link to={`/team/${idTeam}`}>
          <button className="btn btn-info">
            Explore
            <FontAwesomeIcon className="icon" icon={faInfo} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cardinfo;

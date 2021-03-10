import React, { useEffect, useState } from "react";
import Cardinfo from "../Card/Cardinfo";
import "./Team.css";

const Team = () => {
  const [teams, setTeam] = useState([]);
  useEffect(() => {
    const url =
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeam(data.teams));
  }, []);

  return (
    <div className="responsive">
      {teams.map((team) => (
        <Cardinfo key={team.idTeam} team={team}></Cardinfo>
      ))}
    </div>
  );
};

export default Team;

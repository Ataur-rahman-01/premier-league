import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Clubinfo from "../Clubinfo/Clubinfo";

const ClubDetail = () => {
  const { id } = useParams();
  const [club, setClub] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setClub(data.teams));
  }, [id]);
  return (
    <>
      {club.map((cb) => (
        <Clubinfo club={cb}></Clubinfo>
      ))}
    </>
  );
};

export default ClubDetail;

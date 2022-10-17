import React from "react";
import "./Card.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      />
      <h2>{props.monster.name}</h2>
      <h4>{props.monster.username}</h4>
      <p>{props.monster.email}</p>
      <a href={`http://${props.monster.website}`} style={{textDecoration:"none"}} target="__blank">{props.monster.website}</a>
    </div>
  );
};

import React from "react";
import "./Card.css";

export const Card = ({ name, img, continente }) => {
  return (
    <div className="card">
      <img
        src={img}
        alt="img not found"
        width="220px"
        height="140px"
        loading="lazy"
      />
      <h3 className="text">{name}</h3>
      <h5 className="text">{continente}</h5>
    </div>
  );
};

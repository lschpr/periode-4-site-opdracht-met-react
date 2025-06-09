import React from "react";
import "./card.css";

export default function Card({ image, title, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button className="card-button" onClick={() => alert(title)}>
          Koop het hier
        </button>
      </div>
    </div>
  );
}

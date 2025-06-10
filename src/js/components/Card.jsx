import React from "react";
import "../../styles/Card.css";

const Card = ({ image, title, text, buttonUrl, buttonLabel }) => (
  <div className="col-md-3 mb-4">
    <div className="card h-100 text-center">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
      <div className="card-footer bg-transparent border-0">
        <a href={buttonUrl} className="btn btn-primary w-100">{buttonLabel}</a>
      </div>
    </div>
  </div>
);

export default Card;

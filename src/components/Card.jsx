import React from "react";

const Card = ({ name, img, desc, price }) => {
  return (
    <div className="card mb-3">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{desc}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span>{price}</span>
          <a href="#" className="btn btn-warning">
            <i className="fa-solid fa-cart-shopping fa-sm"></i>{" "}
            <span>Buy Now</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

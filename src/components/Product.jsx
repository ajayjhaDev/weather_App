import React from "react";

const Product = ({ data }) => {
  return (
    <div className="card col mx-4 my-2 card_product">
      <img
        src={data.logo}
        className="card-img-top"
        alt="logo"
        height={150}
        width={50}
      />
      <div>
        {new Array(data.rating).fill(data.rating).map((ele) => (
          <>
            <span key={ele} className="fa fa-star checked"></span>
          </>
        ))}
      </div>

      <div className="card-body">
        <h5 className="card-title">{data.product_name}</h5>
        <p className="card-text">{data.description}</p>

        <strong>Price: {data.price} Rs</strong>
        <p className="card-text">Offer Price: {data.offer_price} Rs</p>

        <div className="d-md-flex">
          <a className="btn btn-primary">View More Details</a>
          <button type="button" className="btn btn-outline-primary ms-1">
            Open an Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

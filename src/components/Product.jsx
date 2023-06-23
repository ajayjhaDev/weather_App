import React from "react";

const Product = ({ data }) => {
  return (
    <div className="card col mx-4 my-2 card_product">
      <div
        style={{
          backgroundImage: `url(${data.logo})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {data.free && (
          <div
            style={{
              background: "red",
              color: "white",
              height: "24px",
              width: "58px",
              textAlign: "center",
              borderRadius: "10%",
              float: "right",
            }}
            className="mt-2"
          >
            Free
          </div>
        )}
        <svg
          width="49"
          height="154"
          viewBox="0 0 49 154"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "relative", bottom: "95px", right: "6px" }}
        >
          <path
            opacity="0.8"
            d="M2.88898 108.675C3.53605 104.822 6.87153 102 10.7785 102H39.3193C44.3421 102 48.1224 106.574 47.1761 111.507L41.3862 141.687C40.2846 147.429 33.5958 150.088 28.8523 146.67L4.03632 128.786C1.56491 127.005 0.319468 123.975 0.823993 120.971L2.88898 108.675Z"
            fill="#13D726"
          />
          <path
            d="M13.3268 103.877C16.2918 103.043 19.0475 105.733 18.2859 108.717L16.4283 115.996C15.6509 119.043 11.8243 120.042 9.65598 117.766L4.58106 112.437C2.50241 110.254 3.49288 106.644 6.39429 105.828L13.3268 103.877Z"
            fill="#13D726"
          />
        </svg>
      </div>

      <div>
        {new Array(data.rating).fill(data.rating).map((ele) => (
          <>
            <i key={ele} className="bi bi-star-fill"></i>
          </>
        ))}
      </div>

      <div className="card-body">
        <h5 className="card-title">{data.product_name}</h5>
        <p className="card-text">{data.description}</p>
        <strong>Price: &#x20b9; {data.price}</strong> <span>per month</span>
        <p className="card-text">
          Offer Price:{" "}
          <span className="offer_price">&#x20b9; {data.offer_price}</span> for
          customers
        </p>
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

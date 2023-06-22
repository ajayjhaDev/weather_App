import React from "react";

const Footer = () => {
  return (
    <>
      <div className="main-footer mx-auto mt-5">
        <div>
          <div>
            <h2>Join the family today!</h2>
          </div>
          <div>
            <p>Take advantage of the various products to build your own</p>
            <p>customized trading strategies.</p>

            <button
              type="button"
              className="btn btn-light"
              style={{ color: "blue" }}
            >
              Open new account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

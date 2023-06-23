import React from "react";
import divide from "../assets/divide.svg";
import footer1 from "../assets/footer1.svg";
import footer2 from "../assets/footer2.svg";
import footer3 from "../assets/footer3.svg";

const Footer = () => {
  return (
    <>
      <div className="main-footer mx-auto mt-5">
        <img src={footer2} alt="img" className="svg-el" />
        <img src={footer3} alt="img" className="svg-el" />

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

        <img src={footer1} alt="img" className="svg-el" />

        <img src={divide} alt="img" className="svg-el" />
      </div>
    </>
  );
};

export default Footer;

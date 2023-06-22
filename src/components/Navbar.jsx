import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#" style={{ fontWeight: 600 }}>
            Evoque Innovative Lab
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  mx-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Marketplace
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Resources</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contact</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button type="button" className="btn btn-outline-primary me-2">
                Login
              </button>
              <button className="btn btn-primary">Sign Up</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

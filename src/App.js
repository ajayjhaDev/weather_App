import { useState } from "react";
import axios from "axios";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

let axiosConfig = {
  headers: {
    "Content-Type": "application/json",
    "Access-Token":
      "eyJhbGciOiJIUzUxMiIsImlhdCI6MTYwODEwMDI4MCwiZXhwIjoxNjE1ODc2MjgwfQ.eyJ0eXBlIjozLCJpZCI6MTQ5MzMsImNyZWF0ZWQiOiIyMDIwLTEyLTE2IDA2OjMxOjIwLjczMTk2NiJ9.Ef001xBUX_ZPsgvGWCou9sUa6Q2BV9jvPWZZsnwE8qB3_IDTGaSNV0d0lmcuWab2FwEUQ3GouA9LVdd7ExmkvQ",
  },
};

function App() {
  const [searchData, setSearchData] = useState([]);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(null);

  const handleSearch = (e) => {
    setText(e.target.value);
    axios
      .post(
        "https://18ebbuf8l8.execute-api.ap-south-1.amazonaws.com/demo/api/v3/user/marketplace/search",
        {
          page_num: 1,
          text: e.target.value,
        },
        axiosConfig
      )
      .then((res) => {
        setSearchData(res.data.data.products);
        console.log(res.data.data.products);
      });
  };

  return (
    <>
      <Navbar />
      <Header />
      <section className="container  mt-3 d-flex justify-content-between align-items-center search-section">
        <div>
          <div className="container1">
            <form className="nosubmit">
              <input
                className="nosubmit"
                type="search"
                placeholder="Search for products"
                onChange={handleSearch}
              />
            </form>
          </div>
        </div>

        <div
          className="d-flex justify-content-between  align-items-center"
          style={{ width: "30%" }}
        >
          <div className="ms-5 sort_by">
            <p>Sort by: </p>
          </div>
          <div style={{ width: "65%" }}>
            <select className="form-select" aria-label="Default select example">
              <option value="newly_added" defaultChecked>
                Newly added
              </option>
              <option value="top_rated">Top Rated</option>
              <option value="top_performing">Top Performing</option>
              <option value="name">Name</option>
              <option value="price_low_to_high">Price Low to High</option>
              <option value="price_high_to_low">Price High to Low</option>
            </select>
          </div>
        </div>
      </section>

      <main className="main_card mx-md-auto mt-md-3">
        <section className="checks_section">
          <div>
            <strong>Developed by</strong>
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="radio"
                defaultChecked
                name="developed"
              />
              <label className="form-check-label">All</label>
            </div>
            <div className="form-check mt-md-3">
              <input
                className="form-check-input"
                type="radio"
                name="developed"
              />
              <label className="form-check-label">Evoque Innovative Lab</label>
            </div>
          </div>

          <div className="mt-3">
            <strong>Rating by</strong>
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="radio"
                name="rating"
                defaultChecked
                onClick={() => setRating(null)}
              />
              <label className="form-check-label">All</label>
            </div>
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="radio"
                name="rating"
                onClick={() => setRating(5)}
              />
              <label className="form-check-label">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span> & above
              </label>
            </div>

            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="radio"
                name="rating"
                onClick={() => setRating(5)}
              />
              <label className="form-check-label">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star "></span>
                <span className="fa fa-star"></span> & above
              </label>
            </div>

            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="radio"
                name="rating"
                onClick={() => setRating(5)}
              />
              <label className="form-check-label">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star "></span>
                <span className="fa fa-star"></span> & above
              </label>
            </div>

            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="radio"
                name="rating"
                onClick={() => setRating(5)}
              />
              <label className="form-check-label">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star "></span>
                <span className="fa fa-star "></span>
                <span className="fa fa-star "></span>
                <span className="fa fa-star"></span> & above
              </label>
            </div>
          </div>

          <div className="mt-3">
            <strong>Application type</strong>
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="radio"
                name="application"
                defaultChecked
              />
              <label className="form-check-label">All</label>
            </div>
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="radio"
                name="application"
              />
              <label className="form-check-label">Web based applications</label>
            </div>

            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="radio"
                name="application"
              />
              <label className="form-check-label">Mobile applications</label>
            </div>
          </div>
        </section>

        <section className="card_section">
          <Products searchData={searchData} text={text} rating={rating} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;

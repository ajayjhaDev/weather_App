import axios from "axios";
import React, { useState, useEffect } from "react";
import Product from "./Product";

let axiosConfig = {
  headers: {
    "Content-Type": "application/json",
    "Access-Token":
      "eyJhbGciOiJIUzUxMiIsImlhdCI6MTYwODEwMDI4MCwiZXhwIjoxNjE1ODc2MjgwfQ.eyJ0eXBlIjozLCJpZCI6MTQ5MzMsImNyZWF0ZWQiOiIyMDIwLTEyLTE2IDA2OjMxOjIwLjczMTk2NiJ9.Ef001xBUX_ZPsgvGWCou9sUa6Q2BV9jvPWZZsnwE8qB3_IDTGaSNV0d0lmcuWab2FwEUQ3GouA9LVdd7ExmkvQ",
  },
};

const Products = ({ text, searchData, rating }) => {
  const [data, setData] = useState([]);
  const [page_num, setPage_Num] = useState(1);

  useEffect(() => {
    axios
      .post(
        "https://18ebbuf8l8.execute-api.ap-south-1.amazonaws.com/demo/api/v3/user/marketplace/filter",
        {
          page_num: page_num,
          filter_id: null,
          segment_id: null,
          price_type: null,
          rating_by: rating,
          application_type: null,
          min_price_limit: 0,
          max_price_limit: 29500000,
          min_investment_limit: 0,
          max_investment_limit: 100000000,
          sort_by: null,
        },
        axiosConfig
      )
      .then((res) => {
        console.log(res.data.data.products);
        setData(res.data.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page_num, text.length == 0, rating]);

  return (
    <>
      <div className="row row-cols-2  mx-md-auto container d-flex justify-content-md-end">
        {text.length > 0
          ? searchData.map((ele) => <Product data={ele} key={ele.product_id} />)
          : data.map((ele) => <Product data={ele} key={ele.product_id} />)}
      </div>

      <nav aria-label="..." className="ms-md-5 mt-md-2">
        <ul className="pagination">
          <li className="page-item me-md-3">
            <span
              className="page-link"
              onClick={() => setPage_Num(page_num - 1)}
              style={{ cursor: "pointer", border: "none" }}
            >
              &laquo;
            </span>
          </li>

          {Array.from({ length: 7 }, (_, i) => i + 1).map((ele) => (
            <li
              className={"page-item " + (ele === page_num ? " active" : "")}
              key={ele}
            >
              <span
                className="page-link page-link-circle"
                onClick={() => setPage_Num(ele)}
                style={{ cursor: "pointer" }}
              >
                {ele}
              </span>
            </li>
          ))}

          <li className="page-item">
            <span
              className="page-link"
              onClick={() => setPage_Num(page_num + 1)}
              style={{ cursor: "pointer", border: "none" }}
            >
              &raquo;
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Products;

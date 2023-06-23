import React from "react";

const Header = () => {
  return (
    <>
      <div className="main mx-auto">
        <svg
          width="129"
          height="92"
          viewBox="0 0 129 92"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "relative", right: "245px", bottom: "116px" }}
          className="svg-el"
        >
          <path
            opacity="0.8"
            d="M-45.432 -24.6993C-42.3781 -38.4208 -30.2058 -48.1818 -16.1485 -48.1818H98.418C117.985 -48.1818 132.314 -29.7527 127.493 -10.7894L107.215 68.9677C102.393 87.9321 80.999 97.2786 63.8083 87.9309L-36.1355 33.5847C-47.8954 27.19 -53.9958 13.778 -51.0876 0.711617L-45.432 -24.6993Z"
            fill="#FFC2A0"
          />
        </svg>

        <svg
          width="123"
          height="58"
          viewBox="0 0 123 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "relative", right: "374px", top: "132px" }}
          className="svg-el"
        >
          <g filter="url(#filter0_d_1_255)">
            <path
              d="M-55.432 23.4825C-52.3781 9.76095 -40.2058 0 -26.1485 0H88.418C107.985 0 122.314 18.429 117.493 37.3924L97.2146 117.149C92.3928 136.114 70.999 145.46 53.8083 136.113L-46.1355 81.7664C-57.8954 75.3718 -63.9958 61.9597 -61.0876 48.8934L-55.432 23.4825Z"
              fill="#13D726"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1_255"
              x="-65.8065"
              y="0"
              width="188.24"
              height="147.775"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_255"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_255"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <div>
          <div>
            <svg
              width="39"
              height="30"
              viewBox="0 0 39 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ position: "relative", left: "110px" }}
              className="svg-el"
            >
              <path
                d="M0.682524 9.04152C1.75413 4.08385 6.13912 0.54541 11.2113 0.54541H26.6765C34.469 0.54541 40.1947 7.85678 38.3266 15.4221L37.0199 20.714C35.1207 28.4059 26.4203 32.1785 19.5073 28.3078L5.94874 20.7162C1.81926 18.4041 -0.317364 13.6674 0.682524 9.04152Z"
                fill="#FC9C66"
              />
            </svg>

            <h2>Welcome to marketplace!</h2>
          </div>
          <div>
            <p>India’s first products marketplace with</p>
            <p>advanced tools & apps to empower your every trade!</p>
            <svg
              width="82"
              height="65"
              viewBox="0 0 82 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ position: "relative", left: "140px", bottom: "35px" }}
              className="svg-el"
            >
              <path
                opacity="0.5"
                d="M3.97243 9.52413C5.17842 4.01624 10.0563 0.0908203 15.6947 0.0908203H69.6288C77.4362 0.0908203 83.1646 7.42854 81.2701 15.0027L71.2781 54.9503C69.3659 62.5953 60.7288 66.3531 53.8317 62.5409L6.8311 36.5622C2.18506 33.9942 -0.221607 28.6787 0.913832 23.493L3.97243 9.52413Z"
                fill="#78B4FD"
              />
            </svg>
          </div>
        </div>

        <svg
          width="181"
          height="82"
          viewBox="0 0 181 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "relative", left: "174px", top: "118px" }}
          className="svg-el"
        >
          <path
            d="M6.56799 23.6642C9.62195 9.94271 21.7942 0.181763 35.8515 0.181763H150.418C169.985 0.181763 184.314 18.6108 179.493 37.5741L159.215 117.331C154.393 136.296 132.999 145.642 115.808 136.294L15.8645 81.9482C4.1046 75.5535 -1.99578 62.1415 0.912358 49.0751L6.56799 23.6642Z"
            fill="#13D726"
          />
        </svg>
      </div>
    </>
  );
};

export default Header;

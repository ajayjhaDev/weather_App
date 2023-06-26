import React, { useState, useEffect } from "react";
import state from "../utils/state";
import axios from "axios";

const Weather = () => {
  const [cityName, setCityName] = useState("Andhra Pradesh");
  const [weather, setWeather] = useState({});

  const handleChange = (e) => {
    setCityName(e.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a7edebea5d006c1065da3436f6aa06b5`
      )
      .then((res) => {
        setWeather(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cityName]);

  return (
    <section
      style={{
        borderRadius: "12px",
      }}
      className="mt-4 p-5 text-center"
    >
      <div>
        <p>Select State</p>

        <select onChange={handleChange}>
          {state.map((ele) => (
            <option key={ele} value={ele}>
              {ele}
            </option>
          ))}
        </select>
      </div>

      <div className="weather mt-5 row mx-auto">
        <div className="col">
          <p>Temperature</p>
          <p className="fs-1">
            {Math.floor(`${weather?.main?.temp}` - 273.15)} &deg;C
          </p>
        </div>
        <div className="col">
          <p>Humidity</p>
          <p className="fs-1">{weather?.main?.humidity} %</p>
        </div>
        <div className="col">
          <p>Wind</p>
          <p className="fs-1">{weather?.wind?.speed} Km/h</p>
        </div>
      </div>
    </section>
  );
};

export default Weather;

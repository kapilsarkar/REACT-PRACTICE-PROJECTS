import {useState } from "react";
import { key } from "../utils/constant";
const Body = () => {
  const [searchCity, setSearchCity] = useState("");
  const [weatherLocation, setWeatherLocation] = useState();
  const [weatherCurrent,setWeatherCurrent] = useState();
  const fetchWeather = async () => {
    try {
      const data = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${key}&q=${searchCity.toLowerCase()}}`
      );
      const json = await data.json();
      console.log(json);
      setWeatherLocation(json.location);
      setWeatherCurrent(json.current);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="center-container">
      <input
        type="text"
        className="input-box"
        placeholder="Enter City Name..."
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
      />
      <button className="searchBtn" onClick={fetchWeather}>
        Search
      </button>
      <p>{weatherLocation?.name}</p>
      <p>{weatherCurrent?.temp_c}</p>
    </div>
  );
};

export default Body;

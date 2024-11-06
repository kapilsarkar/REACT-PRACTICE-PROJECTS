import { useState } from "react";
import { key } from "../utils/constant";
const Body = () => {
  const [searchCity, setSearchCity] = useState("");
  const [weatherLocation, setWeatherLocation] = useState();
  const [weatherCurrent, setWeatherCurrent] = useState();
  const [error,setError] = useState(false)


  const fetchWeather = async () => {
    try {
      setError(false)
      const data = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${key}&q=${searchCity.toLowerCase()}}`
      );
      const json = await data.json();
      console.log(json);
      setWeatherLocation(json.location);
      setWeatherCurrent(json.current);
    } catch (error) {
      setError(true)
      console.log(error)
    }
  };
  if(error) {
    return <h1>Something went wrong</h1>
  }

  return (
    <div className="center-container">
      <div className="left-container">
        <div className="search-container">
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
        </div>
        <img src={weatherCurrent?.condition?.icon} />
        <p>{weatherCurrent?.temp_c} ℃</p>
        <p>{weatherLocation?.name}</p>
        <p>Weather Condition : {weatherCurrent?.condition?.text} </p>
        <p>Feels Like :{weatherCurrent?.feelslike_c} <img src ="./feelslike.png" className="feels-like"/></p>
        <p>
          Rain - {weatherCurrent?.cloud}%{" "}
          <img src="./rainstatus.gif" className="rain-status" />
        </p>
      </div>
    </div>
  );
};

export default Body;

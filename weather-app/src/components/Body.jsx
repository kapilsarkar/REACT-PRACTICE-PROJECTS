import { useState } from "react";
import { key } from "../utils/constant";
import { FaLocationDot } from "react-icons/fa6";
import { BsCloudRainFill } from "react-icons/bs";
import { TiWeatherPartlySunny } from "react-icons/ti";
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
        <div className="display-part1">
          <h2>{weatherCurrent?.temp_c} ℃</h2>
          <img src={weatherCurrent?.condition?.icon} />
        </div>
        <div className="display-part2">
        <h2>Location: <FaLocationDot />{weatherLocation?.name}</h2>
        <h3>Weather Condition : {weatherCurrent?.condition?.text} <TiWeatherPartlySunny /> </h3>
        <h3>
          Rain - {weatherCurrent?.cloud}%{" "}
          <BsCloudRainFill />
        </h3>
        </div>
        <p>Feels Like :{weatherCurrent?.feelslike_c}℃</p>
       
      </div>
    </div>
  );
};

export default Body;

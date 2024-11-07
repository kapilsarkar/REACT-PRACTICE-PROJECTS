import { useState } from "react";
import { key } from "../utils/constant";
import { FaLocationDot } from "react-icons/fa6";
import { BsCloudRainFill } from "react-icons/bs";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { WiHumidity } from "react-icons/wi";
import { GiWindpump } from "react-icons/gi";
import { TbUvIndex } from "react-icons/tb";
const Body = () => {
  const [searchCity, setSearchCity] = useState("");
  const [weatherLocation, setWeatherLocation] = useState();
  const [weatherCurrent, setWeatherCurrent] = useState();
  const [error, setError] = useState(false);

  const fetchWeather = async () => {
    try {
      setError(false);
      const data = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${key}&q=${searchCity.toLowerCase()}}`
      );
      const json = await data.json();
      console.log(json);
      setWeatherLocation(json.location);
      setWeatherCurrent(json.current);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  if (error) {
    return <h1>Something went wrong</h1>;
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
          <h2>
            Location: <FaLocationDot />
            {weatherLocation?.name}
          </h2>
          <h3>
            Weather Condition : {weatherCurrent?.condition?.text}{" "}
            <TiWeatherPartlySunny />{" "}
          </h3>
          <h3>
            Rain - {weatherCurrent?.cloud}% <BsCloudRainFill />
          </h3>
          <h3>
            Feels Like :{weatherCurrent?.feelslike_c}℃ <TiWeatherWindyCloudy />
          </h3>
        </div>
      </div>
      <div className="right-container">
        <h3>Other Highlights</h3>
        <div className="other-weather-details">
          <div className="humidity">
            <h3>Humidity</h3>
            <h3>
              <WiHumidity />
              {weatherCurrent?.humidity} %
            </h3>
            <p>Dew Point: {weatherCurrent?.dewpoint_c}℃</p>
          </div>
          <div className="wind">
            <h3>Wind Status</h3>
            <h3>
              <GiWindpump />
              {weatherCurrent?.wind_kph}km/hr
            </h3>
            <p>Wind Degree: {weatherCurrent?.wind_degree}℃</p>
          </div>
          <div className="uv-index">
           <h3>UV Index</h3>
           <h3><TbUvIndex />{weatherCurrent?.uv}</h3>
           <p>Heat Index: {weatherCurrent?.heatindex_c}℃</p>
          </div>
        </div>
        <h3>Location Details</h3>
        <div className="location-details">
         <h3>City Name: {weatherLocation?.name}</h3>
         <h3>State Name: {weatherLocation?.region}</h3>
         <h3>Country Name : {weatherLocation?.country}</h3>
         <h3>Zone Name : {weatherLocation?.tz_id}</h3>
         <h3>Local Data/Time: {weatherLocation?.localtime}</h3>
        </div>
      </div>
    </div>
  );
};

export default Body;

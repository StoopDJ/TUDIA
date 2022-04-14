import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import "../CSS/weather.css";


function Weather() {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
  });


  async function weatherData(e) {
    e.preventDefault();
    if (form.city === "") {
      alert("Add values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${"8f4f71b87b8adb0cd6f98ac3914f054f"}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }
 
  };
  return (
    <div className="weather">
      <span className="title">Weather</span>
      <br />
      <form>
        <input
          type="text"
          placeholder="city or country"
          name="city"
          onChange={(e) => handleChange(e)}
        />
       
        <button className="getweather" onClick={(e) => weatherData(e)}>
          Submit
        </button>
      </form>

      {/* {console.log(weather)} */}
      {weather.data !== undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
  );
}

export default Weather;
import React, { useState } from "react";
import "./css/form.css";
import Currenttemp from "./currenttemp";
import axios from "axios";

function Form() {
  let [Place, setPlace] = useState("");
  let [loca, setLoca] = useState("");
  let [forcast1, setForcast1] = useState([]);
  let [forcast2, setForcast2] = useState([]);
  let [Icon, setIcon] = useState("");
  let [Ready, setReady] = useState(false);
  let [fulldate, setFulldate] = useState("");

  function showTemperature(response) {
    setdate();
    setReady(true);
    setLoca(`${response.data.name}`);
    setIcon(`${response.data.weather[0].icon}`);
    setForcast1([
      `${Math.round(response.data.main.temp_max)}`,
      `${Math.round(response.data.main.temp_min)}`,
    ]);
    setForcast2([
      `${response.data.weather[0].description}`,
      `${response.data.main.humidity}%`,
      `${response.data.wind.speed}km/h`,
    ]);
  }
  function submitPlace(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${Place}&appid=3ae5fb236870eefa55ebb52fb74c96e8&units=metric`;
    axios.get(url).then(showTemperature);
  }
  function updatePlace(event) {
    setPlace(event.target.value);
  }
  function curposbut(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(CurPosition);
  }
  function CurPosition(position) {
    let coords = [];
    coords.push(position.coords.latitude);
    coords.push(position.coords.longitude);
    let APIkey1 = "3ae5fb236870eefa55ebb52fb74c96e8";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&appid=${APIkey1}&units=metric`;
    axios.get(url).then(showTemperature);
  }
  function setdate() {
    let Days = [
      `Sunday`,
      `Monday`,
      `Tuesday`,
      `Wednesday`,
      `Thursday`,
      `Friday`,
      `Saturday`,
    ];
    let now = new Date();
    let weekday = now.getDay();
    let date = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();
    let hour = now.getHours();
    let mins = ("0" + now.getMinutes()).slice(-2);
    let todaysday = Days[weekday];
    let time = `${hour}:${mins}`;
    let DDate = `${date}/${month + 1}/${year}`;
    setFulldate(`Last updated: ${todaysday} - ${DDate}  ${time} `);
  }
  return (
    <div>
      <div className="form">
        <form className="row flex-row" id="pleasework">
          <div className="col-1 mr-1">
            <label htmlFor="city">
              {" "}
              <span className="cityy">City:</span>
            </label>
          </div>
          <div className="line2"></div>
          <div className="col d-flex d-inline-flex">
            <input
              type="text"
              className="form-control"
              id="City"
              onChange={updatePlace}
            />
          </div>
          <div className="line"></div>
          <div className="col d-flex justify-content-end buttons">
            <div className="col-1 d-flex">
              <button
                type="submit"
                className="btn btn-secondary"
                onClick={submitPlace}
              >
                Go
              </button>
            </div>
            <div className="col-1 d-flex ml-3">
              <button
                type="submit"
                className="btn btn-secondary ml-3"
                id="clbut"
                onClick={curposbut}
              >
                <i className="fa-solid fa-location-crosshairs"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
      <Currenttemp
        date={fulldate}
        loca={loca}
        data1={forcast1}
        data2={forcast2}
        icon={Icon}
        ready={Ready}
      />
    </div>
  );
}
export default Form;

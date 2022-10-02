import React, { useState } from "react";
import "./css/currenttemp.css";
import Currenticon from "./currenticon";
import Tempconver from "./tempconver";

function Currenttemp(props) {
  if (props.ready) {
    return (
      <div>
        <div className="show">
          <h5 className="basic1" id="chosencity">
            {props.loca}
          </h5>
          <p className="basic2" id="date-time">
            {props.date}
          </p>
        </div>
        <div className="row justify-content-center row1">
          <div className="col-6 noshow">
            <div className="card-body1">
              <h5 className="card-title1" id="chosencity">
                {props.loca}
              </h5>
              <p className="card-text1" id="date-time">
                {props.date}
              </p>
            </div>
          </div>
          <div className="col justify-content-center">
            <Tempconver data1={props.data1} />
            <div className="row justify-content-center">
              <div className="col-4 ml-5">
                <Currenticon icon={props.icon} />
              </div>
              <div className="col">
                <p className="card-text2">
                  <ul className="text-left">
                    <li id="description">
                      <span className="font-weight-bold">Description: </span>
                      {props.data2[0]}
                    </li>
                    <li id="humid">
                      <span className="font-weight-bold">Humidity: </span>
                      {props.data2[1]}
                    </li>
                    <li id="wi">
                      <span className="font-weight-bold">Wind speed: </span>
                      {props.data2[2]}
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Currenttemp;

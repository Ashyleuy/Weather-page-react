import React, { useState } from "react";
import "./css/form.css";

function Tempconver(props) {
  const [unit, setUnit] = useState("celci");
  let [celciclass, setCelciclass] = useState(`celci`);
  let [farenclass, setFarenclass] = useState("faren active");
  function tocelci(event) {
    event.preventDefault();
    setUnit("celci");
    setCelciclass(`celci`);
    setFarenclass(`faren active`);
  }
  function faren(x) {
    return Math.round((x * 9) / 5 + 32);
  }
  function tofaren(event) {
    event.preventDefault();
    setUnit("faren");
    setCelciclass(`celci active`);
    setFarenclass(`faren`);
  }
  if (unit === "celci") {
    return (
      <div className="card-body1">
        <h5 className="card-title2 text-center pb-3">
          <span className="bigtoptemp" id="currenttempmax">
            {props.data1[0]}
          </span>
          <span className="bigtemp" id="currenttempmin">
            {" / "}
            {props.data1[1]}
          </span>
          <span className={celciclass} id="celci">
            °C
          </span>
          <a href="/" className={farenclass} id="faren" onClick={tofaren}>
            {" "}
            °F
          </a>
        </h5>
      </div>
    );
  } else {
    return (
      <div className="card-body1">
        <h5 className="card-title2 text-center pb-3">
          <span className="bigtoptemp" id="currenttempmax">
            {faren(props.data1[0])}
          </span>
          <span className="bigtemp" id="currenttempmin">
            {" / "}
            {faren(props.data1[1])}
          </span>
          <a href="/" className={celciclass} id="celci" onClick={tocelci}>
            °C
          </a>
          <span className={farenclass} id="faren">
            {" "}
            °F
          </span>
        </h5>
      </div>
    );
  }
}
export default Tempconver;

import React, { useState } from "react";
import "./css/currenticon.css";
import SetIcon from "./seticon";

function Currenticon(props) {
  let [slicedid, setSlicedid] = useState(`${props.icon.slice(0, 2)}`);
  const ids = [`01`, `02`, `03`, `04`, `09`, `10`, `11`, `13`, `50`];
  const iconclass = [
    `fa-sun`,
    `fa-cloud-sun`,
    `fa-cloud-sun`,
    `fa-cloud`,
    `fa-cloud-rain`,
    `fa-cloud-rain`,
    `fa-cloud-bolt`,
    `fa-snowflake`,
    `fa-smog`,
  ];
  function checkid(n) {
    return n === slicedid;
  }
  return (
    <div className="col">
      <div className="row align-items-center">
        <SetIcon class={`fa-solid ${iconclass[ids.findIndex(checkid)]}`} />
      </div>
    </div>
  );
}

export default Currenticon;

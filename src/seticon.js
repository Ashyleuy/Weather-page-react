import React from "react";

function SetIcon(props) {
  console.log(props.class);
  return <i className={props.class} id="current-icon"></i>;
}

export default SetIcon;

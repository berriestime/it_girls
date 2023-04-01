import React from "react";
import "./index.css";

function Theme(props) {
  return (
    <div className="theme">
      <div>{props.name}</div>
    </div>
  );
}

export default Theme;

import React from "react";
import "./index.css";

function Word(props) {
  return (
    <div className="word">
      <div>{props.name}</div>
    </div>
  );
}

export default Word;

import React from "react";
import "./index.css";
import Title from "../Title";

function Card() {
  return (
    <div className="card">
      <Title name="Тема карточки"></Title>
      <div>Карточка с переводом</div>
    </div>
  );
}

export default Card;

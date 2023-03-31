import "./index.css";
import React from "react";
import Button from "../Button";

function Card(props) {
  return (
    <div className="container">
      <img src={props.url} alt="hero" />
      <span>Имя: {props.name}</span>
      <span>Вселенная: {props.universe}</span>
      <span>Альтер Эго: {props.alterEgo}</span>
      <span>Род деятельности: {props.occupation}</span>
      <span>Друзья: {props.friends}</span>
      <span>Суперсилы: {props.superpowers}</span>
      <Button text="Подробнее:"></Button>
    </div>
  );
}

export default Card;

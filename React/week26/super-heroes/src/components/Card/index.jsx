import "./Card.css";
import React, { Component } from "react";

class Card extends Component {
  state = {
    isOpen: false,
  };

  render() {
    console.log(this.state.isOpen);
    const aditionalInfo = this.state.isOpen && (
      <span>{this.props.aditionatInfo}</span>
    );
    return (
      <div className="container">
        <img src={this.props.url} alt="hero" />
        <span>Имя: {this.props.name}</span>
        <span>Вселенная: {this.props.universe}</span>
        <span>Альтер Эго: {this.props.alterEgo}</span>
        <span>Род деятельности: {this.props.occupation}</span>
        <span>Друзья: {this.props.friends}</span>
        <span>Суперсилы: {this.props.superpowers}</span>
        <button onClick={this.handleClick}>
          {this.state.isOpen ? " Закрыть:" : "Подробнее: "}
        </button>
        {aditionalInfo}
      </div>
    );
  }

  handleClick = () => {
    console.log("---", "test");
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
}

export default Card;

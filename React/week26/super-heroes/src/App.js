import React from "react";
import "./App.css";
import Button from "./components/Button/Button";
import CardList from "./components/CardList/CardList";

function App() {
  return (
    <div>
      <Button text="Назад"></Button>
      <CardList />
      <Button text="Вперед"></Button>
    </div>
  );
}

export default App;

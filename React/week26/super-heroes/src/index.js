import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import superHeroes from "./superHeroes.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <Button text="Назад"></Button>
      <Card
        url={superHeroes[0].pathImg}
        name={superHeroes[0].superhero}
        universe={superHeroes[0].universe}
        alterEgo={superHeroes[0].alterEgo}
        occupation={superHeroes[0].occupation}
        friends={superHeroes[0].friends}
        superpowers={superHeroes[0].superpowers}
      ></Card>
      <Button text="Вперед"></Button>
    </div>
  </React.StrictMode>
);

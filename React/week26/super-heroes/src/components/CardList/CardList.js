import React from "react";
import superHeroes from "./../../superHeroes.json";
import Card from "../Card";

function CardList() {
  const heroes = superHeroes.map((hero) => (
    <div key={hero.id}>
      <Card
        url={hero.pathImg}
        name={hero.superhero}
        universe={hero.universe}
        alterEgo={hero.alterEgo}
        occupation={hero.occupation}
        friends={hero.friends}
        superpowers={hero.superpowers}
        aditionatInfo={hero.more}
      />
    </div>
  ));
  return <div>{heroes}</div>;
}

export default CardList;

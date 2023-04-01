import React from "react";
import Title from "../Title";
import "./index.css";
import ListItem from "../ListItem";

function List() {
  return (
    <div className="list">
      <Title name="Список всех существующих слов: "></Title>
      <div className="list-item"></div>
      <ListItem></ListItem>
      {/* <Button></Button>
        <Button></Button> */}
    </div>
  );
}

export default List;

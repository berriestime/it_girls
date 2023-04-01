import React from "react";
import Card from "../Card";
import List from "../List";
import AddNewItem from "../AddNewItem";

function Field() {
  return (
    <div className="container">
      <Card></Card>
      <List></List>
      <AddNewItem></AddNewItem>
    </div>
  );
}

export default Field;

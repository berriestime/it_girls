import React from "react";
import Button from "../Button";
import "./index.css";

function AddNewItem() {
  return (
    <div className="new-item">
      <Button name="+">Добавить слово</Button>
      <div>Добавить слово</div>
    </div>
  );
}

export default AddNewItem;

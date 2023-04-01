import React from "react";
import "./index.css";
import Word from "../Word";
import Transcription from "../Transcription";
import Translate from "../Translate";
import Theme from "../Theme";
import Button from "../Button";

function ListItem() {
  return (
    <div className="list-container">
      <Word name="слово"></Word>
      <Transcription name="транскрипция"></Transcription>
      <Translate name="перевод"></Translate>
      <Theme name="тема"></Theme>
      <Button name="редактировать"></Button>
      <Button name="удалить"></Button>
    </div>
  );
}

export default ListItem;

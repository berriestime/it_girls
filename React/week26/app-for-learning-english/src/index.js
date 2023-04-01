import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Field from "./components/Field";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="root">
      <Field></Field>
    </div>
  </React.StrictMode>
);

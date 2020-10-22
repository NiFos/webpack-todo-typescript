import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import "../index.css";
import { Header } from "./header";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

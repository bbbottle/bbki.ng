import React from "react";
import ReactDOM from "react-dom";
import { ReloadPrompt } from "@/components";
import { App } from "./app";
import "./main.css";

ReactDOM.render(
  <React.StrictMode>
    <ReloadPrompt />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ReloadPrompt } from "@/components";
import App from "./app";
import "./main.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ReloadPrompt />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

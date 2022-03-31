import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ReloadPrompt } from "@/components";
import App from "./app";
import "./main.css";

const container = document.getElementById("root") as Element;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <ReloadPrompt />
      <App />
    </Router>
  </React.StrictMode>
);

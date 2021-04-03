import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// CUSTOM COMPONENTS
import App from "./App";

// CUSTOM STYLES
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

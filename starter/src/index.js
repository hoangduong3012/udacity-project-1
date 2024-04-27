import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import RouterApp from "./router.js";

ReactDOM.render(
  <React.StrictMode>
    <RouterApp>
      <App />
    </RouterApp>
  </React.StrictMode>,
  document.getElementById("root")
);

import { StrictMode } from "react";
import ReactDOM from "react-dom";
window.Popper = require("popper.js").default;
window.$ = window.jQuery = require("jquery");
require("bootstrap");

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

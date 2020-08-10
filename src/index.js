import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}



const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);



import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <link
      rel="stylesheet"
      type="text/css"
      media="screen and (max-width: 360px)"
      href="portrait.css"
    ></link>
    <link
      rel="stylesheet"
      type="text/css"
      media="screen and (min-width: 361px) and (max-width: 480px)"
      href="landscape.css"
    ></link>
    <link
      rel="stylesheet"
      type="text/css"
      media="screen and (min-width: 481px)"
      href="desktop.css"
    ></link>
  </React.StrictMode>,
  document.getElementById("root")
);

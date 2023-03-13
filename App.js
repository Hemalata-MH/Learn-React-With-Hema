import React from "react";
import ReactDOM from "react-dom/client";

var header1 = React.createElement(
  "h1",
  {
    key: "heading1",
  },
  "ReactJS - Learn React With Hema"
);

var header2 = React.createElement(
  "h2",
  {
    key: "heading2",
  },
  "I am header 2"
);

var container = React.createElement(
  "div",
  {
    id: "container",
    key: "container",
  },
  [header1, header2]
);

// console.log(react_header);
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

// creating header tag using javascript
var header = document.createElement("h1");
header.innerHTML = "Javascript - Learn React With Hema";
var root = document.getElementById("js-root");
root.appendChild(header);

// creating header tag using react js

var react_header1 = React.createElement(
  "h1",
  { id: "heading1" },
  "ReactJS - Learn React With Hema"
);

var react_header2 = React.createElement(
  "h2",
  {
    id: "heading2",
  },
  "I am header 2"
);

var container = React.createElement(
  "div",
  {
    id: "container",
  },
  [react_header1, react_header2]
);

// console.log(react_header);
var react_root = ReactDOM.createRoot(document.getElementById("react-root"));
react_root.render(container);

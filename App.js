import ReactDOM from "react-dom/client";

/**
 * This is react element
 * var header1 = React.createElement(
  "h1",
  {
    key: "heading1",
  },
  "ReactJS - Learn React With Hema"
);
*/

// This is JSX
const Header = () => (
  <div>
    <h1 key="h1">JSX</h1>
    <h3>inside JSX</h3>
  </div>
);

// This is React functional Component
const HeaderComponent = () => {
  return (
    <div>
      {1 + 2}
      <Header />
      <h2>I am inside react functional component</h2>
      <h3>Hello Buddies</h3>
    </div>
  );
};

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);

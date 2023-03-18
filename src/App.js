import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

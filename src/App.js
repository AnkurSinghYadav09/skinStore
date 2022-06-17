// import logo from './logo.svg';
// import "./App.css";
import Navbar from "./navbar/Navbar";
// import Carousal from "./body/Carousal";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Footer from "./footer/Footer";
import { Routes, Route } from "react-router-dom";
import Viewall from "./cosmetics/viewall";
import Home from "./Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewall" element={<Viewall />} />
      </Routes>
    </div>
  );
}

export default App;

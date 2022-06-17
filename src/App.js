// import logo from './logo.svg';
// import "./App.css";
import Navbar from "./navbar/Navbar";
// import Carousal from "./body/Carousal";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "./footer/Footer";
import { Routes, Route } from "react-router-dom";
import Viewall from "./cosmetics/viewall";
import Home from "./Home";
import Register from "./Account/Register";


function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewall" element={<Viewall />} />
        <Route path="/register" element={<Register />} />
      
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/Navbar';
import Carousal from './body/Carousal';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {
  return (
    <div >
      <Navbar/>
      <Carousal/>
    </div>
  );
}

export default App;

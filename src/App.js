import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import GeekTshirts from "./pages/GeekTshirts/GeekTshirts";
import GeekHoodies from "./pages/GeekHoodies/GeekHoodies";
import AnimeHoodies from "./pages/AnimeHoodies/AnimeHoodies";
import AnimeOversized from "./pages/GeekOversized/GeekOversized";
import SportHoodies from "./pages/SportHoodies/SportHoodies";
import SportOversized from "./pages/SportsOversized/SportsOversized";
import Football from "./components/football/football";
import Motorsports from "./components/football/motorsports";

function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/geek/tshirts" element={<GeekTshirts />} />
        <Route path="/geek/hoodies" element={<GeekHoodies />} />
         <Route path="/anime/oversized" element={<AnimeHoodies />} />
          <Route path="/anime/hoodies" element={<AnimeOversized />} />
           <Route path="/sport/oversized" element={<SportHoodies />} />
            <Route path="/sport/hoodies" element={<SportOversized />} />
            <Route path="football/dresses" element={<Football/>}/>
            <Route path="/motorsports" element={<Motorsports/>}/>
      </Routes>
    </Router>
  );
}

export default App;

import "./styles/app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Incipit } from './pages/Incipit';
import { Revue } from "./pages/Revue";
import { Bibliotheque } from "./pages/Bibliotheque";
import { Artistes } from "./pages/Artistes";
import { Communaute } from "./pages/Communaute";
import { Navbar } from "./components/UI/Navbar";

function App() {
  return (
    <div className="App">
        
      <Router>
        <Routes>
          <Route path="/" element={<Incipit/>}/>
          <Route path="/revue" element={<Revue/>}/>
          <Route path="/bibliotheque" element={<Bibliotheque/>}/>
          <Route path="/artistes" element={<Artistes/>}/>
          <Route path="/communaute" element={<Communaute/>}/>
          <Route path="/test" element={<Navbar/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

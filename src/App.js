import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import National from "./components/National";
import International from "./components/International";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1" element={<National />} />
          <Route path="/2" element={<International />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

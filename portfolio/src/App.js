import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;

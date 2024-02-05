import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import About from "./About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Error from "./Error";
import axios from "axios";
import Home from "./Home";
import Sidepage from "./Sidepage";

function App() {
  const [count, setCount] = useState();

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:id" element={<Sidepage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

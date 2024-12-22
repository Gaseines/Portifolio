import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu";

import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const [isSection, setSection] = useState(false);

  return (
    <BrowserRouter basename="/Portifolio">
      {/* Menu */}
      <Menu setSection={setSection} />

      <Routes>
        <Route path="/" element={<Home isSection={isSection}/>} />
        <Route path="/About" element={<About />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

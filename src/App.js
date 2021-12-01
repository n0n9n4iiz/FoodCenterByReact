import React from "react";
import "./App.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./contents/Home";
import About from "./contents/About";
import NavbarComponent from "./components/Navbar";
function App() {
  return (
    <Router>
    <NavbarComponent></NavbarComponent>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

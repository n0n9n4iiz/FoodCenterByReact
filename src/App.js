import React,{useState} from "react";
import "./App.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./contents/Home";
import Cart from "./contents/Cart";
import NavbarComponent from "./components/Navbar";
import CartList from "./data/Cart";
import Food from "./data/Food";
import FoodCardItem from "./components/FoodCardItem";
function App() {  
  const [cartNum, setCartNum] = useState('')
  return (
    <Router>
    <NavbarComponent cartNum={cartNum}></NavbarComponent>
      <Routes>
        <Route path="/" element={<Home setCartNum={setCartNum}/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

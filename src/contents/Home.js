import React, { Component, useState } from "react";
import "../App.css";
import { Container,Row } from "react-bootstrap";
import FoodCardItem from "../components/FoodCardItem";
import FoodSearch from "../components/FoodSearch";
import Food from "../data/Food";
import Cart from "../data/Cart";

var Home = () => {
  const [numberItemInCart, setNumberItemInCart] = useState(0);
  var addToCart = (food) => {
    setNumberItemInCart(Cart.length + 1)
    Cart.push(food)
  }
  var foodElement = Food.map((food, index) => {
    return (<FoodCardItem key={index} item={food} addCart={()=>{addToCart(food)}}/>);
  });
  return (
      <div className="content">
        <Container>
          <h1>Food center</h1>
          <hr />
          <Row>
            <FoodSearch/>
          </Row>
          <Row>
            {foodElement}
          </Row>
        </Container>
      </div>
    );
}

export default Home;

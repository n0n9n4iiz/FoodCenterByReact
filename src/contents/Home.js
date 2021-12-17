import React, { Component, useState } from "react";
import "../App.css";
import { Container,Row } from "react-bootstrap";
import FoodSearch from "../components/FoodSearch";
import Food from "../data/Food";
import CartList from "../data/Cart";
import FoodCardItem from "../components/FoodCardItem";

var Home = (props) => {
  const [searchTest, setSearchTest] = useState('')
  var addToCart = (food) => {
    CartList.push(food)
    props.setCartNum(CartList.length)
  }
  var filteredFood = Food.filter((food)=>{
    return food.name.includes(searchTest)
  })
  var foodElement = filteredFood.map((food, index) => {
    return (<FoodCardItem key={index} item={food} addCart={()=>{addToCart(food)}}/>);
  });
  return (
      <div className="content">
        <Container>
          <h1>Food center</h1>
          <hr />
          <Row>
            <FoodSearch search={(e)=>{setSearchTest(e.target.value)}}/>
          </Row>
          <Row>
            {foodElement}
          </Row>
        </Container>
      </div>
    );
}

export default Home;

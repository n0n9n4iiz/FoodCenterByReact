import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CartList from "../data/Cart";
import "../App.css";
var Cart = () => {
  var CartItem = CartList.map((data, index) => {
    console.log(data);
    console.log(index);
    return (
      <Col
        className="shadow zoom"
        lg={12}
        key={index}
        style={{ backgroundColor: "grey", borderRadius: "10px" }}
      >
        {data.name}
      </Col>
    );
  });
  return (
    <div className="content">
      <h1>cart.js</h1>
      <Container>
        <Row>{CartItem}</Row>
      </Container>
    </div>
  );
};

export default Cart;

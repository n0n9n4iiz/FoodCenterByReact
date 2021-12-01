import React from "react";
import Food from "../data/Food";
import "./FoodCardItem.css"
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
var FoodCardItem = (props) => {
  //value
  var {item} = props;
  //function
  var {addCart} = props;
  return (
    <Col sm={4} className="d-flex justify-content-center">
    <Card className="card-box shadow zoom" style={{ width: "18rem", margin: "10px"}}>
      <Card.Img
        variant="top"
        src={item.imgUrl}
        style={{ width: "100%", height: "200px" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.descipt}
        </Card.Text>
        <Button className="mt-auto" variant="primary" onClick={addCart}>
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  </Col>
  );
};
export default FoodCardItem;

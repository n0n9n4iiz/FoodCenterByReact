import React, { useState } from "react";
import { Col, FormControl, InputGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
var FoodSearch = () => {
  return (
    <Col className="d-flex justify-content-center">
      <InputGroup className="mb-3 text-center" style={{ width: "500px" }}>
        <FormControl
          placeholder="ค้นหาเมนูอาหาร..."
        />
        <Button variant="outline-secondary" id="button-addon2">
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </InputGroup>
    </Col>
  );
};
export default FoodSearch;

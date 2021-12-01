import React from "react";
import "./Navbar.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
var NavbarComponent = () => {
  return (
      <Navbar bg="light" fixed="top" expand="lg">
        <Container fluid={true}>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/about">
                <FontAwesomeIcon icon={faShoppingCart}/>
                <span class='badge badge-warning' id='lblCartCount'> 5 </span>
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        
      </Navbar>
  );
}

export default NavbarComponent;

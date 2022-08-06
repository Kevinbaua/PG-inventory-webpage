import React, { Component } from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import "./Navigation.css";
import cart from "../cart.png";

class Navigation extends Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark">
        <Container fluid="md" className="justify-content-between">
          <Navbar.Brand className="fw-bold fs-3 px-0 mx-0 border border-0">
            PG Inventory
          </Navbar.Brand>

          <div className="fs-5 d-flex">
            <Link to="/" className="nav-links">
              Home
            </Link>
            <Link to="/music" className="nav-links">
              Music
            </Link>
            <Link to="/sports" className="nav-links">
              Sports
            </Link>
            <Link to="/tech" className="nav-links">
              Tech
            </Link>
            <Link to="/cart" className="nav-links">
              <div className="cart">
                <img src={cart} alt="cart" />
                <span className="badge">
                  {this.props.cartItems.length !== 0 &&
                    this.props.cartItems.length}
                </span>
              </div>
            </Link>
            <Link to="/contact" className="nav-links">
              Contact Us
            </Link>
          </div>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;

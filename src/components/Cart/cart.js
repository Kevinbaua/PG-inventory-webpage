import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

import "./cart.css";

const Cart = ({ items, handleAdd, handleRemove, handleClear }) => {
  return (
    <div className="container bg-light">

      <h1 className="text-center fw-b m-4">Your Cart</h1>

      {items.length === 0 && <div className="text-center fs-4 text-secondary">No items added</div>}

      {items &&
        items.map( (item) => (
          <div key={item.id}>
            <Container key={item.id+1} className="my-5">
              <Row key={item.id+2} className="align-items-center border border-primary">
                <Col key={item.id+3} xs={4} className="d-flex justify-content-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="image border m-1"
                  />
                </Col>
                <Col key={item.id+4} xs={4} className="d-flex justify-content-center">
                  <div className="fw-b fs-1">{item.name}</div>
                </Col>
                <Col key={item.id+5} xs={2} className="d-flex justify-content-center">
                  <Button variant="danger" className="me-3" onClick={() => handleRemove(item)}>-</Button>
                  <Button variant="success" onClick={() => handleAdd(item)}>+</Button>
                </Col>
                <Col key={item.id+6} xs={2} className="d-flex justify-content-center">
                  <div className="fw-b fs-1">{item.quantity}</div>
                </Col>
              </Row>
            </Container>
          </div>
        ))}

        {items && <Form className="w-50 m-auto my-4">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Enter your Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicRoomNo">
            <Form.Label>Room No.</Form.Label>
            <Form.Control type="roomno" placeholder="Enter your Room No." />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleClear}>
            Issue
          </Button>
        </Form>}
    </div>
  );
};

export default Cart;

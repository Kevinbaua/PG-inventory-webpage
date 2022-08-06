import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Newsletter() {
  return (
    <div className="bg-light d-flex justify-content-between p-5 ">
      <div className="w-50">
        <Form>
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
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>

      <div className="w-50 ps-5 mt-2">
        <h1 className="fw-bold">Subscribe to our Newsletter!</h1>
        <h3 className="my-5 text-secondary w-75">
          Get updates of all the new equipments being added to the inventory
        </h3>
      </div>
    </div>
  );
}

export default Newsletter;

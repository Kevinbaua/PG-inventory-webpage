import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Reviews() {
  return (
    <div className="bg-primary m-0 p-5">
      <div className="text-center text-white  mb-4">
        <h1 className="fw-bold m-0">Our Testimonials</h1>
      </div>

      <div className="d-flex px-5 justify-content-center align-items-start">
        <Card border="primary" style={{ width: "18rem" }} className="mx-5 px">
          <Card.Header className="fw-bold fs-4 px-5">Person 1</Card.Header>
          <Card.Body className="px-5">
            <Card.Text>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              suscipit, risus at mattis vulputate, augue tortor dictum purus,
              vel placerat nunc."
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="primary" style={{ width: "18rem" }} className="mx-5">
          <Card.Header className="fw-bold fs-4 px-5">Person 2</Card.Header>
          <Card.Body className="px-5">
            <Card.Text>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              suscipit, risus at mattis vulputate, augue tortor dictum purus,
              vel placerat nunc magna eget ante. Duis faucibus tellus ut
              molestie placerat. Praesent non ex eu ligula bibendum porta sed et
              erat. Praesent vitae massa in risus lobortis pharetra vel eget
              purus. Morbi erat velit, faucibus quis varius."
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="primary" style={{ width: "18rem" }} className="mx-5">
          <Card.Header className="fw-bold fs-4 px-5">Person 3</Card.Header>
          <Card.Body className="px-5">
            <Card.Text>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              suscipit, risus at mattis vulputate, augue tortor dictum purus,
              vel placerat nunc magna eget ante. Duis faucibus tellus ut
              molestie placerat. Praesent non ex eu ligula bibendum porta sed et
              erat."
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Reviews;

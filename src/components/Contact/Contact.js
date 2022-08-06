import React from "react";
import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className="text-center">
      <h1 className="m-5">Contact Us</h1>
      <div className="fs-3 fw-b text-light mx-auto p-3 w-50 bg-primary rounded">
        <b>Email</b> : pg@abc.com
      </div>
      <div className="fs-3 fw-b text-light mx-auto my-4 p-3 w-50 bg-primary rounded">
        <b>Phone</b> : 1234567890
      </div>
      <div className="fs-3 fw-b text-light mx-auto my-4 p-3 w-50 bg-primary rounded">
        <b>Address</b>: 123, abc, Bangalore
      </div>
    </Container>
  );
};

export default Contact;

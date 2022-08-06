import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Music.css";

const Music = ({ itemData, handleAdd }) => {
  return (
    <div className="text-center">
      <h1 className="my-4 fw-b">Music Items</h1>
      <div className="container d-flex justify-content-around align-items-stretch flex-wrap">
        {itemData.map((item) => (
          <div key={item.id} className="m-3">
            <Card
              key={item.id + 1}
              className="itemCard text-center w-100 h-100 d-flex flex-column justify-content-between"
            >
              <div key={item.id + 2} className="itemPic border border-primary">
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + item.image}
                />
              </div>
              <Card.Body
                key={item.id + 3}
                className="d-flex flex-column justify-content-end itemBody border border-primary"
              >
                <Card.Title key={item.id + 4} className="fs-2 fw-b">
                  {item.name}
                </Card.Title>
                <Button
                  key={item.id + 5}
                  variant="primary"
                  className="fs-4"
                  onClick={() => handleAdd(item)}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;

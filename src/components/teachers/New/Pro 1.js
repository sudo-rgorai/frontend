import React from "react";

import Card1 from "../../images/card-1.png";
import Card2 from "../../images/card-2.png";
import Card3 from "../../images/card-3.png";

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./Step1.css";

export default function SimpleCard() {
  return (
    <div style={{ margin: "5% 10%" }}>
      <div style={{ margin: "0 2%" }}>
        <h3 style={{ textAlign: "left" }}>Upload file from device</h3>
      </div>
      <p style={{ color: "white" }}>.</p>
      <h4>
        <center>Choose resource type...</center>
      </h4>
      <div className="cards">
        <Card
          style={{
            width: "30rem",
            padding: "40px",
            margin: "20px",
            background: "#F6F8F9",
            borderRadius: "15px",
          }}
        >
          <div className="icon">
            <Card.Img variant="top" src={Card1} style={{ padding: "20%" }} />
          </div>
          <Card.Body>
            <Card.Title>
              <h3>Upload file from device</h3>
            </Card.Title>
            <Card.Text>
              <h4>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </h4>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "30rem",
            padding: "40px",
            margin: "20px",
            background: "#F6F8F9",
            borderRadius: "15px",
          }}
        >
          <div className="icon">
            <Card.Img variant="top" src={Card2} style={{ padding: "20%" }} />
          </div>
          <Card.Body>
            <Card.Title>
              <h3>Online video link</h3>
            </Card.Title>
            <Card.Text>
              <h4>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </h4>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "30rem",
            padding: "40px",
            margin: "20px",
            background: "#F6F8F9",
            borderRadius: "15px",
          }}
        >
          <div className="icon">
            <Card.Img variant="top" src={Card3} style={{ padding: "20%" }} />
          </div>
          <Card.Body>
            <Card.Title>
              <h3>Online reading link</h3>
            </Card.Title>
            <Card.Text>
              <h4>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </h4>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div style={{ textAlign: "right", margin: "0 2%" }}>
        <button
          type="button"
          className="btn btn-light"
          style={{ margin: "0 5px", width: "10rem", fontSize: "15px" }}
        >
          Cancel
        </button>
        <button
          type="button"
          className="btn btn-warning"
          style={{ width: "10rem", fontSize: "15px" }}
        >
          Proceed
        </button>
      </div>
    </div>
  );
}

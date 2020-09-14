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
        <h3 style={{ textAlign: "left" }}>Add Online Video Link</h3>
      </div>
      <p style={{ color: "white" }}>.</p>
      <div style={{ margin: "1% 2%" }}>
        <p>Paste Link</p>
      </div>
      <div className="row" style={{ margin: "1% 5%" }}>
        <input
          type="text"
          name="text"
          style={{
            width: "100%",
            backgroundColor: "#e5e4e2",
            border: "none",
            borderRadius: "5px",
            margin: "1% 0",
          }}
        />
        <input
          type="text"
          name="text"
          style={{
            width: "100%",
            backgroundColor: "#e5e4e2",
            border: "none",
            borderRadius: "5px",
            margin: "0 0 1% 0",
          }}
        />
        <button
          type="button"
          className="btn btn-light"
          style={{ width: "10rem", fontSize: "15px" }}
        >
          Add another link
        </button>
      </div>
      <div style={{ margin: "1% 2%" }}>
        <p>Description(Optional)</p>
      </div>
      <div className="row" style={{ margin: "1% 5%" }}>
        <input
          type="text"
          name="text"
          style={{
            width: "100%",
            height: "70px",
            backgroundColor: "#e5e4e2",
            border: "none",
            borderRadius: "5px",
          }}
        />
      </div>
      <div style={{ margin: "0 2%" }}>
        <p>Select Applicable Batches</p>
      </div>
      <div className="row" style={{ margin: "1% 5%" }}>
        <div className="column1">
          <input type="checkbox" name="fav1" value="one" /> Batch A
        </div>
        <div className="column1">
          <input type="checkbox" name="fav1" value="one" /> Batch B
        </div>
        <div className="column1">
          <input type="checkbox" name="fav1" value="one" /> Batch C
        </div>
      </div>
      <div className="row" style={{ margin: "1% 5%" }}>
        <div className="column1">
          <input type="checkbox" name="fav1" value="one" /> Batch D
        </div>
        <div className="column1">
          <input type="checkbox" name="fav1" value="one" /> Batch E
        </div>
      </div>
      <p style={{ color: "white" }}>.</p>
      <div className="row" style={{ margin: "0 2%" }}>
        <div className="column" style={{ textAlign: "left", margin: "0 0" }}>
          <button
            type="button"
            className="btn btn-light"
            style={{ width: "10rem", fontSize: "15px" }}
          >
            Back
          </button>
        </div>
        <div className="column" style={{ textAlign: "right", margin: "0 0" }}>
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
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

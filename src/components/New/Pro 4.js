import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./Step1.css";

export default function SimpleCard() {
  return (
    <div style={{ margin: "5% 10%" }}>
      <div style={{ margin: "0 2%" }}>
        <h3 style={{ textAlign: "left" }}>Upload Study Material File</h3>
      </div>
      <p style={{ color: "white" }}>.</p>
      <div
        style={{
          margin: "1% 2%",
          width: "100%",
          height: "70px",
          backgroundColor: "#e5e4e2",
          border: "none",
          borderRadius: "5px",
          textAlign: "center",
          padding: "2% 0",
        }}
      >
        <p>
          Drag and Drop Files or{" "}
          <a href="#" style={{ color: "black", textDecoration: "underline" }}>
            {" "}
            Upload
          </a>
        </p>
      </div>
      <div style={{ margin: "1% 2%" }}>
        <p>Study Material Name</p>
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
      <div style={{ margin: "1% 2%" }}>
        <p>Description</p>
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

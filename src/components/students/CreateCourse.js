import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./Original/Step1.css";

export default function SimpleCard() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div>
			<div style={{ textAlign: "center" }} onClick={handleShow}>
				<a onClick={handleShow}>
					View<br></br> Course
				</a>
			</div>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Create New Course </Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div style={{ margin: "0.2% 5%" }}>
						<div style={{ margin: "1% 2%" }}>
							<p>Course Name</p>
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
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="light" onClick={handleClose}>
						Cancel
					</Button>
					<Button variant="warning" onClick={handleClose}>
						Create
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

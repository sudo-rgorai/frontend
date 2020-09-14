import React, { useState } from "react";

import Card1 from "../../images/card-1.png";
import Card2 from "../../images/card-2.png";
import Card3 from "../../images/card-3.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./Step1.css";

export default function SimpleCard() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div style={{ padding: "5% 10%" }}>
			<div class="row" style={{ textAlign: "center" }}>
				<Button
					variant="warning"
					onClick={handleShow}
					style={{ width: "10rem" }}>
					Demo Button
				</Button>
			</div>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Upload file from device</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div style={{ margin: "0.2% 1%" }}>
						<p>
							<center>Choose resource type...</center>
						</p>
						<div className="cards">
							<div className="row">
								<div className="column1" style={{ padding: "0 1%" }}>
									<Card
										style={{
											width: "100%",
											background: "#F6F8F9",
											borderRadius: "15px",
										}}>
										<div className="icon">
											<Card.Img
												variant="top"
												src={Card1}
												style={{ padding: "30%" }}
											/>
										</div>
										<Card.Body>
											<Card.Title>
												<p>Upload file from device</p>
											</Card.Title>
											<Card.Text>
												<p>Lorem Ipsum</p>
											</Card.Text>
										</Card.Body>
									</Card>
								</div>
								<div className="column1" style={{ padding: "0 1%" }}>
									<Card
										style={{
											width: "100%",
											background: "#F6F8F9",
											borderRadius: "15px",
										}}>
										<div className="icon">
											<Card.Img
												variant="top"
												src={Card2}
												style={{ padding: "30%" }}
											/>
										</div>
										<Card.Body>
											<Card.Title>
												<p>Online video link</p>
											</Card.Title>
											<Card.Text>
												<p>Lorem Ipsum</p>
											</Card.Text>
										</Card.Body>
									</Card>
								</div>
								<div className="column1" style={{ padding: "0 1%" }}>
									<Card
										style={{
											width: "100%",
											background: "#F6F8F9",
											borderRadius: "15px",
										}}>
										<div className="icon">
											<Card.Img
												variant="top"
												src={Card3}
												style={{ padding: "30%" }}
											/>
										</div>
										<Card.Body>
											<Card.Title>
												<p>Online reading link</p>
											</Card.Title>
											<Card.Text>
												<p>Lorem Ipsum</p>
											</Card.Text>
										</Card.Body>
									</Card>
								</div>
							</div>
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="light" onClick={handleClose}>
						Cancel
					</Button>
					<Button variant="warning" onClick={handleClose}>
						Proceed
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

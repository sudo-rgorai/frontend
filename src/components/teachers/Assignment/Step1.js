import React from "react";

import Card1 from "../../../images/card-1.png";
import Card2 from "../../../images/card-2.png";
import Card3 from "../../../images/card-3.png";

import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "./Step1.css";

export default function SimpleCard() {
	return (
		<div className="cards">
			<Card
				style={{
					width: "40%",
					padding: "40px",
					margin: "20px",
					background: "#F6F8F9",
					borderRadius: "10px",
				}}>
				<div className="icon">
					<Card.Img variant="top" src={Card1} style={{ padding: "20%" }} />
				</div>
				<Card.Body>
					<Card.Title>
						<h1 style={{ fontSize: "30px" }}>Quiz/Test</h1>
					</Card.Title>
					<Card.Text>
						<p>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</p>
					</Card.Text>
				</Card.Body>
			</Card>
			<Card
				style={{
					width: "30rem",
					padding: "40px",
					margin: "20px",
					background: "#F6F8F9",
					borderRadius: "10px",
				}}>
				<div className="icon">
					<Card.Img variant="top" src={Card2} style={{ padding: "20%" }} />
				</div>
				<Card.Body>
					<Card.Title>
						<h1 style={{ fontSize: "30px" }}>Subjective Assignment</h1>
					</Card.Title>
					<Card.Text>
						<p>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</p>
					</Card.Text>
				</Card.Body>
			</Card>
			<Card
				style={{
					width: "30rem",
					padding: "40px",
					margin: "20px",
					background: "#F6F8F9",
					borderRadius: "10px",
				}}>
				<div className="icon">
					<Card.Img variant="top" src={Card3} style={{ padding: "20%" }} />
				</div>
				<Card.Body>
					<Card.Title>
						<h1 style={{ fontSize: "30px" }}>Offline Assignment</h1>
					</Card.Title>
					<Card.Text>
						<p>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</p>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
}

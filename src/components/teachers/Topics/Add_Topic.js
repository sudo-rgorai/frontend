import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import { Add } from "@material-ui/icons";
import Batch from "./ChooseSchedule/Schedule";
import { Typography } from "@material-ui/core";

function Topic_Form() {
	const [show, setShow] = useState(false);
	const [checked, setChecked] = useState(false);
	const [checked2, setChecked2] = useState(false);
	const [checked3, setChecked3] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<Button
				variant="primary"
				onClick={handleShow}
				style={{
					backgroundColor: "gold",
					border: "2px solid gold",
					fontWeight: "600",
					textTransform: "unset",
					color: "black",
				}}>
				<Add /> New Topic
			</Button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Topic Name</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group controlId="formGridAddress1">
							<Form.Control placeholder="Demo Topic Name" />
						</Form.Group>
						<Form.Row>
							<hr style={{ width: "100%" }} />
							<Form.Check
								type="checkbox"
								label="Batch A"
								style={{ marginRight: "10%" }}
								checked={checked}
								onChange={() => {
									setChecked(!checked);
								}}
							/>
							<img src={require("../../../images/user.png")} />
							40 Students
							{checked ? (
								<Button
									variant="secondary"
									size="sm"
									style={{ marginLeft: "60%", marginTop: "-20px" }}>
									{" "}
									<Batch />
								</Button>
							) : (
								<div></div>
							)}
							<hr style={{ width: "100%" }} />
						</Form.Row>
						<Form.Row>
							<Form.Check
								type="checkbox"
								label="Batch B"
								style={{ marginRight: "10%" }}
								checked={checked2}
								onChange={() => {
									setChecked2(!checked2);
								}}
							/>
							<img src={require("../../../images/user.png")} />
							40 Students
							{checked2 ? (
								<Button
									variant="secondary"
									size="sm"
									style={{ marginLeft: "60%", marginTop: "-20px" }}>
									{" "}
									<Batch />
								</Button>
							) : (
								<div></div>
							)}
							<hr style={{ width: "100%" }} />
						</Form.Row>
						<Form.Row>
							<Form.Check
								type="checkbox"
								label="Batch C"
								style={{ marginRight: "10%" }}
								checked={checked3}
								onChange={() => {
									setChecked3(!checked3);
								}}
							/>
							<img src={require("../../../images/user.png")} />
							40 Students
							{checked3 ? (
								<Button
									variant="secondary"
									size="sm"
									style={{ marginLeft: "60%", marginTop: "-20px" }}>
									{" "}
									<Batch />
								</Button>
							) : (
								<div></div>
							)}
							<hr style={{ width: "100%" }} />
						</Form.Row>

						<Form.Group controlId="formGridAddress1">
							<Form.Label>Topic Description (Optional)</Form.Label>
							<Form.Control type="textarea" />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
export default Topic_Form;

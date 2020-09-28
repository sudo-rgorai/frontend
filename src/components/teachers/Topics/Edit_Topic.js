import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import { Edit } from "@material-ui/icons";
function Edit_Form() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<p onClick={handleShow}>
				<Edit style={{ padding: "4px" }} />
			</p>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Topic Name</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group controlId="formGridAddress1">
							<Form.Label>Topic Name</Form.Label>
							<Form.Control placeholder="Demo Topic Name" />
						</Form.Group>
						<Form.Row>
							<hr style={{ width: "100%" }} />
							<Form.Check
								type="checkbox"
								label="Batch A"
								style={{ marginRight: "10%" }}
							/>
							<img src={require("../../../images/user.png")} />
							40 Students
							<Button
								variant="secondary"
								size="sm"
								style={{ marginLeft: "60%", marginTop: "-20px" }}>
								{" "}
								Choose Schedule
							</Button>
							<hr style={{ width: "100%" }} />
						</Form.Row>
						<Form.Row>
							<Form.Check
								type="checkbox"
								label="Batch B"
								style={{ marginRight: "10%" }}
							/>
							<img src={require("../../../images/user.png")} />
							40 Students
							<Button
								variant="secondary"
								size="sm"
								style={{ marginLeft: "60%", marginTop: "-20px" }}>
								{" "}
								Choose Schedule
							</Button>
							<hr style={{ width: "100%" }} />
						</Form.Row>
						<Form.Row>
							<Form.Check
								type="checkbox"
								label="Batch C"
								style={{ marginRight: "10%" }}
							/>
							<img src={require("../../../images/user.png")} />
							40 Students
							<div
								style={{
									marginLeft: "5%",
									overflowWrap: "break-word",
									wordWrap: "break-word",
								}}>
								Mo, Tu, We 4pm - 5pm
							</div>
							<Button
								variant="secondary"
								size="sm"
								style={{ marginLeft: "60%", marginTop: "-20px" }}>
								{" "}
								Choose Schedule
							</Button>
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
			{/*  */}
		</>
	);
}
export default Edit_Form;

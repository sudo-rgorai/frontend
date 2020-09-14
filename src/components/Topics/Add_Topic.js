import React from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

export default function Topic_Form() {
	return (
		<Form>
			<Form.Group controlId='formGridAddress1'>
				<Form.Label>Topic Name</Form.Label>
				<Form.Control placeholder='Demo Topic Name' />
			</Form.Group>
			<Form.Row>
				<hr style={{ width: "100%" }} />
				<Form.Check
					type='checkbox'
					label='Batch A'
					style={{ marginRight: "10%" }}
				/>
				<img src={require("../../../src/images/user.png")} />
				40 Students
				<Button
					variant='secondary'
					size='sm'
					style={{ marginLeft: "60%", marginTop: "-20px" }}>
					{" "}
					Choose Schedule
				</Button>
				<hr style={{ width: "100%" }} />
			</Form.Row>
			<Form.Row>
				<Form.Check
					type='checkbox'
					label='Batch B'
					style={{ marginRight: "10%" }}
				/>
				<img src={require("../../../src/images/user.png")} />
				40 Students
				<Button
					variant='secondary'
					size='sm'
					style={{ marginLeft: "60%", marginTop: "-20px" }}>
					{" "}
					Choose Schedule
				</Button>
				<hr style={{ width: "100%" }} />
			</Form.Row>
			<Form.Row>
				<Form.Check
					type='checkbox'
					label='Batch C'
					style={{ marginRight: "10%" }}
				/>
				<img src={require("../../../src/images/user.png")} />
				40 Students
				<Button
					variant='secondary'
					size='sm'
					style={{ marginLeft: "60%", marginTop: "-20px" }}>
					{" "}
					Choose Schedule
				</Button>
				<hr style={{ width: "100%" }} />
			</Form.Row>

			<Form.Group controlId='formGridAddress1'>
				<Form.Label>Topic Description (Optional)</Form.Label>
				<Form.Control type='textarea' />
			</Form.Group>
		</Form>
	);
}

import React from "react";
import { Modal } from "react-bootstrap";
import { makeStyles, Button, Grid, Card, CardContent } from "@material-ui/core";

// import individual from "../images/person-24px.svg";
// import bulk from "../images/people-24px.svg";

import PersonIcon from "@material-ui/icons/Person";
import PeopleIcon from "@material-ui/icons/People";

const useStyles = makeStyles({
	root: {
		maxWidth: 200,
	},
	table: {
		minWidth: 650,
	},
	subjectName: {
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: "24px",
	},
	textField: {
		display: "flex",
		flexWrap: "wrap",
	},
});

export default function AddStudentModal(props) {
	const classes = useStyles();
	return (
		<Modal
			{...props}
			size="md"
			autoDetectWindowHeight={false}
			autoScrollBodyContent={false}
			contentStyle={{ width: "100vw", maxWidth: "none" }}>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Add Students
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div>
					<Grid
						container
						spacing={0}
						direction="column"
						alignItems="center"
						justify="center"
						style={{ minHeight: "50px" }}>
						<Grid item xs={12}>
							<div style={{ fontSize: 16 }}>How would you like to add?</div>
						</Grid>
					</Grid>
					<Grid
						container
						spacing={6}
						direction="row"
						alignItems="center"
						justify="center">
						<Grid item xs={6}>
							<Card
								onClick={props.onManual}
								className={classes.root}
								style={{
									backgroundColor: "#f1f3f8",
									minHeight: 250,
									cursor: "pointer",
								}}>
								<CardContent
									direction="column"
									alignItems="center"
									justify="center"
									style={{ textAlign: "center" }}>
									<PersonIcon style={{ fontSize: "500%" }} />
									<div style={{ fontSize: 24 }}>Individual-Manually</div>
									Add students manually
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={6}>
							<Card
								onClick={props.onLink}
								className={classes.root}
								style={{
									backgroundColor: "#f1f3f8",
									minHeight: 250,
									cursor: "pointer",
								}}>
								<CardContent
									direction="column"
									alignItems="center"
									justify="center"
									style={{ textAlign: "center" }}>
									<PeopleIcon style={{ fontSize: "500%" }} />
									<div style={{ fontSize: 24 }}>Generate link</div>
									Get shareable link
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Cancel</Button>
			</Modal.Footer>
		</Modal>
	);
}

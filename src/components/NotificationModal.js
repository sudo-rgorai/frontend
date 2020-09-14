import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Notifications } from "@material-ui/icons";
import { Button } from "@material-ui/core";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
function rand() {
	return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
	const top = 50 + rand();
	const left = 50 + rand();

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: "absolute",
		width: 600,
		backgroundColor: theme.palette.background.paper,
		border: "2px solid #000",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
	table: {
		minWidth: 400,
	},
}));
function createData(name) {
	return { name };
}

const rows = [
	createData("Batch A class test 9th sep"),
	createData("Assigment Submission by 24th sep"),
	createData("View Grades  of Calculus"),
	createData("Batch B Quiz to be live shortly"),
	createData("all the best for the upcoming exams"),
];

export default function SimpleModal() {
	const classes = useStyles();
	// getModalStyle is not a pure function, we roll the style only on the first render
	const [modalStyle] = React.useState(getModalStyle);
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const body = (
		<div style={modalStyle} className={classes.paper}>
			<h2 id='simple-modal-title'>
				Notifications
				<span
					onClick={handleClose}
					style={{ float: "right", cursor: "pointer" }}>
					x
				</span>
			</h2>
			<p id='simple-modal-description'>
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label='simple table'>
						<TableHead>
							<TableRow>
								<TableCell>Messages</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<TableRow key={row.name}>
									<TableCell component='th' scope='row'>
										{row.name}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</p>
		</div>
	);

	return (
		<div>
			<button
				type='button'
				onClick={handleOpen}
				style={{ outline: "none", border: "0px solid white" }}>
				<Notifications />
			</button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby='simple-modal-title'
				aria-describedby='simple-modal-description'>
				{body}
			</Modal>
		</div>
	);
}

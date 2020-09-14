import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Row, Col } from "react-bootstrap";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	Paper,
	IconButton,
	Button,
	CircularProgress,
	AppBar,
	Toolbar,
	Typography,
} from "@material-ui/core";
import {
	Add as AddIcon,
	UnfoldMore as UnfoldMoreIcon,
	Assignment as AssignmentIcon,
	MoreVert as MoreVertIcon,
} from "@material-ui/icons";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
	subjectName: {
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: "24px",
	},
});

function createData(name, classes, progress, icons) {
	return { name, classes, progress, icons };
}

const rows = [
	createData("Assign 1", "23 Aug '20 @ 5.00pm", "80", "AssignmentIcon"),
	createData("Quiz 1", "10 Aug '20 @ 8.00pm", "80", "HelpOutlineIcon"),
	createData("Subj. Assign 1", "10 Aug '20 @ 8.00pm", "70", "AssignmentIcon"),
	createData("Quiz 2", "Tomorrow at 5.00pm", "90", "HelpOutlineIcon"),
	createData("Quiz Long ...", "10 Aug '20 @ 8.00pm", "60", "HelpOutlineIcon"),
];

export default function StudentsDataGrid() {
	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<br />
			<Container>
				<Row>
					<Col
						md={{ span: 4, offset: 4 }}
						style={{ position: "relative", left: "20vw" }}>
						<Button color='error' variant='contained'>
							<AddIcon />
							&nbsp; New Assignments
						</Button>
					</Col>
				</Row>
			</Container>
			<br />
			<AppBar position='static' color='transparent'>
				<Toolbar variant='dense'>
					<Typography
						variant='h6'
						color='inherit'
						align='center'
						style={{ marginLeft: "7%" }}>
						Name
					</Typography>

					<IconButton
						edge='start'
						className={classes.menuButton}
						color='inherit'
						aria-label='menu'>
						<UnfoldMoreIcon />
					</IconButton>
					<Typography
						variant='h6'
						color='inherit'
						align='center'
						style={{ marginLeft: "23%" }}>
						Due Date
					</Typography>
				</Toolbar>
			</AppBar>
			<Table className={classes.table} aria-label='simple table'>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name}>
							<TableCell>
								<AssignmentIcon />
							</TableCell>
							<TableCell component='th' scope='row'>
								{row.name}
							</TableCell>
							<TableCell>
								<CircularProgress
									value={row.progress}
									variant='static'
									color='inherit'
								/>
							</TableCell>
							<TableCell>{row.classes} </TableCell>
							<TableCell align='right'>
								<Button variant='contained'>View Submissions</Button>
								<IconButton color='secondary' component='span'>
									<MoreVertIcon />
								</IconButton>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

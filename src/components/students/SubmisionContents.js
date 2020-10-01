import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import {
	NotificationsOutlined,
	FlashOn,
	Search,
	GetApp,
	MoreVert,
} from "@material-ui/icons";

import Button from "@material-ui/core/Button";

import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Box from "@material-ui/core/Box";
// import SubmissionContent from "./SubmisionContents";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Paper from "@material-ui/core/Paper";
import DoughnutChart from "./DonutChart";
import DonutChart from "./DonutChart";
import { Link } from "react-router-dom";
import CreateClassroom from "./CreateClassroom";

function handleClick(event) {
	event.preventDefault();
	console.info("You clicked a breadcrumb.");
}
function createData(name, time, files, grade) {
	return { name, time, files, grade };
}
const rows = [
	createData("Ananya Mahato", "10 Aug'20 @ 8:00 am", "FIlename1.pdf", "A"),
	createData("Ananya Mahato", "10 Aug'20 @ 8:00 am", "FIlename1.pdf", "A"),
	createData("Ananya Mahato", "10 Aug'20 @ 8:00 am", "FIlename1.pdf", "A"),
	createData("Ananya Mahato", "10 Aug'20 @ 8:00 am", "FIlename1.pdf", "A"),
	createData("Ananya Mahato", "10 Aug'20 @ 8:00 am", "FIlename1.pdf", "A"),
];
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
		marginLeft: "20px",
	},
	root1: {
		"& > * + *": {
			marginTop: theme.spacing(2),
		},
		marginTop: "-5%",
		marginBottom: "2%",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},

	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginLeft: 0,
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(1),
			width: "auto",
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	inputRoot: {
		color: "inherit",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,

		width: "100%",
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 70,
		marginTop: "-10px",
	},
	selectEmpty: {
		marginTop: theme.spacing(1),
	},
	table: {
		minWidth: 650,
	},
	root2: {
		minWidth: 240,
	},
}));
function SubmissionContent() {
	const classes = useStyles();
	const [age, setAge] = React.useState("");

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	return (
		<div style={{ marginRight: "5%" }}>
			<div className={classes.root1}>
				<Breadcrumbs
					separator={<NavigateNextIcon fontSize="small" />}
					aria-label="breadcrumb">
					<Link color="inherit" to="/student/courses">
						My Courseboard
					</Link>
					<Link color="inherit" to="/student/assign">
						Class Name 1
					</Link>
					<Typography color="textPrimary">Assignment 1 Submission</Typography>
				</Breadcrumbs>
				<div style={{ marginLeft: "90%" }}>
					{/* <NotificationsOutlined style={{ marginRight: "20px" }} />
					<FlashOn
						style={{
							color: "yellow",
							backgroundColor: "black",
							padding: "2px",
							borderRadius: "5px",
							marginRight: "20px",
						}}
					/> */}
					<CreateClassroom />
				</div>
			</div>

			<div className={classes.root}>
				<Grid container>
					<Paper className={classes.paper}>
						<Grid item xs={3}>
							<div className="cards" style={{ flexDirection: "column" }}>
								<Card
									className={classes.root2}
									style={{ marginBottom: "20px" }}>
									<CardContent>
										<Typography className={classes.title} gutterBottom>
											BATCH A
										</Typography>
										<Typography className={classes.pos} color="textSecondary">
											<DoughnutChart /> 48/50
										</Typography>
									</CardContent>
								</Card>
								<Card
									className={classes.root2}
									style={{ marginBottom: "20px" }}>
									<CardContent>
										<Typography className={classes.title} gutterBottom>
											BATCH A
										</Typography>
										<Typography className={classes.pos} color="textSecondary">
											<DoughnutChart /> 48/50
										</Typography>
									</CardContent>
								</Card>
								<Card
									className={classes.root2}
									style={{ marginBottom: "20px" }}>
									<CardContent>
										<Typography className={classes.title} gutterBottom>
											BATCH A
										</Typography>
										<Typography className={classes.pos} color="textSecondary">
											<DoughnutChart /> 48/50
										</Typography>
									</CardContent>
								</Card>
							</div>
						</Grid>
					</Paper>
					<Grid item xs={1}></Grid>
					<Grid item xs={7}>
						<Paper className={classes.paper}>
							<div
								className={classes.search}
								style={{ backgroundColor: "rgba(222, 231, 238, 0.2)" }}>
								<div className={classes.searchIcon}>
									<Search />
								</div>
								<InputBase
									placeholder="Search Submissions ..."
									classes={{
										root: classes.inputRoot,
										input: classes.inputInput,
									}}
									inputProps={{ "aria-label": "search" }}
								/>
							</div>
							<div
								className="buttonGroup"
								style={{ float: "right", marginTop: "3%" }}>
								<Button variant="outlined">
									<GetApp />
									Download All Files
								</Button>
								<FormControl className={classes.formControl}>
									<InputLabel id="demo-simple-select-label">More</InputLabel>
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select-label"
										value={age}
										onChange={handleChange}
										label="Age">
										<MenuItem value="">
											<em>None</em>
										</MenuItem>
										<MenuItem value={10}>Ten</MenuItem>
										<MenuItem value={20}>Twenty</MenuItem>
										<MenuItem value={30}>Thirty</MenuItem>
									</Select>
								</FormControl>
							</div>
							<TableContainer component={Paper} style={{ marginTop: "10%" }}>
								<Table className={classes.table} aria-label="simple table">
									<TableHead
										style={{ backgroundColor: "rgba(222, 231, 238, 0.2)" }}>
										<TableRow>
											<TableCell>NAME</TableCell>
											<TableCell align="right">SUBMITTED ON</TableCell>
											<TableCell align="right">FILES</TableCell>
											<TableCell align="right">GRADE</TableCell>
											<TableCell align="right"></TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{rows.map((row) => (
											<TableRow key={row.name}>
												<TableCell component="th" scope="row">
													{row.name}
												</TableCell>
												<TableCell align="right">{row.time}</TableCell>
												<TableCell align="right">
													<a>
														{row.files} <GetApp />
													</a>
												</TableCell>

												<TableCell align="right">
													<FormControl className={classes.formControl}>
														<InputLabel id="demo-simple-select-label">
															{row.grade}
														</InputLabel>
													</FormControl>
													<TextareaAutosize
														aria-label="empty textarea"
														placeholder="Add feedback"
														style={{ marginTop: "10px", width: "100px" }}
													/>
													<MoreVert
														style={{ marginTop: "-10px", marginLeft: "20px" }}
													/>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						</Paper>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default SubmissionContent;

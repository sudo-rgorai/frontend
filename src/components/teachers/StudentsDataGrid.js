import React from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import {
	XAxis,
	YAxis,
	ResponsiveContainer,
	BarChart,
	Bar,
	CartesianGrid,
	Tooltip,
	Pie,
	PieChart,
} from "recharts";
import {
	makeStyles,
	Typography,
	TextField,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	Paper,
	IconButton,
	Button,
	List,
	ListItem,
	ListItemText,
	Grid,
	Card,
	CardContent,
	Radio,
	RadioGroup,
	FormControl,
	FormControlLabel,
} from "@material-ui/core";
import {
	Add as AddIcon,
	GetApp as GetAppIcon,
	AccountCircle as AccountCircleIcon,
	DonutLargeRounded as DonutLargeRoundedIcon,
	Search as SearchIcon,
} from "@material-ui/icons";

// import individual from "../images/person-24px.svg";
// import bulk from "../images/people-24px.svg";

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

function ViewPerformanceModal(props) {
	const data = [
		{ name: "Test A", percent: 24 },
		{ name: "Test B", percent: 13 },
		{ name: "Test C", percent: 98 },
		{ name: "Test D", percent: 39 },
		{ name: "Test E", percent: 48 },
		{ name: "Test F", percent: 38 },
		{ name: "Test G", percent: 43 },
	];
	const data01 = [
		{ name: "Group A", value: 400 },
		{ name: "Group B", value: 300 },
		{ name: "Group C", value: 300 },
		{ name: "Group D", value: 200 },
		{ name: "Group E", value: 278 },
		{ name: "Group F", value: 189 },
	];
	const data02 = [
		{ name: "Group A", value: 240 },
		{ name: "Group B", value: 456 },
		{ name: "Group C", value: 139 },
		{ name: "Group D", value: 980 },
		{ name: "Group E", value: 390 },
		{ name: "Group F", value: 480 },
	];

	return (
		<Modal
			{...props}
			size="xl"
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Performance - {props.studentName}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body style={{ padding: "20px" }}>
				<Typography variant="h6" gutterBottom style={{ color: "teal" }}>
					Test-wise marks
				</Typography>
				<br />
				<ResponsiveContainer height={300}>
					<BarChart data={data} barCategoryGap="45%">
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Bar dataKey="percent" fill="#8884d8" />
					</BarChart>
				</ResponsiveContainer>
				<br />
				<Typography variant="h6" gutterBottom style={{ color: "teal" }}>
					Overall
				</Typography>
				<Row>
					<Col md={4} align="center">
						<PieChart width={250} height={250}>
							<Tooltip />
							<Pie
								data={data01}
								dataKey="value"
								nameKey="name"
								cx="50%"
								cy="50%"
								outerRadius={50}
								fill="#8884d8"
							/>
							<Pie
								data={data02}
								dataKey="value"
								nameKey="name"
								cx="50%"
								cy="50%"
								innerRadius={60}
								outerRadius={80}
								fill="#82ca9d"
							/>
						</PieChart>
						Quizzes
					</Col>
					<Col md={4} align="center">
						<PieChart width={250} height={250}>
							<Tooltip />
							<Pie
								data={data01}
								dataKey="value"
								nameKey="name"
								cx="50%"
								cy="50%"
								outerRadius={50}
								fill="#8884d8"
							/>
							<Pie
								data={data02}
								dataKey="value"
								nameKey="name"
								cx="50%"
								cy="50%"
								innerRadius={60}
								outerRadius={80}
								fill="#82ca9d"
							/>
						</PieChart>
						Lessons
					</Col>
					<Col md={4} align="center">
						<PieChart width={250} height={250}>
							<Tooltip />
							<Pie
								data={data01}
								dataKey="value"
								nameKey="name"
								cx="50%"
								cy="50%"
								outerRadius={50}
								fill="#8884d8"
							/>
							<Pie
								data={data02}
								dataKey="value"
								nameKey="name"
								cx="50%"
								cy="50%"
								innerRadius={60}
								outerRadius={80}
								fill="#82ca9d"
							/>
						</PieChart>
						Assignments
					</Col>
				</Row>
				<br />
				<Typography variant="h6" gutterBottom style={{ color: "teal" }}>
					Remarks
				</Typography>
				<br />
				<List>
					<ListItem>
						<ListItemText primary="Test 1" secondary="Nice work!" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Quiz 3" secondary="Need some improvement." />
					</ListItem>
					<ListItem>
						<ListItemText primary="Assignment" secondary="Can do better!" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Test 2" secondary="Nice work." />
					</ListItem>
				</List>
			</Modal.Body>
		</Modal>
	);
}

const rows = [
	{
		name: "Student Name",
		email: "hey@ssup.com",
		classes: "25/50 Classes",
		tests: "2/3 Tests",
	},
	{
		name: "Student Name",
		email: "hey@ssup.com",
		classes: "25/50 Classes",
		tests: "2/3 Tests",
	},
	{
		name: "Student Name",
		email: "hey@ssup.com",
		classes: "25/50 Classes",
		tests: "2/3 Tests",
	},
	{
		name: "Student Name",
		email: "hey@ssup.com",
		classes: "25/50 Classes",
		tests: "2/3 Tests",
	},
	{
		name: "Student Name",
		email: "hey@ssup.com",
		classes: "25/50 Classes",
		tests: "2/3 Tests",
	},
];

function AddStudentModal(props) {
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
								style={{ backgroundColor: "#f1f3f8", minHeight: 250 }}>
								<CardContent
									direction="column"
									alignItems="center"
									justify="center"
									style={{ textAlign: "center" }}>
									{/* <img src={individual} style={{ width: "128px" }} alt="" /> */}
									<div style={{ fontSize: 24 }}>Individual-Manually</div>
									Add students manually
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={6}>
							<Card
								onClick={props.onLink}
								className={classes.root}
								style={{ backgroundColor: "#f1f3f8", minHeight: 250 }}>
								<CardContent
									direction="column"
									alignItems="center"
									justify="center"
									style={{ textAlign: "center" }}>
									{/* <img src={bulk} style={{ width: "128px" }} alt="" /> */}
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

function AddStudentManuallyModal(props) {
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
					Add Students - Enter email addresses
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Grid
					container
					direction="row"
					alignItems="center"
					justify="center"
					style={{ minHeight: "50px" }}>
					<Grid item xs={12}>
						<div style={{ fontSize: 16 }}>Enter emails separated by commas</div>
						<div className={classes.textField}>
							<div style={{ width: "95%" }}>
								<TextField
									id="standard-full-width"
									label="Emails"
									style={{ margin: 8 }}
									fullWidth
									multiline
									margin="none"
									rows={4}
									size="medium"
									variant="filled"
									InputLabelProps={{
										shrink: true,
									}}
								/>
							</div>
						</div>
						<div style={{ fontSize: 16 }}>Select Applicable Batch</div>
						<div style={{ width: "95%" }}>
							<FormControl component="fieldset">
								<RadioGroup
									row
									aria-label="position"
									name="position"
									defaultValue="top">
									<FormControlLabel
										value="A"
										control={<Radio color="primary" />}
										label="Batch A"
									/>
									<FormControlLabel
										value="B"
										control={<Radio color="primary" />}
										label="Batch B"
									/>
									<FormControlLabel
										value="C"
										control={<Radio color="primary" />}
										label="Batch C"
									/>
									<FormControlLabel
										value="D"
										control={<Radio color="primary" />}
										label="Batch D"
									/>
									<FormControlLabel
										value="E"
										control={<Radio color="primary" />}
										label="Batch E"
									/>
								</RadioGroup>
							</FormControl>
						</div>
					</Grid>
				</Grid>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Cancel</Button>
				<Button onClick={props.onHide} style={{ backgroundColor: "#ffdd42" }}>
					Create
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

function ShareLinkModal(props) {
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
					Add Students - Share course link
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Grid
					container
					direction="row"
					alignItems="center"
					justify="center"
					style={{ minHeight: "50px" }}>
					<Grid item xs={12}>
						<div style={{ fontSize: 16 }}>Select Applicable Batch</div>
						<div style={{ width: "95%" }}>
							<FormControl component="fieldset">
								<RadioGroup
									row
									aria-label="position"
									name="position"
									defaultValue="top">
									<FormControlLabel
										value="A"
										control={<Radio color="primary" />}
										label="Batch A"
									/>
									<FormControlLabel
										value="B"
										control={<Radio color="primary" />}
										label="Batch B"
									/>
									<FormControlLabel
										value="C"
										control={<Radio color="primary" />}
										label="Batch C"
									/>
									<FormControlLabel
										value="D"
										control={<Radio color="primary" />}
										label="Batch D"
									/>
									<FormControlLabel
										value="E"
										control={<Radio color="primary" />}
										label="Batch E"
									/>
								</RadioGroup>
							</FormControl>
							<div className={classes.textField}>
								<div style={{ width: "95%", display: "inline-block" }}>
									<TextField
										id="standard-full-width"
										label="Link"
										style={{ margin: 8 }}
										defaultValue="https://link.to.share/id=jvFHmBjVgBlKmBjbk368b"
										fullWidth
										disabled
										margin="none"
										size="medium"
										variant="filled"
										InputLabelProps={{
											shrink: true,
										}}
									/>
								</div>
							</div>
						</div>
					</Grid>
				</Grid>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Cancel</Button>
				<Button onClick={props.onHide} style={{ backgroundColor: "#ffdd42" }}>
					Copy
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default function StudentsDataGrid() {
	const classes = useStyles();
	const [
		viewPerformanceModalShow,
		setViewPerformanceModalShow,
	] = React.useState(false);

	const [addStudentModalShow, setAddStudentModalShow] = React.useState(false);
	const [
		addStudentManuallyModalShow,
		setAddStudentManuallyModalShow,
	] = React.useState(false);
	const [shareLinkModalShow, setShareLinkModalShow] = React.useState(false);

	return (
		<TableContainer component={Paper}>
			<br />
			<Container>
				<Row>
					<Col md={4}>
						<TextField
							id="outlined-basic"
							label={
								<>
									<SearchIcon />
									&nbsp; Search Students...
								</>
							}
							variant="outlined"
							size="small"
						/>
					</Col>
					<Col md={{ span: 4, offset: 4 }} align="right">
						<Button
							color="error"
							variant="contained"
							onClick={() => setAddStudentModalShow(true)}>
							<AddIcon />
							&nbsp; Add Students
						</Button>
					</Col>
				</Row>
			</Container>
			<AddStudentModal
				show={addStudentModalShow}
				onHide={() => setAddStudentModalShow(false)}
				onManual={() => {
					setAddStudentModalShow(false);
					setAddStudentManuallyModalShow(true);
				}}
				onLink={() => {
					setAddStudentModalShow(false);
					setShareLinkModalShow(true);
				}}
			/>
			<AddStudentManuallyModal
				show={addStudentManuallyModalShow}
				onHide={() => setAddStudentManuallyModalShow(false)}
			/>
			<ShareLinkModal
				show={shareLinkModalShow}
				onHide={() => setShareLinkModalShow(false)}
			/>
			<br />
			<Table className={classes.table} aria-label="simple table">
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name}>
							<TableCell>
								<AccountCircleIcon />
							</TableCell>
							<TableCell component="th" scope="row">
								<strong>{row.name}</strong>
								<br />
								{row.email}
							</TableCell>
							<TableCell>
								<DonutLargeRoundedIcon />
							</TableCell>
							<TableCell>
								{row.classes} <br /> {row.tests}{" "}
							</TableCell>
							<TableCell align="right">
								<ViewPerformanceModal
									show={viewPerformanceModalShow}
									onHide={() => setViewPerformanceModalShow(false)}
									studentName={row.name}
								/>
								<Button
									variant="contained"
									onClick={() => setViewPerformanceModalShow(true)}>
									View Performance
								</Button>
								<IconButton color="secondary" component="span">
									<GetAppIcon />
								</IconButton>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

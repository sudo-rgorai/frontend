// import React from "react";
// import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";
// import SubmissionContent from "./SubmisionContents";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Paper from "@material-ui/core/Paper";
// import DoughnutChart from "./DonutChart";
// import DonutChart from "./DonutChart";
// function TabPanel(props) {
// 	const { children, value, index, ...other } = props;
// 	return (
// 		<div
// 			role='tabpanel'
// 			hidden={value !== index}
// 			id={`vertical-tabpanel-${index}`}
// 			aria-labelledby={`vertical-tab-${index}`}
// 			{...other}>
// 			{value === index && (
// 				<Box p={3}>
// 					<Typography>{children}</Typography>
// 				</Box>
// 			)}
// 		</div>
// 	);
// }
// TabPanel.propTypes = {
// 	children: PropTypes.node,
// 	index: PropTypes.any.isRequired,
// 	value: PropTypes.any.isRequired,
// };

// function a11yProps(index) {
// 	return {
// 		id: `vertical-tab-${index}`,
// 		"aria-controls": `vertical-tabpanel-${index}`,
// 	};
// }
// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		flexGrow: 1,
// 		backgroundColor: theme.palette.background.paper,
// 		display: "flex",
// 		height: 224,
// 	},
// 	tabs: {
// 		height: "100vh",
// 	},
// 	title: {
// 		fontSize: 14,
// 	},
// 	pos: {
// 		marginBottom: 12,
// 	},
// 	paper: {
// 		padding: theme.spacing(2),
// 		textAlign: "center",
// 		color: theme.palette.text.secondary,
// 		marginLeft: "20px",
// 	},
// }));

// function Cards() {
// 	const classes = useStyles();
// 	return (
// 		<div>
// 			<div className='cards'>
// 				<Card className={classes.root} style={{ marginBottom: "20px" }}>
// 					<CardContent>
// 						<Typography className={classes.title} gutterBottom>
// 							BATCH A
// 						</Typography>
// 						<Typography className={classes.pos} color='textSecondary'>
// 							<DoughnutChart /> 48/50
// 						</Typography>
// 					</CardContent>
// 				</Card>
// 			</div>
// 		</div>
// 	);
// }

// function Submission() {
// 	const classes = useStyles();
// 	const [value, setValue] = React.useState(0);

// 	const handleChange = (event, newValue) => {
// 		setValue(newValue);
// 	};

// 	return (
// 		<div className={classes.root}>
// 			<Tabs
// 				orientation='vertical'
// 				// variant='scrollable'
// 				value={value}
// 				onChange={handleChange}
// 				aria-label='Vertical tabs example'
// 				className={classes.tabs}>
// 				<Tab label='Batch A' {...a11yProps(0)} />
// 				<Tab label='Item Two' {...a11yProps(1)} />
// 				<Tab label='Item Three' {...a11yProps(2)} />
// 				<Tab label='Item Four' {...a11yProps(3)} />
// 				<Tab label='Item Five' {...a11yProps(4)} />
// 				<Tab label='Item Six' {...a11yProps(5)} />
// 				<Tab label='Item Seven' {...a11yProps(6)} />
// 			</Tabs>
// 			<TabPanel value={value} index={0}>
// 				{/* <SubmissionContent />S */}
// 			</TabPanel>
// 			<TabPanel value={value} index={1}>
// 				Item Two
// 			</TabPanel>
// 			<TabPanel value={value} index={2}>
// 				Item Three
// 			</TabPanel>
// 			<TabPanel value={value} index={3}>
// 				Item Four
// 			</TabPanel>
// 			<TabPanel value={value} index={4}>
// 				Item Five
// 			</TabPanel>
// 			<TabPanel value={value} index={5}>
// 				Item Six
// 			</TabPanel>
// 			<TabPanel value={value} index={6}>
// 				Item Seven
// 			</TabPanel>
// 		</div>
// 	);
// 	// const classes = useStyles();
// 	// const [age, setAge] = React.useState("");
// 	// const handleChange = (event) => {
// 	// 	setAge(event.target.value);
// 	// };
// 	// return (
// 	// 	<div style={{ marginRight: "5%" }}>
// 	//
// 	// 		<div className={classes.root}>
// 	// 			<Grid container>
// 	// <Grid item xs={12} sm={3}></Grid>;
// 	// 			</Grid>
// 	// 		</div>
// 	// 	</div>
// 	// );
// }

// export default Submission;

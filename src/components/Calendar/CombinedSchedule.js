import React, { useState, Component } from "react";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Row, Col } from "react-bootstrap";
import "react-calendar/dist/Calendar.css";
import Day from "./Day";
import Month from "./Month";
import Week from "./Week";
import Modal from "./Modal";
import Schedule from "./Schedule";
import PropTypes from "prop-types";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Calendar from "react-calendar";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NotificationsIcon from "@material-ui/icons/Notifications";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		width: "100%",
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
	root1: {
		flexGrow: 1,
		width: "100%",
		backgroundColor: theme.palette.background.paper,
	},
}));

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`scrollable-auto-tabpanel-${index}`}
			aria-labelledby={`scrollable-auto-tab-${index}`}
			{...other}>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}
TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `scrollable-auto-tab-${index}`,
		"aria-controls": `scrollable-auto-tabpanel-${index}`,
	};
}
function CombinedCalender() {
	const [value, setValue] = React.useState(0);

	const handleChange1 = (event, newValue) => {
		setValue(newValue);
	};
	const [type, setType] = useState("");
	const classes = useStyles();
	function handleChange(e) {
		setType(e.target.value);
	}

	// Displaying Todays date on the navbar

	var today = new Date(),
	month = today.toLocaleString();

	return (
		<div>
			<Container>
				<div
					style={{
						top: "6%",
						display: "flex",
						marginBottom: "2%",
					}}>
					<h4>Calender</h4>
					<div
						style={{
							alignItems: "center",
							position: "relative",
							display: "flex",
							marginLeft: "70%",
						}}>
						<NotificationsIcon style={{ marginRight: "10px" }} />

						<Modal />

						<FlashOnIcon
							style={{
								backgroundColor: "black",
								color: "#FFDD42",
								width: "30px",
								height: "30px",
								borderRadius: "5px",
								marginRight: "10px",
							}}
						/>
					</div>
				</div>
				<div className={classes.root}>
					<Grid container spacing={2}>
						<Grid item xs={4}>
							<div className={classes.root}>
								<AppBar
									position='static'
									color='default'
									style={{ height: "5%", border: "1px solid white" }}>
									<Tabs
										value={value}
										onChange={handleChange1}
										indicatorColor='primary'
										variant='scrollable'
										scrollButtons='auto'
										style={{
											color: "black",
											background: '#FFFFFF',
											boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
											borderRadius: '8px', 
										}}
										aria-label='scrollable auto tabs example'>
										<Link to="/calendar"><Tab label='Calendar' {...a11yProps(0)} /></Link>
										<Tab label='Schedule' {...a11yProps(1)}  />
									</Tabs>
								</AppBar>
								{/*<TabPanel value={value} index={0}>
									<Calendar style={{ outline: "none" }} />
								</TabPanel>
								<TabPanel value={value} index={1}>
									<Calendar style={{ outline: "none" }} />
								</TabPanel> */}
							</div>
						</Grid>
						<Grid item xs={8}>

								<div style={{ marginTop: "10%" }}><Schedule /></div>

						</Grid>
					</Grid>
				</div>
				{/* <Row>
					<Col>
						<Calendar onChange={this.onChange} value={this.state.date} />
					</Col>
					<Col md={2}>
						<InputLabel id='demo-simple-select-label'>Show By</InputLabel>
						<Select
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							value={type}
							onChange={handleChange}>
							<MenuItem value={"day"}>Day</MenuItem>
							<MenuItem value={"week"}>Week</MenuItem>
							<MenuItem value={"month"}>Month</MenuItem>
						</Select>
					</Col>
					<Col md={{ span: 2, offset: 8 }}>
						<Modal />
					</Col>
				</Row> */}
			</Container>
		</div>
	);
}
export default CombinedCalender;

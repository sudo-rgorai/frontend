import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import SubmissionTabs from "./SubmissionTabs";
import DataGrid from "./DataGrid";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
export default function DisabledTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Paper square>
			<Tabs
				value={value}
				indicatorColor="primary"
				textColor="primary"
				onChange={handleChange}
				aria-label="disabled tabs example">
				<Tab
					style={{ color: "#000", fontWeight: "bold", fontSize: "14px" }}
					label="Upcoming Classes"
				/>
				<Tab
					style={{ color: "#000", fontWeight: "bold", fontSize: "14px" }}
					label="Submissions"
				/>
				<div>
					<h2 style={{ position: "absolute", left: "70%", fontSize: "18px" }}>
						Show for:
						<Button
							aria-controls="simple-menu"
							aria-haspopup="true"
							onClick={handleClick}
							style={{ backgroundColor: "#e6e9ed" }}>
							This Week
							<ArrowDropDownIcon />
						</Button>
					</h2>

					<Menu
						id="simple-menu"
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={handleClose}>
						<MenuItem onClick={handleClose}>By Day</MenuItem>
						<MenuItem onClick={handleClose}>By Month</MenuItem>
						<MenuItem onClick={handleClose}>By Year</MenuItem>
					</Menu>
				</div>
			</Tabs>
			<TabPanel value={value} index={0}>
				<DataGrid></DataGrid>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<SubmissionTabs></SubmissionTabs>
			</TabPanel>
		</Paper>
	);
}

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

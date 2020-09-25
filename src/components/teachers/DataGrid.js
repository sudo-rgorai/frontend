import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "../../css/DataGrid.css";
import Chip from "@material-ui/core/Chip";
const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		maxWidth: "100%",
		backgroundColor: theme.palette.background.paper,
	},
}));

function Apple() {
	const classes = useStyles();

	return (
		<div>
			<h2 style={{ fontSize: "15px" }}>
				Today <Chip label="04" />
			</h2>

			<List
				component="nav"
				className={classes.root}
				aria-label="mailbox folders">
				<ListItem>
					<ListItemText className="HeadTab">Course </ListItemText>
					<ListItemText className="HeadTab">Batch </ListItemText>
					<ListItemText className="HeadTab">Batch Name </ListItemText>
					<ListItemText className="HeadTab">Schedule</ListItemText>
					{/* <ListItemText "Batch" style={{ marginLeft: "-20px" }} />
					<ListItemText "Batch Name" />
					<ListItemText "Schedule" /> */}
				</ListItem>
				<ListItem className="styleTab">
					<ListItemText primary="CourseName2" />
					<ListItemText primary="Batch A" />
					<ListItemText primary="Simple Extra Long N..." />
					<ListItemText primary="Today 5:00pm" />
					<Button
						variant="contained"
						style={{ backgroundColor: "gold", marginRight: "10px" }}
						disableElevation>
						Join Now
					</Button>
					<MoreVertIcon />
				</ListItem>
				<Divider light />
				<ListItem className="styleTab">
					<ListItemText primary="CourseName2" />
					<ListItemText primary="Batch A" />
					<ListItemText primary="Simple Extra Long N..." />
					<ListItemText primary="Today 5:00pm" />
					<Button
						variant="contained"
						style={{ backgroundColor: "gold", marginRight: "10px" }}
						disableElevation>
						Join Now
					</Button>
					<MoreVertIcon />
				</ListItem>
				<Divider light />
				<ListItem className="styleTab">
					<ListItemText primary="CourseName2" />
					<ListItemText primary="Batch A" />
					<ListItemText primary="Simple Extra Long N..." />
					<ListItemText primary="Today 5:00pm" />
					<Button
						variant="contained"
						style={{ backgroundColor: "gold", marginRight: "10px" }}
						disableElevation>
						Join Now
					</Button>
					<MoreVertIcon />
				</ListItem>
				<Divider light />
				<ListItem className="styleTab">
					<ListItemText primary="CourseName2" />
					<ListItemText primary="Batch A" />
					<ListItemText primary="Simple Extra Long N..." />
					<ListItemText primary="Today 5:00pm" />
					<Button
						variant="contained"
						style={{ backgroundColor: "gold", marginRight: "10px" }}
						disableElevation>
						Join Now
					</Button>
					<MoreVertIcon />
				</ListItem>
				<Divider />
			</List>

			<h2 style={{ fontSize: "15px" }}>
				Tomorrow <Chip label="02" />
			</h2>

			<List
				component="nav"
				className={classes.root}
				aria-label="mailbox folders">
				<ListItem className="styleTab">
					<ListItemText primary="CourseName2" />
					<ListItemText primary="Batch A" />
					<ListItemText primary="Simple Extra Long N..." />
					<ListItemText primary="Today 5:00pm" />
					<Button
						variant="contained"
						style={{ backgroundColor: "gold", marginRight: "10px" }}
						disableElevation>
						Join Now
					</Button>
					<MoreVertIcon />
				</ListItem>
				<Divider light />
				<ListItem className="styleTab">
					<ListItemText primary="CourseName2" />
					<ListItemText primary="Batch A" />
					<ListItemText primary="Simple Extra Long N..." />
					<ListItemText primary="Today 5:00pm" />
					<Button
						variant="contained"
						style={{ backgroundColor: "gold", marginRight: "10px" }}
						disableElevation>
						Join Now
					</Button>
					<MoreVertIcon />
				</ListItem>
				<Divider light />
			</List>
		</div>
	);
}

export default Apple;

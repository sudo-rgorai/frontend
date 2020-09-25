import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../../css/announce.css";
import Divider from "@material-ui/core/Divider";

import Pagination from "@material-ui/lab/Pagination";
const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: "30%",
		flexShrink: 0,
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),

		flexBasis: "60%",
	},
	root1: {
		"& > *": {
			marginTop: theme.spacing(2),
		},
	},
}));

export default function Announce() {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};
	return (
		<div className={classes.root}>
			<Accordion
				expanded={expanded !== "panel1"}
				onChange={handleChange("panel1")}>
				<AccordionSummary
					aria-controls="panel1bh-content"
					id="panel1bh-header"
					className="TopHead"
					style={{ backgroundColor: "black", color: "white" }}>
					<Typography className={classes.heading}>Sender</Typography>
					<Typography className={classes.secondaryHeading}>Title</Typography>
					<Typography className={classes.tertiaryHeading}>Date</Typography>
				</AccordionSummary>
			</Accordion>
			<Accordion
				expanded={expanded === "panel2"}
				onChange={handleChange("panel2")}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2bh-content"
					id="panel2bh-header">
					<Typography className={classes.heading}>Users</Typography>
					<Typography className={classes.secondaryHeading}>
						You are currently not an owner
					</Typography>
					<Typography className={classes.tertiaryHeading}>Date</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Donec placerat, lectus sed mattis semper, neque lectus feugiat
						lectus, varius pulvinar diam eros in elit. Pellentesque convallis
						laoreet laoreet.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel3"}
				onChange={handleChange("panel3")}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel3bh-content"
					id="panel3bh-header">
					<Typography className={classes.heading}>Advanced settings</Typography>
					<Typography className={classes.secondaryHeading}>
						Filtering has been entirely disabled for whole web server
					</Typography>
					<Typography className={classes.tertiaryHeading}>Date</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
						sit amet egestas eros, vitae egestas augue. Duis vel est augue.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion
				expanded={expanded === "panel4"}
				onChange={handleChange("panel4")}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel4bh-content"
					id="panel4bh-header">
					<Typography className={classes.heading}>Personal data</Typography>
					<Typography className={classes.secondaryHeading}>
						Filtering has been entirely disabled for whole web server
					</Typography>
					<Typography className={classes.tertiaryHeading}>Date</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
						sit amet egestas eros, vitae egestas augue. Duis vel est augue.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Divider id="divider" />
			<div id="footer-comp">
				<p style={{ marginTop: "10px" }}>Showing 10 out of 100 results</p>
				<div id="corner">
					<div className={classes.root1}>
						<Pagination count={10} variant="outlined" shape="rounded" />
					</div>
				</div>
			</div>
		</div>
	);
}

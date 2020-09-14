import React from "react";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import horizontalBarChart from "./HoriBar";
import HorizontalBarChart from "./HoriBar";
import "../css/Perform.css";
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
		marginLeft: "10px",
		boxShadow:
			" 0 4px 8px 0 rgba(191, 107, 250, 0.2), 0 6px 20px 0 rgba(191, 107, 250, 0.19);",
	},
}));

function PerformAnalysis() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container spacing={1}>
				<Grid item xs={8}>
					<Paper
						className={classes.paper}
						style={{ display: "flex", justifyContent: "center" }}>
						<div className='chart' style={{ width: "720px" }}>
							<LineChart />
							<p>1:B+ ,2:A, 3:A+</p>
						</div>
					</Paper>
					<Grid container spacing={1} style={{ marginTop: "2%" }}>
						<Grid item xs={6}>
							<Paper className={classes.paper}>
								<div style={{ width: "400px" }}>
									<HorizontalBarChart />
								</div>
							</Paper>
						</Grid>
						<Grid item xs={6}>
							<Paper className={classes.paper}>
								<div style={{ width: "400px" }}>
									<BarChart />
								</div>
							</Paper>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={4}>
					<Paper className={classes.paper} style={{ textAlign: "left" }}>
						<div class='sideBar' style={{ padding: "20px" }}>
							Science <Chip style={{ float: "right" }} label='B+' />
						</div>
						<div class='sideBar' style={{ padding: "20px" }}>
							Maths <Chip style={{ float: "right" }} label='A+' />
						</div>
						<div class='sideBar' style={{ padding: "20px" }}>
							History <Chip style={{ float: "right" }} label='A' />
						</div>
						<div class='sideBar' style={{ padding: "20px" }}>
							Games <Chip style={{ float: "right" }} label='A+' />
						</div>
						<div class='sideBar' style={{ padding: "20px" }}>
							Economics <Chip style={{ float: "right" }} label='A' />
						</div>
					</Paper>
				</Grid>
			</Grid>
		</div>
	);
}

export default PerformAnalysis;

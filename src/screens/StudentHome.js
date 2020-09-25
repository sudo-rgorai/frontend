import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import CreateClassroom from "../components/students/CreateClassroom";
import TeacherTabs from "../components/students/TeacherTabs";

const useStyles = makeStyles((theme) => ({
	title: {
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: "30px",
		lineHeight: "35px",
	},
	paper: {
		padding: theme.spacing(2),
		display: "flex",
		overflow: "auto",
		flexDirection: "column",
	},
	fixedHeight: {
		height: 240,
	},
}));

export default function HomePage() {
	const classes = useStyles();
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
	return (
		<Grid container spacing={3}>
			<Grid item xs={12} md={8} lg={9}>
				<Typography variant="h2" gutterBottom className={classes.title}>
					Welcome Student!
				</Typography>
			</Grid>

			<Grid item xs={12} md={4} lg={3}>
				<CreateClassroom></CreateClassroom>
			</Grid>

			<Grid item xs={12}>
				<TeacherTabs></TeacherTabs>
			</Grid>
		</Grid>
	);
}

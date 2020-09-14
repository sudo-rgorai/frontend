import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { amber, blueGrey, red } from "@material-ui/core/colors";

import StudentHome from "./screens/StudentHome";
import CoursePage from "./screens/CoursePage";

import Nav from "./components/Nav";
import Resources from "./components/Resources";
import TopicsPage from "./components/TopicsPage";
import Navigation from "./components/Nav";
import Grade from "./components/GradePortal";
import PerformAnanlysis from "./components/Performance";
import SubmissionContent from "./components/SubmisionContents";
import Assign from "./components/Assignments/Assign";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#89969F",
		},
		secondary: blueGrey,
	},
});

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	toolbar: {
		paddingRight: 24, // keep right padding when drawer closed
	},
	toolbarIcon: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: "0 8px",
		...theme.mixins.toolbar,
	},
	menuButton: {
		marginRight: 36,
	},
	menuButtonHidden: {
		display: "none",
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: "100vh",
		overflow: "auto",
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
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

function AppStudent() {
	const classes = useStyles();
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<div className={classes.root}>
					<Nav />
					<main className={classes.content}>
						<div className={classes.appBarSpacer} />
						<Container maxWidth="lg" className={classes.container}></Container>
						<Switch>
							<Route exact path="/">
								<StudentHome />
							</Route>
							<Route path="/topics">
								<TopicsPage />
							</Route>
							<Route path="/grade">
								<Grade />
							</Route>
							<Route path="/perform">
								<PerformAnanlysis />
							</Route>
							<Route path="/resources">
								<Resources />
							</Route>
							<Route path="/submission">
								<SubmissionContent />
							</Route>
							<Route path="/assign">
								<Assign />
							</Route>
							<Route exact path="/courses">
								<CoursePage />
							</Route>
						</Switch>
					</main>
				</div>
			</Router>
		</ThemeProvider>
	);
}
export default AppStudent;

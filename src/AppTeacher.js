import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { amber, blueGrey, red } from "@material-ui/core/colors";

import TeacherHome from "./screens/TeacherHome";
import StudentHome from "./screens/StudentHome";
import CoursePage from "./screens/CoursePage";
import TopicsPage from "./screens/TopicsPage";
import SigninPage from "./screens/SigninPage";

import Navigation from "./components/Navigation";
import Batch from "./components/AddBatch/Batch";
import Batch1 from "./components/ModifiedBatch/Batch";
import CombinedCalender from "./components/Calendar/Combined";
import CombinedCalendarSchedule from "./components/Calendar/CombinedSchedule"
import Modalform from "./components/ModalForm";
import Assign from "./components/Assignments/Assign";
import SideNavBar from "./components/NavBar";
import Announce from "./components/Announcement";
import Step1 from "./components/Assignment/Step1";
import Meeting from "./components/meetings";
import SubmissionContent from "./components/SubmisionContents";
import Redirect from "./components/goto/redirect";
import Login from "./components/goto/login";


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

export default function AppTeacher() {
	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<Router>
				<div className={classes.root}>
					<CssBaseline />
					<Navigation />
					<main className={classes.content}>
						<div className={classes.appBarSpacer} />
						<Container maxWidth="lg" className={classes.container}>
							<Switch>
								<Route path="/teacher/form" component={Modalform}>
									<Modalform />
								</Route>
								<Route exact path="/teacher/">
									<TeacherHome />
								</Route>
								<Route exact path="/teacher/courses">
									<CoursePage />
								</Route>
								<Route exact path="/teacher/courses/:courseId">
									<TopicsPage />
								</Route>
								<Route path="/teacher/calendar">
									<CombinedCalender />
								</Route>
								<Route path='/calendar/:calendarSchedule'>
									<CombinedCalendarSchedule />
								</Route>
								<Route path="/teacher/assgn1">
									<Step1 />
								</Route>
								<Route path="/teacher/addbatch">
									<Batch />
								</Route>
								<Route path="/teacher/batch">
									<Batch1 />
								</Route>
								<Route path="/teacher/assign">
									<Assign />
								</Route>
								<Route path="/teacher/submission">
									<SubmissionContent />
								</Route>
								<Route path="/teacher/announce">
									<Announce />
								</Route>
								<Route path="/teacher/meeting">
									<Meeting />
								</Route>
								<Route path="/teacher/goto">
									<Redirect />
								</Route>
								<Route path="/teacher/login/goto">
									<Login />
								</Route>
							</Switch>
						</Container>
					</main>
				</div>
			</Router>
		</ThemeProvider>
	);
}

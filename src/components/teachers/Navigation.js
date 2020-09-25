import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";

import Logo from "../../images/F.png";
import Course from "../../images/course.png";
import Home from "../../images/home.png";
import Mail from "../../images/mail.png";
import Profile from "../../images/profile.png";
import Settings from "../../images/settings.png";
import Logout from "../../images/logout.png";

const drawerWidth = 132;

const useStyles = makeStyles((theme) => ({
	leftMenu: {
		position: "absolute",
		borderRight: "0px",
		width: drawerWidth,
		background: "#000",
		borderRadius: 24,
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		flexDirection: "column",
		flexWrap: "wrap",
		minHeight: "95vh",
	},
	drawerPaper: {
		position: "relative",
		whiteSpace: "nowrap",
		borderRight: "0px",
		width: drawerWidth + 32,
		padding: "24px 32px",
		background: "#fff",
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	logo: {
		marginTop: "6.4vh",
		marginBottom: "6.4vh",
	},
	menuLink: {
		margin: 0,
		padding: 0,
		textAlign: "center",
	},
	menuLinkLast: {
		marginTop: "auto",
	},
	linkIcon: {
		marginTop: "4.4vh",
		marginBottom: "4.4vh",
	},
}));

export default function Navigation() {
	const classes = useStyles();

	return (
		<Drawer
			variant="permanent"
			classes={{
				paper: clsx(classes.drawerPaper),
			}}>
			<div className={classes.leftMenu}>
				<Link className={classes.menuLink} to="/teacher">
					<img alt="" className={classes.logo} height="6.2%" src={Logo}></img>
				</Link>
				<Link className={classes.menuLink} to="/teacher">
					<img
						alt=""
						className={classes.linkIcon}
						height="3.8%"
						src={Home}></img>
				</Link>
				<Link className={classes.menuLink} to="/teacher/courses">
					<img
						alt=""
						className={classes.linkIcon}
						height="3.8%"
						src={Course}></img>
				</Link>
				<Link className={classes.menuLink} to="/teacher">
					<img
						alt=""
						className={classes.linkIcon}
						height="3.8%"
						src={Profile}></img>
				</Link>
				<Link className={classes.menuLink} to="/teacher">
					<img
						alt=""
						className={classes.linkIcon}
						height="3.8%"
						src={Mail}></img>
				</Link>
				<Link className={classes.menuLink} to="/teacher">
					<img
						alt=""
						className={classes.linkIcon}
						height="3.8%"
						src={Settings}></img>
				</Link>
				<Link className={classes.menuLinkLast} to="/teacher">
					<img
						alt=""
						className={classes.linkIcon}
						height="3.8%"
						src={Logout}></img>
				</Link>
			</div>
		</Drawer>
	);
}

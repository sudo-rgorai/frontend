import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";

import Logo from "../../images/F.png";
import Profile from "../../images/profile.png";
import Course from "../../images/course.png";
import Groups from "../../images/groups.png";
import Calender from "../../images/Calender.png";
import Chat from "../../images/chat.png";
import help from "../../images/help.png";
import wall from "../../images/wall.jpg";
import Home from "../../images/home.png";
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
		width: drawerWidth + 64,
		padding: "24px 32px",

		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		height: "100vh",
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
				<Link className={classes.menuLink} to="/student">
					<img alt="" className={classes.logo} height="6.2%" src={Logo}></img>
				</Link>
				<Link className={classes.menuLink} to="/student">
					<img
						alt=""
						className={classes.linkIcon}
						height="3.8%"
						src={Home}></img>
				</Link>
				<Link className={classes.menuLink} to="/student/courses">
					<img
						alt=""
						className={classes.linkIcon}
						height="3.8%"
						src={Course}></img>
				</Link>
				{/* <Link className={classes.menuLink} to='/'> */}
				{/* <img
					alt=""
					className={classes.linkIcon}
					height="3.8%"
					style={{ width: "30px" }}
					src={Groups}></img> */}
				{/* </Link> */}
				<Link className={classes.menuLink} to="/student/">
					<img
						alt=""
						className={classes.linkIcon}
						height="3.8%"
						style={{ width: "30px" }}
						src={Calender}></img>
				</Link>
				{/* <Link className={classes.menuLink} to='/'> */}
				{/* <img
					alt=""
					className={classes.linkIcon}
					height="3.8%"
					style={{ width: "30px" }}
					src={Chat}></img>
				{/* </Link> */}
				{/* <Link className={classes.menuLinkLast} to='/'> */}
				{/* <img
					alt=""
					className={classes.linkIcon}
					height="3.8%"
					style={{ width: "30px" }}
					src={help}></img>
				</Link>  */}
			</div>
		</Drawer>
	);
}

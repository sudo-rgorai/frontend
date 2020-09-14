import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import { Link } from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Batch from "../ModifiedBatch/Batch";
import Chip from "@material-ui/core/Chip";
import PersonIcon from "@material-ui/icons/Person";
import PeopleIcon from "@material-ui/icons/People";

const useStyles = makeStyles({
	root: {
		margin: 5,
		marginBottom: "20px",
	},
	cardHeaderRoot: {
		background: "#F6F8F9",
	},
	viewMore: {
		marginLeft: "auto",
	},
});

export default function ImgMediaCard() {
	const classes = useStyles();

	return (
		<div>
			<Card className={classes.root}>
				<CardHeader
					classes={{ root: classes.cardHeaderRoot }}
					action={
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					}
					title="Course Name"
				/>
				<CardActionArea>
					<CardContent>
						<Typography variant="body2" color="textSecondary">
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet sint.
						</Typography>
					</CardContent>
				</CardActionArea>
				<Chip
					icon={<PersonIcon />}
					label="120"
					style={{ margin: "2px", borderRadius: "5px" }}
				/>
				<Chip
					icon={<PeopleIcon />}
					label="3"
					style={{ margin: "2px", borderRadius: "5px" }}
				/>
				{/* <Button
					className={classes.viewMore}
					variant="outlined"
					size="small"
					color="black"
					style={{ margin: "2px", fontWeight: "600" }}>
					
				</Button> */}
				<Link to="/batch">
					<Batch />
				</Link>
				<hr />
				<Chip
					icon={<PersonIcon />}
					label="BATCH A - 40"
					style={{ margin: "2px", marginLeft: "20px", borderRadius: "5px" }}
					size="small"
				/>
				<Chip
					icon={<PersonIcon />}
					label="BATCH B - 50"
					style={{ margin: "2px", borderRadius: "5px" }}
					size="small"
				/>
				<Chip
					icon={<PersonIcon />}
					label="BATCH C - 30"
					style={{ margin: "2px", marginLeft: "20px", borderRadius: "5px" }}
					size="small"
				/>
				<CardActions>
					<Link to="/courses">
						<Button
							className={classes.viewMore}
							variant="outlined"
							size="small"
							color="black"
							style={{
								margin: "2px",
								fontWeight: "600",
								textDecoration: "none",
							}}>
							View Course
						</Button>
					</Link>
				</CardActions>
			</Card>

			<Card className={classes.root}>
				<CardHeader
					classes={{ root: classes.cardHeaderRoot }}
					action={
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					}
					title="Course Name"
				/>
				<CardActionArea>
					<CardContent>
						<Typography variant="body2" color="textSecondary">
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet sint.
						</Typography>
					</CardContent>
				</CardActionArea>
				<Chip
					icon={<PersonIcon />}
					label="120"
					style={{ margin: "2px", borderRadius: "5px" }}
				/>
				<Chip
					icon={<PeopleIcon />}
					label="3"
					style={{ margin: "2px", borderRadius: "5px" }}
				/>
				<Link to="/batch">
					<Batch />
				</Link>
				<hr />
				<Chip
					icon={<PersonIcon />}
					label="BATCH A - 40"
					style={{ margin: "2px", marginLeft: "20px", borderRadius: "5px" }}
					size="small"
				/>
				<Chip
					icon={<PersonIcon />}
					label="BATCH B - 50"
					style={{ margin: "2px", borderRadius: "5px" }}
					size="small"
				/>
				<Chip
					icon={<PersonIcon />}
					label="BATCH C - 30"
					style={{ margin: "2px", marginLeft: "20px", borderRadius: "5px" }}
					size="small"
				/>
				<CardActions>
					<Link to="/courses">
						<Button
							className={classes.viewMore}
							variant="outlined"
							size="small"
							color="black"
							style={{
								margin: "2px",
								fontWeight: "600",
								textDecoration: "none",
							}}>
							View Course
						</Button>
					</Link>
				</CardActions>
			</Card>

			<Card className={classes.root}>
				<CardHeader
					classes={{ root: classes.cardHeaderRoot }}
					action={
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					}
					title="Course Name"
				/>
				<CardActionArea>
					<CardContent>
						<Typography variant="body2" color="textSecondary">
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet sint.
						</Typography>
					</CardContent>
				</CardActionArea>
				<Chip
					icon={<PersonIcon />}
					label="120"
					style={{ margin: "2px", borderRadius: "5px" }}
				/>
				<Chip
					icon={<PeopleIcon />}
					label="3"
					style={{ margin: "2px", borderRadius: "5px" }}
				/>
				<Link to="/batch">
					<Batch />
				</Link>
				<hr />
				<Chip
					icon={<PersonIcon />}
					label="BATCH A - 40"
					style={{ margin: "2px", marginLeft: "20px", borderRadius: "5px" }}
					size="small"
				/>
				<Chip
					icon={<PersonIcon />}
					label="BATCH B - 50"
					style={{ margin: "2px", borderRadius: "5px" }}
					size="small"
				/>
				<Chip
					icon={<PersonIcon />}
					label="BATCH C - 30"
					style={{ margin: "2px", marginLeft: "20px", borderRadius: "5px" }}
					size="small"
				/>
				<CardActions>
					<Link to="/courses">
						<Button
							className={classes.viewMore}
							variant="outlined"
							size="small"
							color="black"
							style={{
								margin: "2px",
								fontWeight: "600",
								textDecoration: "none",
							}}>
							View Course
						</Button>
					</Link>
				</CardActions>
			</Card>

			<Card className={classes.root}>
				<CardHeader
					classes={{ root: classes.cardHeaderRoot }}
					action={
						<IconButton aria-label="settings">
							<MoreVertIcon />
						</IconButton>
					}
					title="Course Name"
				/>
				<CardActionArea>
					<CardContent>
						<Typography variant="body2" color="textSecondary">
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet sint.
						</Typography>
					</CardContent>
				</CardActionArea>
				<Chip
					icon={<PersonIcon />}
					label="120"
					style={{ margin: "2px", borderRadius: "5px" }}
				/>
				<Chip
					icon={<PeopleIcon />}
					label="3"
					style={{ margin: "2px", borderRadius: "5px" }}
				/>
				<Link to="/batch">
					<Batch />
				</Link>
				<hr />
				<Chip
					icon={<PersonIcon />}
					label="BATCH A - 40"
					style={{ margin: "2px", marginLeft: "20px", borderRadius: "5px" }}
					size="small"
				/>
				<Chip
					icon={<PersonIcon />}
					label="BATCH B - 50"
					style={{ margin: "2px", borderRadius: "5px" }}
					size="small"
				/>
				<Chip
					icon={<PersonIcon />}
					label="BATCH C - 30"
					style={{ margin: "2px", marginLeft: "20px", borderRadius: "5px" }}
					size="small"
				/>
		{/*		<CardActions>
					<Link to="/courses">
						<Button
							className={classes.viewMore}
							variant="outlined"
							size="small"
							color="black"
							style={{
								margin: "2px",
								fontWeight: "600",
								textDecoration: "none",
							}}>
							View Course
						</Button>
					</Link>
				</CardActions>*/}
			</Card>
		</div>
	);
}

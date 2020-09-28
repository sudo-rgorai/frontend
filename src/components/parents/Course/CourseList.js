import React from "react";
import { Link } from "react-router-dom";
import {makeStyles, Card, CardHeader, CardActionArea, CardActions, CardContent, Button, Typography, IconButton, Chip} from '@material-ui/core'
import {MoreVert as MoreVertIcon, Person as PersonIcon, People as PeopleIcon} from '@material-ui/icons'

const useStyles = makeStyles({
	root: {
		margin: 5,
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
		<Card className={classes.root} elevation={8}>
			<CardHeader
				classes={{ root: classes.cardHeaderRoot }}
				action={
					<IconButton aria-label='settings'>
						<MoreVertIcon />
					</IconButton>
				}
				title='Course Name'
			/>
			<CardActionArea>
				<CardContent>
					<Typography variant='body2' color='textSecondary' component='p'>
						React makes it painless to create interactive UIs. 
					</Typography>
				</CardContent>
			</CardActionArea>
			<Chip
				icon={<PersonIcon />}
				label='120'
				style={{ margin: "2px", marginLeft: "20px" }}
			/>
			<Chip icon={<PeopleIcon />} label='3' style={{ margin: "2px" }} />
			<Button
				className={classes.viewMore}
				variant='outlined'
				size='small'
				color='primary'
				style={{ margin: "2px" }}>
				Add a Batch
			</Button>
			<hr />
			<Chip
				icon={<PersonIcon />}
				label='BATCH A - 40'
				style={{ margin: "2px", marginLeft: "20px" }}
				size='small'
			/>
			<Chip
				icon={<PersonIcon />}
				label='BATCH B - 50'
				style={{ margin: "2px" }}
				size='small'
			/>
			<Chip
				icon={<PersonIcon />}
				label='BATCH C - 30'
				style={{ margin: "2px", marginLeft: "20px" }}
				size='small'
			/>
			<CardActions>
				<Link to='/topics'>
					<Button
						className={classes.viewMore}
						variant='outlined'
						size='small'
						color='primary'
						style={{
							marginLeft: "18px",
							marginBottom: "10px",
							marginTop: "10px",
						}}>
						View Course
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
}

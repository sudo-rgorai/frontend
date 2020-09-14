import React, { Component, useEffect, useState } from "react";
import "../css/chat.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import avatar from "../images/avatar.jpg";
import avatar2 from "../images/avatar2.jpg";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";
import axios from "axios";
import {
	TelephoneFill,
	CameraVideoFill,
	InfoCircleFill,
	CameraFill,
	MicFill,
	PlusCircleFill,
	EmojiSmile,
	ArrowRightCircleFill,
} from "react-bootstrap-icons";
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		backgroundColor: "lightgrey",
		color: "black",
	},
	root3: {
		width: "100%",
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
		cursor: "pointer",
	},
}));

const AutoGrid = () => {
	const classes = useStyles();
	const [chat, setChat] = useState([]);
	useEffect(() => {
		axios
			.get(
				"http://ec2-18-224-213-191.us-east-2.compute.amazonaws.com/api/call/core_message_get_conversation"
			)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => console.log(err));
	});
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item md={4} xs={12}>
					<Paper className={classes.paper}>Recent Contacts</Paper>
					<List className={classes.root3}>
						<ListItem>
							<ListItemAvatar>
								<img src={avatar}></img>
							</ListItemAvatar>
							<ListItemText primary='Photos' secondary='Jan 9, 2014' />
						</ListItem>
						<Divider variant='inset' component='li' />
						<ListItem>
							<ListItemAvatar>
								<img src={avatar}></img>
							</ListItemAvatar>
							<ListItemText primary='Work' secondary='Jan 7, 2014' />
						</ListItem>
						<Divider variant='inset' component='li' />
						<ListItem>
							<ListItemAvatar>
								<img src={avatar}></img>
							</ListItemAvatar>
							<ListItemText primary='Vacation' secondary='July 20, 2014' />
						</ListItem>
					</List>
				</Grid>
				<Grid item md={8} xs={12}>
					<Paper className={classes.paper}>Messeges</Paper>
					<div id='container-box'>
						<div className='message-header'>
							<div classname='message-header-img'>
								<img src={avatar}></img>
							</div>
							<div className='active_state'>
								<h4>Ananya</h4>
								<h6>3 hours ago</h6>
							</div>
							<div className='header-icons'>
								<TelephoneFill />
								<CameraVideoFill />
								<InfoCircleFill />
							</div>
						</div>
						<div className='message-page'>
							<div className='message-index'>
								<div className='messages'>
									<div className='message-page'>
										<div className='received-chat'>
											<div className='received-chat-img'>
												<img src={avatar2}></img>
											</div>
											<div className='received-msg'>
												<div className='received-msg-inbox'>
													<p>Hi this is Ananya,Hope you are doing well</p>
													<span className='time'>11:01 AM | August 23</span>
												</div>
											</div>
										</div>
										<div className='outgoing-chat'>
											<div className='outgoing-chat-msg'>
												<p>Hi......</p>
												<span className='time'>11:03AM | August 23</span>
											</div>
											<div className='outgoing-chat-img'>
												<img src={avatar}></img>
											</div>
										</div>
										{/* next row */}
										<div className='received-chat'>
											<div className='received-chat-img'>
												<img src={avatar2}></img>
											</div>
											<div className='received-msg'>
												<div className='received-msg-inbox'>
													<p>Hi this is Ananya,Hope you are doing well</p>
													<span className='time'>11:01 AM | August 23</span>
												</div>
											</div>
										</div>
										<div className='outgoing-chat'>
											<div className='outgoing-chat-msg'>
												<p>Hi......</p>
												<span className='time'>11:03AM | August 23</span>
											</div>
											<div className='outgoing-chat-img'>
												<img src={avatar}></img>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='msg-bottom'>
								<div className='bottom-icons'>
									<PlusCircleFill />
									<CameraFill />
									<MicFill />
									<EmojiSmile />
								</div>
								<div className='input-group'>
									<input
										type='text'
										className='form-control'
										placeholder='Write Something'></input>
									<div className='input-group-append'>
										<span className='input-group-text'>
											<ArrowRightCircleFill />
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default AutoGrid;

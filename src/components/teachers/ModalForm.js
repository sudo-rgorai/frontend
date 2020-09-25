import React, { useEffect } from "react";
import "../../css/modal.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Calender from "../../images/Calender.png";
import { sizing } from "@material-ui/system";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import back from "../../images/back.png";
import { CloudArrowUpFill, XCircleFill } from "react-bootstrap-icons";
import axios from "axios";
import ChipInput from "material-ui-chip-input";
const useStyles = makeStyles((theme) => ({
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		overflow: "auto",
	},
	root: {
		flexGrow: 1,
	},
	calender: {
		width: "15px",
		height: "20px",
		marginLeft: "10px",
		paddingTop: "5px",
	},

	paper: {
		padding: theme.spacing(1),
		textAlign: "center",
		boxShadow: "none",
		background: "rgba(246, 248, 249, 0.5)",
		borderRadius: "8px",
		justifyContent: "baseline",
	},
	date: {
		textAlign: "center",
		boxShadow: "none",
		background: "rgba(246, 248, 249, 0.5)",
		borderRadius: "8px",
		paddingTop: "2px",
		paddingLeft: theme.spacing(1),
		paddingRight: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	},
	paper1: {
		backgroundColor: theme.palette.background.paper,
		borderRadius: "10px",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
		outline: "none",
		width: "45vw",
		// height: "80vh",
		fontWeight: "400",
	},
}));
function TransitionsModal() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [upload, setUpload] = React.useState([]);

	useEffect(() => {
		axios
			.get(
				"http://ec2-18-224-213-191.us-east-2.compute.amazonaws.com/api/call/core_files_upload"
			)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	});

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<a onClick={handleOpen}>+ Assignment</a>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={open}>
					<div className={classes.paper1}>
						<h2 style={{ marginTop: 0 }} id="transition-modal-title">
							Create Assignment
						</h2>

						<h3 id="transition-modal-description">Assignment 1</h3>
						<TextField
							style={{ marginBottom: "5px" }}
							fullWidth
							id="outlined-basic"
							label="Demo Assignment Name 1"
							variant="outlined"
						/>
						{/* <h4 className="topicname">Demo Assignment Name 1</h4> */}
						<p>
							<Grid container>
								<Grid item xs={3}>
									Topic Tags:
								</Grid>
								<Grid item xs={9}>
									<ChipInput
										defaultValue={["Topic 1: Linear Equations"]}
										style={{ color: "gold" }}
									/>
								</Grid>
							</Grid>
						</p>

						<FormControl component="fieldset" className="fieldset">
							<FormLabel component="legend" className="legend">
								Select Application Batches
							</FormLabel>
							<FormGroup aria-label="position" row>
								<FormControlLabel
									value="end"
									control={<Checkbox color="text.primary" />}
									label="Batch A"
									labelPlacement="end"
								/>
								<FormControlLabel
									value="end"
									control={<Checkbox color="text.primary" />}
									label="Batch B"
									labelPlacement="end"
								/>
								<FormControlLabel
									value="end"
									control={<Checkbox color="text.primary" />}
									label="Batch C"
									labelPlacement="end"
								/>
							</FormGroup>
							<FormGroup aria-label="position" row>
								<FormControlLabel
									value="end"
									control={<Checkbox color="text.primary" />}
									label="Batch D"
									labelPlacement="end"
								/>
								<FormControlLabel
									value="end"
									control={<Checkbox color="text.primary" />}
									label="Batch E"
									labelPlacement="end"
								/>
							</FormGroup>
						</FormControl>
						<div className={classes.root}>
							<Grid container spacing={1}>
								<Grid item>
									<Paper className={classes.paper}>Submission Deadline:</Paper>
								</Grid>
								<Grid item>
									<Paper className={classes.date}>
										<TextField
											id="date"
											type="date"
											defaultValue="2017-05-24"
										/>
									</Paper>
								</Grid>
								<Grid item>
									<TextField
										id="time"
										type="time"
										defaultValue="07:30"
										inputProps={{
											step: 300, // 5 min
										}}
									/>
								</Grid>
								{/* <Grid item>
									<Paper>4:30pm</Paper>
								</Grid> */}
							</Grid>
						</div>
						<label style={{ width: "100%" }} for="file_upload">
							<Box
								style={{ cursor: "pointer" }}
								width="100%"
								height="auto"
								id="Drag">
								{upload.map((upload) => {})}
								<CloudArrowUpFill
									color="black"
									size={30}
									// className="UploadIcon"
								/>
								Drag and Drop files or Upload
								<input
									style={{ display: "none" }}
									type="file"
									id="file_upload"
									className="inputFile"
									name="file_upload"
									onDrop={(e) => this.props.onChangeHandler(e)}
								/>
							</Box>
						</label>

						<div id="footer">
							<Grid container justify="flex-start" spacing={0}>
								<Grid item xs={3}>
									<Button
										variant="contained"
										id="back-btn"
										onClick={handleClose}>
										<img src={back} alt=""></img>
										BACK
									</Button>
								</Grid>
								<Grid item xs={9}>
									<Grid container justify="flex-end" spacing={0}>
										<Grid item>
											<Button
												onClick={handleClose}
												variant="contained"
												color="warning"
												id="space">
												Cancel
											</Button>
										</Grid>
										<Grid item>
											<Button
												variant="contained"
												color="primary"
												onClick={handleClose}>
												Create
											</Button>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}
export default TransitionsModal;

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Check from "@material-ui/icons/Check";
import Alarm from "@material-ui/icons/Alarm";
import Archive from "@material-ui/icons/Archive";
import AddIcon from "@material-ui/icons/Add";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import CreateIcon from "@material-ui/icons/Create";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CircularProgress from "@material-ui/core/CircularProgress";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import DeleteIcon from "@material-ui/icons/Delete";
import GetAppIcon from "@material-ui/icons/GetApp";
import VisibilityIcon from "@material-ui/icons/Visibility";
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import { Container, Row, Col } from 'react-bootstrap';

import TopicForm from "./Topics/Add_Topic";
import EditForm from "./Topics/Edit_Topic";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
	subjectName: {
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: "24px",
	},
});

function MyVerticallyCenteredModal(props) {
	return (
		<Modal
			{...props}
			size='40vw'
			aria-labelledby='contained-modal-title-vcenter'
			centered>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					View Details
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<ListGroup>
					<ListGroup.Item>
						Cras justo odio
						<IconButton
							color='secondary'
							component='span'
							style={{ marginLeft: "12vw" }}>
							<VisibilityIcon />
						</IconButton>
						<IconButton color='secondary' component='span' align='right'>
							<GetAppIcon />
						</IconButton>
						<IconButton color='secondary' component='span' align='right'>
							<DeleteIcon />
						</IconButton>
					</ListGroup.Item>
					<ListGroup.Item>
						Cras justo odio
						<IconButton
							color='secondary'
							component='span'
							align='right'
							style={{ marginLeft: "12vw" }}>
							<VisibilityIcon />
						</IconButton>
						<IconButton color='secondary' component='span' align='right'>
							<GetAppIcon />
						</IconButton>
						<IconButton color='secondary' component='span' align='right'>
							<DeleteIcon />
						</IconButton>
					</ListGroup.Item>
					<ListGroup.Item>
						Cras justo odio
						<IconButton
							color='secondary'
							component='span'
							align='right'
							style={{ marginLeft: "12vw" }}>
							<VisibilityIcon />
						</IconButton>
						<IconButton color='secondary' component='span' align='right'>
							<GetAppIcon />
						</IconButton>
						<IconButton color='secondary' component='span' align='right'>
							<DeleteIcon />
						</IconButton>
					</ListGroup.Item>
				</ListGroup>
			</Modal.Body>
			{/* <Modal.Footer>
            <Button onClick={handleUpdate}>Update</Button>
          </Modal.Footer> */}
		</Modal>
	);
}

function AddTopicModal(props) {
	return (
		<Modal
			{...props}
			size='40%'
			aria-labelledby='contained-modal-title-vcenter'
			centered>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>
					Add New Topic
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<EditForm />
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Cancel</Button>
				<Button onClick={props.onHide}>Create</Button>
			</Modal.Footer>
		</Modal>
	);
}

function createData(name, schedule, progress) {
	return { name, schedule, progress };
}
// Data to be fetched from database
const rows = [
	createData("Topic Name", "Every THU at 5:00 pm", "80"),
	createData("Topic Name", "Every THU at 5:00 pm", "80"),
	createData("Topic Name", "Every THU at 5:00 pm", "70"),
	createData("Topic Name", "Every THU at 5:00 pm", "90"),
	createData("Topic Name", "Every THU at 5:00 pm", "100"),
];

export default function TopicsDataGrid() {
	const classes = useStyles();
	const [modalShow, setModalShow] = React.useState(false);
	const [addTopicModalShow, setAddTopicModalShow] = React.useState(false);

	return (
		<TableContainer component={Paper}>
			<br/>
      <Container>
        <Row>
          <Col md={4}>
            <TextField id="outlined-basic" label={<><SearchIcon />&nbsp; Search Topics...</>} variant="outlined" size="small" />
          </Col>
          <Col md={{ span: 4, offset: 4 }} align="right">
            <Button color="error" variant="contained" onClick={() => setAddTopicModalShow(true)}>
              <AddIcon />&nbsp; Add Topics
            </Button>
          </Col>
        </Row>
      </Container>
      <br/>
			<AddTopicModal
				show={addTopicModalShow}
				onHide={() => setAddTopicModalShow(false)}
			/>
			<Table className={classes.table} aria-label='simple table'>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.name}>
							<TableCell component='th' scope='row'>
								<CircularProgress
									value={row.progress}
									variant='static'
									color='inherit'
								/>
							</TableCell>
							<TableCell component='th' scope='row'>
								{row.name}
							</TableCell>
							<TableCell>
								<Button variant='secondary' onClick={() => setModalShow(true)} style={{background: '#FFDD42'}}>
									View
								</Button>
								<MyVerticallyCenteredModal
									show={modalShow}
									onHide={() => setModalShow(false)}
								/>
							</TableCell>
							<TableCell align='right'>{row.schedule}</TableCell>
							<TableCell align='right'>
								<IconButton color='secondary' component='span'>
									<AddIcon />
								</IconButton>
								<IconButton color='secondary' component='span'>
									<CloudUploadIcon />
								</IconButton>
								<IconButton color='secondary' component='span'>
									<CreateIcon />
								</IconButton>
								<IconButton color='secondary' component='span'>
									<MoreVertIcon />
								</IconButton>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

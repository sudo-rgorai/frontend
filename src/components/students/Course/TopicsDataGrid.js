import React from "react";
import { Modal, Button, ListGroup } from "react-bootstrap";
import {
	makeStyles,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	Paper,
	IconButton,
	CircularProgress,
} from "@material-ui/core";
import {
	GetApp as GetAppIcon,
	Add as AddIcon,
	CloudUpload as CloudUploadIcon,
	Create as CreateIcon,
	MoreVert as MoreVertIcon,
	Delete as DeleteIcon,
	Visibility as VisibilityIcon,
} from "@material-ui/icons";

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
			size="40vw"
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					View Details
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<ListGroup>
					<ListGroup.Item>
						Cras justo odio
						<IconButton
							color="secondary"
							component="span"
							style={{ marginLeft: "12vw" }}>
							<VisibilityIcon />
						</IconButton>
						<IconButton color="secondary" component="span" align="right">
							<GetAppIcon />
						</IconButton>
						<IconButton color="secondary" component="span" align="right">
							<DeleteIcon />
						</IconButton>
					</ListGroup.Item>
					<ListGroup.Item>
						Cras justo odio
						<IconButton
							color="secondary"
							component="span"
							align="right"
							style={{ marginLeft: "12vw" }}>
							<VisibilityIcon />
						</IconButton>
						<IconButton color="secondary" component="span" align="right">
							<GetAppIcon />
						</IconButton>
						<IconButton color="secondary" component="span" align="right">
							<DeleteIcon />
						</IconButton>
					</ListGroup.Item>
					<ListGroup.Item>
						Cras justo odio
						<IconButton
							color="secondary"
							component="span"
							align="right"
							style={{ marginLeft: "12vw" }}>
							<VisibilityIcon />
						</IconButton>
						<IconButton color="secondary" component="span" align="right">
							<GetAppIcon />
						</IconButton>
						<IconButton color="secondary" component="span" align="right">
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

	return (
		<>
			<a onClick={() => setModalShow(true)}>View Topic</a>
			<MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</>
		// <TableContainer component={Paper}>
		// 	<Table className={classes.table} aria-label='simple table'>
		// 		<TableBody>
		// 			{rows.map((row) => (
		// 				<TableRow key={row.name}>
		// 					<TableCell component='th' scope='row'>
		// 						<CircularProgress
		// 							value={row.progress}
		// 							variant='static'
		// 							color='inherit'
		// 						/>
		// 					</TableCell>
		// 					<TableCell component='th' scope='row'>
		// 						{row.name}
		// 					</TableCell>
		// 					<TableCell>

		// 					</TableCell>
		// 					<TableCell align='right'>{row.schedule}</TableCell>
		// 					<TableCell align='right'>
		// 						<IconButton color='secondary' component='span'>
		// 							<AddIcon />
		// 						</IconButton>
		// 						<IconButton color='secondary' component='span'>
		// 							<CloudUploadIcon />
		// 						</IconButton>
		// 						<IconButton color='secondary' component='span'>
		// 							<CreateIcon />
		// 						</IconButton>
		// 						<IconButton color='secondary' component='span'>
		// 							<MoreVertIcon />
		// 						</IconButton>
		// 					</TableCell>
		// 				</TableRow>
		// 			))}
		// 		</TableBody>
		// 	</Table>
		// </TableContainer>
	);
}

import React, { useState } from "react";

// import Card1 from "../../images/card-1.png";
// import Card2 from "../../images/card-2.png";
// import Card3 from "../../images/card-3.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Box from "@material-ui/core/Box";
import axios from "axios";
import { CloudArrowUpFill } from "react-bootstrap-icons";
import "./Step1.css";

function onChangeHandler(event) {
	this.setState({
		selectedFile: event.target.files[0],
	});
	this.onClickHandler();
}
function onClickHandler() {
	const data = new FormData();
	data.append("file", this.state.selectedFile);
	axios
		.post("", data, {
			onUploadProgress: (ProgressEvent) => {
				this.setState({
					//loaded: 100
					loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100,
				});
			},
		})
		.then((res) => {
			this.setState({
				warningToast: true,
			});
			setTimeout(() => {
				this.setState({ warningToast: false });
			}, 5000);
		});
}

function UploadCard() {
	const [show, setShow] = useState(false);
	const [upload, setUpload] = React.useState([]);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div style={{ padding: "5% 10%" }}>
			<div class="row" style={{ textAlign: "center" }}>
				<Button
					onClick={handleShow}
					style={{
						backgroundColor: "white",
						color: "black",
						outline: "none",
						textTransform: "uppercase",
					}}>
					Upload
				</Button>
			</div>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Upload Study Material File</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div style={{ margin: "0.2% 5%" }}>
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
						<div style={{ margin: "1% 2%" }}>
							<p>Study Material Name</p>
						</div>
						<div className="row" style={{ margin: "1% 5%" }}>
							<input
								type="text"
								name="text"
								style={{
									width: "100%",
									backgroundColor: "#e5e4e2",
									border: "none",
									borderRadius: "5px",
									margin: "1% 0",
								}}
							/>
						</div>

						<div style={{ margin: "0 2%" }}>
							<p>Select Applicable Batches</p>
						</div>
						<div className="row" style={{ margin: "1% 5%" }}>
							<div className="column1">
								<input type="checkbox" name="fav1" value="one" /> Batch A
							</div>
							<div className="column1">
								<input type="checkbox" name="fav1" value="one" /> Batch B
							</div>
							<div className="column1">
								<input type="checkbox" name="fav1" value="one" /> Batch C
							</div>
						</div>
						<div className="row" style={{ margin: "1% 5%" }}>
							<div className="column1">
								<input type="checkbox" name="fav1" value="one" /> Batch D
							</div>
							<div className="column1">
								<input type="checkbox" name="fav1" value="one" /> Batch E
							</div>
						</div>
						<div style={{ margin: "1% 2%" }}>
							<p>Description</p>
						</div>
						<div className="row" style={{ margin: "1% 5%" }}>
							<input
								type="text"
								name="text"
								style={{
									width: "100%",
									height: "70px",
									backgroundColor: "#e5e4e2",
									border: "none",
									borderRadius: "5px",
								}}
							/>
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="light" onClick={handleClose}>
						Cancel
					</Button>
					<Button variant="warning" onClick={handleClose}>
						Create
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}
export default UploadCard;

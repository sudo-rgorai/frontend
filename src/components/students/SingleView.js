import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import "../../css/GradePortal.css";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import style from "bootstrap/dist/css/bootstrap.css";
import Table from "react-bootstrap/Table";
import EditIcon from "@material-ui/icons/Edit";
import Avatar from "@material-ui/core/Avatar";
import { TextareaAutosize } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import TablePagination from "@material-ui/core/TablePagination";
function SingleView() {
	const currencies = [
		{
			value: "Topic 1",
			label: "Topic 1",
		},
		{
			value: "Topic 2",
			label: "Topic 2",
		},
		{
			value: "Topic 3",
			label: "Topic 3",
		},
		{
			value: "Topic 4",
			label: "Topic 4",
		},
	];
	const typeclasses = [
		{
			value: "class1",
			label: "class 1",
		},
		{
			value: "class2",
			label: "class 2",
		},
		{
			value: "class3",
			label: "class 3",
		},
		{
			value: "class4",
			label: "class 4",
		},
	];

	const useStyles = makeStyles((theme) => ({
		root: {
			"& .MuiTextField-root": {
				margin: theme.spacing(1),
				width: "25ch",
			},
		},
	}));
	const classes = useStyles();
	const [currency, setCurrency] = React.useState("Topic 1");
	const [typeclass, setTypeClass] = React.useState("Class 1");
	const handleChange = (event) => {
		setCurrency(event.target.value);
		setTypeClass(event.target.value);
	};
	const [page, setPage] = React.useState(2);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};
	return (
		<div style={{ marginTop: "50px" }}>
			<p style={{ marginLeft: "60vw" }}>Visible groups:All Participants</p>
			<form
				className={classes.root}
				noValidate
				autoComplete="off"
				style={{ float: "right", marginRight: "50px" }}>
				<div>
					<TextField
						id="standard-select-currency"
						variant="outlined"
						select
						label="Select Topic"
						value={currency}
						onChange={handleChange}
						helperText="Please select your Topic">
						{currencies.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>
					<TextField
						id="standard-select-currency"
						select
						label="Select Class"
						variant="outlined"
						value={typeclass}
						onChange={handleChange}
						helperText="Please select your Class">
						{typeclasses.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>
				</div>
				<Button variant="contained" style={{ float: "right" }}>
					save
				</Button>
			</form>
			<div>
				<Table responsive="sm" style={{ marginTop: "15%" }}>
					<thead>
						<tr>
							<th>#</th>
							<th>First Name Surname</th>
							<th>Range</th>
							<th>Grade</th>
							<th>FeedBack</th>
							<th>Override All/None</th>
							<th>Exclude All/none</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<EditIcon />
							</td>
							<td>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Avatar
										style={{ marginRight: "10px" }}
										alt="Remy Sharp"
										src="../images/profile.png"
									/>
									Ananya Mahato
								</div>
							</td>
							<td>0.00-0.00</td>
							<td>A</td>
							<td>
								<TextareaAutosize
									aria-label="empty textarea"
									placeholder="feedback"
								/>
							</td>
							<td>
								<Checkbox
									value="checkedA"
									inputProps={{ "aria-label": "Checkbox A" }}
								/>
							</td>
							<td>
								<Checkbox
									value="checkedA"
									inputProps={{ "aria-label": "Checkbox A" }}
								/>
							</td>
						</tr>
						<tr>
							<td>
								<EditIcon />
							</td>
							<td>
								<div style={{ display: "flex", alignItems: "center" }}>
									<Avatar
										style={{ marginRight: "10px" }}
										alt="Remy Sharp"
										src="../images/profile.png"
									/>
									Ananya Mahato
								</div>
							</td>
							<td>0.00-0.00</td>
							<td>A</td>
							<td>
								<TextareaAutosize
									aria-label="empty textarea"
									placeholder="feedback"
								/>
							</td>
							<td>
								<Checkbox
									value="checkedA"
									inputProps={{ "aria-label": "Checkbox A" }}
								/>
							</td>
							<td>
								<Checkbox
									value="checkedA"
									inputProps={{ "aria-label": "Checkbox A" }}
								/>
							</td>
						</tr>
					</tbody>
				</Table>
			</div>
			<p>
				<TablePagination
					style={{ float: "left" }}
					component="div"
					count={100}
					page={page}
					onChangePage={handleChangePage}
					rowsPerPage={rowsPerPage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
				<Button
					variant="contained"
					style={{ float: "right", marginRight: "50px" }}>
					save
				</Button>
			</p>
		</div>
	);
}

export default SingleView;

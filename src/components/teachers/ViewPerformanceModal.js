import React from "react";

import { Row, Col, Modal } from "react-bootstrap";
import {
	Typography,
	List,
	ListItem,
	ListItemText
} from "@material-ui/core";
import {
	XAxis,
	YAxis,
	ResponsiveContainer,
	BarChart,
	Bar,
	CartesianGrid,
	Tooltip,
	Pie,
	PieChart,
} from "recharts";


export default function ViewPerformanceModal(props) {
	const data = [
		{ name: "Test A", percent: 24 },
		{ name: "Test B", percent: 13 },
		{ name: "Test C", percent: 98 },
		{ name: "Test D", percent: 39 },
		{ name: "Test E", percent: 48 },
		{ name: "Test F", percent: 38 },
		{ name: "Test G", percent: 43 },
	];
	const data01 = [
		{ name: "Group A", value: 400 },
		{ name: "Group B", value: 300 },
		{ name: "Group C", value: 300 },
		{ name: "Group D", value: 200 },
		{ name: "Group E", value: 278 },
		{ name: "Group F", value: 189 },
	];
	const data02 = [
		{ name: "Group A", value: 240 },
		{ name: "Group B", value: 456 },
		{ name: "Group C", value: 139 },
		{ name: "Group D", value: 980 },
		{ name: "Group E", value: 390 },
		{ name: "Group F", value: 480 },
	];

	return (
		<Modal
			{...props}
			size="xl"
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Performance - {props.studentName}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body style={{ padding: "20px" }}>
				<Typography variant="h6" gutterBottom style={{ color: "teal" }}>
					Test-wise marks
				</Typography>
				<br />
				<ResponsiveContainer height={300}>
					<BarChart data={data} barCategoryGap="45%">
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Bar dataKey="percent" fill="#8884d8" />
					</BarChart>
				</ResponsiveContainer>
				<br />
				<Typography variant="h6" gutterBottom style={{ color: "teal" }}>
					Overall
				</Typography>
				<Row>
					<Col md={4} align="center">
						<PieChart width={250} height={250}>
							<Tooltip />
							<Pie
								data={data01}
								dataKey="value"
								nameKey="name"
								cx="50%"
								cy="50%"
								outerRadius={50}
								fill="#8884d8"
							/>
							<Pie
								data={data02}
								dataKey="value"
								nameKey="name"
								cx="50%"
								cy="50%"
								innerRadius={60}
								outerRadius={80}
								fill="#82ca9d"
							/>
						</PieChart>
						Quizzes
					</Col>
					<Col md={4} align="center">
						<PieChart width={250} height={250}>
							<Tooltip />
							<Pie
								data={data01}
								dataKey="value"
								nameKey="name"
								cx="50%"
								cy="50%"
								outerRadius={50}
								fill="#8884d8"
							/>
							<Pie
								data={data02}
								dataKey="value"
								nameKey="name"
								cx="50%"
								cy="50%"
								innerRadius={60}
								outerRadius={80}
								fill="#82ca9d"
							/>
						</PieChart>
						Lessons
					</Col>
					<Col md={4} align="center">
						<PieChart width={250} height={250}>
							<Tooltip />
							<Pie
								data={data01}
								dataKey="value"
								nameKey="name"
								cx="50%"
								cy="50%"
								outerRadius={50}
								fill="#8884d8"
							/>
							<Pie
								data={data02}
								dataKey="value"
								nameKey="name"
								cx="50%"
								cy="50%"
								innerRadius={60}
								outerRadius={80}
								fill="#82ca9d"
							/>
						</PieChart>
						Assignments
					</Col>
				</Row>
				<br />
				<Typography variant="h6" gutterBottom style={{ color: "teal" }}>
					Remarks
				</Typography>
				<br />
				<List>
					<ListItem>
						<ListItemText primary="Test 1" secondary="Nice work!" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Quiz 3" secondary="Need some improvement." />
					</ListItem>
					<ListItem>
						<ListItemText primary="Assignment" secondary="Can do better!" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Test 2" secondary="Nice work." />
					</ListItem>
				</List>
			</Modal.Body>
		</Modal>
	);
}
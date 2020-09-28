import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import style from "bootstrap/dist/css/bootstrap.css";
import SingleView from "./SingleView";
import "../../css/GradePortal.css";
function ControlledTabs() {
	const [key, setKey] = useState("home");

	return (
		<div>
			<p
				style={{
					position: "absolute",
					top: "10px",
					fontWeight: "300",
					fontSize: "40px",
					marginBottom: "20px",
				}}>
				Grade item:Course Total
			</p>
			<Tabs
				id="controlled-tab-example"
				className="stylenav1"
				activeKey={key}
				onSelect={(k) => setKey(k)}>
				<Tab eventKey="home" title="View">
					<Tabs
						defaultActiveKey="profile"
						id="uncontrolled-tab-example"
						className="stylenav2">
						<Tab eventKey="Grade Report" title="Grade Report"></Tab>
						<Tab eventKey="Grade History" title="Grade History"></Tab>
						<Tab eventKey="Outcome Report" title="Outcome Report"></Tab>
						<Tab eventKey="Overview Report" title="Overview Report"></Tab>
						<Tab eventKey="Single User" title="Single View">
							<SingleView />
						</Tab>
						<Tab eventKey="User Report" title="User Report"></Tab>
					</Tabs>
				</Tab>
				<Tab eventKey="profile" title="Setup">
					hello 2
				</Tab>
				<Tab eventKey="contact" title="Scale">
					hello 3
				</Tab>
				<Tab eventKey="letter" title="Letter">
					hello 3
				</Tab>
				<Tab eventKey="import" title="Import">
					hello 3
				</Tab>
				<Tab eventKey="export" title="Export">
					hello 3
				</Tab>
			</Tabs>
		</div>
	);
}

export default ControlledTabs;

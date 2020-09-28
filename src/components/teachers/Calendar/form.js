import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

import axios from "axios";

export default function AddEventForm(props) {
	const [eventName, setEventName] = useState("");
	const [type, setType] = useState("");
	const [course, setCourse] = useState("");
	const [date, setDate] = useState("");
	const [startTime, setStartTime] = useState("");
	const [endTime, setEndTime] = useState("");
	const [meetLink, setMeetLink] = useState("");
	const [desc, setDesc] = useState("");

	// useEffect(() => {
	//   props.sendData( {
	//     'event' : eventName,
	//     'type': type,
	//     'course': course,
	//     'date': date,
	//     'startTime': startTime,
	//     'endTime': endTime,
	//     'meetLink': meetLink,
	//     'desc': desc
	//   })
	// }, [desc])

	function handleSubmit(e) {
		e.preventDefault();

		console.log("date is ", date);
		console.log("time is ", startTime);
		console.log("time is ", new Date(date + "T" + startTime).getTime() / 1000);
		// headers
		const headers = {
			"Authorization": `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
		}
		/*
		to get a better idea of the params 
		https://developer.goto.com/GoToMeetingV1/#operation/createMeeting
		*/
		const meetingData = {
			"subject": "string",
			"starttime": "2020-09-05T17:10:25Z",
			"endtime": "2020-09-05T17:10:25Z",
			"passwordrequired": true,
			"conferencecallinfo": "string",
			"timezonekey": "string",
			"meetingtype": "immediate",
			"coorganizerKeys": [
			"string"
			]
		}

		axios
			.post(`https://api.getgo.com/G2M/rest/meetings`,{ headers: headers}, meetingData)
			.then(res => {
				console.log("res .", res.data)
				// save it in the place
				console.log("link is ", res.data.joinURL)
			})
			.catch(err => {
				console.log("error", err)
			})

		/*
    Using fetch gives error, use axios to move forward in life
    Hacks used :-
      timeduration  is the UNIX time stamp of Endtime
      description is the course, meetLink, desc seperated by doubleUnderScore(__)
    */
		const data = {
			events: [
				{
					name: eventName,
					eventtype: type,
					description: course + "__" + meetLink + "__" + desc, // this is a hack
					timestart: new Date(date + "T" + startTime).getTime() / 1000,
					timeduration: new Date(date + "T" + endTime).getTime() / 1000,
				},
			],
		};

		const URL = `http://ec2-18-224-213-191.us-east-2.compute.amazonaws.com/api/call/core_calendar_create_calendar_events`;

		axios
			.post(URL, data)
			.then((res) => {
				console.log("Res.data ", res.data);
			})
			.catch((err) => {
				console.log("err is ", err);
			});
	}
	return (
		<Form>
			<Form.Group controlId='formGridAddress1'>
				<Form.Label>Event Name</Form.Label>
				<Form.Control
					placeholder='Enter Event Name'
					onChange={(e) => setEventName(e.target.value)}
				/>
			</Form.Group>
			<Form.Row>
				<Form.Group controlId='formGridEmail' style={{ marginRight: "20px" }}>
					<Form.Label>Type</Form.Label>
					<DropdownButton
						id='dropdown-basic-button'
						title='Add Type'
						onSelect={(e) => setType(e)}>
						<Dropdown.Item eventKey='Exam Date'>Exam Date</Dropdown.Item>
						<Dropdown.Item eventKey='Submission Deadline'>
							Submission Deadline
						</Dropdown.Item>
						<Dropdown.Item eventKey='Class Timing'>Class Timing</Dropdown.Item>
						<Dropdown.Item eventKey='Holiday'>Holiday</Dropdown.Item>
						<Dropdown.Item eventKey='Extra Class'>Extra Class</Dropdown.Item>
						<Dropdown.Item eventKey='Others'>Others</Dropdown.Item>
					</DropdownButton>
				</Form.Group>

				<Form.Group controlId='formGridPassword'>
					<Form.Label>Course</Form.Label>
					<Form.Control
						type='text'
						placeholder='Course1'
						onChange={(e) => setCourse(e.target.value)}
					/>
				</Form.Group>
			</Form.Row>

			<Form.Row>
				<Form.Group controlId='formGridCity' style={{ marginRight: "20px" }}>
					<Form.Label>Date</Form.Label>
					<Form.Control type='date' onClick={(e) => setDate(e.target.value)} />
				</Form.Group>

				<Form.Group controlId='formGridState' style={{ marginRight: "20px" }}>
					<Form.Label>Start Time</Form.Label>
					<Form.Control
						type='time'
						onClick={(e) => setStartTime(e.target.value)}
					/>
				</Form.Group>

				<Form.Group controlId='formGridZip'>
					<Form.Label>End Time</Form.Label>
					<Form.Control
						type='time'
						onClick={(e) => setEndTime(e.target.value)}
					/>
				</Form.Group>
			</Form.Row>

			<Form.Row>
				<Form.Group controlId='formGridEmail' style={{ marginRight: "20px" }}>
					<Form.Label>Meeting Link</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter Your Link'
						onClick={(e) => setMeetLink(e.target.value)}
					/>
				</Form.Group>
				<Form.Group controlId='formGridEmail'>
					<Form.Label style={{ color: "white" }}>Share</Form.Label>
					<Form.Control type='Submit' value='Share' />
				</Form.Group>
			</Form.Row>

			<Form.Group controlId='formGridAddress1'>
				<Form.Label>Event Description (Optional)</Form.Label>
				<Form.Control
					type='textarea'
					onChange={(e) => setDesc(e.target.value)}
				/>
			</Form.Group>
			<button
				style={{
					backgroundColor: "#0080ff",
					color: "white",
					padding: "10px",
					border: "0px solid white",
					borderRadius: "5px",
					fontSize: "16px",
				}}
				onClick={handleSubmit}>
				Add Event
			</button>
		</Form>
	);
}

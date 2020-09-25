import React from "react";
import { Line } from "react-chartjs-2";

function LineChart() {
	const data = {
		labels: ["Sem 1", "Mid Sem", "Sem 2", "Mid Sem", "Sem 3"],
		datasets: [
			{
				label: "Your Grade",
				data: [2, 1, 3, 2, 2],
				fill: false,
				borderColor: ["rgba(245, 221, 66, 1)"],
				backgroundColor: ["rgba(245, 221, 66, 1)"],
				pointBackgroundColor: "rgba(245, 221, 66, 1)",
				pointBorderColor: "rgba(2245, 221, 66, 1)",
			},
			{
				label: "Average Grade",
				data: [2, 1, 2, 2, 3],
				fill: false,
				borderColor: ["rgba(255, 99, 132, 0.7)"],
				backgroundColor: ["rgba(255, 99, 132, 0.7)"],
				pointBackgroundColor: "rgba(255, 99, 132, 0.7)",
				pointBorderColor: "rgba(255, 99, 132, 0.7)",
			},
		],
	};
	const options = {
		title: {
			display: true,
			text: "Line Chart",
		},
		scales: {
			yAxes: [
				{
					ticks: {
						min: 0,
						max: 5,
						stepSize: 1,
					},
				},
			],
		},
	};
	return <Line data={data} options={options}></Line>;
}

export default LineChart;

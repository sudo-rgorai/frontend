import React from "react";
import { HorizontalBar } from "react-chartjs-2";

function HorizontalBarChart() {
	const data = {
		labels: ["Algebra", "Calculus", "Geometry"],
		datasets: [
			{
				label: "Your marks",
				data: [86, 90, 100],
				fill: false,
				borderColor: [
					"rgba(245, 221, 66, 1)",
					"rgba(245, 221, 66, 1)",
					"rgba(245, 221, 66, 1)",
				],
				backgroundColor: [
					"rgba(245, 221, 66, 1)",
					"rgba(245, 221, 66, 1)",
					"rgba(245, 221, 66, 1)",
				],
				barPercentage: 0.5,
				barThickness: 6,
				maxBarThickness: 8,
				minBarLength: 2,
			},

			{
				label: "Average Marks",
				data: [56, 67, 75],
				fill: false,
				borderColor: [
					"rgba(255, 99, 132, 0.7)",
					"rgba(255, 99, 132, 0.7)",
					"rgba(255, 99, 132, 0.7)",
				],
				backgroundColor: [
					"rgba(255, 99, 132, 0.7)",
					"rgba(255, 99, 132, 0.7)",
					"rgba(255, 99, 132, 0.7)",
				],
				barPercentage: 0.5,
				barThickness: 6,
				maxBarThickness: 8,
				minBarLength: 2,
			},
		],
	};
	const options = {
		title: {
			display: true,
			text: "By Chapter",
		},
		scales: {
			yAxes: [
				{
					ticks: {
						min: 0,
						max: 100,
						stepSize: 20,
					},
				},
			],
		},
	};
	return (
		<HorizontalBar
			data={data}
			options={options}
			style={{ marginTop: "20px" }}></HorizontalBar>
	);
}

export default HorizontalBarChart;

import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart() {
	const data = {
		labels: ["Sem 1", "Sem 2", "Sem 3"],
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
			text: "Calculus",
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
	return <Bar data={data} options={options}></Bar>;
}

export default BarChart;

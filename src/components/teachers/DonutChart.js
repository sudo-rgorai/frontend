import React from "react";
import { Doughnut } from "react-chartjs-2";
function DonutChart() {
	const data = {
		labels: ["Your Marks", "Remaining from total"],
		datasets: [
			{
				data: [48, 2],
				fill: false,
				borderColor: ["rgba(0, 209, 84, 1)"],
				backgroundColor: ["rgba(0, 209, 84, 1)"],
				pointBackgroundColor: "rgba(0, 209, 84, 1)",
				pointBorderColor: "rgba(0, 209, 84, 1)",
			},
		],
	};

	return <Doughnut data={data}></Doughnut>;
}

export default DonutChart;

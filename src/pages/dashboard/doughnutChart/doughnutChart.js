import React from "react";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./styles.scss";

ChartJS.register(ArcElement, Tooltip, CategoryScale, LinearScale);

function DoughnutChart({ title, dataItems }) {
  const theme = useSelector((state) => state.theme);
  const borderColor = theme === "light" ? "#E6E6E6" : "#232324";

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      subtitle: {
        display: false,
      },
    },
    // scales: {
    //   x: {
    //     display: false,
    //     grid: {
    //       drawBorder: false,
    //       drawOnChartArea: false,
    //       display: false,
    //     },
    //     ticks: {
    //       display: false,
    //     },
    //   },
    //   y: {
    //     grid: {
    //       drawBorder: false,
    //       drawOnChartArea: false,
    //       display: false,
    //     },
    //     ticks: {
    //       display: false,
    //     },
    //     border: {
    //       display: false,
    //     },
    //   },
    // },
    indexAxis: "y",
  };

  const labels = dataItems.map((ele) => {
    return ele.name;
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset",
        data: dataItems.map((ele) => {
          return ele.count;
        }),
        backgroundColor: dataItems.map((ele) => {
          return ele.bgColor;
        }),
        // barThickness: 15,
        // borderRadius: 50,
        borderStipped: false,
        // barPercentage: 1,
      },
    ],
  };
  return (
    <div
      className="graphsDoughnutContainer"
      style={{
        backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
        borderColor: borderColor,
      }}
    >
      {/* title */}
      <h2 style={{ borderColor: borderColor }}>{title}</h2>
      {/* graphs */}
      <div className="graphsWrapper">
        {/* graphs */}
        <div className="graphs">
          <Doughnut options={options} data={data} />
        </div>
      </div>
    </div>
  );
}

export default DoughnutChart;

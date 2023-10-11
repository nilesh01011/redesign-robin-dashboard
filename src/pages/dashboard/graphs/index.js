import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(CategoryScale, LinearScale, BarElement, ChartDataLabels);

const options = {
  responsive: true,
  legend: {
    display: false,
  },
  scales: {
    x: {
      grid: {
        drawBorder: false,
        drawOnChartArea: false,
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      grid: {
        drawBorder: false,
        drawOnChartArea: false,
        display: false,
      },
      ticks: {
        display: false,
      },
      border: {
        display: false,
      },
    },
  },
  plugins: {
    datalabels: {
      display: true,
      color: "white",
      font: {
        size: 14,
        weight: "bold",
      },
      anchor: "end",
      offset: 12,
      align: "start",
    },
  },
};

const labels = ["AD", "LMM"];

function Graphs({ title }) {
  const theme = useSelector((state) => state.theme);

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [180, 245],
        backgroundColor: ["#2782F9", "#F99C22"],
        // barThickness:80,
        borderRadius: 5,
      },
    ],
  };

  const borderColor = theme === "light" ? "#E6E6E6" : "#232324";

  return (
    <div
      className="graphsContainer"
      style={{
        backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
        borderColor: borderColor,
      }}
    >
      {/* title */}
      <h2>{title}</h2>

      {/* graphs */}
      <div className="graphs">
        <Bar options={options} data={data} />

        <div className="datalabels">
          <div className="labels">
            <span
              className="dots"
              style={{ backgroundColor: "#2782F9" }}
            ></span>
            <span>AD</span>
          </div>

          <div className="labels">
            <span
              className="dots"
              style={{ backgroundColor: "#F99C22" }}
            ></span>
            <span>LMM</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graphs;

import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import { Chart as ChartJS, BarElement, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, Tooltip);

function BarChart({ title, dataItems }) {
  const theme = useSelector((state) => state.theme);
  const borderColor = theme === "light" ? "#E6E6E6" : "#232324";

  const options = {
    barPercentage: 0.5,
    // categoryPercentage: 0.2,
    plugins: {
      legend: {
        display: false,
      },
      subtitle: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
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
        barThickness: 15,
        borderRadius: 50,
        borderStipped: false,
        barPercentage: 1,
      },
    ],
  };
  return (
    <div
      className="graphsBarContainer"
      style={{
        backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
        borderColor: borderColor,
      }}
    >
      {/* title */}
      <h2>{title}</h2>
      {/* graphs */}
      <div className="graphsWrapper">
        {/* legends */}
        <div className="legends">
          {dataItems.map((ele) => (
            <p
              key={ele.key}
              // style={{ minHeight: 26 }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  display: "block",
                  backgroundColor: ele.bgColor,
                }}
              ></span>
              <span style={{ fontSize: 12 }}>{ele.name}</span>
            </p>
          ))}
        </div>
        {/* graphs */}
        <div
          className="graphs"
          //  style={{ height: "100%", width: "auto" }}
        >
          <Bar options={options} data={data} />
        </div>
        {/* data count */}
        <div className="dataCounts">
          {dataItems.map((ele) => (
            <p
              key={ele.key}
              // style={{ minHeight: 24 }}
            >
              <span style={{ fontSize: 12 }}>{ele.count}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BarChart;

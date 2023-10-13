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
    plugins: {
      datalabels: {
        display: false,
        // color: theme === "light" ? "black" : "white",
        // font: {
        //   size: 10,
        //   weight: "bold",
        // },
        // anchor: "start",
        // offset: 0,
        // align: "end",
      },
    },
    scales: {
      x: {
        barPercentage: 0.8,
        categoryPercentage: 0.7, // add this
        display: false,
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
        borderWidth: 1,
        barThickness: 15,
        borderRadius: 20,
        borderSkipped: false,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
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
      <h2 style={{ borderColor: borderColor }}>{title}</h2>
      {/* graphs */}
      <div className="graphsWrapper">
        <div className="leftSide">
          {/* legends */}
          <div className="legends">
            {dataItems.map((ele) => (
              <p
                key={ele.key}
                style={{
                  width:"100%",
                  color: theme === "light" ? "#545454" : "#858585",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {/* name and color */}
                <span
                style={{ display: "flex", gap:4,alignItems:"center" }}
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
                </span>
                {/* count */}
                <span>{ele.count}</span>
              </p>
            ))}
          </div>
        </div>

        {/* graphs */}
        <div className="rightSide">
          <div className="graphs">
            <Bar options={options} data={data} height={180} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BarChart;
import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import { Chart as ChartJS, BarElement, Tooltip } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, Tooltip);

function RedevelopGraphBar({ bgColor, name, count, dataStrip }) {
  const theme = useSelector((state) => state.theme);

  const options = {
    plugins: {
      tooltip: {
        enabled: false,
      },
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

  const labels = name;

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset",
        data: [count],
        backgroundColor: bgColor,
        borderWidth: 1,
        barThickness: 12,
        borderRadius: 4,
        borderSkipped: false,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
    ],
  };

  const wordSlice = (word) => {
    if (word.length > 8) {
      return word.slice(0, 8) + "...";
    } else {
      return word;
    }
  };

  return (
    <div className="graphsDataWrapper">
      <div className="graphsLeftSide">
        {/* legends */}
        <div className="legends">
          <p
            style={{
              color: theme === "light" ? "#545454" : "#858585",
            }}
          >
            {/* name and color */}
            <span className="name_count">
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  display: "block",
                  backgroundColor: bgColor,
                }}
              ></span>
              <span>{wordSlice(name)}</span>
            </span>
            {/* count */}
            <span>{count}</span>
          </p>
        </div>
      </div>
      {/* graphs */}
      <div className="graphsRightSide">
        <div className="graphs">
          {/* <Bar options={options} data={data} /> */}
          <Bar options={options} data={data} height={20} />
        </div>
      </div>
    </div>
  );
}

export default RedevelopGraphBar;

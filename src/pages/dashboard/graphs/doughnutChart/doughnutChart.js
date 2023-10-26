import React, { useEffect, useState } from "react";
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
  const [counts, setCounts] = useState(0);

  const sumOfArrays = (arrays) => {
    // create an array
    let myNums = arrays;

    let sum = 0;

    for (let i = 0; i < myNums.length; i++) {
      sum += myNums[i].count;
    }

    return sum;
  };

  useEffect(() => {
    setCounts(sumOfArrays(dataItems));
  }, [dataItems]);

  const options = {
    plugins: {
      // legend: {
      //   display: true,
      // },
      // datalabels: {
      //   formatter:(value,context) => {
      //     console.log(value)
      //     return "hello"
      //   }
      //   // display: true,
      //   // color: theme === "light" ? "black" : "white",
      //   // font: {
      //   //   size: 10,
      //   //   weight: "bold",
      //   // },
      //   // anchor: "start",
      //   // offset: 0,
      //   // align: "end",
      // },

      datalabels: {
        color: "#000",
        align: "end",
        anchor: "end",
        formatter: function (value, context) {
          // console.log(context.chart.data.labels[context.dataIndex]);
          // return context.chart.data.labels[context.dataIndex];
        },
        font: {
          size: 16,
          style: "bold",
        },
      },
    },
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
        borderWidth: 0,
        offset: 6,
      },
    ],
    showDatapoints: true,
  };

  // const textCenter = {
  //   id: "textCenter",
  //   beforeDatasetsDraw(chart, args, pluginOptions) {
  //     const { ctx, data } = chart;
  //     ctx.save();
  //     ctx.font = `bolder 18px sans-serif`;
  //     ctx.fillStyle = theme === "light" ? "#0B0B0C" : "#ffffff";
  //     ctx.textAlign = "center";
  //     ctx.textBaseline = "middle";
  //     ctx.fillText('360',chart.getDatasetMeta(0).data[0].x,chart.getDatasetMeta(0).data[0].y);
  //   },
  // };
  return (
    <div
      className="graphsDoughnutContainer"
      style={{
        backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
        borderColor: borderColor,
      }}
    >
      {/* title */}
      <h2>{title}</h2>
      {/* divider */}
      <div
        className="divider"
        style={{ backgroundColor: theme === "light" ? "#E6E6E6" : "#232324" }}
      ></div>
      {/* graphs */}
      <div className="graphsWrapper">
        {/* graphs */}
        <div className="graphs">
          <Doughnut
            options={options}
            data={data}
            // plugins={[textCenter]}
          />

          <span
            className="graphMiddeltext"
            style={{ color: theme === "light" ? "#0B0B0C" : "#ffffff" }}
          >
            {counts}
          </span>
        </div>
        {/* divider */}
        <div
          className="divider"
          style={{ backgroundColor: theme === "light" ? "#E6E6E6" : "#232324" }}
        ></div>
        {/* contents */}
        <div
          className="graphsContents"
          style={{ gridTemplateColumns: `repeat(${dataItems.length},1fr)` }}
        >
          {/* contents */}
          {dataItems.map((ele, index) => (
            <p key={index}>
              <span
                style={{
                  backgroundColor: ele.bgColor,
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  display: "block",
                }}
              ></span>
              <span>{ele.name}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DoughnutChart;

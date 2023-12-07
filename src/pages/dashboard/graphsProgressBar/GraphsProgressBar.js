import React, { useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import ProgressBar from "./progressBar/ProgressBar";

function GraphsProgressBar({ title, dataItems }) {
  const theme = useSelector((state) => state.theme);

  const wordSlice = (word) => {
    if (word.length > 16) {
      return word.slice(0, 16) + "...";
    } else {
      return word;
    }
  };

  const wordSlice_2 = (word) => {
    if (word.length > 14) {
      return word.slice(0, 14) + "...";
    } else {
      return word;
    }
  };

  const wordSlice_3 = (word) => {
    if (word.length > 12) {
      return word.slice(0, 12) + "...";
    } else {
      return word;
    }
  };
  const borderColor = theme === "light" ? "#E6E6E6" : "#232324";
  return (
    <div
      className="graphsProgressBarContaier"
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
      <div className={`${dataItems.length > 8 && "addScrollBar"} ${theme === "light" ? "light" : "dark"} graphsDataWrapper`}>
        {/* left side */}
        <div className="graphsProgressBarLeftSide">
          {/* name and bgColor */}
          {dataItems.map((ele, index) => (
            <div className="graphsProgressBarData" key={index}>
              <p>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    display: "block",
                    backgroundColor: ele.bgColor,
                  }}
                ></span>
                {/* 1523px screen */}
                <span className="name biggScreen" title={ele.name}>
                  {wordSlice(ele.name)}
                </span>
                {/* 1366px screen */}
                {/* <span className="name middleScreen" title={ele.name}>
                  {wordSlice_2(ele.name)}
                </span> */}
                {/* 1280px screen */}
                {/* <span className="name smallScreen" title={ele.name}>
                  {wordSlice_3(ele.name)}
                </span> */}
              </p>
              {/* count */}
              <span>{ele.count}</span>
            </div>
          ))}
        </div>
        {/* right side */}
        <div className="graphsProgressBarRightSide">
          {dataItems.map((ele, index) => (
            <ProgressBar key={index} items={ele} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GraphsProgressBar;

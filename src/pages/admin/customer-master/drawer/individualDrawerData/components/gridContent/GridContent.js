import React from "react";
import { useSelector } from "react-redux";
import "./styles.scss";

function GridContent({ data }) {
  const theme = useSelector((state) => state.theme);
  return (
    <div className="content">
      <span
        style={{
          color: theme === "light" ? "#545454" : "#B5B5B6",
        }}
      >
        {data.title}
      </span>
      {/* text */}
      <span>{data.text}</span>
    </div>
  );
}

export default GridContent;

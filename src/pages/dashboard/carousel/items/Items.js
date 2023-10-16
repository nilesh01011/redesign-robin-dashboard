import React from "react";
import "./styles.scss";

function Items({ data }) {
  return (
    <div className="heads">
      {/* label */}
      <span className="label">
        <span className="label_name">GST Update</span>
        {/* <span className="date mobileView">{data.time}</span> */}
      </span>
      {/* text */}
      <p className="text">
        {data.description}
        {/* desktopView */}
        <span className="date">{data.time}</span>
      </p>
    </div>
  );
}

export default Items;

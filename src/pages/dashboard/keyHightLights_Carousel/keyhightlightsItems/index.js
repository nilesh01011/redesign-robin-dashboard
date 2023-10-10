import React from "react";
import "./styles.scss";

function Index({ data, width }) {
  return (
    <div className="heads" style={{ width: width }}>
      {/* label */}
      <span className="label_name">GST Update</span>
      {/* text */}
      <p className="text" style={{ color: "#FF3E5B" }}>
        {data.description}
        <span style={{ color: "#858585", marginLeft: 4 }}>{data.time}</span>
      </p>
    </div>
  );
}

export default Index;

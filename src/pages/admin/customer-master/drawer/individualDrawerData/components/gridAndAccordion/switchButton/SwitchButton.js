import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./styles.scss";

function SwitchButton({ data,drawerType }) {
  const theme = useSelector((state) => state.theme);
  const [toggleButton, setToggleButton] = useState(data.activeStatus);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{ color: theme === "light" ? "#545454" : "#B5B5B6" }}>
        {data.title}
      </span>
      <div className="toggleContainer">
        <label className="switch">
          <input
            type="checkbox"
            onClick={() => drawerType === "edit" && setToggleButton(!toggleButton)}
          />
          <span
            className={`slider ${toggleButton === true && "activeSlide"}`}
            style={{
              backgroundColor: theme === "light" ? "#B5B5B6" : "#545454",
            }}
          />
        </label>
        {/* text */}
        <span style={{ fontSize: 14, fontWeight: 500,color:toggleButton ? "#70C922" : "#858585" }}>
          {toggleButton === true ? "Yes" : "No"}
        </span>
      </div>
    </div>
  );
}

export default SwitchButton;

import React from "react";
import { useSelector } from "react-redux";
import "styles.scss";

function InputFields({ type, label }) {
  const theme = useSelector((state) => state.theme);
  return (
    <div className="drawerInputFields">
      {/* label */}
      <label className="label">Shield</label>
      {/* input text */}
      <input placeholder="Shield" type="text" className="inputs" style={{borderColor:theme === "light" ? "#E6E6E6" : "#232324"}} />
    </div>
  );
}

export default InputFields;

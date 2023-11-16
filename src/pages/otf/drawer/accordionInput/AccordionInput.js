import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./styles.scss";

function AccordionInput({ data, drawerType }) {
  const theme = useSelector((state) => state.theme);
  const [accordionInputFields,setAccordionInputFields] = useState(data.text ? data.text :"")
  return (
    <div className="drawerInputFields">
      {/* label */}
      <label
        className="label"
        style={{ color: theme === "light" ? "#545454" : "#B5B5B6" }}
      >
        {data.label}
      </label>
      {/* input text */}
      <input
        placeholder="Shield"
        type="text"
        disabled={drawerType === "edit" ? false : true}
        className="inputs"
        onChange={(e) => setAccordionInputFields(e.target.value)}
        value={accordionInputFields}
        // value={data.text ? data.text : accordionInputFields}
        style={{
          borderColor: theme === "light" ? "#E6E6E6" : "#232324",
          background: drawerType === "edit" ? theme === "light" ? "white" : "#0b0b0c" : theme === "light" ? "#E6E6E6" : "#232324",
          color: theme === "light" ? "#0B0B0C" : "white",
        }}
      />
    </div>
  );
}

export default AccordionInput;

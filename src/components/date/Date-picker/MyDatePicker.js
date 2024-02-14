// MyDatePicker.js
import React from "react";
import { DatePicker } from "antd";
import "./styles.scss";


const MyDatePicker = ({ onChange }) => {
  return (
    <DatePicker
      className="cal1"
      onChange={onChange}
    />
  );
};

export default MyDatePicker;
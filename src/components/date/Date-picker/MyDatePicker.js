// MyDatePicker.js
import React from "react";
import { DatePicker } from "antd";
import "./styles.scss";
import {useSelector} from "react-redux"


const MyDatePicker = ({ onChange }) => {
  const theme = useSelector((state) => state.theme);
  return (
    <DatePicker
      className="cal1"
      onChange={onChange}
    />
  );
};

export default MyDatePicker;
import React from "react";
import { DatePicker } from "antd";
import "./styles.scss";
import {useSelector} from "react-redux"

const { RangePicker } = DatePicker;

const MyRangePicker = ({ onChange }) => {
  const theme = useSelector((state) => state.theme);
  const handleRangePickerChange = (dates, dateStrings) => {
    // console.log("Selected Range:", dates);
    console.log("Selected Date Strings:", dateStrings);
    onChange(dates); // Pass the selected dates to the parent component
  };

  return <RangePicker className="range" onChange={handleRangePickerChange} />;
};

export default MyRangePicker;

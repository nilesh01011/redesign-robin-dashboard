import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";

function Setting({handleCloseModel}) {
  const theme = useSelector((state) => state.theme);
  return <div className="settingContainer" style={{backgroundColor:theme === "light" ? "#ffffff" : "#1C1C1C"}}>Setting</div>;
}

export default Setting;

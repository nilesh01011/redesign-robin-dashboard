import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";

function Profile({handleCloseModel}) {
  const theme = useSelector((state) => state.theme);
  return <div className="profileContainer" style={{backgroundColor:theme === "light" ? "#ffffff" : "#1C1C1C"}}>My Profile</div>;
}

export default Profile;

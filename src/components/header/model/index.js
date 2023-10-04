import React from "react";
import "./styles.scss";
import Logout from "./logout";
import Setting from "./setting";
import Profile from "./profile";
import ChangePassword from "./changePassword";

function Model({ text, setModelListDetails }) {

  const handleModelShow = (type) => {
    if (type === "My Profile" || type === "my profile") {
      return <Profile />;
    }

    if (type === "Setting" || type === "setting") {
      return <Setting />;
    }

    if (type === "Change Password" || type === "change password") {
      return <ChangePassword />
    }

    if (type === "Logout" || type === "logout") {
      return <Logout />;
    }
  };

  return (
    <>
      <div className="modelContainer">{handleModelShow(text)}</div>
    </>
  );
}

export default Model;

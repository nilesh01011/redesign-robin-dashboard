import React from "react";
import "./styles.scss";
import Logout from "./logout";
import Setting from "./setting";
import Profile from "./profile";
import ChangePassword from "./changePassword";

function Model({ text, setModelListDetails }) {
  const handleCloseModel = () => {
    setModelListDetails(false);
    document.querySelector("body").classList.remove("removeScrollbar");
    document.querySelector("body").style.overflow = "auto";
  };

  const handleModelShow = (type) => {
    if (type === "My Profile" || type === "my profile") {
      return <Profile handleCloseModel={handleCloseModel} />;
    }

    if (type === "Setting" || type === "setting") {
      return <Setting handleCloseModel={handleCloseModel} />;
    }

    if (type === "Change Password" || type === "change password") {
      return <ChangePassword handleCloseModel={handleCloseModel} />;
    }

    if (type === "Logout" || type === "logout") {
      return <Logout handleCloseModel={handleCloseModel} />;
    }
  };

  return (
    <>
      <div className="modelContainer">{handleModelShow(text)}</div>
    </>
  );
}

export default Model;

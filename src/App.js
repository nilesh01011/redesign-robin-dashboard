import { Route, Routes } from "react-router-dom";
import "./index.scss";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
// dashboard
import DashboardPage from "./pages/dashboard";
// favourites
import Favourites from "./pages/favourites";
import CriticalityGroup from "./pages/favourites/criticalityGroup";
// parts
import SuggestOrderQty from "./pages/parts/partsordering/suggestorderqty";
// CRM
import CRM from "./pages/crm";
// admin
import CustomerMaster from "./pages/admin/customer-master/customerMaster";
import Model from "./components/model";

function App() {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    if (theme === "light") {
      document.body.style.backgroundColor = "#FFFFFF";
      document.body.style.color = "#0B0B0C";
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }

    if (theme === "dark") {
      document.body.style.backgroundColor = "#0B0B0C";
      document.body.style.color = "#ffffff";
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    }
  }, [theme]);

  // model
  const [modelListDetails, setModelListDetails] = useState("");

  const handleClosed = () => {
    setModelListDetails("");
    document.querySelector("body").classList.remove("removeScrollbar");
    document.querySelector("body").style.overflow = "auto";
  };

  return (
    <div className="container">
      {/* sidebar */}
      <Sidebar />
      <div className="main-container">
        {/* Headers */}
        <Header setModelListDetails={setModelListDetails} />

        {/* <div
          className="modelContainerBox"
          style={{
            display: modelListDetails ? "block" : "none",
            position: "absolute",
            left: 0,
            top: 0,
            height: "100vh",
            width: "100%",
            // zIndex: 99997,
          }}
        > */}
          {modelListDetails && (
            <Model
              text={modelListDetails}
              setModelListDetails={setModelListDetails}
            />
          )}
        {/* </div> */}

        <div
          style={{ display: modelListDetails ? "block" : "none" }}
          id="overlay"
          onClick={handleClosed}
        ></div>
        {/* main contents */}
        <Routes>
          {/* dashboard */}
          <Route path="/dashboard" element={<DashboardPage />}></Route>
          {/* favourites */}
          <Route path="/favourites" element={<Favourites />}></Route>
          <Route
            path="/favourites/criticality-group"
            element={<CriticalityGroup />}
          ></Route>
          {/* Parts */}
          <Route
            path="/parts/parts-ordering/suggest-order-qty"
            element={<SuggestOrderQty />}
          ></Route>
          <Route path="/crm" element={<CRM />}></Route>
          {/* Admin */}
          <Route
            path="/admin/customer-master"
            element={<CustomerMaster />}
          ></Route>
        </Routes>
        {/* Footer */}
        <div className="footer" style={{backgroundColor:theme === "light" ? "#ffffff" : "#0B0B0C"}}>
          <span>Copyright © 2023 ROBIN.</span>
        </div>
      </div>
    </div>
  );
}

export default App;

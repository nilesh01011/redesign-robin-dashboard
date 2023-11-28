import { createContext } from "react";

import { Route, Routes } from "react-router-dom";
import "./index.scss";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Model from "./components/model";
// dashboard
import DashboardPage from "./pages/dashboard";
// favourites
import Favourites from "./pages/favourites";
// import CriticalityGroup from "./pages/favourites/criticalityGroup";
// parts
// import SuggestOrderQty from "./pages/parts/partsordering/suggestorderqty";
// CRM
import CRM from "./pages/crm";
// admin
import CustomerMaster from "./pages/admin/customer-master/customerMaster";
// sales / order-to-delivery
import OTF from "./pages/sales/otf/OTF";
import SidebarRedevelop from "./components/sidebarRedevelop";
import ProductHierarchyMaster from "./pages/favourites/product-hierarchy-master/ProductHierarchyMaster";
import VehicleAllotment from "./pages/favourites/vehicle-allotment/VehicleAllotment";
import CoTEKEvaluation from "./pages/hr/manage-dealer-manpower/coTEK-evaluation/CoTEKEvaluation";
import ManageDealers from "./pages/hr/manage-dealers/ManageDealers";
import ManageManpowerTraining from "./pages/hr/manage-manpower-training/ManageManpowerTraining";
import VinBlockMaster from "./pages/sales/vin-block-master/VinBlockMaster";
import DeliveryNoteRequest from "./pages/sales/orderToDelivery/deliveryNoteInvoiceCancellationRequest/DeliveryNoteRequest";
import DeliveryNoteVehicles from "./pages/sales/orderToDelivery/deliveryNoteVehicles/DeliveryNoteVehicles";
import VehiclesAllotment from "./pages/sales/orderToDelivery/vehiclesAllotment/VehiclesAllotment";
import VehiclesPricesMaster from "./pages/sales/vehiclesPrices/vehiclePriceMaster/VehiclesPricesMaster";

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
      {/* <Sidebar /> */}
      <SidebarRedevelop />
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

        {/* <div
          style={{ display: modelListDetails ? "block" : "none" }}
          id="overlay"
          onClick={handleClosed}
        ></div> */}
        {/* overlay */}
        <div
          style={{ display: modelListDetails ? "block" : "none",backgroundColor:theme === "light" ? "rgba(0, 0, 0, 0.8)" : "rgba(84, 84, 84,0.7)" }}
          id="overlay_2"
          onClick={handleClosed}
        ></div> 
        {/* main contents */}
        <Routes>
          {/* =================== dashboard ============= */}
          <Route path="/home" element={<DashboardPage />}></Route>
          {/* ================= favourites ============== */}
          <Route path="/favourites" element={<Favourites />}></Route>
          <Route
            path="/favourites/product-hierarchy-master"
            element={<ProductHierarchyMaster />}
          ></Route>
          <Route
            path="/favourites/vehicle-allotment"
            element={<VehicleAllotment />}
          ></Route>
          {/* <Route
            path="/favourites/criticality-group"
            element={<CriticalityGroup />}
          ></Route> */}
          {/* Parts */}
          {/* <Route
            path="/parts/parts-ordering/suggest-order-qty"
            element={<SuggestOrderQty />}
          ></Route> */}
          {/* <Route path="/crm" element={<CRM />}></Route> */}

          {/* ================ HR ================= */}

          {/* coTEK-evaluation */}
          <Route
            path="/hr-mile/manage-dealer-manpower/coTEK-evaluation"
            element={<CoTEKEvaluation />}
          ></Route>
          {/* manage-dealers */}
          <Route
            path="/hr-mile/manage-dealers"
            element={<ManageDealers />}
          ></Route>
          {/* manage-manpower-training */}
          <Route
            path="/hr-mile/manage-manpower-training"
            element={<ManageManpowerTraining />}
          ></Route>

          {/* ================= Sales ================ */}
          {/* OTD */}
          <Route
            path="/sales/order-to-delivery/booking-form"
            element={<OTF />}
          ></Route>

          {/* delivery-note-invoice-cancellation-request */}
          <Route
            path="/sales/order-to-delivery/delivery-note-invoice-cancellation-request"
            element={<DeliveryNoteRequest />}
          ></Route>

          {/* delivery-note-vehicles */}
          <Route
            path="/sales/order-to-delivery/delivery-note-vehicles"
            element={<DeliveryNoteVehicles />}
          ></Route>
          {/* vehicles-allotment */}
          <Route
            path="/sales/order-to-delivery/vehicles-allotment"
            element={<VehiclesAllotment />}
          ></Route>
          {/* vehicle-price */}
          <Route
            path="/Sales/vehicle-price/vehicle-price-master"
            element={<VehiclesPricesMaster />}
          ></Route>

          {/* vin-block-master */}
          <Route
            path="/sales/vin-block-master"
            element={<VinBlockMaster />}
          ></Route>

          {/* ================= Admin ================ */}
          <Route
            path="/admin/customer-master"
            element={<CustomerMaster />}
          ></Route>
        </Routes>
        {/* Footer */}
        {/* <div
          className="footer"
          style={{ backgroundColor: theme === "light" ? "#ffffff" : "#0B0B0C" }}
        >
          <span>Copyright © 2023 ROBIN.</span>
        </div> */}
      </div>
    </div>
  );
}

export default App;

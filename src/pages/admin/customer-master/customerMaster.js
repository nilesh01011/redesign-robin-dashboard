import React, { useEffect, useState } from "react";
import "./styles.scss";
import Title from "../../../components/title";
import { useSelector } from "react-redux";
import SelectDropdownFilter from "../../../components/searchdropdownfilter";
import { customerMasterData, tableHead } from "../../../data";
import Table from "../../../components/table";
import Dropdown from "../../../components/dropdown";
// import Drawer from "./drawer/Drawer";
import ResponsiveTable from "../../../components/responsiveTable/ResponsiveTable";
import Drawer from "./drawer/Drawer";
import MobileViewDrawer from "./mobileViewDrawer/MobileViewDrawer";
// import TableRedevelop from "../../../components/tableRedevelop/TableRedevelop";

function CustomerMaster() {
  const theme = useSelector((state) => state.theme);
  const [isActiveTabs, setIsActiveTabs] = useState("");

  const [inputFields, setInputFields] = useState("");
  const [tableData, setTableData] = useState([]);
  const [selectDropdownFilterText, setSelectedDropdownFilterText] =
    useState("");
  // Drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerData, setDrawerData] = useState([]);
  const [drawerType, setDrawerType] = useState("");

  const handleDrawerClosed = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // select dropdown text
  const [selected, setSelected] = useState("");

  // middle button
  const [middleButton, setMiddleButton] = useState([4, 5, 6, 7, 8]);

  const tabs = [
    {
      id: 1,
      name: "Individual",
    },
    {
      id: 2,
      name: "Firm/Corporate",
    },
  ];

  const customersList = [
    {
      id: 1,
      name: "Mobile No.",
      search: "four",
    },
    {
      id: 2,
      name: "Customer ID",
      search: "one",
    },
    {
      id: 4,
      name: "Customer Name",
      search: "two",
    },
    {
      id: 5,
      name: "Registration Number",
      search: "four",
    },
    {
      id: 6,
      name: "Chassis Number",
      search: "one",
    },
    {
      id: 7,
      name: "VIN No.",
      search: "one",
    },
  ];

  useEffect(() => {
    if (!isActiveTabs) {
      return setIsActiveTabs(customerMasterData[0].name);
    } else {
      setIsActiveTabs(isActiveTabs);
    }
  }, [isActiveTabs, setIsActiveTabs]);

  useEffect(() => {
    customerMasterData.map((ele) => {
      if (ele.name === isActiveTabs) {
        return setTableData(ele.data);
      }
    });
  }, [isActiveTabs]);

  // paginations items
  const paginationItems = [
    {
      name: "10 / page",
    },
    {
      name: "20 / page",
    },
    {
      name: "30 / page",
    },
    {
      name: "40 / page",
    },
  ];

  // empty table data
  const emptyTableData = () => (
    <div className="emptyDataTable" style={{ color: "#545454" }}>
      {/* icons */}
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
        >
          <path
            d="M73.3337 39.9999H53.3337L46.667 49.9999H33.3337L26.667 39.9999H6.66699"
            stroke="#B5B5B6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.167 17.0333L6.66699 40V60C6.66699 61.7681 7.36937 63.4638 8.61961 64.714C9.86986 65.9643 11.5655 66.6666 13.3337 66.6666H66.667C68.4351 66.6666 70.1308 65.9643 71.381 64.714C72.6313 63.4638 73.3337 61.7681 73.3337 60V40L61.8337 17.0333C61.2817 15.9226 60.4309 14.9879 59.3768 14.3342C58.3228 13.6806 57.1073 13.334 55.867 13.3333H24.1337C22.8934 13.334 21.6779 13.6806 20.6238 14.3342C19.5697 14.9879 18.7189 15.9226 18.167 17.0333V17.0333Z"
            stroke="#B5B5B6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {/* text */}
      <span>No Record Found</span>
      {/* description */}
      <p>
        Please{" "}
        <span style={{ color: theme === "light" ? "black" : "white" }}>
          “Add New Customer”
        </span>{" "}
        using below button.
      </p>

      {/* button */}
      <button type="button" className="addbutton">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7 1.75C7.18122 1.75 7.32813 1.89691 7.32813 2.07812V6.67188H11.9219C12.1031 6.67188 12.25 6.81878 12.25 7C12.25 7.18122 12.1031 7.32813 11.9219 7.32813H7.32813V11.9219C7.32813 12.1031 7.18122 12.25 7 12.25C6.81878 12.25 6.67188 12.1031 6.67188 11.9219L6.67188 7.32813H2.07812C1.89691 7.32813 1.75 7.18122 1.75 7C1.75 6.81878 1.89691 6.67188 2.07812 6.67188H6.67188L6.67188 2.07812C6.67188 1.89691 6.81878 1.75 7 1.75Z"
              fill="white"
            />
          </svg>
        </span>
        Add
      </button>
    </div>
  );

  return (
    <>
      <div className="customerMaster">
        {/* ============ title ============ */}
        <div
          style={{
            background: theme === "light" ? "white" : "#1C1C1C",
            boxShadow:
              theme === "light"
                ? "0px 1px 1px 0px rgba(0, 0, 0, 0.15)"
                : "0px 1px 1px 0px rgba(255, 255, 255, 0.15)",
          }}
          className="container-fluid titleContainer"
        >
          <Title title="Customer Master" />
        </div>
        {/* =============== Content ================ */}
        <div className="customerMasterContainer container-fluid">
          {/* header */}
          <div
            style={{
              border: `1px solid ${theme === "light" ? "#E6E6E6" : "#232324"}`,
              backgroundColor: theme === "light" ? "#f2f2f2" : "#1C1C1C",
            }}
            className="customerMasterHeader"
          >
            {/* left side */}
            <div className="customerMasterHeaderLeft">
              {/* tabs */}
              <div
                className="tabs"
                style={{
                  border: `1px solid ${
                    theme === "light" ? "#B5B5B6" : "#232324"
                  }`,
                }}
              >
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setIsActiveTabs(tab.name)}
                    style={{
                      background:
                        isActiveTabs === tab.name ? "#FF3E5B" : "transparent",
                      color:
                        isActiveTabs === tab.name
                          ? "#fff"
                          : `${theme === "light" ? "black" : "white"}`,
                    }}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
              <div className="searchFilterContainer">
                {/* search filter dropdown */}
                <div className="searchFilterDropdown">
                  <SelectDropdownFilter
                    customersList={customersList}
                    padding="6px 0"
                    setInputFields={setInputFields}
                    inputFields={inputFields}
                    setSelectedDropdownFilterText={
                      setSelectedDropdownFilterText
                    }
                    selectDropdownFilterText={selectDropdownFilterText}
                  />
                </div>
                {/* Advanced filters */}
                <div
                  className="advanceFilter"
                  style={{
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {/* icons */}
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.6667 8.89581C11.9084 8.89581 12.1042 9.09169 12.1042 9.33331V12.25C12.1042 12.4916 11.9084 12.6875 11.6667 12.6875C11.4251 12.6875 11.2292 12.4916 11.2292 12.25V9.33331C11.2292 9.09169 11.4251 8.89581 11.6667 8.89581Z"
                        fill="#FF3E5B"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.47925 9.33331C9.47925 9.09169 9.67512 8.89581 9.91675 8.89581H13.4167C13.6584 8.89581 13.8542 9.09169 13.8542 9.33331C13.8542 9.57494 13.6584 9.77081 13.4167 9.77081H9.91675C9.67512 9.77081 9.47925 9.57494 9.47925 9.33331Z"
                        fill="#FF3E5B"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.33325 7.72919C2.57488 7.72919 2.77075 7.92506 2.77075 8.16669V12.25C2.77075 12.4916 2.57488 12.6875 2.33325 12.6875C2.09163 12.6875 1.89575 12.4916 1.89575 12.25V8.16669C1.89575 7.92506 2.09163 7.72919 2.33325 7.72919Z"
                        fill="#FF3E5B"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.145752 8.16669C0.145752 7.92506 0.341627 7.72919 0.583252 7.72919H4.08325C4.32488 7.72919 4.52075 7.92506 4.52075 8.16669C4.52075 8.40831 4.32488 8.60419 4.08325 8.60419H0.583252C0.341627 8.60419 0.145752 8.40831 0.145752 8.16669Z"
                        fill="#FF3E5B"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7 6.5625C7.24162 6.5625 7.4375 6.75838 7.4375 7V12.25C7.4375 12.4916 7.24162 12.6875 7 12.6875C6.75838 12.6875 6.5625 12.4916 6.5625 12.25V7C6.5625 6.75838 6.75838 6.5625 7 6.5625Z"
                        fill="#FF3E5B"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.8125 4.66669C4.8125 4.42506 5.00838 4.22919 5.25 4.22919H8.75C8.99162 4.22919 9.1875 4.42506 9.1875 4.66669C9.1875 4.90831 8.99162 5.10419 8.75 5.10419H5.25C5.00838 5.10419 4.8125 4.90831 4.8125 4.66669Z"
                        fill="#FF3E5B"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.6667 1.3125C11.9084 1.3125 12.1042 1.50838 12.1042 1.75V7C12.1042 7.24162 11.9084 7.4375 11.6667 7.4375C11.4251 7.4375 11.2292 7.24162 11.2292 7V1.75C11.2292 1.50838 11.4251 1.3125 11.6667 1.3125Z"
                        fill="#FF3E5B"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7 1.3125C7.24162 1.3125 7.4375 1.50838 7.4375 1.75V4.66667C7.4375 4.90829 7.24162 5.10417 7 5.10417C6.75838 5.10417 6.5625 4.90829 6.5625 4.66667V1.75C6.5625 1.50838 6.75838 1.3125 7 1.3125Z"
                        fill="#FF3E5B"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.33325 1.3125C2.57488 1.3125 2.77075 1.50838 2.77075 1.75V5.83333C2.77075 6.07496 2.57488 6.27083 2.33325 6.27083C2.09163 6.27083 1.89575 6.07496 1.89575 5.83333V1.75C1.89575 1.50838 2.09163 1.3125 2.33325 1.3125Z"
                        fill="#FF3E5B"
                      />
                    </svg>
                  </span>
                  {/* text */}
                  <span
                    style={{
                      fontSize: 14,
                      color: "#FF3E5B",
                      fontWeight: 700,
                      marginLeft: 7,
                    }}
                  >
                    Filters
                  </span>
                </div>
              </div>
            </div>
            {/* right side */}
          </div>
          {/* desktop table contents */}
          <div
            className="tableContainer"
            style={{
              borderColor: theme === "light" ? "#e6e6e6" : "#232324",
              // display:"none",
              overflowX: "scroll",
            }}
          >
            <Table
              tableHead={tableHead}
              tableBody={tableData}
              // tableBody={visibleTableData}
              selectDropdownFilter={setSelectedDropdownFilterText}
              searchDropdownText={selectDropdownFilterText}
              inputFields={inputFields}
              emptyTableData={emptyTableData}
              setDrawerData={setDrawerData}
              setDrawerType={setDrawerType}
              setIsDrawerOpen={setIsDrawerOpen}
            />
            {/* <TableRedevelop
              tableHead={tableHead}
              tableBody={tableData}
              // tableBody={visibleTableData}
              selectDropdownFilter={setSelectedDropdownFilterText}
              searchDropdownText={selectDropdownFilterText}
              inputFields={inputFields}
              emptyTableData={emptyTableData}
              setDrawerData={setDrawerData}
              setDrawerType={setDrawerType}
              setIsDrawerOpen={setIsDrawerOpen}
            /> */}
          </div>
          {/* mobile table contents */}
          <div
            className="tableMobileView"
            style={{
              border: `1px solid ${theme === "light" ? "#e6e6e6" : "#232324"}`,
              borderRadius: 4,
            }}
          >
            <ResponsiveTable
              // tableHead={tableHead}
              tableBody={tableData}
              // tableBody={visibleTableData}
              selectDropdownFilter={setSelectedDropdownFilterText}
              searchDropdownText={selectDropdownFilterText}
              inputFields={inputFields}
              emptyTableData={emptyTableData}
              setDrawerData={setDrawerData}
              setDrawerType={setDrawerType}
              setIsDrawerOpen={setIsDrawerOpen}
            />
          </div>
        </div>
        {/* Paginations */}
        <div
          className={`paginations ${theme === "light" ? "light" : "dark"}`}
          style={{ backgroundColor: theme === "light" ? "#ffffff" : "#0B0B0C" }}
        >
          {/* left side */}
          <div className="leftSide">
            {/* total length of table data */}
            <p style={{ color: "#858585", fontSize: 14, whiteSpace: "nowrap" }}>
              Total{" "}
              <span style={{ color: theme === "light" ? "black" : "white" }}>
                {tableData.length}
              </span>{" "}
              items
            </p>
            {/* dropdown */}
            <div className="dropdownContainer">
              <Dropdown
                items={paginationItems}
                dropdownDirection="top"
                padding="4px 12px"
                selected={selected}
                setSelected={setSelected}
                width={84}
              />
            </div>
          </div>
          {/* right side */}
          <div className="rightSide">
            {/* left btn */}
            <button
              type="button"
              className="btn"
              style={{
                backgroundColor: theme === "light" ? "#E6E6E6" : "#1C1C1C",
                border: `1px solid ${
                  theme === "light" ? "#b5b5b6" : "#232324"
                }`,
              }}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.0552 1.51062C9.92303 1.3696 9.70154 1.36246 9.56052 1.49466L3.96052 6.74466C3.88995 6.81083 3.8499 6.90326 3.8499 7C3.8499 7.09675 3.88995 7.18917 3.96052 7.25534L9.56052 12.5053C9.70154 12.6375 9.92303 12.6304 10.0552 12.4894C10.1874 12.3484 10.1803 12.1269 10.0393 11.9947L4.71164 7L10.0393 2.00534C10.1803 1.87314 10.1874 1.65164 10.0552 1.51062Z"
                    fill="#858585"
                  />
                </svg>
              </span>
            </button>
            {/* table data first items */}
            <button
              type="button"
              className="btn"
              style={{
                backgroundColor: theme === "light" ? "#E6E6E6" : "#1C1C1C",
                border: `1px solid ${
                  theme === "light" ? "#b5b5b6" : "#232324"
                }`,
              }}
            >
              1
            </button>
            {/* left Dots */}
            <button type="button" className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="4"
                viewBox="0 0 19 4"
                fill="none"
              >
                <path
                  d="M0.882812 2.0918C0.882812 1.61328 1.05143 1.2054 1.38867 0.868164C1.73047 0.530924 2.13835 0.362305 2.6123 0.362305C3.09082 0.362305 3.4987 0.530924 3.83594 0.868164C4.17773 1.2054 4.34863 1.61328 4.34863 2.0918C4.34863 2.57031 4.17773 2.98047 3.83594 3.32227C3.4987 3.65951 3.09082 3.82812 2.6123 3.82812C2.13835 3.82812 1.73047 3.65951 1.38867 3.32227C1.05143 2.98047 0.882812 2.57031 0.882812 2.0918ZM7.79102 2.0918C7.79102 1.61328 7.95964 1.2054 8.29688 0.868164C8.63867 0.530924 9.04655 0.362305 9.52051 0.362305C9.99902 0.362305 10.4069 0.530924 10.7441 0.868164C11.0859 1.2054 11.2568 1.61328 11.2568 2.0918C11.2568 2.57031 11.0859 2.98047 10.7441 3.32227C10.4069 3.65951 9.99902 3.82812 9.52051 3.82812C9.04655 3.82812 8.63867 3.65951 8.29688 3.32227C7.95964 2.98047 7.79102 2.57031 7.79102 2.0918ZM14.6992 2.0918C14.6992 1.61328 14.8678 1.2054 15.2051 0.868164C15.5469 0.530924 15.9548 0.362305 16.4287 0.362305C16.9072 0.362305 17.3151 0.530924 17.6523 0.868164C17.9941 1.2054 18.165 1.61328 18.165 2.0918C18.165 2.57031 17.9941 2.98047 17.6523 3.32227C17.3151 3.65951 16.9072 3.82812 16.4287 3.82812C15.9548 3.82812 15.5469 3.65951 15.2051 3.32227C14.8678 2.98047 14.6992 2.57031 14.6992 2.0918Z"
                  fill="#858585"
                />
              </svg>
            </button>
            {/* Middel table data */}
            {middleButton.map((ele, index) => (
              <button
                key={index}
                type="button"
                className="btn"
                style={{
                  backgroundColor: theme === "light" ? "#E6E6E6" : "#1C1C1C",
                  border: `1px solid ${
                    ele === 6
                      ? "#FF3E5B"
                      : theme === "light"
                      ? "#b5b5b6"
                      : "#232324"
                  }`,
                  color: ele === 6 && "#FF3E5B",
                }}
              >
                {ele}
              </button>
            ))}
            {/* Middel table data end */}
            {/* right Dots */}
            <button type="button" className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="4"
                viewBox="0 0 19 4"
                fill="none"
              >
                <path
                  d="M0.882812 2.0918C0.882812 1.61328 1.05143 1.2054 1.38867 0.868164C1.73047 0.530924 2.13835 0.362305 2.6123 0.362305C3.09082 0.362305 3.4987 0.530924 3.83594 0.868164C4.17773 1.2054 4.34863 1.61328 4.34863 2.0918C4.34863 2.57031 4.17773 2.98047 3.83594 3.32227C3.4987 3.65951 3.09082 3.82812 2.6123 3.82812C2.13835 3.82812 1.73047 3.65951 1.38867 3.32227C1.05143 2.98047 0.882812 2.57031 0.882812 2.0918ZM7.79102 2.0918C7.79102 1.61328 7.95964 1.2054 8.29688 0.868164C8.63867 0.530924 9.04655 0.362305 9.52051 0.362305C9.99902 0.362305 10.4069 0.530924 10.7441 0.868164C11.0859 1.2054 11.2568 1.61328 11.2568 2.0918C11.2568 2.57031 11.0859 2.98047 10.7441 3.32227C10.4069 3.65951 9.99902 3.82812 9.52051 3.82812C9.04655 3.82812 8.63867 3.65951 8.29688 3.32227C7.95964 2.98047 7.79102 2.57031 7.79102 2.0918ZM14.6992 2.0918C14.6992 1.61328 14.8678 1.2054 15.2051 0.868164C15.5469 0.530924 15.9548 0.362305 16.4287 0.362305C16.9072 0.362305 17.3151 0.530924 17.6523 0.868164C17.9941 1.2054 18.165 1.61328 18.165 2.0918C18.165 2.57031 17.9941 2.98047 17.6523 3.32227C17.3151 3.65951 16.9072 3.82812 16.4287 3.82812C15.9548 3.82812 15.5469 3.65951 15.2051 3.32227C14.8678 2.98047 14.6992 2.57031 14.6992 2.0918Z"
                  fill="#858585"
                />
              </svg>
            </button>
            {/* table data last items */}
            <button
              type="button"
              className="btn"
              style={{
                backgroundColor: theme === "light" ? "#E6E6E6" : "#1C1C1C",
                border: `1px solid ${
                  theme === "light" ? "#b5b5b6" : "#232324"
                }`,
              }}
            >
              {tableData.length}
            </button>
            {/* right btn */}
            <button
              type="button"
              className="btn"
              style={{
                backgroundColor: theme === "light" ? "#E6E6E6" : "#1C1C1C",
                border: `1px solid ${
                  theme === "light" ? "#b5b5b6" : "#232324"
                }`,
              }}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.94476 1.51062C4.07697 1.3696 4.29846 1.36246 4.43948 1.49466L10.0395 6.74466C10.1101 6.81083 10.1501 6.90326 10.1501 7C10.1501 7.09675 10.1101 7.18917 10.0395 7.25534L4.43948 12.5053C4.29846 12.6375 4.07697 12.6304 3.94476 12.4894C3.81256 12.3484 3.8197 12.1269 3.96072 11.9947L9.28836 7L3.96072 2.00534C3.8197 1.87314 3.81256 1.65164 3.94476 1.51062Z"
                    fill="#858585"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* Footer */}
      {tableData.length < 10 ? (
        <div
          className="footer"
          style={{ backgroundColor: theme === "light" ? "#ffffff" : "#0B0B0C" }}
        >
          <span>Copyright © 2023 ROBIN.</span>
        </div>
      ) : (
        ""
      )}

      {/* Desktop Drawer */}
      <Drawer
        data={drawerData}
        drawerType={drawerType}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        isActiveTabs={isActiveTabs}
        setDrawerType={setDrawerType}
      />

      {/* Movile View Drawer */}
      <MobileViewDrawer
        data={drawerData}
        drawerType={drawerType}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        isActiveTabs={isActiveTabs}
        setDrawerType={setDrawerType}
      />

      {/* overlay */}
      <div
        id="newsDrawerOverlay"
        style={{ display: isDrawerOpen ? "block" : "none" }}
        onClick={() => handleDrawerClosed()}
      ></div>
    </>
  );
}

export default CustomerMaster;

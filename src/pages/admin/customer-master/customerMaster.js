import React, { useEffect, useState } from "react";
import "./styles.scss";
import Title from "../../../components/title";
import { useSelector } from "react-redux";
import SelectDropdownFilter from "../../../components/searchdropdownfilter";
import { customerMasterData, tableHead } from "../../../data";
import Table from "../../../components/table";
import Header from "../../../components/header";

function CustomerMaster() {
  const theme = useSelector((state) => state.theme);
  const [isActiveTabs, setIsActiveTabs] = useState("");
  const [inputFields, setInputFields] = useState("");
  const [tableData, setTableData] = useState([]);
  const [selectDropdownFilterText, setSelectedDropdownFilterText] =
    useState("");

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

  const emptyTableData = () => {
    return (
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
  };

  return (
    <>
      {/* <Header title="Customer Master" /> */}
      <div className="customerMaster container-fluid">
        {/* ============ title ============ */}
        <div
          style={{
            marginTop: 20,
            borderBottom: `1px solid ${
              theme === "light" ? "#DEDEDE" : "#635D5D"
            }`,
          }}
        >
          <Title title="Customer Master" />
        </div>
        {/* =============== Content ================ */}
        <div className="customerMasterContainer">
          {/* header */}
          <div
            style={{
              border: `1px solid ${theme === "light" ? "#E6E6E6" : "#635D5D"}`,
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
                    theme === "light" ? "#B5B5B6" : "#635D5D"
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
                  style={{ cursor: "pointer", whiteSpace: "nowrap" }}
                >
                  {/* icons */}
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
                    Advance filters
                  </span>
                </div>
              </div>
            </div>
            {/* right side */}
          </div>
          {/* contents */}
          <div
            className="tableContainer"
            style={{
              borderColor: theme === "light" ? "#B5B5B6" : "#635d5d",
            }}
          >
            <Table
              tableHead={tableHead}
              tableBody={tableData}
              selectDropdownFilter={setSelectedDropdownFilterText}
              searchDropdownText={selectDropdownFilterText}
              inputFields={inputFields}
              emptyTableData={emptyTableData}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerMaster;

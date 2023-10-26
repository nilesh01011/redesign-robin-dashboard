"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";

function Drawer({ drawerType, data, isDrawerOpen, setIsDrawerOpen }) {
  const theme = useSelector((state) => state.theme);
  const userNameSplit = data.three ? data.three?.split(" ") : null;
  const firstLetter = userNameSplit?.[0]?.[0] || "";
  const lastLetter = userNameSplit?.[userNameSplit?.length - 1]?.[0] || "";

  const leftSideDrawerRef = useRef();
  const rightSideDrawerRef = useRef();

  const [currentTabsTitle, setCurrentTabsTitle] = useState("");

  const tabsList = useMemo(() => {
    return [
      {
        key: 1,
        name: "Customer Details",
        contents: [
          {
            // number: data.four,
            // customerType: data.three,
            // customer: null,
            // companyName: "Company Name",
            // parentCompanyCode: `M${data.one}`,
            // parentCompanyName: "Parent Company",
            // coporateType: "Listed",
            // coporateName: "XYZ Corporate Name",
            // coporateCode: "222",
            // coporateCategory: "C1",
            // membershipType: data.six,
            title: "Mobile Number",
            text: data.four,
          },
          {
            title: "Customer Type",
            text: data.three,
          },
          {
            title: "",
            text: "",
          },
          {
            title: "Company Name",
            text: "Company Name",
          },
          {
            title: "Parent Company Code",
            text: `M${data.one}`,
          },
          {
            title: "Parent Company Name",
            text: "Parent Company Name",
          },
        ],
      },
      {
        key: 2,
        name: "Customer Profile",
        contents: [],
      },
      {
        key: 3,
        name: "Address",
        contents: [],
      },
      {
        key: 4,
        name: "Contacts",
        contents: [],
      },
      {
        key: 5,
        name: "Accounts Related",
        contents: [],
      },
      {
        key: 6,
        name: "Supporting Documents",
        contents: [],
      },
    ];
  }, [data]);

  useEffect(() => {
    if (!currentTabsTitle) {
      setCurrentTabsTitle(tabsList[0].name);
    } else {
      setCurrentTabsTitle(currentTabsTitle);
    }
  }, [currentTabsTitle, tabsList]);

  // const [seeMoreData, setSeeMoreData] = useState(true);
  const [textTrucat, setTextTrucat] = useState(false);

  const wordSlice = (word) => {
    if (word === undefined) {
      return;
    }
    if (word.length > 22) {
      return word.slice(0, 22) + "...";
    } else {
      return word;
    }
  };

  return (
    <div
      className="tableDrawerContainer"
      style={{
        right: isDrawerOpen ? "0" : "-150%",
        backgroundColor: theme === "light" ? "#fff" : "#0B0B0C",
      }}
    >
      {/* header */}
      <div
        className="drawerTypeText"
        style={{
          backgroundColor: theme === "light" ? "#fff" : "#1C1C1C",
          boxShadow:
            theme === "light"
              ? "0px 1px 1px 0px rgba(0, 0, 0, 0.15)"
              : "0px 1px 1px 0px rgba(255, 255, 255, 0.15)",
        }}
      >
        <h3>{drawerType} Customer Details</h3>
        <span onClick={() => setIsDrawerOpen(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.45505 3.95529C3.61777 3.79257 3.88158 3.79257 4.0443 3.95529L9.99967 9.91066L15.955 3.95529C16.1178 3.79257 16.3816 3.79257 16.5443 3.95529C16.707 4.11801 16.707 4.38183 16.5443 4.54455L10.5889 10.4999L16.5443 16.4553C16.707 16.618 16.707 16.8818 16.5443 17.0445C16.3816 17.2073 16.1178 17.2073 15.955 17.0445L9.99967 11.0892L4.0443 17.0445C3.88158 17.2073 3.61777 17.2073 3.45505 17.0445C3.29233 16.8818 3.29233 16.618 3.45505 16.4553L9.41042 10.4999L3.45505 4.54455C3.29233 4.38183 3.29233 4.11801 3.45505 3.95529Z"
              fill="currentColor"
            />
          </svg>
        </span>
      </div>

      {/* data */}
      <div className="drawerData">
        {/* left side */}
        <div
          ref={leftSideDrawerRef}
          className="leftSide"
          style={{
            backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
            boxShadow:
              theme === "light"
                ? "1px 0px 1px 0px rgba(0, 0, 0, 0.15)"
                : "0px 1px 1px 0px rgba(255, 255, 255, 0.15)",
          }}
        >
          {/* user profile */}
          <div
            className="userProfile"
            style={{
              border: `1px solid ${theme === "light" ? "#B5B5B6" : "#545454"}`,
            }}
          >
            {/* user header section */}
            <div className="userImgNameId">
              {/* user images */}
              <div
                className="userImg"
                style={{
                  backgroundColor: theme === "light" ? "#E6E6E6" : "#545454",
                  border: `1px solid ${
                    theme === "light" ? "#B5B5B6" : "#545454"
                  }`,
                }}
              >
                {data.userImg ? (
                  <img src={data.userImg} alt={data.username} />
                ) : (
                  <span
                    style={{
                      borderColor: theme === "light" ? "#DEDEDE" : "#635D5D",
                    }}
                  >
                    {firstLetter + "" + lastLetter}
                  </span>
                )}
              </div>
              {/* user name and Id */}
              <div className="userName_id">
                <h3
                  onMouseEnter={() =>
                    data.two.length > 22 && setTextTrucat(true)
                  }
                  onMouseLeave={() =>
                    data.two.length > 22 && setTextTrucat(false)
                  }
                >
                  {/* {data.two} */}

                  <span style={{ opacity: textTrucat ? "0" : "1" }}>
                    {wordSlice(data.three)}
                  </span>

                  <span
                    className="userNameSpan"
                    style={{
                      opacity: textTrucat ? "1" : "0",
                      backgroundColor: textTrucat
                        ? theme === "light"
                          ? "#ffffff"
                          : "#0B0B0C"
                        : "",
                    }}
                  >
                    {data.two}
                  </span>
                </h3>
                <p>C{data.one}</p>
              </div>
            </div>
            {/* divider */}
            <div
              className="divider"
              style={{
                backgroundColor: theme === "light" ? "#E6E6E6" : "#232324",
              }}
            ></div>
            {/* customer types */}
            <div className="customerType">
              <p style={{ fontWeight: 500 }}>Customer Type:</p>
              <p
                style={{
                  color: theme === "light" ? "black" : "white",
                  fontWeight: 400,
                }}
              >
                {data.three}
              </p>
            </div>

            {/* More data */}
            <p
              style={{
                width: "100%",
                fontSize: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>Mobile no.:</span>
              <span style={{ fontWeight: 700 }}>{/* {data.four} */}</span>
            </p>
            {/* see more */}
            <div className="moreDataShow">
              {/* <p
                style={{
                  fontWeight: 700,
                  fontSize: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  color: "#FF3E5B",
                  cursor: "pointer",
                }}
                onClick={() => setSeeMoreData(!seeMoreData)}
              >
                See {seeMoreData ? "Less" : "More"}{" "}
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    style={{
                      transform: seeMoreData ? "" : "rotate(180deg)",
                      transition: "transform 0.4s ease-in-out",
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.705 9.11881C10.8259 9.00549 10.832 8.81564 10.7187 8.69477L6.21866 3.89477C6.16195 3.83427 6.08273 3.79995 5.9998 3.79995C5.91688 3.79995 5.83766 3.83427 5.78094 3.89477L1.28094 8.69477C1.16762 8.81564 1.17375 9.00549 1.29462 9.11881C1.41549 9.23213 1.60535 9.22601 1.71866 9.10513L5.9998 4.53858L10.2809 9.10513C10.3943 9.22601 10.5841 9.23213 10.705 9.11881Z"
                      fill="#FF3E5B"
                    />
                  </svg>
                </span>
              </p> */}
              {/* {seeMoreData && (
                <>
                  divider
                  <div
                    className="divider"
                    style={{
                      backgroundColor:
                        theme === "light" ? "#E6E6E6" : "#232324",
                    }}
                  ></div>

                  More data
                  <p
                    style={{
                      width: "100%",
                      fontSize: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>Mobile no.:</span>
                    <span style={{ fontWeight: 700 }}>{data.four}</span>
                  </p>
                </>
              )} */}
            </div>
          </div>
          {/* tabs steps */}
          <div className="tabsSteps">
            {tabsList?.map((ele, index) => (
              <div key={index} className="tabsItems">
                {/* left side */}
                <span
                  className={`icons ${
                    tabsList?.length - 1 === index ? "" : "lines"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle cx="12" cy="12" r="12" fill="#70C922" />
                    <path
                      d="M17.3333 8L10 15.3333L6.66667 12"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {/* right side */}
                <div
                  onClick={() => setCurrentTabsTitle(ele.name)}
                  className="tabsText"
                >
                  <span
                    style={{
                      color:
                        currentTabsTitle === ele.name
                          ? theme === "light"
                            ? "#0B0B0C"
                            : "#ffffff"
                          : "#858585",
                      fontWeight: currentTabsTitle === ele.name ? "500" : "400",
                    }}
                  >
                    {ele.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* right side */}
        <div ref={rightSideDrawerRef} className="rightSide">
          {/* contents */}
          <div className="contents">
            <h2>{currentTabsTitle}</h2>
            {/* user data details */}
            <div
              className="customerDetails"
              style={{
                backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
                borderColor: theme === "light" ? "#E6E6E6" : "#232324",
              }}
            >
              {tabsList.map((ele, index) => {
                if (ele.name === currentTabsTitle) {
                  return (
                    <div key={index} className="detailsContainer">
                      {ele.contents.map((el) => {
                        // console.log(el);
                      })}
                    </div>
                  );
                }
              })}
            </div>
          </div>
          {/* footer side */}
          <div
            className="footerSide"
            style={{
              boxShadow:
                theme === "light"
                  ? "1px 0px 0px 1px rgba(0, 0, 0, 0.15)"
                  : "1px 0px 0px 1px rgba(255, 255, 255, 0.15)",
              backgroundColor: theme === "light" ? "#ffffff" : "#1C1C1C",
            }}
          >
            {/* left close btn */}
            <button
              type="button"
              className="buttons"
              style={{ color: "#FF3E5B" }}
            >
              Close
            </button>
            {/* right side button */}
            <div className="rightSideBtn">
              <button
                type="button"
                className="buttons"
                style={{ color: "#FF3E5B" }}
              >
                Edit
              </button>
              <button
                type="button"
                className="buttons"
                style={{ color: "#fff", backgroundColor: "#FF3E5B" }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;

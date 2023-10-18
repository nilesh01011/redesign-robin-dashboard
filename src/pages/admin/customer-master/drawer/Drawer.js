import React, { useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";

function Drawer({ drawerType, data, isDrawerOpen, setIsDrawerOpen }) {
  const theme = useSelector((state) => state.theme);
  const userNameSplit = data.two ? data.two?.split(" ") : null;
  const firstLetter = userNameSplit?.[0]?.[0] || "";
  const lastLetter = userNameSplit?.[userNameSplit?.length - 1]?.[0] || "";

  const [seeMoreData, setSeeMoreData] = useState(true);
  return (
    <div
      className="customerMasterDrawerContainer"
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
          className="leftSide"
          style={{
            backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
            boxShadow:
              theme === "light"
                ? "0px 1px 1px 0px rgba(0, 0, 0, 0.15)"
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
                <h3>{data.two}</h3>
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
            {/* see more */}
            <div className="moreDataShow">
              <p
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
              </p>
              {seeMoreData && (
                <>
                  {/* divider */}
                  <div
                    className="divider"
                    style={{
                      backgroundColor:
                        theme === "light" ? "#E6E6E6" : "#232324",
                    }}
                  ></div>

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
                    <span style={{ fontWeight: 700 }}>{data.four}</span>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="rightSide">
          <div className="contents">
            <h2>Customer Details</h2>
            {/* user data details */}
            <div className="customerDetails" style={{backgroundColor:theme === "light" ? "#F2F2F2" : "#1C1C1C",borderColor:theme === "light" ? "#E6E6E6" : "#232324"}}></div>
          </div>
          {/* footer side */}
          <div
            className="footerSide"
            style={{
              boxShadow:
                theme === "light"
                  ? "1px 0px 0px 1px rgba(0, 0, 0, 0.15)"
                  : "1px 0px 0px 1px rgba(255, 255, 255, 0.15)",
                  backgroundColor: theme === "light" ? "#fff" : "#0B0B0C",
            }}
          >
            {/* left close btn */}
            <button type="button" className="buttons" style={{color:"#FF3E5B"}}>Close</button>
            {/* right side button */}
            <div className="rightSideBtn">
            <button type="button" className="buttons" style={{color:"#FF3E5B"}}>Edit</button>
              <button type="button" className="buttons" style={{color:"#fff",backgroundColor:"#FF3E5B"}}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;

"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import GridContent from "./gridContent/GridContent";
import Accordion from "./accordion/Accordion";

function Drawer({ drawerType, data, isDrawerOpen, setIsDrawerOpen }) {
  const theme = useSelector((state) => state.theme);
  const userNameSplit = data.three ? data.three?.split(" ") : null;
  const firstLetter = userNameSplit?.[0]?.[0] || "";
  const lastLetter = userNameSplit?.[userNameSplit?.length - 1]?.[0] || "";
  const [currentTabsTitle, setCurrentTabsTitle] = useState("");

  const [contentsType, setContentsType] = useState("gridContents");

  const [tabsStatus, setTabsStatus] = useState(1);

  const [seeMoreData, setSeeMoreData] = useState(false);

  // console.log(data);

  const tabsList = useMemo(() => {
    return [
      {
        key: 1,
        name: "Booking Details",
        type: "gridContents",
        contents: [
          {
            title: "Initial Promise Delivery Date",
            text: "23 Jan 2023",
          },
          {
            title: "Cust. Expected Delivery Date",
            text: "15 Jan 2023",
          },
          {
            title: "Sale Type",
            text: "SGST",
          },
          {
            title: "Price Type",
            text: "Individual",
          },
          {
            title: "Booking Amount",
            text: `250000`,
          },
          {
            title: "Sales Consultant",
            text: "Vimal Kumar",
          },
          {
            title: "Special Request",
            text: "Special",
          },
          {
            title: "Place of Registration",
            text: "Noida",
          },
          {
            title: "Delivery At",
            text: "Showroom",
          },

          {
            title: "Influencer/Mitra Type",
            text: "Mitra Type",
          },
          {
            title: "Influencer/Mitra Name",
            text: "Type",
          },
          {
            title: "Mode of Payment",
            text: "HDFC",
          },
          {
            title: "Finance Arranged By",
            text: "Dealer",
          },
          {
            title: "Exchange",
            text: "Yes",
            textColor: "#70C922",
          },
          {
            title: "Loyalty Scheme",
            text: "No",
          },
          {
            title: "Referral",
            text: "Yes",
            textColor: "#70C922",
          },
        ],
      },
      {
        key: 2,
        name: "Customer Details",
        type: "accordion",
        contents: [
          {
            title: "Booking Customer",
            type: "gridContents",
            contents: [
              {
                title: "Mobile Number",
                text: "+91-9893473843",
              },
              {
                title: "Customer ID",
                text: "CFG4554564787",
              },
              {
                title: "Customer Type",
                text: "Individual",
              },
              {
                title: "Salutation",
                text: "Mr.",
              },
              {
                title: "Customer Name",
                text: "Vinayshambhu",
              },
              {
                title: "Address",
                text: "Address Details",
              },
              {
                title: "City/District",
                text: "Mumbai",
              },
              {
                title: "State",
                text: "Maharashtra",
              },
              {
                title: "PIN Code",
                text: "123456",
              },
              {
                title: "Alternate Number",
                text: "+91-9349923939",
              },
              {
                title: "Email",
                text: "vinay.sk@gmail.com",
              },
              {
                title: "PAN",
                text: "ABCTY1234D",
              },
              {
                title: "Aadhar",
                text: "**** **** 2222",
              },
              {
                title: "GSTIN",
                text: "27AAAAP0267H2ZN",
              },
              {
                title: "Driving Licence",
                text: "DL-1420110012345",
              },
              {
                title: "Trade Licence",
                text: "********3432",
              },
              {
                title: "Birthdate",
                text: "12 Jan 2021",
              },
            ],
          },
          {
            title: "Billing Customer",
            type: "gridContents",
            contents: [
              {
                title: "Mobile Number",
                text: "+91-9349923939",
              },
              {
                title: "Customer ID",
                text: "CUST12433461T",
              },
              {
                title: "Customer Type",
                text: "Individual",
              },
              {
                title: "Salutation",
                text: "Mr.",
              },
              {
                title: "Customer Name",
                text: "Vinayshambhu",
              },
              {
                title: "Address",
                text: "Address Details",
              },
              {
                title: "City/District",
                text: "Mumbai",
              },
              {
                title: "State",
                text: "Maharashtra",
              },
              {
                title: "PIN Code",
                text: "123456",
              },
              {
                title: "Alternate Number",
                text: "+91-9349923939",
              },
              {
                title: "Email",
                text: "vinay.sk@gmail.com",
              },
              {
                title: "PAN",
                text: "ABCTY1234D",
              },
              {
                title: "Aadhar",
                text: "**** **** 2222",
              },
              {
                title: "GSTIN",
                text: "27AAAAP0267H2ZN",
              },
              {
                title: "Driving Licence",
                text: "DL-1420110012345",
              },
              {
                title: "Trade Licence",
                text: "********3432",
              },

              {
                title: "Birthdate",
                text: "12 Jan 2021",
              },
            ],
          },
        ],
      },
      {
        key: 3,
        name: "Vehicle Details",
        type: "accordion",
        default: "accordion",
        contents: [
          {
            title: "Vehicle Information",
            type: "gridContents",
            contents: [
              {
                title: "Vehicle Usage Type ",
                text: "Non-Taxi",
              },
              {
                title: "Model",
                text: "SCORPIO",
              },
              {
                title: "Model Code",
                text: "AX7-L",
              },
              {
                title: "Available Stock",
                text: "14",
              },
              {
                title: "Vehicle Allocated Status",
                text: "PO Generated",
              },
              {
                title: "PO Number",
                text: "123122737328",
              },
              {
                title: "PO Date",
                text: "12 Jan 2023",
              },
              {
                title: "PO Status",
                text: "Status",
              },
              {
                title: "SO Number",
                text: "653728438213",
              },
              {
                title: "SO Status",
                text: "Status",
              },
              {
                title: "SO Date",
                text: "12 Jan 2023",
              },
              {
                title: "Booking Amount",
                text: "24500",
              },
              {
                title: "Total Tax Amount",
                text: "245679",
              },
              {
                title: "VIN Number",
                text: "MAFCL723849203VIN",
              },
              {
                title: "Vehicle Selling Price",
                text: "12780",
              },
              {
                title: "Discount Amount",
                text: "245000",
              },
              {
                title: "Vehicle Amount",
                text: "150000",
              },
            ],
          },
          {
            title: "Po/SO Details",
            type: "gridContents",
            contents: [
              {
                title: "PO Date",
                text: "12 May 2023",
              },
              {
                title: "PO Status",
                text: "Status",
              },
              {
                title: "PO Number",
                text: "653728438213",
              },
              {
                title: "SO Date",
                text: "12 May 2013",
              },
              {
                title: "SO Date",
                text: "Status",
              },
              {
                title: "SO Number",
                text: "123122737328",
              },
            ],
          },
          {
            title: "Tax Details",
            type: "gridTable",
            contents: [
              {
                tbody: [
                  {
                    textOne: "1",
                    textTwo: "CGST @18%",
                    textOne: "18%",
                    textOne: "90,0000",
                  },
                  {
                    textOne: "2",
                    textTwo: "CGST @18%",
                    textOne: "18%",
                    textOne: "80,0000",
                  },
                  {
                    textOne: "3",
                    textTwo: "CGST @18%",
                    textOne: "14%",
                    textOne: "50,0000",
                  },
                ],
              },
            ],
          },
          {
            title: "Optional Service",
            type: "gridContents",
            contents: [
              {
                title: "Name Of Person",
                text: "Vimal Kumar",
              },
              {
                title: "Position",
                text: "Manager",
              },
              {
                title: "Company Name",
                text: "Koncept",
              },
              {
                title: "Remarks",
                text: "This is Remark Dummy text",
              },
            ],
          },
        ],
      },
      {
        key: 3,
        name: "Scheme and Offer Details",
        type: "accordion",
        title: "Company Address",
        default: "accordionTwo",
        contents: [
          {
            title: "Office",
            type: "gridContents",
            addressType: "Office",
            contents: [
              {
                title: "Address Type",
                text: "Office",
              },
              {
                title: "Address Line 1",
                text: "A-463,15th Cross Street",
              },
              {
                title: "Address Line 2",
                text: "A-463,15th Cross Street",
              },
              {
                title: "Tehsil",
                text: "B6G431",
              },
              {
                title: "Pin Code",
                text: "400001",
              },
              {
                title: "City",
                text: "Noida",
              },

              {
                title: "District",
                text: "Gautam Budh Nagar",
              },
              {
                title: "State",
                text: "Uttar Pradesh",
              },
              {
                title: "Contact Name",
                text: "Arvind Kumar",
              },
              {
                title: "Contact Mobile No.",
                text: "+91-9893473843",
              },
            ],
            checked: true,
          },
          {
            title: "Joe’s Home",
            type: "gridContents",
            addressType: "Other",
            contents: [
              {
                title: "Address Type",
                text: "Office",
              },
              {
                title: "Address Line 1",
                text: "A-463,15th Cross Street",
              },
              {
                title: "Address Line 2",
                text: "A-463,15th Cross Street",
              },
              {
                title: "Tehsil",
                text: "B6G431",
              },
              {
                title: "Pin Code",
                text: "400001",
              },
              {
                title: "City",
                text: "Noida",
              },

              {
                title: "District",
                text: "Gautam Budh Nagar",
              },
              {
                title: "State",
                text: "Uttar Pradesh",
              },
              {
                title: "Contact Name",
                text: "Arvind Kumar",
              },
              {
                title: "Contact Mobile No.",
                text: "+91-9893473843",
              },
            ],
            checked: false,
          },
        ],
      },
      {
        key: 4,
        name: "Insurance Details",
        type: "accordion",
        title: "Company Contacts",
        default: "accordionTwo",
        contents: [
          {
            title: "Vimal Pal Kumar",
            type: "accordionGridForm",
            addressType: "Payment",
            contents: [
              {
                type: "form",
                contents: [
                  {
                    // userImg: USERIMG,
                    text: "File type should be .png and .jpg  and max file size to be 5Mb",
                  },
                ],
              },
              {
                type: "gridContents",
                contents: [
                  {
                    title: "Purpose of Contact",
                    text: "Payment",
                  },
                  {
                    title: "Mobile Number",
                    text: "9813241244",
                  },
                  {
                    title: "Alternate Mobile Number",
                    text: "9485784596",
                  },
                  {
                    title: "Designation",
                    text: "Manager",
                  },
                  {
                    title: "Gender",
                    text: "Male",
                  },
                  {
                    title: "Title",
                    text: "Mr.",
                  },

                  {
                    title: "First Name",
                    text: "Vimal",
                  },
                  {
                    title: "Middle Name",
                    text: "Pal",
                  },
                  {
                    title: "Last/Surname",
                    text: "Kumar",
                  },
                  {
                    title: "E-Mail",
                    text: "vimal@gmail.com",
                  },
                  {
                    title: "Facebook Link",
                    text: "http://www.facebook.com",
                  },
                  {
                    title: "Twitter Link",
                    text: "http://www.twitter.com",
                  },
                  {
                    title: "Instagram Link",
                    text: "http://www.instagram.com",
                  },
                  {
                    title: "Youtube Channel",
                    text: "http://www.youtube.com",
                  },
                  {
                    title: "Team BHP Link",
                    text: "http://www.bhp.com",
                  },
                ],
              },
            ],
            checked: true,
          },
          {
            title: "Vimal Pal Kumar 2",
            type: "accordionGridForm",
            addressType: "Payment",
            contents: [
              {
                type: "form",
                contents: [
                  {
                    // userImg: AVATAR,
                    text: "File type should be .png and .jpg  and max file size to be 5Mb",
                  },
                ],
              },
              {
                type: "gridContents",
                contents: [
                  {
                    title: "Purpose of Contact",
                    text: "Payment",
                  },
                  {
                    title: "Mobile Number",
                    text: "9813241244",
                  },
                  {
                    title: "Alternate Mobile Number",
                    text: "9485784596",
                  },
                  {
                    title: "Designation",
                    text: "Manager",
                  },
                  {
                    title: "Gender",
                    text: "Male",
                  },
                  {
                    title: "Title",
                    text: "Mr.",
                  },

                  {
                    title: "First Name",
                    text: "Vimal",
                  },
                  {
                    title: "Middle Name",
                    text: "Pal",
                  },
                  {
                    title: "Last/Surname",
                    text: "Kumar",
                  },
                  {
                    title: "E-Mail",
                    text: "vimal@gmail.com",
                  },
                  {
                    title: "Facebook Link",
                    text: "http://www.facebook.com",
                  },
                  {
                    title: "Twitter Link",
                    text: "http://www.twitter.com",
                  },
                  {
                    title: "Instagram Link",
                    text: "http://www.instagram.com",
                  },
                  {
                    title: "Youtube Channel",
                    text: "http://www.youtube.com",
                  },
                  {
                    title: "Team BHP Link",
                    text: "http://www.bhp.com",
                  },
                ],
              },
            ],
            checked: false,
          },
        ],
      },
      {
        key: 5,
        name: "Finance Details",
        type: "normalData",
        default: "normalData",
        contents: [
          {
            contents: [
              {
                type: "gridContents",
                contents: [
                  {
                    title: "Credit Limit",
                    text: "2500000000",
                  },
                  {
                    title: "Credit Limit Days",
                    text: "90",
                  },
                  {
                    title: "Outstanding Amount",
                    text: "150000000",
                  },
                  {
                    title: "Parts Discount %",
                    text: "25",
                  },
                  {
                    title: "Labour Discount %",
                    text: "29",
                  },
                ],
              },
              {
                type: "flexColumnData",
                contents: [
                  {
                    title: "Remark",
                    text: "Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts",
                    VIPDealerChecked: true,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        key: 6,
        name: "Exchange Vehicle",
        type: "form",
        contents: [
          {
            title: "Form_60_Doc.jpg",
            text: "I accept that for the Transferred Vehicle , Claim can be generated from the billed Dealer.",
          },
          {
            title: "RC_Doc.jpg",
          },
        ],
      },
      {
        key: 7,
        name: "Invoice Information",
        type: "form",
        contents: [
          {
            title: "Form_60_Doc.jpg",
            text: "I accept that for the Transferred Vehicle , Claim can be generated from the billed Dealer.",
          },
          {
            title: "RC_Doc.jpg",
          },
        ],
      },

      {
        key: 8,
        name: "Referrals",
        type: "form",
        contents: [
          {
            title: "Form_60_Doc.jpg",
            text: "I accept that for the Transferred Vehicle , Claim can be generated from the billed Dealer.",
          },
          {
            title: "RC_Doc.jpg",
          },
        ],
      },

      {
        key: 9,
        name: "Loyalty Scheme",
        type: "form",
        contents: [
          {
            title: "Form_60_Doc.jpg",
            text: "I accept that for the Transferred Vehicle , Claim can be generated from the billed Dealer.",
          },
          {
            title: "RC_Doc.jpg",
          },
        ],
      },

      {
        key: 10,
        name: "Add-On Details",
        type: "form",
        contents: [
          {
            title: "Form_60_Doc.jpg",
            text: "I accept that for the Transferred Vehicle , Claim can be generated from the billed Dealer.",
          },
          {
            title: "RC_Doc.jpg",
          },
        ],
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

  const [indicator, setIndicator] = useState(0);

  const handleTabsActiveNext = (value) => {
    if (typeof value === "number") {
      tabsList.map((ele) => {
        if (tabsStatus + 1 === ele.key) {
          setCurrentTabsTitle(ele.name);
          setContentsType(ele.type);
          setTabsStatus(ele.key);
        }
      });
    } else {
      setCurrentTabsTitle(value.name);
      setContentsType(value.type);
      setTabsStatus(value.key);
    }
  };

  const handleTabsActiveBack = (value) => {
    // setTabsData(value);

    if (typeof value === "number") {
      tabsList.map((ele) => {
        if (tabsStatus - 1 === ele.key) {
          setCurrentTabsTitle(ele.name);
          setContentsType(ele.type);
          setTabsStatus(ele.key);
        }
      });
    }
  };

  const [leftSideScrollBar, setLeftSideScrollBar] = useState(false);

  const [expandButtons, setExpandButtons] = useState(false);

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
          className={`leftSide ${leftSideScrollBar && "activeScroll"} ${
            theme === "light" ? "light" : "dark"
          }`}
          style={{
            backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
            boxShadow:
              theme === "light"
                ? "1px 0px 1px 0px rgba(0, 0, 0, 0.15)"
                : "0px 1px 1px 0px rgba(255, 255, 255, 0.15)",
          }}
          onMouseEnter={() => setLeftSideScrollBar(true)}
          onMouseLeave={() => setLeftSideScrollBar(false)}
        >
          {/* user profile */}
          <div
            className="leftSideTopHeaders"
            style={{
              backgroundColor: theme === "light" ? "#E6E6E6" : "#1C1C1C",
            }}
          >
            <div
              className={`userProfile ${
                theme === "light" ? "lightTheme" : "darkTheme"
              }`}
              style={{
                border: `1px solid ${
                  theme === "light" ? "#B5B5B6" : "#545454"
                }`,
                // backgroundColor: theme === "light" ? "#E6E6E6" : "#1C1C1C",
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
                      data.three.length > 22 && setTextTrucat(true)
                    }
                    onMouseLeave={() =>
                      data.three.length > 22 && setTextTrucat(false)
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
                      {data.three}
                    </span>
                  </h3>
                  <p>C{data.one}</p>
                </div>
              </div>
              <button
                type="button"
                style={{
                  color: theme === "light" ? "#0B0B0C" : "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#FF3E5B",
                  marginTop: 10,
                }}
                onClick={() => setSeeMoreData(!seeMoreData)}
              >
                See {seeMoreData ? "Less" : "More"}
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: seeMoreData && "rotate(180deg)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.7052 9.11881C10.8261 9.00549 10.8322 8.81564 10.7189 8.69477L6.21891 3.89477C6.16219 3.83427 6.08297 3.79995 6.00005 3.79995C5.91712 3.79995 5.8379 3.83427 5.78119 3.89477L1.28119 8.69477C1.16787 8.81564 1.17399 9.00549 1.29486 9.11881C1.41574 9.23213 1.60559 9.22601 1.71891 9.10513L6.00005 4.53858L10.2812 9.10513C10.3945 9.22601 10.5844 9.23213 10.7052 9.11881Z"
                      fill="#FF3E5B"
                    />
                  </svg>
                </span>
              </button>
              {seeMoreData && (
                <div
                  className="divider"
                  style={{
                    backgroundColor: theme === "light" ? "#E6E6E6" : "#232324",
                    margin: "10px 0",
                  }}
                ></div>
              )}
              {/* customer types */}
              {seeMoreData && (
                <div className="customerType">
                  <p
                    style={{
                      width: "100%",
                      fontSize: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 500,
                        color: theme === "light" ? "#545454" : "#B5B5B6",
                      }}
                    >
                      Customer Type:
                    </span>
                    <span style={{ fontWeight: 400 }}>Corporate</span>
                  </p>

                  <div
                    className="divider"
                    style={{
                      backgroundColor:
                        theme === "light" ? "#E6E6E6" : "#232324",
                      margin: "4px 0",
                    }}
                  ></div>

                  <p
                    style={{
                      width: "100%",
                      fontSize: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 400,
                        color: theme === "light" ? "#545454" : "#B5B5B6",
                      }}
                    >
                      Mobile no.:
                    </span>
                    <span style={{ fontWeight: 500 }}>+91-9893473843</span>
                  </p>

                  <div
                    className="divider"
                    style={{
                      backgroundColor:
                        theme === "light" ? "#E6E6E6" : "#232324",
                      margin: "4px 0",
                    }}
                  ></div>

                  <p
                    style={{
                      width: "100%",
                      fontSize: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 400,
                        color: theme === "light" ? "#545454" : "#B5B5B6",
                      }}
                    >
                      Booking Date:
                    </span>
                    <span style={{ fontWeight: 500 }}>02 Dec 2023</span>
                  </p>

                  <div
                    className="divider"
                    style={{
                      backgroundColor:
                        theme === "light" ? "#E6E6E6" : "#232324",
                      margin: "4px 0",
                    }}
                  ></div>

                  <p
                    style={{
                      width: "100%",
                      fontSize: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 400,
                        color: theme === "light" ? "#545454" : "#B5B5B6",
                      }}
                    >
                      Model:
                    </span>
                    <span
                      style={{
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                      }}
                    >
                      SCORPIO
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
                            d="M7.00002 2.10002C4.29383 2.10002 2.10002 4.29383 2.10002 7.00002C2.10002 9.70622 4.29383 11.9 7.00002 11.9C9.70622 11.9 11.9 9.70622 11.9 7.00002C11.9 4.29383 9.70622 2.10002 7.00002 2.10002ZM1.40002 7.00002C1.40002 3.90723 3.90723 1.40002 7.00002 1.40002C10.0928 1.40002 12.6 3.90723 12.6 7.00002C12.6 10.0928 10.0928 12.6 7.00002 12.6C3.90723 12.6 1.40002 10.0928 1.40002 7.00002ZM7.00002 3.97593C7.19332 3.97593 7.35002 4.13264 7.35002 4.32593V4.37502C7.35002 4.56832 7.19332 4.72502 7.00002 4.72502C6.80673 4.72502 6.65002 4.56832 6.65002 4.37502V4.32593C6.65002 4.13264 6.80673 3.97593 7.00002 3.97593ZM7.00002 5.48336C7.19332 5.48336 7.35002 5.64006 7.35002 5.83336V9.91669C7.35002 10.11 7.19332 10.2667 7.00002 10.2667C6.80673 10.2667 6.65002 10.11 6.65002 9.91669V5.83336C6.65002 5.64006 6.80673 5.48336 7.00002 5.48336Z"
                            fill="#2782F9"
                          />
                        </svg>
                      </span>
                    </span>
                  </p>

                  <div
                    className="divider"
                    style={{
                      backgroundColor:
                        theme === "light" ? "#E6E6E6" : "#232324",
                      margin: "4px 0",
                    }}
                  ></div>

                  <p
                    style={{
                      width: "100%",
                      fontSize: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 400,
                        color: theme === "light" ? "#545454" : "#B5B5B6",
                      }}
                    >
                      CPD:
                    </span>
                    <span style={{ fontWeight: 500 }}>12 Apr 2023</span>
                  </p>
                </div>
              )}
            </div>
          </div>
          {/* tabs steps */}
          <div className="tabsSteps">
            {tabsList.map((ele, index) => (
              <div
                key={index}
                className={`tabsItems ${
                  theme === "light" ? "lightTheme" : "darkTheme"
                }`}
                onClick={() => {
                  // setCurrentTabsTitle(ele.name);
                  // setContentsType(ele.type);
                  // setTabsStatus(ele.key);
                  handleTabsActiveNext(ele);
                }}
              >
                {/* left side */}
                <span
                  className={`icons ${
                    tabsList.length - 1 === index ? "" : "lines"
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
                  // onClick={() => {
                  //   setCurrentTabsTitle(ele.name);
                  //   setContentsType(ele.type);
                  // }}
                  className="tabsText"
                >
                  <span
                    style={{
                      // color:
                      //   currentTabsTitle === ele.name
                      //     ? theme === "light"
                      //       ? "#0B0B0C"
                      //       : "#ffffff"
                      //     : "#858585",
                      fontWeight: currentTabsTitle === ele.name ? "500" : "400",
                    }}
                    className={`${
                      currentTabsTitle === ele.name
                        ? theme === "light"
                          ? "activeTabsLightTheme"
                          : "activeTabsDarkTheme"
                        : "normalText"
                    } ${theme === "light" ? "lightTheme" : "darkTheme"}`}
                  >
                    {ele.name}
                  </span>
                </div>

                {/* mobile view Icons */}
                <span className="mobileViewIcons">
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
                      d="M5.63523 2.65803C5.8241 2.45657 6.14052 2.44637 6.34197 2.63523L14.342 10.1352C14.4428 10.2298 14.5 10.3618 14.5 10.5C14.5 10.6382 14.4428 10.7702 14.342 10.8648L6.34197 18.3648C6.14052 18.5536 5.8241 18.5434 5.63523 18.342C5.44637 18.1405 5.45657 17.8241 5.65803 17.6352L13.2689 10.5L5.65803 3.36477C5.45657 3.17591 5.44637 2.85949 5.63523 2.65803Z"
                      fill="#FF3E5B"
                    />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* right side */}
        <div className="rightSide">
          {/* contents */}
          <div
            className={`contents ${
              theme === "light" ? "lightTheme" : "darkTheme"
            }`}
          >
            <h2>{currentTabsTitle}</h2>
            {/* user data details */}
            <div
              className="customerDetails"
              style={{
                backgroundColor:
                  contentsType === "gridContents"
                    ? theme === "light"
                      ? "#F2F2F2"
                      : "#1C1C1C"
                    : "",
                border:
                  contentsType === "gridContents"
                    ? `1px solid ${theme === "light" ? "#E6E6E6" : "#232324"}`
                    : "",
                padding: contentsType === "gridContents" ? "20px 30px" : "",
                borderRadius: 6,
              }}
            >
              {tabsList?.map((ele, index) => {
                if (ele.name === currentTabsTitle) {
                  return (
                    <div
                      key={index}
                      className={`detailsContainer ${ele.type} ${ele.default}`}
                      style={{
                        paddingBottom: ele.type === "accordion" && 120,
                        paddingBottom: ele.default === "accordionTwo" && 0,
                        backgroundColor:
                          ele.default === "accordionTwo"
                            ? theme === "light"
                              ? "#F2F2F2"
                              : "#1C1C1C"
                            : "",
                      }}
                    >
                      {ele.type === "gridContents" &&
                        ele.contents.map((el, index) => {
                          return <GridContent key={index} data={el} />;
                        })}

                      {/* {ele.default === "accordionTwo" && (
                        <div className="headerAccordion">
                          <h3 style={{ fontSize: 16, fontWeight: 700 }}>
                            {ele.title}
                          </h3>
                          <div
                            className="divider"
                            style={{
                              backgroundColor:
                                theme === "light" ? "#E6E6E6" : "#232324",
                              marginTop: 20,
                            }}
                          ></div>
                        </div>
                      )} */}

                      {/* {ele.type === "gridContents" &&
                        ele.contents.map((el, index) => {
                          return <GridContent key={index} data={el} />;
                        })} */}

                      {ele.type === "accordion" &&
                        ele.contents.map((el, index) => {
                          return (
                            <Accordion
                              key={index}
                              addressType={el.addressType}
                              checked={el.checked}
                              id={index}
                              drawerType={drawerType}
                              indicator={indicator}
                              setIndicator={setIndicator}
                              data={el}
                              type={ele.default}
                            />
                          );
                        })}

                      {/* {ele.type === "accordion" &&
                        ele.contents.map((el, index) => {
                          if (el.type === "accordionGridForm") {
                            return (
                              <AccordionGridForm
                                key={index}
                                data={el}
                                type={ele.default}
                                addressType={el.addressType}
                                drawerType={drawerType}
                                checked={el.checked}
                                id={index}
                                indicator={indicator}
                                setIndicator={setIndicator}
                              />
                            );
                          } else {
                            return (
                              <Accordion
                                key={index}
                                addressType={el.addressType}
                                checked={el.checked}
                                id={index}
                                drawerType={drawerType}
                                indicator={indicator}
                                setIndicator={setIndicator}
                                data={el}
                                type={ele.default}
                              />
                            );
                          }

                          // return (
                          //   <Accordion
                          //     key={index}
                          //     addressType={el.addressType}
                          //     checked={el.checked}
                          //     id={index}
                          //     drawerType={drawerType}
                          //     indicator={indicator}
                          //     setIndicator={setIndicator}
                          //     data={el}
                          //     type={ele.default}
                          //   />
                          // );
                        })} */}

                      {/* {ele.type === "normalData" &&
                        ele.contents.map((el, index) => {
                          return (
                            <NormalData
                              key={index}
                              data={el}
                              drawerType={drawerType}
                            />
                          );
                        })}

                      {ele.type === "form" && (
                        <div
                          className="formContainer"
                          style={{
                            backgroundColor:
                              theme === "light" ? "#F2F2F2" : "#1C1C1C",
                          }}
                        >
                          {ele.contents.map((el, index) => (
                            <FormContainer
                              key={index}
                              data={el}
                              drawerType={drawerType}
                            />
                          ))}
                        </div>
                      )} */}
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
                  : "0px -1px 1px 0px rgba(255, 255, 255, 0.15)",
              backgroundColor: theme === "light" ? "#ffffff" : "#1C1C1C",
              marginLeft: theme === "light" ? "1px" : "0px",
            }}
          >
            <button
              type="button"
              className="buttons"
              style={{
                color: tabsStatus === 1 ? "rgba(255, 62, 91,0.5)" : "#FF3E5B",
                borderColor:
                  tabsStatus === 1 ? "rgba(255, 62, 91,0.5)" : "#ff3e5b",
                cursor: tabsStatus === 1 ? "not-allowed" : "pointer",
              }}
              disabled={tabsStatus === 1}
              onClick={() => handleTabsActiveBack(1)}
            >
              Back
            </button>
            {/* middel buttons */}
            {/* <div className="leftsideBtn">
              <button type="button" className="btns">
                Edit
              </button>

              <button type="button" className="btns">
                Generate SO
              </button>

              <button type="button" className="btns">
                Transfer
              </button>
              <button type="button" className="btns">
                Allot
              </button>
              <button type="button" className="btns">
                Invoice
              </button>

              <button type="button" className="btns">
                Delivery Note
              </button>

              <button type="button" className="btns">
                Cancel Booking
              </button>
            </div> */}
            {/* right side button */}
            <div
              className="rightSideBtn"
              // style={{justifyContent:drawerType === "edit" ? "flex-end" : "space-between"}}
            >
              {/* {drawerType === "view" && (
                <button
                  type="button"
                  className="buttons"
                  style={{ color: "#FF3E5B" }}
                >
                  Edit
                </button>
              )}
              <button
                type="button"
                className="buttons"
                style={{
                  color:
                    tabsList.length === tabsStatus
                      ? "rgba(255,255,255,0.6)"
                      : "#ffffff",
                  borderColor:
                    tabsList.length === tabsStatus
                      ? "rgba(255, 62, 91,0.5)"
                      : "#ff3e5b",
                  cursor:
                    tabsList.length === tabsStatus ? "not-allowed" : "pointer",
                  backgroundColor:
                    tabsList.length === tabsStatus
                      ? "rgba(255, 62, 91,0.5)"
                      : "#FF3E5B",
                }}
                disabled={tabsList.length === tabsStatus}
                onClick={() => handleTabsActiveNext(1)}
              >
                {drawerType === "edit" ? "Save & Next" : "Next"}
              </button> */}

              {/* {expandButtons && ( */}
                <div className="leftsideBtn">
                  <button type="button" className="btns">
                    Edit
                  </button>

                  <button type="button" className="btns">
                    Generate SO
                  </button>

                  <button type="button" className="btns">
                    Transfer
                  </button>
                  <button type="button" className="btns">
                    Allot
                  </button>

                  {/* <button type="button" className="btns">
                Un-Allot
              </button> */}
                  <button type="button" className="btns">
                    Invoice
                  </button>

                  <button type="button" className="btns">
                    Delivery Note
                  </button>

                  <button type="button" className="btns">
                    Cancel Booking
                  </button>
                </div>
              {/* )} */}

              {/* More button */}
              <div
                style={{
                  backgroundColor: theme === "light" ? "#e6e6e6" : "#232324",
                  width: 1,
                  height: "30px",
                  display: "block",
                  // cursor:"pointer"
                }}
                // onClick={() => setExpandButtons(!expandButtons)}
              />

              <button
                type="button"
                className="secondaryBtn"
                style={{
                  border: "1px solid",
                  borderColor:
                    tabsList.length === tabsStatus
                      ? "rgba(255, 62, 91,0.5)"
                      : "#ff3e5b",
                  cursor:
                    tabsList.length - 1 === tabsStatus
                      ? "not-allowed"
                      : "pointer",
                }}
                // style={{
                //   cursor:
                //     tabsList.length - 1 === tabsStatus
                //       ? "not-allowed"
                //       : "pointer",
                //   border: `1px solid ${
                //     tabsList.length === tabsStatus
                //       ? "rgba(255, 62, 91,0.5)"
                //       : "#ff3e5b"
                //   }
                //      `,
                //   padding: "6px 16px",
                //   borderRadius: 4,
                //   fontWeight: 700,
                //   fontSize: 14,
                //   color:
                //     tabsList.length - 1 === tabsStatus
                //       ? "rgba(255, 62, 91,0.5)"
                //       : "#ff3e5b",
                // }}
                disabled={tabsList.length - 1 === tabsStatus}
                onClick={() => handleTabsActiveNext(1)}
              >
                {drawerType === "edit" ? "Save & Next" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;

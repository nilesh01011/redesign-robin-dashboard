import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import "./styles.scss";
import { AVATAR, USERIMG } from "../../../../assets";
import GridContent from "../drawer/components/gridContent/GridContent";
import AccordionGridForm from "../drawer/components/accordionGridForm/AccordionGridForm";
import Accordion from "../drawer/components/accordion/Accordion";
import NormalData from "../drawer/components/normalData/NormalData";
import FormContainer from "../drawer/components/formContainer/FormContainer";
// import GridContent from "../drawer/gridContent/GridContent";
// import AccordionGridForm from "../drawer/accordionGridForm/AccordionGridForm";
// import Accordion from "../drawer/accordion/Accordion";
// import NormalData from "../drawer/components/normalData/NormalData";
// import FormContainer from "../drawer/components/formContainer/FormContainer";

function MobileViewDrawer({ drawerType, data, isDrawerOpen, setIsDrawerOpen }) {
  const theme = useSelector((state) => state.theme);
  const userNameSplit = data.two ? data.two?.split(" ") : null;
  const firstLetter = userNameSplit?.[0]?.[0] || "";
  const lastLetter = userNameSplit?.[userNameSplit?.length - 1]?.[0] || "";
  const [currentTabsTitle, setCurrentTabsTitle] = useState("");
  const [indicator, setIndicator] = useState(0);
  //   Right side Drawer open
  const [rightSideDrawer, setRightSideDrawer] = useState(false);

  //   console.log(drawerType)

  const [contentsType, setContentsType] = useState("gridContents");
  const [tabsStatus, setTabsStatus] = useState(1);

  const tabsList = useMemo(() => {
    return [
      {
        key: 1,
        name: "Customer Details",
        type: "gridContents",
        contents: [
          {
            title: "Mobile Number",
            text: data.four,
          },
          {
            title: "Customer Type",
            text: data.three,
          },
          {
            title: "Email Address",
            text: data.five,
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
          {
            title: "Corporate Type",
            text: "Listed",
          },
          {
            title: "Corporate Name",
            text: "XYZ Corporate Name",
          },
          {
            title: "Corporate Code",
            text: "222",
          },

          {
            title: "Corporate Category",
            text: "C1",
          },
          {
            title: "Membership Type",
            text: data.six,
          },
        ],
      },
      {
        key: 2,
        name: "Customer Profile",
        type: "accordion",
        default: "accordion",
        contents: [
          {
            title: "Company Information",
            type: "gridContents",
            contents: [
              {
                title: "PAN",
                text: "CFG46478" + data.length + 1,
              },
              {
                title: "GSTIN",
                text: "CFG4554564787",
              },
              {
                title: "Usage/Application Categorization",
                text: "Application category",
              },
              {
                title: "Usage/Application Sub-Category",
                text: "Sub Category",
              },
              {
                title: "Customer Category",
                text: "Common",
              },
            ],
          },
          {
            title: "Social Profiles",
            type: "gridContents",
            contents: [
              {
                title: "M1-MMFSL",
                text: "mmfl_id",
              },
              {
                title: "Facebook link",
                text: "CFG4554564787",
              },
              {
                title: "Usage/Application Categorization",
                text: "Application category",
              },
              {
                title: "Usage/Application Sub-Category",
                text: "Sub Category",
              },
              {
                title: "Customer Category",
                text: "Common",
              },
            ],
          },
          {
            title: "Key Account Details",
            type: "gridContents",
            contents: [
              {
                title: "Account Code",
                text: "CFG464787",
              },
              {
                title: "Account Name",
                text: "Koncept",
              },
              {
                title: "Account Segment",
                text: "Firm",
              },

              {
                title: "Account Client Name",
                text: "Pal Singh",
              },
              {
                title: "Account Mapping Date",
                text: "12 Apr 2023",
              },
            ],
          },
          {
            title: "Authority Details (Who Knows Whom)",
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
          {
            title: "Upload Customer Form",
            type: "form",
            contents: [
              {
                title: "Customer Form.pdf",
              },
            ],
          },
        ],
      },
      {
        key: 3,
        name: "Address",
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
        name: "Contacts",
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
                    userImg: USERIMG,
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
                    userImg: AVATAR,
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
        name: "Accounts Related",
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
        name: "Supporting Documents",
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

  const handleDrawerRightSide = (ele) => {
    console.log(ele);
    setRightSideDrawer(true);
    setCurrentTabsTitle(ele.name);
    setContentsType(ele.type);
  };

  const handleTabsActiveNext = (value) => {
    if (typeof value === "number") {
      tabsList.map((value) => {
        if (tabsStatus + 1 === value.key) {
          setCurrentTabsTitle(value.name);
          setContentsType(value.type);
          setTabsStatus(value.key);
        }
      });
    } else {
      // setCurrentTabsTitle(value.name);
      // setContentsType(value.type);
      // setTabsStatus(value.key);
      // setRightSideDrawer(true);
      setCurrentTabsTitle(value.name);
      setContentsType(value.type);
      setTabsStatus(value.key);
    }
  };

  const handleTabsActiveBack = (value) => {
    if (typeof value === "number") {
      tabsList.map((value) => {
        if (tabsStatus - 1 === value.key) {
          setCurrentTabsTitle(value.name);
          setContentsType(value.type);
          setTabsStatus(value.key);
        }
      });
    }
  };

  return (
    <>
      <div
        className="mobileTableDrawerContainer"
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
          <h3>{drawerType} Customer Master Details</h3>
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
              // backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
              boxShadow:
                theme === "light"
                  ? "1px 0px 1px 0px rgba(0, 0, 0, 0.15)"
                  : "0px 1px 1px 0px rgba(255, 255, 255, 0.15)",
            }}
          >
            {/* user profile */}
            <div
              className={`userProfile ${
                theme === "light" ? "lightTheme" : "darkTheme"
              }`}
              style={{
                border: `1px solid ${
                  theme === "light" ? "#B5B5B6" : "#545454"
                }`,
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
            </div>
            {/* tabs steps */}
            <div className={`tabsSteps ${theme === "light" ? "lightTheme" : "darkTheme"}`}>
              {tabsList.map((ele, index) => (
                <div
                  key={index}
                  className={`tabsItems ${
                    theme === "light" ? "lightTheme" : "darkTheme"
                  }`}
                  onClick={() => {
                    //   setCurrentTabsTitle(ele.name);
                    //   setContentsType(ele.type);
                    handleDrawerRightSide(ele);
                  }}
                  style={{
                    backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
                  }}
                >
                  {/* left side */}
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
                        fontWeight:
                          currentTabsTitle === ele.name ? "500" : "400",
                      }}
                      className={`${
                        theme === "light" ? "lightTheme" : "darkTheme"
                      }`}
                    >
                      {ele.name}
                    </span>
                  </div>

                  {/* right side view Icons */}
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
        </div>
      </div>

      {/* right side */}
      {isDrawerOpen && (
        <div
          className="rightSideDrawer"
          style={{
            right: rightSideDrawer === true ? "0" : "-150%",
            backgroundColor: theme === "light" ? "#ffffff" : "#0B0B0C",
          }}
        >
          {/* contents */}
          <div
            className={`contents ${
              theme === "light" ? "lightTheme" : "darkTheme"
            }`}
          >
             {/* title text */}
            <h2
              style={{
                boxShadow:
                  theme === "light"
                    ? "0px 1px 1px 0px rgba(0, 0, 0, 0.15)"
                    : "0px 1px 1px 0px rgba(255, 255, 255, 0.15)",
                    backgroundColor:theme === "light" ? "#FFFFFF" : "#0B0B0C"
              }}
            >
              <span
                onClick={() => setRightSideDrawer(false)}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.3648 2.15803C14.1759 1.95657 13.8595 1.94637 13.658 2.13523L5.65803 9.63523C5.5572 9.72976 5.5 9.8618 5.5 10C5.5 10.1382 5.5572 10.2702 5.65803 10.3648L13.658 17.8648C13.8595 18.0536 14.1759 18.0434 14.3648 17.842C14.5536 17.6405 14.5434 17.3241 14.342 17.1352L6.73106 10L14.342 2.86477C14.5434 2.67591 14.5536 2.35949 14.3648 2.15803Z"
                    fill="#FF3E5B"
                  />
                </svg>
              </span>
              {currentTabsTitle}
            </h2>
            <div className="rightSideContents">
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
                  padding: contentsType === "gridContents" ? "10px" : "",
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

                        {ele.default === "accordionTwo" && (
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
                        )}

                        {ele.type === "accordion" &&
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
                          })}

                        {ele.type === "normalData" &&
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
                        )}
                      </div>
                    );
                  }
                })}
              </div>
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
            {/* left close btn */}
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
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MobileViewDrawer;

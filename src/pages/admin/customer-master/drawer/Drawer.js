"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import FirmAndCorporate from "./firmAndCorporate/FirmAndCorporate";
import IndividualDrawerData from "./individualDrawerData/IndividualDrawerData";
import { AVATAR, USERIMG } from "../../../../assets";

function Drawer({
  isActiveTabs,
  drawerType,
  data,
  isDrawerOpen,
  setIsDrawerOpen,
}) {
  const theme = useSelector((state) => state.theme);

  const userNameSplit = data.two ? data.two?.split(" ") : null;
  const firstLetter = userNameSplit?.[0]?.[0] || "";
  const lastLetter = userNameSplit?.[userNameSplit?.length - 1]?.[0] || "";
  const [currentTabsTitle, setCurrentTabsTitle] = useState("");

  const [contentsType, setContentsType] = useState(
    isActiveTabs === "Individual" ? "gridAndAccordion" : "gridContents"
  );

  const [tabsStatus, setTabsStatus] = useState(1);

  // Firm/Corporate drawer items
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
          {
            title: "",
            text: "",
          },
        ],
      },
      {
        key: 2,
        name: `Customer Profile`,
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
                title: "",
                text: "",
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
                title: "",
                text: "",
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

  // Individual drawer items
  const individualTabsList = useMemo(() => {
    return [
      {
        key: 1,
        name: "Customer Details",
        type: "gridAndAccordion",
        contents: [
          {
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
            ],
          },
          {
            divider: true,
          },
          {
            type: "customerNameAccordion",
            default: "accordion",
            name: "Customer Name",
            contents: [
              {
                name: "Mr. Arvindam Pal Singh",
                status: "Approved",
                contents: [
                  {
                    type: "gridContents",
                    contents: [
                      {
                        title: "Title",
                        text: "Mr.",
                      },
                      {
                        title: "First name",
                        text: "Vimal",
                      },
                      {
                        title: "Middle Name",
                        text: "Pal",
                      },
                      {
                        title: "Last Name",
                        text: "Singh",
                      },
                    ],
                  },
                ],
              },
              {
                name: "Mr. Customer Name 2",
                status: "Approved",
                contents: [
                  {
                    type: "gridContents",
                    contents: [
                      {
                        title: "Title",
                        text: "Mr.",
                      },
                      {
                        title: "First name",
                        text: "Vimal",
                      },
                      {
                        title: "Middle Name",
                        text: "Pal",
                      },
                      {
                        title: "Last Name",
                        text: "Singh",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            divider: true,
          },
          {
            type: "whatAppsGrid",
            contents: [
              {
                title: "Can we contact you over WhatsApp?",
                switchStatus: true,
              },
              {
                title: "Want to use Mobile no. as WhatsApp no.?",
                switchStatus: true,
              },
              {
                title: "WhatsApp Number",
                text: "+91-9893473843",
              },
            ],
          },
          {
            divider: true,
          },
          {
            type: "gridContents",
            contents: [
              // {
              //   title: "Company Name",
              //   text: "Company Name",
              // },
              // {
              //   title: "Parent Company Code",
              //   text: `M${data.one}`,
              // },
              // {
              //   title: "Parent Company Name",
              //   text: "Parent Company Name",
              // },
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
              {
                title: "",
                text: "",
              },
            ],
          },
        ],
      },
      {
        key: 2,
        name: "Individual Profile",
        type: "accordion",
        default: "accordion",
        contents: [
          {
            title: "Individual Information",
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
                title: "",
                text: "",
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
        title:"Individual Address",
        type: "accordion",
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
        title:"Individual Contact",
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
        name: "Family Details",
        type: "accordion",
        title:"Family Details",
        default: "accordionTwo",
        contents: [
          {
            title: "Vipul Pal Kumar | Father",
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
          },
          {
            title: "Vipul Pal Kumar | Brother",
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
          },
        ],
      },
      {
        key: 6,
        name: "Account Related",
      },
      {
        key: 7,
        name: "Supporting Documents",
      },
    ];
  }, [data]);

  useEffect(() => {
    if (isActiveTabs === "Individual") {
      if (!currentTabsTitle) {
        setCurrentTabsTitle(individualTabsList[0].name);
      } else {
        setCurrentTabsTitle(currentTabsTitle);
      }
    } else {
      if (!currentTabsTitle) {
        setCurrentTabsTitle(tabsList[0].name);
      } else {
        setCurrentTabsTitle(currentTabsTitle);
      }
    }
  }, [currentTabsTitle, tabsList, individualTabsList]);

  // const [seeMoreData, setSeeMoreData] = useState(true);
  const [textTrucat, setTextTrucat] = useState(false);

  const wordSlice = (word) => {
    if (word === undefined) {
      return;
    }
    if (word.length > 20) {
      return word.slice(0, 20) + "...";
    } else {
      return word;
    }
  };

  const handleTabsActiveNext = (value) => {
    // setTabsData(value);

    if (isActiveTabs === "Individual") {
      if (typeof value === "number") {
        return individualTabsList.map((ele) => {
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
    } else {
      if (typeof value === "number") {
        return tabsList.map((ele) => {
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
    }
  };

  const handleTabsActiveBack = (value) => {
    // setTabsData(value);

    if (isActiveTabs === "Individual") {
      if (typeof value === "number") {
        return individualTabsList.map((ele) => {
          if (tabsStatus - 1 === ele.key) {
            setCurrentTabsTitle(ele.name);
            setContentsType(ele.type);
            setTabsStatus(ele.key);
          }
        });
      }
    } else {
      if (typeof value === "number") {
        return tabsList.map((ele) => {
          if (tabsStatus - 1 === ele.key) {
            setCurrentTabsTitle(ele.name);
            setContentsType(ele.type);
            setTabsStatus(ele.key);
          }
        });
      }
    }
  };

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
            className="leftSideTopHeaders"
            style={{
              backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
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
                      {wordSlice(data.two)}
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
                <p
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <span style={{ fontWeight: 500 }}>Customer Type:</span>
                  <span
                    style={{
                      color: theme === "light" ? "black" : "white",
                      fontWeight: 400,
                    }}
                  >
                    {" "}
                    {data.three}
                  </span>
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
          </div>
          {/* tabs steps */}
          <div className="tabsSteps">
            {isActiveTabs === "Individual" ? (
              <>
                {individualTabsList.map((ele, index) => (
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
                        individualTabsList.length - 1 === index ? "" : "lines"
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
                    <div className="tabsText">
                      <span
                        style={{
                          fontWeight:
                            currentTabsTitle === ele.name ? "500" : "400",
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
              </>
            ) : (
              <>
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
                    <div className="tabsText">
                      <span
                        style={{
                          fontWeight:
                            currentTabsTitle === ele.name ? "500" : "400",
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
              </>
            )}
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
                padding:
                  isActiveTabs === "Firm/Corporate" &&
                  contentsType === "gridContents"
                    ? "20px 30px"
                    : "",
                borderRadius: 6,
              }}
            >
              {isActiveTabs === "Individual" ? (
                <>
                  {/* Individual */}
                  <IndividualDrawerData
                    data={data}
                    drawerType={drawerType}
                    currentTabsTitle={currentTabsTitle}
                    individualTabsList={individualTabsList}
                  />
                </>
              ) : (
                <>
                  {/* firmAndCorporate */}
                  <FirmAndCorporate
                    data={data}
                    drawerType={drawerType}
                    currentTabsTitle={currentTabsTitle}
                    tabsList={tabsList}
                  />
                </>
              )}
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
            <div className="leftSideBtn">
              {tabsStatus === 1 ? (
                <button
                  type="button"
                  className="secondaryBtn"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Close
                </button>
              ) : (
                <button
                  type="button"
                  className="secondaryBtn"
                  style={{
                    borderColor:
                      tabsStatus === 1 ? "rgba(255, 62, 91,0.5)" : "#ff3e5b",
                    cursor: tabsStatus === 1 ? "not-allowed" : "pointer",
                  }}
                  // disabled={tabsStatus === 1}
                  onClick={() => handleTabsActiveBack(1)}
                >
                  Back
                </button>
              )}
            </div>

            {/* right side button */}
            {isActiveTabs === "Individual" ? (
              <div
                className="rightSideBtn"
                style={{
                  justifyContent:
                    drawerType === "edit" ? "flex-end" : "space-between",
                }}
              >
                {drawerType === "view" && (
                  <button
                    type="button"
                    className="buttons"
                    style={{
                      color: "#ffffff",
                      backgroundColor: "#ff3e5b",
                      borderColor: "#ff3e5b",
                    }}
                  >
                    Edit
                  </button>
                )}
                {/* divider */}
                {individualTabsList.length === tabsStatus ? (
                  ""
                ) : (
                  <>
                    {drawerType === "view" && (
                      <div
                        style={{
                          backgroundColor:
                            theme === "light" ? "#e6e6e6" : "#232324",
                          width: 1,
                          height: "30px",
                          display: "block",
                        }}
                      />
                    )}
                  </>
                )}

                {/* next buttons */}
                {individualTabsList.length === tabsStatus ? (
                  ""
                ) : (
                  <button
                    type="button"
                    className="secondaryBtn"
                    style={{
                      // display: tabsList.length === tabsList ? "none" : "block",
                      border: "1px solid",
                      borderColor:
                        individualTabsList.length === tabsStatus
                          ? "rgba(255, 62, 91,0.5)"
                          : "#ff3e5b",
                      cursor:
                        individualTabsList.length === tabsStatus
                          ? "not-allowed"
                          : "pointer",
                    }}
                    disabled={individualTabsList.length === tabsStatus}
                    onClick={() => handleTabsActiveNext(1)}
                  >
                    {drawerType === "edit" ? "Save & Next" : "Next"}
                  </button>
                )}
              </div>
            ) : (
              <div
                className="rightSideBtn"
                style={{
                  justifyContent:
                    drawerType === "edit" ? "flex-end" : "space-between",
                }}
              >
                {drawerType === "view" && (
                  <button
                    type="button"
                    className="buttons"
                    style={{
                      color: "#ffffff",
                      backgroundColor: "#ff3e5b",
                      borderColor: "#ff3e5b",
                    }}
                  >
                    Edit
                  </button>
                )}
                {/* divider */}
                {tabsList.length === tabsStatus ? (
                  ""
                ) : (
                  <>
                    {drawerType === "view" && (
                      <div
                        style={{
                          backgroundColor:
                            theme === "light" ? "#e6e6e6" : "#232324",
                          width: 1,
                          height: "30px",
                          display: "block",
                        }}
                      />
                    )}
                  </>
                )}

                {/* next buttons */}
                {tabsList.length === tabsStatus ? (
                  ""
                ) : (
                  <button
                    type="button"
                    className="secondaryBtn"
                    style={{
                      // display: tabsList.length === tabsList ? "none" : "block",
                      border: "1px solid",
                      borderColor:
                        tabsList.length === tabsStatus
                          ? "rgba(255, 62, 91,0.5)"
                          : "#ff3e5b",
                      cursor:
                        tabsList.length === tabsStatus
                          ? "not-allowed"
                          : "pointer",
                    }}
                    disabled={tabsList.length === tabsStatus}
                    onClick={() => handleTabsActiveNext(1)}
                  >
                    {drawerType === "edit" ? "Save & Next" : "Next"}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Drawer;

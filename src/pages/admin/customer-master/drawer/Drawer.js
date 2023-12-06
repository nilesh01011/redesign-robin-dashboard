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
  setDrawerType,
  toastStatus,
  setToastStatus,
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

  const num = 1;

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
            inputType: "phoneNumber",
            placeholder: "Enter Mobile Number",
            input: "tel",
            notEdit: true,
          },
          {
            title: "Customer Type",
            text: data.three,
            inputType: "dropdown",
            dropdownList: [
              {
                name: "Corporate",
              },
              {
                name: "XYZ Corporate",
              },
              {
                name: "XYZ Corporate 2",
              },
            ],
          },
          {
            title: "",
            text: "",
          },
          {
            title: "Company Name",
            text: "Company Name",
            inputType: "text",
            placeholder: "Enter Company name",
            input: "text",
          },
          {
            title: "Parent Company Code",
            text: `M${data.one}`,
            inputType: "number",
            placeholder: "Enter Company Code",
            input: "text",
          },
          {
            title: "Parent Company Name",
            text: "Parent Company Name",
            inputType: "disabled",
            input: "text",
          },
          {
            title: "Corporate Type",
            text: "Listed",
            inputType: "dropdown",
            dropdownList: [
              {
                name: "Listed",
              },
              {
                name: "Not Listed",
              },
            ],
          },
          {
            title: "Corporate Name",
            text: "XYZ Corporate Name",
            inputType: "dropdown",
            dropdownList: [
              {
                name: "XYZ Corporate Name",
              },
              {
                name: "XYZ Corporate Name 2",
              },
              {
                name: "XYZ Corporate Name 3",
              },
              {
                name: "XYZ Corporate Name 4",
              },
            ],
          },
          {
            title: "Corporate Code",
            text: "222",
            inputType: "disabled",
            input: "number",
          },

          {
            title: "Corporate Category",
            text: "C1",
            inputType: "dropdown",
            dropdownList: [
              {
                name: "C1",
              },
              {
                name: "C2",
              },
              {
                name: "C3",
              },
              {
                name: "C4",
              },
            ],
          },
          {
            title: "Membership Type",
            text: data.six,
            inputType: "dropdown",
            dropdownList: [
              {
                name: "Golden",
              },
              {
                name: "Silver",
              },
              {
                name: "Diamond",
              },
            ],
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
                text: `CFG46478${num + 1}`,
                inputType: "text",
                placeholder: "Enter PAN number",
                input: "text",
              },
              {
                title: "GSTIN",
                text: `CFG46478${num + 1}`,
                inputType: "text",
                placeholder: "Enter GSTIN number",
                input: "text",
              },
              {
                title: "",
                text: "",
              },
              {
                title: "Usage/Application Categorization",
                text: "Application category",
                inputType: "dropdown",
                dropdownList: [
                  {
                    name: "Usage category",
                  },
                  {
                    name: "Usage category 2",
                  },
                  {
                    name: "Usage category 3",
                  },
                ],
              },
              {
                title: "Usage/Application Sub-Category",
                text: "Sub Category",
                inputType: "dropdown",
                dropdownList: [
                  {
                    name: "sub category",
                  },
                  {
                    name: "sub category 2",
                  },
                  {
                    name: "sub category 3",
                  },
                ],
              },
              {
                title: "Customer Category",
                text: "Common",
                inputType: "dropdown",
                dropdownList: [
                  {
                    name: "common",
                  },
                  {
                    name: "fleet",
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
                inputType: "text",
                placeholder: "Enter M1-MMFSL",
                input: "text",
              },
              {
                title: "Facebook link",
                text: "http://www.facebook.com/vimal_kumar",
                inputType: "text",
                placeholder: "Enter Facebook link",
                input: "text",
              },
              {
                title: "Twitter link",
                text: "http://www.twitter.com/vimal",
                inputType: "text",
                placeholder: "Enter Twitter link",
                input: "text",
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
                inputType: "disabled",
                input: "text",
              },
              {
                title: "Account Name",
                text: "Koncept",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "Account Segment",
                text: "Firm",
                inputType: "disabled",
                input: "text",
              },

              {
                title: "Account Client Name",
                text: "Pal Singh",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "Account Mapping Date",
                text: "12 Apr 2023",
                inputType: "disabled",
                input: "text",
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
                inputType: "text",
                placeholder: "Enter person name",
                input: "text",
              },
              {
                title: "Position",
                text: "Manager",
                inputType: "text",
                placeholder: "Enter position",
                input: "text",
              },
              {
                title: "Company Name",
                text: "Koncept",
                inputType: "text",
                placeholder: "Enter company name",
                input: "text",
              },
              {
                title:
                  drawerType === "view" ? "Remarks" : "Account Client Name",
                text: "This is Remark Dummy text",
                inputType: "text",
                placeholder: "Enter person name",
                input: "text",
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
        checkedBox: true,
        contents: [
          {
            title: "Office",
            type: "gridContents",
            addressType: "Office",
            contents: [
              {
                title: "Address Type",
                text: "Office",
                inputType: "dropdown",
                dropdownList: [
                  {
                    name: "Office",
                  },
                  {
                    name: "Home",
                  },
                ],
              },
              {
                title: "Address Line 1",
                text: "A-463,15th Cross Street",
                inputType: "text",
                placeholder: "Enter address line 1",
                input: "text",
              },
              {
                title: "Address Line 2",
                text: "A-463,15th Cross Street",
                inputType: "text",
                placeholder: "Enter address line 2",
                input: "text",
              },
              {
                title: "Pin Code",
                text: "400001",
                inputType: "text",
                placeholder: "Enter Pin Code",
                input: "text",
              },
              {
                title: "Tehsil",
                text: "B6G431",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "City",
                text: "Noida",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "District",
                text: "Gautam Budh Nagar",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "State",
                text: "Uttar Pradesh",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "Contact Name",
                text: "Arvind Kumar",
                inputType: "text",
                placeholder: "Enter contact name",
                input: "text",
              },
              {
                title: "Contact Mobile No.",
                text: "9893473843",
                inputType: "phoneNumber",
                placeholder: "Enter Mobile Number",
                input: "tel",
                notEdit: false,
              },
            ],
            checked: true,
            showSubmitResetBtn: true,
          },
          {
            title: "Joe’s Home",
            type: "gridContents",
            addressType: "Other",
            contents: [
              {
                title: "Address Type",
                text: "Home",
                inputType: "dropdown",
                dropdownList: [
                  {
                    name: "Home",
                  },
                  {
                    name: "Office",
                  },
                ],
              },
              {
                title: "Address Line 1",
                text: "A-463,15th Cross Street",
                inputType: "text",
                placeholder: "Enter address line 1",
                input: "text",
              },
              {
                title: "Address Line 2",
                text: "A-463,15th Cross Street",
                inputType: "text",
                placeholder: "Enter address line 2",
                input: "text",
              },
              {
                title: "Pin Code",
                text: "400003",
                inputType: "text",
                placeholder: "Enter Pin Code",
                input: "text",
              },
              {
                title: "Tehsil",
                text: "B6G431",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "City",
                text: "Noida",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "District",
                text: "Gautam Budh Nagar",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "State",
                text: "Uttar Pradesh",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "Contact Name",
                text: "Arvind Kumar",
                inputType: "text",
                placeholder: "Enter contact name",
                input: "text",
              },
              {
                title: "Contact Mobile No.",
                text: "9893473843",
                inputType: "phoneNumber",
                placeholder: "Enter Mobile Number",
                input: "tel",
                notEdit: false,
              },
            ],
            checked: false,
            showSubmitResetBtn: true,
          },
        ],
      },
      {
        key: 4,
        name: "Contacts",
        type: "accordion",
        title: "Company Contacts",
        default: "accordionTwo",
        checkedBox: true,
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
                    inputType: "dropdown",
                    dropdownList: [
                      {
                        name: "Payment",
                      },
                      {
                        name: "Payment 2",
                      },
                      {
                        name: "Payment 3",
                      },
                    ],
                  },
                  {
                    title: "Mobile Number",
                    text: "9813241244",
                    inputType: "phoneNumber",
                    placeholder: "Enter Mobile Number",
                    input: "tel",
                    notEdit: false,
                  },
                  {
                    title: "Alternate Mobile Number",
                    text: "9485784596",
                    inputType: "phoneNumber",
                    placeholder: "Enter Alternate Mobile Number",
                    input: "tel",
                    notEdit: false,
                  },
                  {
                    title: "Designation",
                    text: "Manager",
                    inputType: "text",
                    placeholder: "Enter Designation",
                    input: "text",
                  },
                  {
                    title: "Gender",
                    text: "Male",
                    inputType: "dropdown",
                    dropdownList: [
                      {
                        name: "Male",
                      },
                      {
                        name: "Female",
                      },
                    ],
                  },
                  {
                    title: "Title",
                    text: "Mr.",
                    inputType: "dropdown",
                    dropdownList: [
                      {
                        name: "Mr.",
                      },
                      {
                        name: "Mrs.",
                      },
                      {
                        name: "Mis.",
                      },
                    ],
                  },

                  {
                    title: "First Name",
                    text: "Vimal",
                    inputType: "text",
                    placeholder: "Enter first name",
                    input: "text",
                  },
                  {
                    title: "Middle Name",
                    text: "Pal",
                    inputType: "text",
                    placeholder: "Enter middle name",
                    input: "text",
                  },
                  {
                    title: "Last/Surname",
                    text: "Kumar",
                    inputType: "text",
                    placeholder: "Enter surmename",
                    input: "text",
                  },
                  {
                    title: "E-Mail",
                    text: "vimal@gmail.com",
                    inputType: "text",
                    placeholder: "Enter email address",
                    input: "email",
                  },
                  {
                    title: "Facebook Link",
                    text: "http://www.facebook.com",
                    inputType: "text",
                    placeholder: "Enter facebook link",
                    input: "text",
                  },
                  {
                    title: "Twitter Link",
                    text: "http://www.twitter.com",
                    inputType: "text",
                    placeholder: "Enter twitter link",
                    input: "text",
                  },
                  {
                    title: "Instagram Link",
                    text: "http://www.instagram.com",
                    inputType: "text",
                    placeholder: "Enter instagram link",
                    input: "text",
                  },
                  {
                    title: "Youtube Channel",
                    text: "http://www.youtube.com",
                    inputType: "text",
                    placeholder: "Enter youTube link",
                    input: "text",
                  },
                  {
                    title: "Team BHP Link",
                    text: "http://www.bhp.com",
                    inputType: "text",
                    placeholder: "Enter team BHP link",
                    input: "text",
                  },
                ],
              },
            ],
            checked: true,
            showSubmitResetBtn: true,
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
                    inputType: "dropdown",
                    dropdownList: [
                      {
                        name: "Payment",
                      },
                      {
                        name: "Payment 2",
                      },
                      {
                        name: "Payment 3",
                      },
                    ],
                  },
                  {
                    title: "Mobile Number",
                    text: "9813241244",
                    inputType: "phoneNumber",
                    placeholder: "Enter Mobile Number",
                    input: "tel",
                    notEdit: false,
                  },
                  {
                    title: "Alternate Mobile Number",
                    text: "9485784596",
                    inputType: "phoneNumber",
                    placeholder: "Enter Alternate Mobile Number",
                    input: "tel",
                    notEdit: false,
                  },
                  {
                    title: "Designation",
                    text: "Manager",
                    placeholder: "Enter Designation",
                    input: "text",
                  },
                  {
                    title: "Gender",
                    text: "Male",
                    inputType: "dropdown",
                    dropdownList: [
                      {
                        name: "Male",
                      },
                      {
                        name: "Female",
                      },
                    ],
                  },
                  {
                    title: "Title",
                    text: "Mr.",
                    dropdownList: [
                      {
                        name: "Mr.",
                      },
                      {
                        name: "Mrs.",
                      },
                      {
                        name: "Mis.",
                      },
                    ],
                  },

                  {
                    title: "First Name",
                    text: "Vimal",
                    placeholder: "Enter first name",
                    input: "text",
                    inputType: "text",
                  },
                  {
                    title: "Middle Name",
                    text: "Pal",
                    inputType: "text",
                    placeholder: "Enter middle name",
                    input: "text",
                  },
                  {
                    title: "Last/Surname",
                    text: "Kumar",
                    inputType: "text",
                    placeholder: "Enter surmename",
                    input: "text",
                  },
                  {
                    title: "E-Mail",
                    text: "vimal@gmail.com",
                    inputType: "text",
                    placeholder: "Enter email address",
                    input: "email",
                  },
                  {
                    title: "Facebook Link",
                    text: "http://www.facebook.com",
                    placeholder: "Enter facebook link",
                    input: "text",
                    inputType: "text",
                  },
                  {
                    title: "Twitter Link",
                    text: "http://www.twitter.com",
                    placeholder: "Enter twitter link",
                    input: "text",
                    inputType: "text",
                  },
                  {
                    title: "Instagram Link",
                    text: "http://www.instagram.com",
                    placeholder: "Enter instagram link",
                    input: "text",
                    inputType: "text",
                  },
                  {
                    title: "Youtube Channel",
                    text: "http://www.youtube.com",
                    placeholder: "Enter youTube link",
                    input: "text",
                    inputType: "text",
                  },
                  {
                    title: "Team BHP Link",
                    text: "http://www.bhp.com",
                    placeholder: "Enter team BHP link",
                    input: "text",
                    inputType: "text",
                  },
                ],
              },
            ],
            checked: false,
            showSubmitResetBtn: true,
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
                    placeholder: "Enter Credit Limit",
                    input: "text",
                    inputType: "number",
                  },
                  {
                    title: "Credit Limit Days",
                    text: "90",
                    placeholder: "Enter Credit Limit Days",
                    input: "text",
                    inputType: "text",
                  },
                  {
                    title: "Outstanding Amount",
                    text: "150000000",
                    placeholder: "Enter Outstanding Amount",
                    input: "text",
                    inputType: "number",
                  },
                  {
                    title: "Parts Discount %",
                    text: "25",
                    placeholder: "Enter Parts Discount %",
                    input: "text",
                    inputType: "number",
                  },
                  {
                    title: "Labour Discount %",
                    text: "29",
                    placeholder: "Enter Labour Discount %",
                    input: "text",
                    inputType: "number",
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
                    placeholder: "Enter remarks",
                    input: "text",
                    inputType: "text",
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
                inputType: "phoneNumber",
                placeholder: "Enter Mobile Number",
                input: "tel",
                notEdit: true,
              },
              {
                title: "Customer Type",
                text: data.three,
                inputType: "dropdown",
                dropdownList: [
                  {
                    name: "Corporate",
                  },
                  {
                    name: "XYZ Corporate",
                  },
                  {
                    name: "XYZ Corporate 2",
                  },
                ],
                disabled: true,
              },
              {
                title: "Email Address",
                text: data.five,
                inputType: "text",
                placeholder: "Enter email address",
                input: "email",
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
                        inputType: "dropdown",
                        dropdownList: [
                          {
                            name: "Mr.",
                          },
                          {
                            name: "Mrs.",
                          },
                          {
                            name: "Miss.",
                          },
                        ],
                      },
                      {
                        title: "First name",
                        text: "Vimal",
                        inputType: "text",
                        placeholder: "Enter first name",
                        input: "text",
                      },
                      {
                        title: "Middle Name",
                        text: "Pal",
                        inputType: "text",
                        placeholder: "Enter middle name",
                        input: "text",
                      },
                      {
                        title: "Last Name",
                        text: "Singh",
                        inputType: "text",
                        placeholder: "Enter last name",
                        input: "text",
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
                        inputType: "dropdown",
                        dropdownList: [
                          {
                            name: "Mr.",
                          },
                          {
                            name: "Mrs.",
                          },
                          {
                            name: "Miss.",
                          },
                        ],
                      },
                      {
                        title: "First name",
                        text: "Vimal",
                        inputType: "text",
                        placeholder: "Enter first name",
                        input: "text",
                      },
                      {
                        title: "Middle Name",
                        text: "Pal",
                        inputType: "text",
                        placeholder: "Enter middle name",
                        input: "text",
                      },
                      {
                        title: "Last Name",
                        text: "Singh",
                        inputType: "text",
                        placeholder: "Enter last name",
                        input: "text",
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
                activeStatus: true,
              },
              {
                title: "Want to use Mobile no. as WhatsApp no.?",
                switchStatus: true,
                activeStatus: false,
              },
              {
                title: "WhatsApp Number",
                text: "9893473843",
                inputType: "phoneNumber",
                placeholder: "Enter Mobile Number",
                input: "tel",
                notEdit: true,
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
                inputType: "dropdown",
                dropdownList: [
                  {
                    name: "Listed",
                  },
                  {
                    name: "Unlisted",
                  },
                ],
                dropdownDirection: "top",
              },
              {
                title: "Corporate Name",
                text: "XYZ Corporate Name",
                inputType: "dropdown",
                dropdownDirection: "top",
                dropdownList: [
                  {
                    name: "XYZ Corporate Name",
                  },
                  {
                    name: "XYZ Corporate Name 2",
                  },
                ],
              },
              {
                title: "Corporate Code",
                text: "222",
                inputType: "disabled",
                input: "text",
              },

              {
                title: "Corporate Category",
                text: "C1",
                dropdownDirection: "top",
                inputType: "dropdown",
                dropdownList: [
                  {
                    name: "C1",
                  },
                  {
                    name: "C2",
                  },
                ],
              },
              {
                title: "Membership Type",
                text: data.six,
                inputType: "dropdown",
                dropdownList: [
                  {
                    name: "Golden",
                  },
                  {
                    name: "Silver",
                  },
                  {
                    name: "Diamond",
                  },
                ],
                dropdownDirection: "top",
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
                    title: "Date Of Birth",
                    text: "12 Dec 1990",
                    inputType: "text",
                    placeholder: "Enter Date Of Birth",
                    input: "date",
                  },
                  {
                    title: "Gender",
                    text: "Male",
                    inputType: "dropdown",
                    dropdownList: [
                      {
                        name: "Male",
                      },
                      {
                        name: "Female",
                      },
                    ],
                  },
                  {
                    title: "Marital Status",
                    text: "Single",
                    inputType: "dropdown",
                    dropdownList: [
                      {
                        name: "Single",
                      },
                      {
                        name: "Unmarried",
                      },
                      {
                        name: "Married",
                      },
                    ],
                  },
                  {
                    title: "Wedding Anniversary Date",
                    text: "NA",
                    inputType: "text",
                    placeholder: "Enter Wedding Anniversary Date",
                    input: "date",
                  },
                  {
                    title: "Occupation",
                    text: "Business",
                    inputType: "dropdown",
                    dropdownList: [
                      {
                        name: "Business",
                      },
                      {
                        name: "Employees",
                      },
                      {
                        name: "Unemployed",
                      },
                    ],
                  },
                  {
                    title: "Annual income",
                    text: "5-10 Lakhs",
                    inputType: "dropdown",
                    dropdownList: [
                      {
                        name: "5-10 Lakhs",
                      },
                      {
                        name: "10-15 Lakhs",
                      },
                      {
                        name: "20-25 Lakhs",
                      },
                    ],
                  },

                  {
                    title: "Driving License No.",
                    text: "UP1620195565156",
                    inputType: "text",
                    placeholder: "Enter driving license number",
                    input: "text",
                  },
                  {
                    title: "Aadhar No.",
                    text: "8347 8334 4780",
                    inputType: "text",
                    placeholder: "Enter aadhar number",
                    input: "text",
                  },
                  {
                    title: "Voter ID",
                    text: "FJLTLP1548156",
                    inputType: "text",
                    placeholder: "Enter voter id number",
                    input: "text",
                  },
                  {
                    title: "Vehicle Used",
                    text: "Self-Driven",
                    inputType: "dropdown",
                    dropdownList: [
                      {
                        name: "Self-Driven",
                      },
                      {
                        name: "Undrive",
                      },
                    ],
                  },
                  {
                    title: "Mother Tongue",
                    text: "Hindi",
                    inputType: "dropdown",
                    dropdownList: [
                      {
                        name: "Hindi",
                      },
                      {
                        name: "Marathi",
                      },
                      {
                        name: "English",
                      },
                    ],
                  },
                  {
                    title: "Religion",
                    text: "Hindu",
                    inputType: "dropdown",
                    dropdownList: [
                      {
                        name: "Hindu",
                      },
                      {
                        name: "Islam",
                      },
                      {
                        name: "Buddhism",
                      },
                      {
                        name: "No religion",
                      },
                    ],
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
                inputType: "text",
                placeholder: "Enter MMFSL ID",
                input: "text",
              },
              {
                title: "Facebook link",
                text: "http://www.facebook.com/vimal",
                inputType: "text",
                placeholder: "Enter facebook link",
                input: "text",
              },
              {
                title: "Twitter link",
                text: "http://www.twitter.com/vimal",
                inputType: "text",
                placeholder: "Enter twitter link",
                input: "text",
              },
              {
                title: "Instagram Link",
                text: "http://www.instagram.com/vimhal",
                inputType: "text",
                placeholder: "Enter twitter link",
                input: "text",
              },
              {
                title: "Youtube Channel",
                text: "http://www.youtube.com/vimal",
                inputType: "text",
                placeholder: "Enter twitter link",
                input: "text",
              },
              {
                title: "Team BHP Link",
                text: "http://www.bhp.com/vimal875",
                inputType: "text",
                placeholder: "Enter twitter link",
                input: "text",
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
                inputType: "disabled",
                input: "text",
              },
              {
                title: "Account Name",
                text: "Koncept",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "Account Segment",
                text: "Firm",
                inputType: "disabled",
                input: "text",
              },

              {
                title: "Account Client Name",
                text: "Pal Singh",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "Account Mapping Date",
                text: "12 Apr 2023",
                inputType: "disabled",
                input: "text",
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
                inputType: "number",
                placeholder: "Enter person name",
                input: "text",
              },
              {
                title: "Position",
                text: "Manager",
                inputType: "number",
                placeholder: "Enter designation",
                input: "text",
              },
              {
                title: "Company Name",
                text: "Koncept",
                inputType: "number",
                placeholder: "Enter company name",
                input: "text",
              },
              {
                title: "Remarks",
                text: "This is Remark Dummy text",
                inputType: "number",
                placeholder: "Enter remarks description",
                input: "text",
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
        title: "Individual Address",
        type: "accordion",
        default: "accordionTwo",
        checkedBox: true,
        contents: [
          {
            title: "Office",
            type: "gridContents",
            addressType: "Office",
            contents: [
              {
                title: "Address Type",
                text: "Office",
                inputType: "dropdown",
                dropdownList: [
                  {
                    name: "Office",
                  },
                  {
                    name: "Home",
                  },
                ],
              },
              {
                title: "Address Line 1",
                text: "A-463,15th Cross Street",
                inputType: "text",
                placeholder: "Enter address line 1",
                input: "text",
              },
              {
                title: "Address Line 2",
                text: "A-463,15th Cross Street",
                inputType: "text",
                placeholder: "Enter address line 2",
                input: "text",
              },
              {
                title: "Pin Code",
                text: "400001",
                inputType: "text",
                placeholder: "Enter Pin Code",
                input: "text",
              },
              {
                title: "Tehsil",
                text: "B6G431",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "City",
                text: "Noida",
                inputType: "disabled",
                input: "text",
              },

              {
                title: "District",
                text: "Gautam Budh Nagar",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "State",
                text: "Uttar Pradesh",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "Contact Name",
                text: "Arvind Kumar",
                inputType: "text",
                placeholder: "Enter contact name",
                input: "text",
              },
              {
                title: "Contact Mobile No.",
                text: "9893473843",
                inputType: "phoneNumber",
                placeholder: "Enter Mobile Number",
                input: "tel",
                notEdit: false,
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
                inputType: "dropdown",
                dropdownList: [
                  {
                    name: "Home",
                  },
                  {
                    name: "Office",
                  },
                ],
              },
              {
                title: "Address Line 1",
                text: "A-463,15th Cross Street",
                inputType: "text",
                placeholder: "Enter address line 1",
                input: "text",
              },
              {
                title: "Address Line 2",
                text: "A-463,15th Cross Street",
                inputType: "text",
                placeholder: "Enter address line 2",
                input: "text",
              },
              {
                title: "Pin Code",
                text: "400001",
                inputType: "text",
                placeholder: "Enter Pin Code",
                input: "text",
              },
              {
                title: "Tehsil",
                text: "B6G431",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "City",
                text: "Noida",
                inputType: "disabled",
                input: "text",
              },

              {
                title: "District",
                text: "Gautam Budh Nagar",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "State",
                text: "Uttar Pradesh",
                inputType: "disabled",
                input: "text",
              },
              {
                title: "Contact Name",
                text: "Arvind Kumar",
                inputType: "text",
                placeholder: "Enter contact name",
                input: "text",
              },
              {
                title: "Contact Mobile No.",
                text: "9893473843",
                inputType: "phoneNumber",
                placeholder: "Enter Mobile Number",
                input: "tel",
                notEdit: false,
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
        title: "Individual Contact",
        default: "accordionTwo",
        checkedBox: true,
        contents: [
          {
            title: "Vimal Pal Kumar",
            type: "accordionGridForm",
            addressType: "Payment",
            checked: true,
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
                    inputType: "dropdown",
                    dropdownList: [
                      {
                        name: "Payment",
                      },
                      {
                        name: "Payment 1",
                      },
                      {
                        name: "Payment 2",
                      },
                    ],
                  },
                  {
                    title: "Mobile Number",
                    text: "9813241244",
                    inputType: "phoneNumber",
                    placeholder: "Enter Mobile Number",
                    input: "tel",
                    notEdit: false,
                  },
                  {
                    title: "Alternate Mobile Number",
                    text: "9485784596",
                    inputType: "phoneNumber",
                    placeholder: "Enter Mobile Number",
                    input: "tel",
                    notEdit: false,
                  },
                  {
                    title: "Designation",
                    text: "Manager",
                    inputType: "text",
                    placeholder: "Enter Designation",
                    input: "text",
                  },
                  {
                    title: "Gender",
                    text: "Male",
                    inputType: "dropdown",
                    dropdownList: [
                      {
                        name: "Male",
                      },
                      {
                        name: "female",
                      },
                    ],
                  },
                  {
                    title: "Title",
                    text: "Mr.",
                    inputType: "dropdown",
                    dropdownList: [
                      {
                        name: "Mr.",
                      },
                      {
                        name: "Mrs.",
                      },
                      {
                        name: "Miss.",
                      },
                    ],
                  },

                  {
                    title: "First Name",
                    text: "Vimal",
                    inputType: "text",
                    placeholder: "Enter first name",
                    input: "text",
                  },
                  {
                    title: "Middle Name",
                    text: "Pal",
                    inputType: "text",
                    placeholder: "Enter middle name",
                    input: "text",
                  },
                  {
                    title: "Last/Surname",
                    text: "Kumar",
                    inputType: "text",
                    placeholder: "Enter last name",
                    input: "text",
                  },
                  {
                    title: "E-Mail",
                    text: "vimal@gmail.com",
                    inputType: "text",
                    placeholder: "Enter email address",
                    input: "email",
                  },
                  {
                    title: "Facebook Link",
                    text: "http://www.facebook.com/vimal",
                    inputType: "text",
                    placeholder: "Enter facebook link",
                    input: "text",
                  },
                  {
                    title: "Twitter Link",
                    text: "http://www.twitter.com/vimal",
                    inputType: "text",
                    placeholder: "Enter twitter link",
                    input: "text",
                  },
                  {
                    title: "Instagram Link",
                    text: "http://www.instagram.com/vimhal",
                    inputType: "text",
                    placeholder: "Enter twitter link",
                    input: "text",
                  },
                  {
                    title: "Youtube Channel",
                    text: "http://www.youtube.com/vimal",
                    inputType: "text",
                    placeholder: "Enter twitter link",
                    input: "text",
                  },
                  {
                    title: "Team BHP Link",
                    text: "http://www.bhp.com/vimal875",
                    inputType: "text",
                    placeholder: "Enter twitter link",
                    input: "text",
                  },
                ],
              },
            ],
          },
          {
            title: "Vimal Pal Kumar 2",
            type: "accordionGridForm",
            addressType: "Payment",
            checked: false,
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
                    inputType: "dropdown",
                    dropdownList: [
                      {
                        name: "Payment",
                      },
                      {
                        name: "Payment 1",
                      },
                      {
                        name: "Payment 2",
                      },
                    ],
                  },
                  {
                    title: "Mobile Number",
                    text: "9813241244",
                    inputType: "phoneNumber",
                    placeholder: "Enter Mobile Number",
                    input: "tel",
                    notEdit: false,
                  },
                  {
                    title: "Alternate Mobile Number",
                    text: "9485784596",
                    inputType: "phoneNumber",
                    placeholder: "Enter Mobile Number",
                    input: "tel",
                    notEdit: false,
                  },
                  {
                    title: "Designation",
                    text: "Manager",
                    inputType: "text",
                    placeholder: "Enter Designation",
                    input: "text",
                  },
                  {
                    title: "Gender",
                    text: "Male",
                    inputType: "dropdown",
                    dropdownList: [
                      {
                        name: "Male",
                      },
                      {
                        name: "female",
                      },
                    ],
                  },
                  {
                    title: "Title",
                    text: "Mr.",
                    inputType: "dropdown",
                    dropdownList: [
                      {
                        name: "Mr.",
                      },
                      {
                        name: "Mrs.",
                      },
                      {
                        name: "Miss.",
                      },
                    ],
                  },

                  {
                    title: "First Name",
                    text: "Vimal",
                    inputType: "text",
                    placeholder: "Enter first name",
                    input: "text",
                  },
                  {
                    title: "Middle Name",
                    text: "Pal",
                    inputType: "text",
                    placeholder: "Enter middle name",
                    input: "text",
                  },
                  {
                    title: "Last/Surname",
                    text: "Kumar",
                    inputType: "text",
                    placeholder: "Enter last name",
                    input: "text",
                  },
                  {
                    title: "E-Mail",
                    text: "vimal@gmail.com",
                    inputType: "text",
                    placeholder: "Enter email address",
                    input: "email",
                  },
                  {
                    title: "Facebook Link",
                    text: "http://www.facebook.com/vimal",
                    inputType: "text",
                    placeholder: "Enter facebook link",
                    input: "text",
                  },
                  {
                    title: "Twitter Link",
                    text: "http://www.twitter.com/vimal",
                    inputType: "text",
                    placeholder: "Enter twitter link",
                    input: "text",
                  },
                  {
                    title: "Instagram Link",
                    text: "http://www.instagram.com/vimhal",
                    inputType: "text",
                    placeholder: "Enter twitter link",
                    input: "text",
                  },
                  {
                    title: "Youtube Channel",
                    text: "http://www.youtube.com/vimal",
                    inputType: "text",
                    placeholder: "Enter twitter link",
                    input: "text",
                  },
                  {
                    title: "Team BHP Link",
                    text: "http://www.bhp.com/vimal875",
                    inputType: "text",
                    placeholder: "Enter twitter link",
                    input: "text",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        key: 5,
        name: "Family Details",
        type: "accordion",
        title: "Family Details",
        default: "accordionTwo",
        contents: [
          {
            title: "Vipul Pal Kumar | Father",
            type: "accordionGridForm",
            addressType: "Payment",
            showSubmitResetBtns: true,
            contents: [
              {
                type: "gridContents",
                contents: [
                  {
                    title: "M&M Customer",
                    text: "Yes",
                    inputType: "dropdown",
                    dropdownList: [
                      {
                        name: "No",
                      },
                      {
                        name: "Yes",
                      },
                    ],
                  },
                  {
                    title: "Customer Name",
                    text: "Vipul Pal Kumar",
                    inputType: "text",
                    placeholder: "Enter customer name",
                    input: "text",
                  },
                  {
                    title: "Relationship",
                    text: "Brother",
                    inputType: "dropdown",
                    dropdownList: [
                      {
                        name: "Father",
                      },
                      {
                        name: "Mother",
                      },
                      {
                        name: "Husband",
                      },
                      {
                        name: "Wife",
                      },
                    ],
                  },
                  {
                    title: "Date of Birth",
                    text: "12 Jan 1997",
                    inputType: "text",
                    placeholder: "Enter customer name",
                    input: "date",
                  },
                  {
                    title: "Age",
                    text: "45",
                    inputType: "text",
                    placeholder: "Enter customer name",
                    input: "text",
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
          {
            title: "Avinash Pal Kumar | Brother",
            type: "accordionGridForm",
            addressType: "Payment",
            showSubmitResetBtns: true,
            contents: [
              {
                type: "gridContents",
                contents: [
                  {
                    title: "M&M Customer",
                    text: "Yes",
                    inputType: "dropdown",
                    dropdownList: [
                      {
                        name: "No",
                      },
                      {
                        name: "Yes",
                      },
                    ],
                  },
                  {
                    title: "Customer Name",
                    text: "Vipul Pal Kumar",
                    inputType: "text",
                    placeholder: "Enter customer name",
                    input: "text",
                  },
                  {
                    title: "Relationship",
                    text: "Brother",
                    inputType: "dropdown",
                    dropdownList: [
                      {
                        name: "Brother",
                      },
                      {
                        name: "Father",
                      },
                      {
                        name: "Sister",
                      },
                      {
                        name: "Mother",
                      },
                      {
                        name: "Husband",
                      },
                      {
                        name: "Wife",
                      },
                    ],
                  },
                  {
                    title: "Date of Birth",
                    text: "12 Jan 1997",
                    inputType: "text",
                    placeholder: "Enter customer name",
                    input: "date",
                  },
                  {
                    title: "Age",
                    text: "45",
                    inputType: "text",
                    placeholder: "Enter customer name",
                    input: "text",
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
        name: "Account Related",
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
                    inputType: "text",
                    placeholder: "Enter Credit Limit",
                    input: "number",
                  },
                  {
                    title: "Credit Limit Days",
                    text: "90",
                    inputType: "text",
                    placeholder: "Enter Credit Limit Days",
                    input: "number",
                  },
                  {
                    title: "Outstanding Amount",
                    text: "150000000",
                    inputType: "text",
                    placeholder: "Enter Outstanding Amount",
                    input: "number",
                  },
                  {
                    title: "Parts Discount %",
                    text: "25",
                    inputType: "text",
                    placeholder: "Enter Parts Discount %",
                    input: "number",
                  },
                  {
                    title: "Labour Discount %",
                    text: "29",
                    inputType: "text",
                    placeholder: "Enter Labour Discount %",
                    input: "number",
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
                    inputType: "textarea",
                    placeholder: "Enter Parts Discount %",
                    input: "text",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        key: 7,
        name: "Supporting Documents",
        type: "form",
        contents: [
          {
            title: "Form_60_Doc.jpg",
            text: "I accept that for the Transferred Vehicle , Claim can be generated from the billed Dealer.",
          },
        ],
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
                    {/* {data.three} */}
                    Corporate
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
                      {/* <svg
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
                      </svg> */}
                      {currentTabsTitle === ele.name ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          style={{ zIndex: 5 }}
                        >
                          <circle cx="12" cy="12" r="12" fill="#2782f9" />
                          <circle cx="12" cy="12" r="5" fill="white" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          style={{ zIndex: 5 }}
                        >
                          <circle cx="12" cy="12" r="12" fill="#70C922" />
                          <circle cx="12" cy="12" r="5" fill="white" />
                        </svg>
                      )}
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
                      {/* <svg
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
                      </svg> */}
                      {currentTabsTitle === ele.name ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          style={{ zIndex: 5 }}
                        >
                          <circle cx="12" cy="12" r="12" fill="#2782f9" />
                          <circle cx="12" cy="12" r="5" fill="white" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          style={{ zIndex: 5 }}
                        >
                          <circle cx="12" cy="12" r="12" fill="#70C922" />
                          <circle cx="12" cy="12" r="5" fill="white" />
                        </svg>
                      )}
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
                // padding:
                //   isActiveTabs === "Firm/Corporate" &&
                //   contentsType === "gridContents"
                //     ? "20px 30px"
                //     : "",
                // borderRadius: 6,
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
                  style={{
                    borderColor: "#ff3e5b",
                  }}
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
                    onClick={() => setDrawerType("edit")}
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
                {drawerType === "view" &&
                individualTabsList.length === tabsStatus ? (
                  ""
                ) : (
                  <button
                    type="button"
                    className="secondaryBtn"
                    style={{
                      backgroundColor: "#FF3E5B",
                      color: "#ffffff",
                      border: "1px solid",
                      borderColor:
                        drawerType === "view" &&
                        individualTabsList.length === tabsStatus
                          ? "rgba(255, 62, 91,0.5)"
                          : "#ff3e5b",
                      cursor:
                        drawerType === "view" &&
                        individualTabsList.length === tabsStatus
                          ? "not-allowed"
                          : "pointer",
                    }}
                    disabled={
                      drawerType === "view" &&
                      individualTabsList.length === tabsStatus
                    }
                    onClick={() => {
                      handleTabsActiveNext(1);
                      drawerType === "edit" &&
                        individualTabsList.length === tabsStatus &&
                        setIsDrawerOpen(false);
                      drawerType === "edit" &&
                        individualTabsList.length === tabsStatus &&
                        setToastStatus(!toastStatus);
                    }}
                  >
                    {drawerType === "edit"
                      ? individualTabsList.length === tabsStatus
                        ? "Submit"
                        : "Save & Next"
                      : "Next"}
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
                    className="buttons hoverButton"
                    style={{
                      color: "#ff3e5b",
                      // backgroundColor: "#ff3e5b",
                      borderColor: "#ff3e5b",
                    }}
                    onClick={() => setDrawerType("edit")}
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
                {drawerType === "view" && tabsList.length === tabsStatus ? (
                  ""
                ) : (
                  <button
                    type="button"
                    className="secondaryBtn"
                    style={{
                      // display: tabsList.length === tabsList ? "none" : "block",
                      backgroundColor: "#FF3E5B",
                      color: "#ffffff",
                      border: "1px solid",
                      borderColor:
                        drawerType === "view" && tabsList.length === tabsStatus
                          ? "rgba(255, 62, 91,0.5)"
                          : "#ff3e5b",
                      cursor:
                        drawerType === "view" && tabsList.length === tabsStatus
                          ? "not-allowed"
                          : "pointer",
                    }}
                    disabled={
                      drawerType === "view" && tabsList.length === tabsStatus
                    }
                    onClick={() => {
                      handleTabsActiveNext(1);
                      drawerType === "edit" &&
                        tabsList.length === tabsStatus &&
                        setIsDrawerOpen(false);
                      drawerType === "edit" &&
                        tabsList.length === tabsStatus &&
                        setToastStatus(!toastStatus);
                    }}
                  >
                    {drawerType === "edit"
                      ? tabsList.length === tabsStatus
                        ? "Submit"
                        : "Save & Next"
                      : "Next"}
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

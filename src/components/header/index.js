import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./styles.scss";
import Popup from "./popup";
import { B_DARK_THEME, B_LIGHT_THEME } from "../../assets";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Logout from "./model/logout";
import Model from "./model";
import Title from "../title";

let useClickOutSide = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    const handlerEvent = (e) => {
      if (!domNode.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handlerEvent);

    return () => {
      document.removeEventListener("mousedown", handlerEvent);
    };
  }, [handler]);

  return domNode;
};

function Header({ title }) {
  const theme = useSelector((state) => state.theme);
  const [userProfileDropdown, setUserProfileDropdown] = useState(false);
  // user dropdown details
  const [listHover, setListHover] = useState(0);
  const [modelListDetails, setModelListDetails] = useState("");
  // skeleton loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  // mobile view sidebar button
  const handleSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector("#overlay");

    if (sidebar && overlay) {
      sidebar.style.left = 0;
      overlay.style.display = "block";
    }
  };

  // user logout details
  const userDropdownDetails = [
    {
      id: 1,
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M7.992 4.00036e-06C6.41009 0.00158591 4.86416 0.472122 3.54962 1.35213C2.23508 2.23215 1.21095 3.48213 0.606674 4.94407C0.00239915 6.40602 -0.154887 8.0143 0.154698 9.56562C0.464283 11.1169 1.22684 12.5417 2.34598 13.6597C3.46511 14.7777 4.89059 15.5388 6.44222 15.8469C7.99385 16.1549 9.60197 15.996 11.0633 15.3903C12.5247 14.7845 13.7736 13.7592 14.6523 12.4437C15.531 11.1283 16 9.58191 16 8C16 6.94875 15.7928 5.90781 15.3903 4.93669C14.9877 3.96556 14.3977 3.08329 13.654 2.34032C12.9103 1.59735 12.0275 1.00824 11.0559 0.60667C10.0844 0.205103 9.04325 -0.00104725 7.992 4.00036e-06Z"
            // fill="#342C2C"
            fill={theme === "light" ? "currentColor" : "black"}
          />
          <path
            d="M8.00001 7.59999C9.51501 7.59999 10.7429 6.43609 10.7429 4.99999C10.7429 3.5639 9.51501 2.39999 8.00001 2.39999C6.48501 2.39999 5.25715 3.5639 5.25715 4.99999C5.25715 6.43609 6.48501 7.59999 8.00001 7.59999ZM10.0529 8.26218L9.02858 12.15L8.34287 9.38749L9.02858 8.24999H6.97144L7.65715 9.38749L6.97144 12.15L5.94715 8.26218C4.4193 8.33124 3.20001 9.51546 3.20001 10.98V11.825C3.20001 12.3633 3.66073 12.8 4.22858 12.8H11.7714C12.3393 12.8 12.8 12.3633 12.8 11.825V10.98C12.8 9.51546 11.5807 8.33124 10.0529 8.26218Z"
            fill="white"
          />
        </svg>
      ),
      text: "My Profile",
    },
    {
      id: 2,
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M7.992 4.00036e-06C6.41009 0.00158591 4.86416 0.472122 3.54962 1.35213C2.23508 2.23215 1.21095 3.48213 0.606674 4.94407C0.00239916 6.40602 -0.154887 8.0143 0.154698 9.56562C0.464283 11.1169 1.22684 12.5417 2.34598 13.6597C3.46511 14.7777 4.89059 15.5388 6.44222 15.8469C7.99385 16.1549 9.60197 15.996 11.0633 15.3903C12.5247 14.7845 13.7736 13.7591 14.6523 12.4437C15.531 11.1283 16 9.58191 16 8C16 6.94875 15.7928 5.90781 15.3903 4.93669C14.9877 3.96556 14.3977 3.08329 13.654 2.34032C12.9103 1.59735 12.0275 1.00824 11.0559 0.60667C10.0844 0.205103 9.04325 -0.00104725 7.992 4.00036e-06Z"
            // fill="#342C2C"
            fill={theme === "light" ? "currentColor" : "black"}
          />
          <path
            d="M11.9783 8.70776C12.0685 8.23924 12.0685 7.76076 11.9783 7.29224L12.8739 6.79715C12.978 6.74066 13.0232 6.62436 12.9885 6.51471C12.7559 5.79698 12.3567 5.14571 11.8359 4.60742C11.7561 4.52435 11.6277 4.50441 11.5235 4.5609L10.6279 5.056C10.2495 4.74698 9.81556 4.50773 9.34692 4.34824V3.35804C9.34692 3.24507 9.2636 3.14539 9.14905 3.12213C8.37492 2.95599 7.5869 2.96263 6.85095 3.12213C6.7364 3.14539 6.65308 3.24507 6.65308 3.35804V4.34824C6.18444 4.50773 5.75051 4.74698 5.37212 5.056L4.47649 4.5609C4.37582 4.50441 4.2439 4.52435 4.16406 4.60742C3.64335 5.14571 3.24413 5.79698 3.01154 6.51471C2.97683 6.62436 3.02543 6.74066 3.1261 6.79715L4.02173 7.29224C3.93147 7.76076 3.93147 8.23924 4.02173 8.70776L3.1261 9.20285C3.02196 9.25934 2.97683 9.37564 3.01154 9.48529C3.24413 10.203 3.64335 10.851 4.16406 11.3926C4.2439 11.4757 4.37235 11.4956 4.47649 11.4391L5.37212 10.944C5.75051 11.253 6.18444 11.4923 6.65308 11.6518V12.642C6.65308 12.7549 6.7364 12.8546 6.85095 12.8779C7.62509 13.044 8.4131 13.0374 9.14905 12.8779C9.2636 12.8546 9.34692 12.7549 9.34692 12.642V11.6518C9.81556 11.4923 10.2495 11.253 10.6279 10.944L11.5235 11.4391C11.6242 11.4956 11.7561 11.4757 11.8359 11.3926C12.3567 10.8543 12.7559 10.203 12.9885 9.48529C13.0232 9.37564 12.9746 9.25934 12.8739 9.20285L11.9783 8.70776ZM8.00347 9.61156C7.07313 9.61156 6.31982 8.88719 6.31982 8C6.31982 7.11281 7.0766 6.38844 8.00347 6.38844C8.93035 6.38844 9.68712 7.11281 9.68712 8C9.68712 8.88719 8.93382 9.61156 8.00347 9.61156Z"
            fill="white"
          />
        </svg>
      ),
      text: "Setting",
    },
    {
      id: 3,
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M7.992 4.00037e-06C6.41009 0.00158591 4.86416 0.472122 3.54962 1.35213C2.23508 2.23215 1.21095 3.48213 0.606674 4.94407C0.00239916 6.40602 -0.154887 8.0143 0.154698 9.56562C0.464283 11.1169 1.22684 12.5417 2.34598 13.6597C3.46511 14.7777 4.89059 15.5388 6.44222 15.8469C7.99385 16.1549 9.60197 15.996 11.0633 15.3903C12.5247 14.7845 13.7736 13.7592 14.6523 12.4437C15.531 11.1283 16 9.58191 16 8C16 6.94875 15.7928 5.90781 15.3903 4.93669C14.9877 3.96556 14.3977 3.08329 13.654 2.34032C12.9103 1.59735 12.0275 1.00824 11.0559 0.60667C10.0844 0.205103 9.04325 -0.00104725 7.992 4.00037e-06Z"
            // fill="#342C2C"
            fill={theme === "light" ? "currentColor" : "black"}
          />
          <path
            d="M10.8889 7.2H5.11111C4.49746 7.2 4 7.68841 4 8.29091V10.9091C4 11.5116 4.49746 12 5.11111 12H10.8889C11.5025 12 12 11.5116 12 10.9091V8.29091C12 7.68841 11.5025 7.2 10.8889 7.2Z"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.59998 7.2V5.42222C5.59998 4.83285 5.85283 4.26762 6.30292 3.85087C6.75301 3.43412 7.36346 3.2 7.99998 3.2C8.6365 3.2 9.24694 3.43412 9.69703 3.85087C10.1471 4.26762 10.4 4.83285 10.4 5.42222V7.2"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      text: "Change Password",
    },
    {
      id: 4,
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M7.992 4.00037e-06C6.41009 0.00158591 4.86416 0.472122 3.54962 1.35213C2.23508 2.23215 1.21095 3.48213 0.606674 4.94407C0.00239916 6.40602 -0.154887 8.0143 0.154698 9.56562C0.464283 11.1169 1.22684 12.5417 2.34598 13.6597C3.46511 14.7777 4.89059 15.5388 6.44222 15.8469C7.99385 16.1549 9.60197 15.996 11.0633 15.3903C12.5247 14.7845 13.7736 13.7592 14.6523 12.4437C15.531 11.1283 16 9.58191 16 8C16 6.94875 15.7928 5.90781 15.3903 4.93669C14.9877 3.96556 14.3977 3.08329 13.654 2.34032C12.9103 1.59735 12.0275 1.00824 11.0559 0.60667C10.0844 0.205103 9.04325 -0.00104725 7.992 4.00037e-06Z"
            // fill="#342C2C"
            fill={theme === "light" ? "currentColor" : "black"}
          />
          <path
            d="M12.6671 7.98156L9.46699 11.1817C9.18126 11.4674 8.686 11.2674 8.686 10.8579V9.02923H6.09539C5.84205 9.02923 5.63823 8.82541 5.63823 8.57206V6.7434C5.63823 6.49005 5.84205 6.28623 6.09539 6.28623H8.686V4.45757C8.686 4.04993 9.17936 3.84802 9.46699 4.13375L12.6671 7.3339C12.8443 7.51296 12.8443 7.8025 12.6671 7.98156ZM6.85734 11.0865V10.3245C6.85734 10.1988 6.75447 10.0959 6.62875 10.0959H5.02867C4.69151 10.0959 4.41912 9.82355 4.41912 9.48639V5.82907C4.41912 5.49191 4.69151 5.21951 5.02867 5.21951H6.62875C6.75447 5.21951 6.85734 5.11665 6.85734 4.99093V4.22899C6.85734 4.10327 6.75447 4.00041 6.62875 4.00041H5.02867C4.0191 4.00041 3.20001 4.81949 3.20001 5.82907V9.48639C3.20001 10.496 4.0191 11.3151 5.02867 11.3151H6.62875C6.75447 11.3151 6.85734 11.2122 6.85734 11.0865Z"
            fill="white"
          />
        </svg>
      ),
      text: "Logout",
    },
  ];

  let domNode = useClickOutSide(() => {
    setUserProfileDropdown(false);
  });

  const handleClicks = (text) => {
    setModelListDetails(text);
    setUserProfileDropdown(false);
    document.querySelector("body").classList.add("removeScrollbar");
    document.querySelector("body").style.overflow = "hidden";
  };

  const handleClosed = () => {
    setModelListDetails("");
    document.querySelector("body").classList.remove("removeScrollbar");
    document.querySelector("body").style.overflow = "auto";
  };

  return (
    <div
      style={{
        background: theme === "light" ? "white" : "#1C1C1C",
        color: theme === "light" ? "black" : "white",
        paddingLeft: 32,
        paddingRight: 32,
      }}
    >
      <div className="header"
      //  style={{
      //   background: theme === "light" ? "white" : "#1C1C1C",
      //   color: theme === "light" ? "black" : "white",
      //   boxShadow:
      //     theme === "light"
      //       ? "0px 1px 1px 0px rgba(0, 0, 0, 0.15)"
      //       : "0px 1px 1px 0px rgba(255, 255, 255, 0.15)",
      //   paddingLeft: 32,
      //   paddingRight: 32,
      //   borderBottom: `1px solid ${theme === "light" ? "#DEDEDE" : "#635D5D"}`,
      // }}
      >
        <div className="headerLeft">
          <div className="userText">
            {isLoading ? (
              <SkeletonTheme
                baseColor={`${theme === "dark" ? "#444" : "#f5f5f5"}`}
                highlightColor={`${theme === "dark" ? "#50535a" : "#ebebeb"}`}
              >
                <Skeleton width={175} height={18} style={{ marginBottom: 4 }} />
                <Skeleton width={145} height={12} />
              </SkeletonTheme>
            ) : (
              <>
                <p
                  className="dealerName"
                  style={{ color: theme === "light" ? "#000" : "#fff" }}
                >
                  {/* {dealerName} */}
                  NBS International Ltd
                </p>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.7rem",
                    color: "#FF3E5B",
                  }}
                >
                  Goregoan (W) Mumbai
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="14"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    ></path>
                  </svg>
                </span>
              </>
            )}
          </div>
        </div>
        {/* mobile view button */}
        <div className="mobileViewBtn" onClick={handleSidebar}>
          {isLoading ? (
            <SkeletonTheme
              baseColor={`${theme === "dark" ? "#444" : "#f5f5f5"}`}
              highlightColor={`${theme === "dark" ? "#50535a" : "#ebebeb"}`}
            >
              <Skeleton width={35} height={35} />
            </SkeletonTheme>
          ) : (
            <>
              <img
                src={theme === "light" ? B_LIGHT_THEME : B_DARK_THEME}
                alt="robin-b-logo"
                title="Sidebar-collapsed"
              />
              <span>
                <svg
                  style={{ transform: "rotate(180deg)" }}
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  ></path>
                </svg>
              </span>
            </>
          )}
        </div>
        {/* header right */}
        <div className="headerRight">
          {/* notifications */}
          {isLoading ? (
            <SkeletonTheme
              baseColor={`${theme === "dark" ? "#444" : "#f5f5f5"}`}
              highlightColor={`${theme === "dark" ? "#50535a" : "#ebebeb"}`}
            >
              <Skeleton width={30} height={35} />
            </SkeletonTheme>
          ) : (
            <Popup />
          )}
          {/* help desk */}
          <div
            title="OneStop Help Desk"
            className="helpDesk"
            style={{ color: theme === "light" ? "black" : "white" }}
          >
            {/* icons */}
            <span>
              {isLoading ? (
                <SkeletonTheme
                  baseColor={`${theme === "dark" ? "#444" : "#f5f5f5"}`}
                  highlightColor={`${theme === "dark" ? "#50535a" : "#ebebeb"}`}
                >
                  <Skeleton width={30} height={35} />
                </SkeletonTheme>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="25"
                  viewBox="0 0 23 25"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.56401 2.21532C7.99298 1.01142 9.8631 0.5 11.3493 0.5C12.8345 0.5 14.7211 1.01082 16.1674 2.2119C17.557 3.36589 18.5031 5.13098 18.318 7.55121C18.6539 7.75928 18.9557 8.0622 19.1408 8.49444C19.4293 9.16845 19.457 10.0871 19.3272 10.8766C19.2602 11.2843 19.1453 11.6962 18.9746 12.0633C18.8305 12.373 18.6299 12.6867 18.3525 12.9293C18.3683 13.2785 18.3382 13.7328 18.1886 14.1869C17.9733 14.8404 17.491 15.5307 16.5471 15.8185C16.1741 15.9323 15.7171 15.9093 15.3151 15.8574C15.1417 15.835 14.9592 15.8043 14.7712 15.767C14.8211 15.8638 14.8791 15.9653 14.9559 16.0824C15.1637 16.3987 15.4859 16.7634 16.0807 17.1385C16.3129 17.2849 16.6246 17.3873 17.0673 17.4949C17.174 17.5208 17.2905 17.5475 17.4139 17.5757C17.7613 17.6551 18.1628 17.7468 18.5492 17.8697C19.6713 18.2264 20.85 18.8921 21.6812 20.5265C22.3143 21.7712 22.4136 22.7611 22.0766 23.4985C21.7617 24.1874 21.1048 24.5282 20.5769 24.4982H2.20525C1.67742 24.5282 1.02043 24.1874 0.705559 23.4985C0.368573 22.7611 0.46788 21.7712 1.10093 20.5265C1.9322 18.8921 3.11086 18.2264 4.23292 17.8697C4.61935 17.7468 5.02086 17.6551 5.36828 17.5757C5.49165 17.5475 5.60821 17.5208 5.71484 17.4949C6.15757 17.3873 6.46927 17.2849 6.70142 17.1385C7.29625 16.7634 7.61849 16.3987 7.82623 16.0824C7.96005 15.8786 8.03656 15.722 8.11316 15.5551C7.88026 15.3432 7.66273 15.1081 7.46138 14.8523C7.10963 14.4053 6.80759 13.8964 6.55541 13.3372C6.38673 13.3789 6.20997 13.4078 6.03713 13.4221C5.58022 13.4598 4.9596 13.4118 4.44387 13.0415C4.09172 12.7887 3.84788 12.4233 3.68046 12.0633C3.50975 11.6962 3.39489 11.2843 3.32785 10.8766C3.19803 10.0871 3.22577 9.16845 3.51429 8.49444C3.71846 8.01749 4.07119 7.70119 4.45 7.49532C4.28164 5.10904 5.20206 3.36275 6.56401 2.21532ZM5.67841 8.64953C5.5703 8.66801 5.46671 8.69304 5.37112 8.72525C5.08269 8.82242 4.94968 8.95294 4.89326 9.08473C4.75853 9.39948 4.70383 9.99981 4.80798 10.6332C4.85793 10.937 4.93916 11.2126 5.04059 11.4308C5.1453 11.6559 5.24965 11.7735 5.31869 11.823C5.42392 11.8986 5.62774 11.9508 5.91363 11.9271C5.95951 11.9234 6.00444 11.9178 6.0477 11.9109C5.8908 11.3366 5.77516 10.7285 5.70091 10.0951C5.6422 9.5944 5.63678 9.11143 5.67841 8.64953ZM6.01072 7.11173C5.98483 7.11268 5.95877 7.11385 5.93256 7.11524C5.8827 5.36173 6.58126 4.16217 7.53047 3.36246C8.64652 2.4222 10.157 2 11.3493 2C12.5424 2 14.0735 2.42281 15.2091 3.36588C16.1753 4.16828 16.8862 5.36842 16.839 7.11897C16.8341 7.11863 16.8291 7.11831 16.8242 7.11799C16.5623 6.30356 16.143 5.59697 15.6065 5.01403C14.5044 3.81661 12.9492 3.18647 11.3871 3.18647C9.06635 3.18647 6.8544 4.71883 6.01072 7.11173ZM17.115 8.66845C17.1451 9.12206 17.1327 9.5988 17.0731 10.0969C16.9957 10.7438 16.8828 11.3553 16.7336 11.9265C16.7362 11.9267 16.7388 11.9269 16.7414 11.9271C17.0273 11.9508 17.2311 11.8986 17.3364 11.823C17.4054 11.7735 17.5097 11.6559 17.6145 11.4308C17.7159 11.2126 17.7971 10.937 17.8471 10.6332C17.9512 9.99981 17.8965 9.39948 17.7618 9.08473C17.6998 8.93996 17.5684 8.81432 17.3057 8.72245C17.2455 8.70141 17.1817 8.68346 17.115 8.66845ZM16.2412 13.3688C16.082 13.7343 15.9026 14.0756 15.7025 14.3906C15.9436 14.4102 16.0709 14.3955 16.1096 14.3837C16.4764 14.2719 16.661 14.03 16.7639 13.7176C16.7949 13.6235 16.8166 13.5269 16.8311 13.4324C16.757 13.4314 16.6857 13.4277 16.6179 13.4221C16.4929 13.4117 16.3658 13.3937 16.2412 13.3688ZM14.0958 14.0571C13.2535 13.8153 12.3713 13.4847 11.7342 13.1811C11.3603 13.0029 10.9127 13.1616 10.7345 13.5356C10.5564 13.9095 10.7151 14.3571 11.089 14.5353C11.5178 14.7396 12.0323 14.9496 12.5715 15.1414C12.2084 15.266 11.8139 15.3291 11.3871 15.3291C10.2802 15.3291 9.35763 14.8364 8.64015 13.9246C7.90851 12.9949 7.39016 11.6217 7.1907 9.92045C6.82203 6.77588 9.11059 4.68647 11.3871 4.68647C12.554 4.68647 13.7007 5.15838 14.5027 6.02982C15.2939 6.88943 15.7912 8.18372 15.5837 9.9187C15.3621 11.7708 14.8411 13.1357 14.1244 14.0221C14.1149 14.0338 14.1054 14.0455 14.0958 14.0571ZM13.4221 16.4184C12.806 16.6888 12.1245 16.8291 11.3871 16.8291C10.6546 16.8291 9.98012 16.6763 9.37167 16.3956C9.28663 16.5626 9.18845 16.7407 9.08008 16.9057C8.88079 17.2092 8.62462 17.5206 8.27763 17.8289C8.89407 18.2122 9.78802 18.5438 10.8219 18.642C12.0125 18.755 13.3139 18.5495 14.4866 17.8128C14.1487 17.5098 13.8979 17.2039 13.7021 16.9057C13.5986 16.7481 13.5045 16.5787 13.4221 16.4184ZM15.8474 18.6902C14.2155 19.9506 12.3315 20.292 10.6801 20.1352C9.18878 19.9937 7.8039 19.4365 6.91996 18.696C6.63316 18.808 6.34121 18.8863 6.06909 18.9525C5.92209 18.9882 5.78124 19.0204 5.6439 19.0518C5.31706 19.1264 5.01009 19.1966 4.68735 19.2992C3.84541 19.5668 3.04361 20.0157 2.43794 21.2065C1.89872 22.2667 2.00708 22.7377 2.06982 22.8749C2.11489 22.9736 2.16963 22.9942 2.17466 22.9982H20.6075C20.6125 22.9942 20.6673 22.9736 20.7123 22.8749C20.7751 22.7377 20.8835 22.2667 20.3442 21.2065C19.7386 20.0157 18.9368 19.5668 18.0948 19.2992C17.7721 19.1966 17.4651 19.1264 17.1383 19.0518C17.0009 19.0204 16.8601 18.9882 16.7131 18.9525C16.4363 18.8852 16.139 18.8053 15.8474 18.6902Z"
                    fill="currentColor"
                  ></path>
                </svg>
              )}
            </span>
            {/* text */}
            <div className="helpDeskText">
              {isLoading ? (
                <SkeletonTheme
                  baseColor={`${theme === "dark" ? "#444" : "#f5f5f5"}`}
                  highlightColor={`${theme === "dark" ? "#50535a" : "#ebebeb"}`}
                >
                  <Skeleton width={50} height={10} />
                  <Skeleton width={50} height={10} />
                </SkeletonTheme>
              ) : (
                <>
                  <span>OneStop</span>
                  <span>Help Desk</span>
                </>
              )}
            </div>
          </div>
          {/* user profiles */}
          <div
            ref={domNode}
            title="User Profile"
            className="userProfileContainer"
          >
            {isLoading ? (
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <SkeletonTheme
                  baseColor={`${theme === "dark" ? "#444" : "#f5f5f5"}`}
                  highlightColor={`${theme === "dark" ? "#50535a" : "#ebebeb"}`}
                >
                  <Skeleton
                    width={32}
                    height={32}
                    style={{ borderRadius: "50%" }}
                  />
                </SkeletonTheme>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <SkeletonTheme
                    baseColor={`${theme === "dark" ? "#444" : "#f5f5f5"}`}
                    highlightColor={`${
                      theme === "dark" ? "#50535a" : "#ebebeb"
                    }`}
                  >
                    <Skeleton width={130} height={14} />
                    <Skeleton width={130} height={14} />
                  </SkeletonTheme>
                </div>
              </div>
            ) : (
              <div
                onClick={() => setUserProfileDropdown(true)}
                className="userProfile"
                style={{ cursor: "pointer" }}
              >
                {/* icons */}
                <span className="userAvatar">NR</span>
                {/* user details */}
                <div className="userDetails">
                  {/* user name */}
                  <span className="username">Nilesh Rathod</span>
                  <p>
                    <span className="userNumber" style={{ color: "#FF3E5B" }}>
                      Mahindra Automotive
                    </span>
                    {/* arrow icons */}
                    <span>
                      <svg
                        style={{
                          transform: userProfileDropdown && "rotate(180deg)",
                          transition: "transform 0.3s ease-in-out",
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="7"
                        viewBox="0 0 11 7"
                        fill="none"
                      >
                        <path
                          d="M1.92896 1.5L5.46449 5.03553L9.00002 1.5"
                          stroke="#FF3E5B"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="square"
                        />
                      </svg>
                    </span>
                  </p>
                </div>
              </div>
            )}
            {/* dropdown */}
            {userProfileDropdown && (
              <div
                className="dropdownUserDetails"
                style={{
                  backgroundColor: theme === "light" ? "#ffffff" : "#1C1C1C",
                }}
              >
                {userDropdownDetails.map((ele) => (
                  <div
                    title={ele.text}
                    key={ele.id}
                    className="lists"
                    onClick={() => handleClicks(ele.text)}
                    onMouseOver={() => setListHover(ele.id)}
                    onMouseLeave={() => setListHover(0)}
                  >
                    {/* icons */}
                    <span className={listHover === ele.id ? "iconsColor" : ""}>
                      {ele.icons}
                    </span>
                    {/* text */}
                    <p>{ele.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {modelListDetails && (
        <Model
          text={modelListDetails}
          setModelListDetails={setModelListDetails}
        />
      )}
      <div
        style={{ display: modelListDetails ? "block" : "none" }}
        id="overlay"
        onClick={handleClosed}
      ></div>

      {/* ============ title ============ */}
      {/* <div
      >
        <Title title={title} />
      </div> */}
    </div>
  );
}

export default Header;

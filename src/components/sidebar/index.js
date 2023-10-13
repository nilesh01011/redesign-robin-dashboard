import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import { toggleTheme } from "../../store/slices/themeSlices";
import {
  B_DARK_THEME,
  B_LIGHT_THEME,
  ROBIN_DARK_THEME,
  ROBIN_LIGHT_THEME,
} from "../../assets";
import SearchInput from "./sidebarSearchInput";
import MenuItems from "./menitems";
import MobileView from "./mobileView/MobileView";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);
  const [inputFields, setInputFields] = useState("");
  const [searchMenuItems, setSearchMenuItems] = useState("");
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const router = useNavigate();
  // Theme changed
  const handleThemeChange = (theme) => {
    dispatch(toggleTheme(theme));
  };
  // Sidebar collapsed
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  // search inputs
  const onSearch = (searchQuery) => {
    console.log(searchMenuItems);
  };

  const handleSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector("#overlay");

    if (sidebar && overlay) {
      sidebar.style.left = "-150%";
      overlay.style.display = "none";
    }
  };

  return (
    <>
      <aside
        className="sidebar"
        style={{
          // position: collapsed === true ? "fixed" : "relative",
          background: theme === "light" ? "white" : "#1C1C1C",
          boxShadow:
            theme === "light"
              ? " 0 0 3px rgba(0, 0, 0, 0.2)"
              : "1px 0px 1px 0px rgba(255, 255, 255, 0.15)",
        }}
      >
        {/* ================ main sidebar ================ */}
        <div
          className={`sidebarContainer ${
            collapsed ? "desktopStrip" : "desktopCollapse"
          } ${theme === "light" ? "lightTheme" : "darkTheme"}`}
        >
          {/* ============= toggle button ================= */}
          <div
            onClick={toggleCollapsed}
            className="sidebarBtn desktopViewBtn"
            style={{
              backgroundColor: theme === "light" ? "white" : "#1C1C1C",
            }}
          >
            {/* images */}
            {collapsed === false ? (
              <img
                src={theme === "light" ? ROBIN_LIGHT_THEME : ROBIN_DARK_THEME}
                alt="logo"
                height={26}
              />
            ) : (
              <img
                src={theme === "light" ? B_LIGHT_THEME : B_DARK_THEME}
                alt="logo"
                height={24}
              />
            )}
            {/* icons */}
            <span
              className={`icons ${collapsed ? "iconRotate" : ""}`}
              style={{ color: collapsed ? "" : "#FF3E5B", marginLeft: 2 }}
            >
              <svg
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
          </div>

          {/* mobile view */}
          <div
            className="sidebarBtn mobileViewBtn"
            style={{ backgroundColor: theme === "light" ? "white" : "#1C1C1C" }}
          >
            <img
              src={theme === "light" ? ROBIN_LIGHT_THEME : ROBIN_DARK_THEME}
              alt="logo"
              height={26}
              onClick={() => {
                router("/dashboard");
                handleSidebar();
              }}
            />
            {/* mobile view icons */}
            <span
              className="mobileIcons"
              style={{ color: "#FF3E5B" }}
              onClick={handleSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.146447 0.146447C0.341709 -0.0488155 0.658291 -0.0488155 0.853553 0.146447L8 7.29289L15.1464 0.146447C15.3417 -0.0488151 15.6583 -0.0488151 15.8536 0.146447C16.0488 0.341709 16.0488 0.658292 15.8536 0.853554L8.70711 8L15.8536 15.1464C16.0488 15.3417 16.0488 15.6583 15.8536 15.8536C15.6583 16.0488 15.3417 16.0488 15.1464 15.8536L8 8.70711L0.853554 15.8536C0.658292 16.0488 0.341709 16.0488 0.146447 15.8536C-0.0488151 15.6583 -0.0488151 15.3417 0.146447 15.1464L7.29289 8L0.146447 0.853554C-0.0488155 0.658291 -0.0488155 0.341709 0.146447 0.146447Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </div>

          {/* ================= search inputs ================ */}
          <div
            className="searchInputContainer desktopView"
            style={{
              paddingTop: collapsed ? 13 : 4,
              paddingBottom: 14,
              top: collapsed === true ? 52 : 54,
              display: collapsed && "flex",
              backgroundColor: theme === "light" ? "white" : "#1C1C1C",
              justifyContent: collapsed && "center",
            }}
          >
            {collapsed === false && (
              <SearchInput
                setSearchMenuItems={setSearchMenuItems}
                searchMenuItems={searchMenuItems}
                collapsed={collapsed}
              />
            )}
            {collapsed === true && (
              <span
                onClick={() => setCollapsed(false)}
                style={{
                  color: theme === "light" ? "black" : "white",
                  cursor: "pointer",
                }}
                className="searchIcons"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="25"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                </svg>
              </span>
            )}
          </div>

          <div
            className="searchInputContainer mobileViewSearch"
            style={{
              paddingBottom: 14,
              backgroundColor: theme === "light" ? "white" : "#1C1C1C",
            }}
          >
            <SearchInput
              setSearchMenuItems={setSearchMenuItems}
              searchMenuItems={searchMenuItems}
              collapsed={collapsed}
            />
          </div>
          {/* =================== menu items ================== */}
          <div className="sidebarMenuItemsContainer">
            {/* Desktop View */}
            <MenuItems collapsed={collapsed} setCollapsed={setCollapsed} />
            {/* Mobile View */}
            <MobileView collapsed={collapsed} setCollapsed={setCollapsed} />
          </div>
        </div>
        {/* ================ theme buttons ================= */}
        <div
          className="themeContainer desktopView"
          style={{
            padding: collapsed === true ? "7px 10px" : "10px 16px",
            backgroundColor: theme === "light" ? "#F2F2F2" : "#232324",
          }}
        >
          <div
            className="themeWrapper"
            style={{
              border: `1px solid ${theme === "dark" ? "#545454" : "#E6E6E6"}`,
            }}
          >
            {collapsed === true ? (
              <>
                {theme === "dark" ? (
                  <button
                    type="button"
                    title="Dark Theme"
                    className="themeBtn"
                    onClick={() => handleThemeChange("dark")}
                    style={{
                      backgroundColor: theme === "light" ? "#F2F2F2" : "",
                    }}
                  >
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.31744 0.146458C5.47876 0.307778 5.51043 0.55784 5.39441 0.754279C3.68269 3.65252 4.07273 7.44807 6.56233 9.93768C9.05194 12.4273 12.8475 12.8173 15.7457 11.1056C15.9422 10.9896 16.1922 11.0212 16.3536 11.1826C16.5149 11.3439 16.5465 11.594 16.4305 11.7904C16.0712 12.3987 15.6305 12.9717 15.1087 13.4936C11.7667 16.8355 6.34838 16.8355 3.00645 13.4936C-0.335484 10.1516 -0.335483 4.73328 3.00645 1.39135C3.52827 0.869531 4.10129 0.428777 4.70962 0.0694909C4.90606 -0.0465274 5.15612 -0.0148627 5.31744 0.146458ZM3.72141 2.09061C3.71879 2.09323 3.71617 2.09584 3.71356 2.09845C0.762148 5.04986 0.762147 9.83504 3.71356 12.7865C6.66497 15.7379 11.4501 15.7379 14.4016 12.7865C14.4042 12.7838 14.4068 12.7812 14.4094 12.7786C11.4821 13.6711 8.17067 12.9602 5.85523 10.6448C3.53979 8.32934 2.82892 5.01792 3.72141 2.09061Z"
                        fill={`${
                          theme === "dark"
                            ? "#FF3E5B"
                            : `${theme === "dark" ? "white" : "black"}`
                        }`}
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    type="button"
                    title="Light Theme"
                    className="themeBtn"
                    onClick={() => handleThemeChange("light")}
                    style={{
                      backgroundColor:
                        theme === "light" ? "#F2F2F2" : "#0B0B0C",
                      cursor: "pointer",
                      width: "100%",
                      height: "26px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 0C8.27614 0 8.5 0.223858 8.5 0.5V2.75C8.5 3.02614 8.27614 3.25 8 3.25C7.72386 3.25 7.5 3.02614 7.5 2.75V0.5C7.5 0.223858 7.72386 0 8 0ZM2.34315 2.34315C2.53841 2.14789 2.85499 2.14789 3.05025 2.34315L4.60355 3.89645C4.79882 4.09171 4.79882 4.40829 4.60355 4.60355C4.40829 4.79882 4.09171 4.79882 3.89645 4.60355L2.34315 3.05025C2.14789 2.85499 2.14789 2.53841 2.34315 2.34315ZM13.6569 2.34315C13.8521 2.53841 13.8521 2.85499 13.6569 3.05025L12.1036 4.60355C11.9083 4.79882 11.5917 4.79882 11.3964 4.60355C11.2012 4.40829 11.2012 4.09171 11.3964 3.89645L12.9497 2.34315C13.145 2.14789 13.4616 2.14789 13.6569 2.34315ZM8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5ZM4.5 8C4.5 6.067 6.067 4.5 8 4.5C9.933 4.5 11.5 6.067 11.5 8C11.5 9.933 9.933 11.5 8 11.5C6.067 11.5 4.5 9.933 4.5 8ZM0 8C0 7.72386 0.223858 7.5 0.5 7.5H2.75C3.02614 7.5 3.25 7.72386 3.25 8C3.25 8.27614 3.02614 8.5 2.75 8.5H0.5C0.223858 8.5 0 8.27614 0 8ZM12.75 8C12.75 7.72386 12.9739 7.5 13.25 7.5H15.5C15.7761 7.5 16 7.72386 16 8C16 8.27614 15.7761 8.5 15.5 8.5H13.25C12.9739 8.5 12.75 8.27614 12.75 8ZM4.60355 11.3964C4.79882 11.5917 4.79882 11.9083 4.60355 12.1036L3.05025 13.6569C2.85499 13.8521 2.53841 13.8521 2.34314 13.6569C2.14788 13.4616 2.14788 13.145 2.34314 12.9498L3.89645 11.3964C4.09171 11.2012 4.40829 11.2012 4.60355 11.3964ZM11.3964 11.3964C11.5917 11.2012 11.9083 11.2012 12.1036 11.3964L13.6569 12.9497C13.8521 13.145 13.8521 13.4616 13.6569 13.6569C13.4616 13.8521 13.145 13.8521 12.9497 13.6569L11.3964 12.1036C11.2012 11.9083 11.2012 11.5917 11.3964 11.3964ZM8 12.75C8.27614 12.75 8.5 12.9739 8.5 13.25V15.5C8.5 15.7761 8.27614 16 8 16C7.72386 16 7.5 15.7761 7.5 15.5V13.25C7.5 12.9739 7.72386 12.75 8 12.75Z"
                        fill={`${
                          theme === "light"
                            ? "#FF3E5B"
                            : `${theme === "dark" ? "white" : "black"}`
                        }`}
                      />
                    </svg>
                  </button>
                )}
              </>
            ) : (
              <>
                <button
                  className="themeCollapsedBtn"
                  onClick={() => handleThemeChange("light")}
                  type="button"
                  title="Light Theme"
                  style={{
                    backgroundColor: "transparent",
                    color: theme === "light" ? "#FF3E5B" : "#fff",
                    border: `1px solid ${
                      theme === "light" ? "#FF3E5B" : "transparent"
                    }`,
                    whiteSpace: "nowrap",
                  }}
                >
                  <span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 0C8.27614 0 8.5 0.223858 8.5 0.5V2.75C8.5 3.02614 8.27614 3.25 8 3.25C7.72386 3.25 7.5 3.02614 7.5 2.75V0.5C7.5 0.223858 7.72386 0 8 0ZM2.34315 2.34315C2.53841 2.14789 2.85499 2.14789 3.05025 2.34315L4.60355 3.89645C4.79882 4.09171 4.79882 4.40829 4.60355 4.60355C4.40829 4.79882 4.09171 4.79882 3.89645 4.60355L2.34315 3.05025C2.14789 2.85499 2.14789 2.53841 2.34315 2.34315ZM13.6569 2.34315C13.8521 2.53841 13.8521 2.85499 13.6569 3.05025L12.1036 4.60355C11.9083 4.79882 11.5917 4.79882 11.3964 4.60355C11.2012 4.40829 11.2012 4.09171 11.3964 3.89645L12.9497 2.34315C13.145 2.14789 13.4616 2.14789 13.6569 2.34315ZM8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5ZM4.5 8C4.5 6.067 6.067 4.5 8 4.5C9.933 4.5 11.5 6.067 11.5 8C11.5 9.933 9.933 11.5 8 11.5C6.067 11.5 4.5 9.933 4.5 8ZM0 8C0 7.72386 0.223858 7.5 0.5 7.5H2.75C3.02614 7.5 3.25 7.72386 3.25 8C3.25 8.27614 3.02614 8.5 2.75 8.5H0.5C0.223858 8.5 0 8.27614 0 8ZM12.75 8C12.75 7.72386 12.9739 7.5 13.25 7.5H15.5C15.7761 7.5 16 7.72386 16 8C16 8.27614 15.7761 8.5 15.5 8.5H13.25C12.9739 8.5 12.75 8.27614 12.75 8ZM4.60355 11.3964C4.79882 11.5917 4.79882 11.9083 4.60355 12.1036L3.05025 13.6569C2.85499 13.8521 2.53841 13.8521 2.34314 13.6569C2.14788 13.4616 2.14788 13.145 2.34314 12.9498L3.89645 11.3964C4.09171 11.2012 4.40829 11.2012 4.60355 11.3964ZM11.3964 11.3964C11.5917 11.2012 11.9083 11.2012 12.1036 11.3964L13.6569 12.9497C13.8521 13.145 13.8521 13.4616 13.6569 13.6569C13.4616 13.8521 13.145 13.8521 12.9497 13.6569L11.3964 12.1036C11.2012 11.9083 11.2012 11.5917 11.3964 11.3964ZM8 12.75C8.27614 12.75 8.5 12.9739 8.5 13.25V15.5C8.5 15.7761 8.27614 16 8 16C7.72386 16 7.5 15.7761 7.5 15.5V13.25C7.5 12.9739 7.72386 12.75 8 12.75Z"
                        fill={`${
                          theme === "light"
                            ? "#FF3E5B"
                            : `${theme === "dark" ? "white" : "black"}`
                        }`}
                      />
                    </svg>
                  </span>
                  Light Mode
                </button>
                <button
                  className="themeCollapsedBtn"
                  onClick={() => handleThemeChange("dark")}
                  type="button"
                  title="Dark Theme"
                  style={{
                    backgroundColor: "transparent",
                    color: theme === "dark" ? "#FF3E5B" : "black",
                    border: `1px solid ${
                      theme === "dark" ? "#FF3E5B" : "transparent"
                    }`,
                    whiteSpace: "nowrap",
                  }}
                >
                  <span>
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.31744 0.146458C5.47876 0.307778 5.51043 0.55784 5.39441 0.754279C3.68269 3.65252 4.07273 7.44807 6.56233 9.93768C9.05194 12.4273 12.8475 12.8173 15.7457 11.1056C15.9422 10.9896 16.1922 11.0212 16.3536 11.1826C16.5149 11.3439 16.5465 11.594 16.4305 11.7904C16.0712 12.3987 15.6305 12.9717 15.1087 13.4936C11.7667 16.8355 6.34838 16.8355 3.00645 13.4936C-0.335484 10.1516 -0.335483 4.73328 3.00645 1.39135C3.52827 0.869531 4.10129 0.428777 4.70962 0.0694909C4.90606 -0.0465274 5.15612 -0.0148627 5.31744 0.146458ZM3.72141 2.09061C3.71879 2.09323 3.71617 2.09584 3.71356 2.09845C0.762148 5.04986 0.762147 9.83504 3.71356 12.7865C6.66497 15.7379 11.4501 15.7379 14.4016 12.7865C14.4042 12.7838 14.4068 12.7812 14.4094 12.7786C11.4821 13.6711 8.17067 12.9602 5.85523 10.6448C3.53979 8.32934 2.82892 5.01792 3.72141 2.09061Z"
                        fill={`${
                          theme === "dark"
                            ? "#FF3E5B"
                            : `${theme === "dark" ? "white" : "black"}`
                        }`}
                      />
                    </svg>
                  </span>
                  Dark Mode
                </button>
              </>
            )}
          </div>
        </div>
        {/* mobile view theme */}
        <div
          className="themeContainer mobileViewThemeWrapper"
          style={{
            backgroundColor: theme === "light" ? "#F2F2F2" : "#232324",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <div
            className="themeWrapper"
            style={{
              borderTop: `1px solid ${
                theme === "dark" ? "#545454" : "#E6E6E6"
              }`,
            }}
          >
            <button
              className="themeCollapsedBtn"
              onClick={() => handleThemeChange("light")}
              type="button"
              title="Light Theme"
              style={{
                backgroundColor: "transparent",
                color: theme === "light" ? "#FF3E5B" : "#fff",
                border: `1px solid ${
                  theme === "light" ? "#FF3E5B" : "transparent"
                }`,
                whiteSpace: "nowrap",
              }}
            >
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 0C8.27614 0 8.5 0.223858 8.5 0.5V2.75C8.5 3.02614 8.27614 3.25 8 3.25C7.72386 3.25 7.5 3.02614 7.5 2.75V0.5C7.5 0.223858 7.72386 0 8 0ZM2.34315 2.34315C2.53841 2.14789 2.85499 2.14789 3.05025 2.34315L4.60355 3.89645C4.79882 4.09171 4.79882 4.40829 4.60355 4.60355C4.40829 4.79882 4.09171 4.79882 3.89645 4.60355L2.34315 3.05025C2.14789 2.85499 2.14789 2.53841 2.34315 2.34315ZM13.6569 2.34315C13.8521 2.53841 13.8521 2.85499 13.6569 3.05025L12.1036 4.60355C11.9083 4.79882 11.5917 4.79882 11.3964 4.60355C11.2012 4.40829 11.2012 4.09171 11.3964 3.89645L12.9497 2.34315C13.145 2.14789 13.4616 2.14789 13.6569 2.34315ZM8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5ZM4.5 8C4.5 6.067 6.067 4.5 8 4.5C9.933 4.5 11.5 6.067 11.5 8C11.5 9.933 9.933 11.5 8 11.5C6.067 11.5 4.5 9.933 4.5 8ZM0 8C0 7.72386 0.223858 7.5 0.5 7.5H2.75C3.02614 7.5 3.25 7.72386 3.25 8C3.25 8.27614 3.02614 8.5 2.75 8.5H0.5C0.223858 8.5 0 8.27614 0 8ZM12.75 8C12.75 7.72386 12.9739 7.5 13.25 7.5H15.5C15.7761 7.5 16 7.72386 16 8C16 8.27614 15.7761 8.5 15.5 8.5H13.25C12.9739 8.5 12.75 8.27614 12.75 8ZM4.60355 11.3964C4.79882 11.5917 4.79882 11.9083 4.60355 12.1036L3.05025 13.6569C2.85499 13.8521 2.53841 13.8521 2.34314 13.6569C2.14788 13.4616 2.14788 13.145 2.34314 12.9498L3.89645 11.3964C4.09171 11.2012 4.40829 11.2012 4.60355 11.3964ZM11.3964 11.3964C11.5917 11.2012 11.9083 11.2012 12.1036 11.3964L13.6569 12.9497C13.8521 13.145 13.8521 13.4616 13.6569 13.6569C13.4616 13.8521 13.145 13.8521 12.9497 13.6569L11.3964 12.1036C11.2012 11.9083 11.2012 11.5917 11.3964 11.3964ZM8 12.75C8.27614 12.75 8.5 12.9739 8.5 13.25V15.5C8.5 15.7761 8.27614 16 8 16C7.72386 16 7.5 15.7761 7.5 15.5V13.25C7.5 12.9739 7.72386 12.75 8 12.75Z"
                    fill={`${
                      theme === "light"
                        ? "#FF3E5B"
                        : `${theme === "dark" ? "white" : "black"}`
                    }`}
                  />
                </svg>
              </span>
              Light Mode
            </button>
            <button
              className="themeCollapsedBtn"
              onClick={() => handleThemeChange("dark")}
              type="button"
              title="Dark Theme"
              style={{
                backgroundColor: "transparent",
                color: theme === "dark" ? "#FF3E5B" : "black",
                border: `1px solid ${
                  theme === "dark" ? "#FF3E5B" : "transparent"
                }`,
                whiteSpace: "nowrap",
              }}
            >
              <span>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.31744 0.146458C5.47876 0.307778 5.51043 0.55784 5.39441 0.754279C3.68269 3.65252 4.07273 7.44807 6.56233 9.93768C9.05194 12.4273 12.8475 12.8173 15.7457 11.1056C15.9422 10.9896 16.1922 11.0212 16.3536 11.1826C16.5149 11.3439 16.5465 11.594 16.4305 11.7904C16.0712 12.3987 15.6305 12.9717 15.1087 13.4936C11.7667 16.8355 6.34838 16.8355 3.00645 13.4936C-0.335484 10.1516 -0.335483 4.73328 3.00645 1.39135C3.52827 0.869531 4.10129 0.428777 4.70962 0.0694909C4.90606 -0.0465274 5.15612 -0.0148627 5.31744 0.146458ZM3.72141 2.09061C3.71879 2.09323 3.71617 2.09584 3.71356 2.09845C0.762148 5.04986 0.762147 9.83504 3.71356 12.7865C6.66497 15.7379 11.4501 15.7379 14.4016 12.7865C14.4042 12.7838 14.4068 12.7812 14.4094 12.7786C11.4821 13.6711 8.17067 12.9602 5.85523 10.6448C3.53979 8.32934 2.82892 5.01792 3.72141 2.09061Z"
                    fill={`${
                      theme === "dark"
                        ? "#FF3E5B"
                        : `${theme === "dark" ? "white" : "black"}`
                    }`}
                  />
                </svg>
              </span>
              Dark Mode
            </button>
          </div>
        </div>
      </aside>
      {/* mobile device */}
      {/* overlay */}
      <div id="overlay" onClick={handleSidebar}></div>
    </>
  );
}

export default Sidebar;

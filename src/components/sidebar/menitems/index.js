import React, { useState } from "react";
import "./styles.scss";
import { menuItems } from "../../../data";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function MenuItems({ collapsed, setCollapsed }) {
  const [expanded, setExpanded] = useState({});
  const [tooltip, setTooltip] = useState(false);
  const theme = useSelector((state) => state.theme);

  // Scrollbar
  // const [sidebarScrollBar, setSidebarScrollBar] = useState(false);

  const router = useNavigate();

  const pathname = window.location.pathname;

  const toggleExpanded = (folderName) => {
    setExpanded((prev) => {
      return {
        ...prev,
        [folderName]: !prev[folderName],
      };
    });
  };

  const handleRedirect = (links) => {
    router(links);
  };

  const handleCollapseRecursive = (item) => {
    setCollapsed(false);
    toggleExpanded(item);
  };

  const handleTooltip = (item) => {
    // console.log(item);
    setTooltip(!tooltip);
    if (!item) return setExpanded({});
    toggleExpanded(item);
  };

  // tooltip render
  const reRenderTooltips = (item) => {
    // const IsExpand = expanded[item.name];

    // if (item.isFolder) {
    //   return (
    //     <div key={item.id}>
    //       <div className="tooltipHead" onClick={() => toggleExpanded(item)}>
    //         {item.name}

    //         arrow icons
    //         <span
    //           style={{
    //             transform: IsExpand && "rotate(180deg)",
    //             transition: "all 0.3s ease-in-out",
    //             color: IsExpand && "#FF3E5B",
    //             display: "flex",
    //             alignItems: "center",
    //             justifyContent: "center",
    //           }}
    //         >
    //           <svg
    //             stroke="currentColor"
    //             fill="currentColor"
    //             strokeWidth="0"
    //             viewBox="0 0 16 16"
    //             height="14"
    //             width="14"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
    //             ></path>
    //           </svg>
    //         </span>
    //       </div>
    //       inner menu lists
    //       {IsExpand && (
    //         <ul style={{ paddingLeft: "30px", fontSize: 12 }}>
    //           {item.items.map(reRenderTooltips)}
    //         </ul>
    //       )}
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div
    //       key={item.id}
    //       className={`tooltip ${
    //         theme === "light" ? "lightTheme" : "darkTheme"
    //       }`}
    //       style={{
    //         backgroundColor: theme === "light" ? "white" : "#545454",
    //         color: theme === "light" ? "black" : "white",
    //         boxShadow:
    //           theme === "light"
    //             ? "rgb(0 0 0 / 20%) 0px 0px 3px"
    //             : "rgb(255 255 255 / 15%) 1px 0px 1px 0px",
    //       }}
    //     >
    //       {item.name}
    //     </div>
    //   );
    // }

    return <div key={item.id}>{item.name}</div>;
  };

  const wordSlice = (word) => {
    if (word.length > 27) {
      return word.slice(0, 27) + "...";
    } else {
      return word;
    }
  };

  // desktop view menuitems
  function renderItem(item) {
    const IsExpand = expanded[item.name];

    if (item.isFolder) {
      return (
        <div
          style={{
            color:
              pathname === item.link
                ? "#FF3E5B"
                : theme === "light"
                ? "#000"
                : "#fff",
          }}
          className="menuLists"
          key={item.key}
        >
          {/* menuItems Heading */}
          <div
            className="menuItemsHead"
            onClick={() => handleCollapseRecursive(item.name)}
          >
            {/* items */}
            <div
              className="items"
              style={{
                color:
                  (IsExpand && "#FF3E5B") ||
                  (pathname === item.link && "#FF3E5B"),
                margin: "0",
                lineHeight: collapsed === false && "3px",
                justifyContent: collapsed && "center",
              }}
              title={collapsed ? "" : item.name}
              onMouseOver={() => collapsed === true && handleTooltip(item.name)}
              onMouseLeave={() => collapsed === true && handleTooltip()}
            >
              {item.icon && (
                <span
                  style={{
                    color: pathname === item.link && "#FF3E5B",
                  }}
                >
                  {item.icon}
                </span>
              )}
              {/* items name */}
              {!collapsed && (
                <div
                  style={{
                    color:
                      IsExpand || pathname === item.link
                        ? "#FF3E5B"
                        : theme === "light"
                        ? "black"
                        : "#f2f2f2",
                  }}
                  onClick={() => handleRedirect(item.link)}
                  className="menuText"
                >
                  {/* {item.name} */}
                  {wordSlice(item.name)}
                </div>
              )}
            </div>
            {/* arrow icons */}
            {collapsed === false && (
              <span
                style={{
                  transform: IsExpand && "rotate(180deg)",
                  transition: "transform 0.3s ease-in-out",
                  color: IsExpand && "#FF3E5B",
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
                    d="M17.842 5.63523C18.0434 5.8241 18.0536 6.14052 17.8648 6.34197L10.3648 14.342C10.2702 14.4428 10.1382 14.5 10 14.5C9.86179 14.5 9.72975 14.4428 9.63523 14.342L2.13523 6.34197C1.94637 6.14052 1.95657 5.8241 2.15803 5.63523C2.35948 5.44637 2.6759 5.45657 2.86477 5.65803L10 13.2689L17.1352 5.65803C17.3241 5.45657 17.6405 5.44637 17.842 5.63523Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            )}
          </div>
          {!collapsed && IsExpand && (
            <ul style={{ paddingLeft: "30px", fontSize: 14 }}>
              {item.items.map(renderItem)}
            </ul>
          )}
          {/* tooltips */}
          {collapsed === true && tooltip === true && IsExpand && (
            <div
              className={`tooltip ${
                theme === "light" ? "lightTheme" : "darkTheme"
              }`}
              style={{
                backgroundColor: theme === "light" ? "white" : "#545454",
                color: theme === "light" ? "black" : "white",
                boxShadow:
                  theme === "light"
                    ? "rgb(0 0 0 / 20%) 0px 0px 3px"
                    : "rgb(255 255 255 / 15%) 1px 0px 1px 0px",
              }}
            >
              {reRenderTooltips(item)}
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div
          key={item.key}
          className="menuLists"
          style={{
            color:
              pathname === item.link
                ? "#FF3E5B"
                : theme === "light"
                ? "#000"
                : "#fff",
          }}
          onClick={() => setCollapsed(false)}
        >
          <div
            className="items"
            style={{
              color: IsExpand && "#FF3E5B",
              margin: "0",
              lineHeight: collapsed === false && "2px",
              justifyContent: collapsed && "center",
            }}
            title={collapsed ? "" : item.name}
            onMouseOver={() => collapsed === true && handleTooltip(item.name)}
            onMouseLeave={() => collapsed === true && handleTooltip()}
          >
            {item.icon && <span>{item.icon}</span>}

            {!collapsed && (
              <div
                style={{
                  color:
                    IsExpand || pathname === item.link
                      ? "#FF3E5B"
                      : theme === "light"
                      ? "black"
                      : "#f2f2f2",
                }}
                onClick={() => handleRedirect(item.link)}
                className="menuText"
              >
                {/* {item.name} */}
                {wordSlice(item.name)}
              </div>
            )}
          </div>

          {/* tooltips */}
          {collapsed === true && tooltip && IsExpand && (
            <div
              className={`tooltip ${
                theme === "light" ? "lightTheme" : "darkTheme"
              }`}
              style={{
                backgroundColor: theme === "light" ? "white" : "#545454",
                color: theme === "light" ? "black" : "white",
                boxShadow:
                  theme === "light"
                    ? "rgb(0 0 0 / 20%) 0px 0px 3px"
                    : "rgb(255 255 255 / 15%) 1px 0px 1px 0px",
              }}
            >
              {reRenderTooltips(item)}
            </div>
          )}
        </div>
      );
    }
  }

  return (
    <>
      <div
        className={`menuListContainer`}
        // ${sidebarScrollBar && "activeScrollbar"}
        // onMouseEnter={() => collapsed === false && setSidebarScrollBar(true)}
        // onMouseLeave={() => collapsed === false && setSidebarScrollBar(false)}
      >
        {menuItems.map(renderItem)}
      </div>
    </>
  );
}

export default MenuItems;

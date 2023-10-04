import React, { useState } from "react";
import "./styles.scss";
import { menuItems } from "../../../data";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function MenuItems({ collapsed, setCollapsed }) {
  const [expanded, setExpanded] = useState({});

  const theme = useSelector((state) => state.theme);

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
          <div
            className="menuItemsHead"
            onClick={() => handleCollapseRecursive(item.name)}
          >
            {/* items */}
            <div
              className="items"
              style={{
                color: IsExpand || pathname === item.link ? "#FF3E5B" : "",
                margin: "0",
                lineHeight: collapsed === false && "2px",
                justifyContent: collapsed && "center",
              }}
            >
              {item.icon && <span>{item.icon}</span>}
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
                >
                  {item.name}
                </div>
              )}
            </div>
            {/* arrow icons */}
            {collapsed === false && (
              <span
                style={{
                  transform: IsExpand && "rotate(180deg)",
                  transition: "all 0.3s ease-in-out",
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
              color: IsExpand ? "#FF3E5B" : "",
              margin: "0",
              lineHeight: collapsed === false && "2px",
              justifyContent: collapsed && "center",
            }}
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
              >
                {item.name}
              </div>
            )}
          </div>
        </div>
      );
    }
  }

  // mobile view menuItems

  function renderMobileViewMenuItems(item) {
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
          <div
            className="menuItemsHead"
            onClick={() => handleCollapseRecursive(item.name)}
          >
            {/* items */}
            <div
              className="items"
              style={{
                color: IsExpand || pathname === item.link ? "#FF3E5B" : "",
                margin: "0",
              }}
            >
              {/* items name */}
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
              >
                {item.name}
              </div>
            </div>
            {/* arrow icons */}
            <span
              style={{
                transform: IsExpand && "rotate(180deg)",
                transition: "all 0.3s ease-in-out",
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
          </div>
          {IsExpand && (
            <ul style={{ paddingLeft: "30px" }}>
              {item.items.map(renderItem)}
            </ul>
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
        >
          <div
            className="items"
            style={{
              color: IsExpand ? "#FF3E5B" : "",
              margin: "0",
            }}
          >
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
            >
              {item.name}
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <>
      <div className="menuListContainer">{menuItems.map(renderItem)}</div>
      <div className="mobileView">
        {menuItems.map(renderMobileViewMenuItems)}
      </div>
    </>
  );
}

export default MenuItems;

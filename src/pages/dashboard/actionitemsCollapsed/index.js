import React, { useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";

function ActionItemsCollapsed({ items }) {
  const [isActiveCollapse, setIsActiveCollapse] = useState(false);
  const theme = useSelector((state) => state.theme);
  return (
    <div
      key={items.id}
      className="actionItems"
      style={{ borderColor: theme === "light" ? "#E6E6E6" : "#635d5d" }}
    >
      {/* heading */}
      <div
        className={`actionItems_heading ${
          isActiveCollapse === items.id ? "lightHover" : "darkHover"
        } ${theme === "light" ? "lightHover" : "darkHover"}`}
        onClick={() => setIsActiveCollapse(!isActiveCollapse)}
      >
        {/* left side */}
        <div className="leftSide">
          {/* icons */}
          {isActiveCollapse ? (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.2 7.5C11.2 7.6933 11.0433 7.85 10.85 7.85L3.14995 7.85C2.95665 7.85 2.79995 7.6933 2.79995 7.5C2.79995 7.3067 2.95665 7.15 3.14995 7.15L10.85 7.15C11.0433 7.15 11.2 7.3067 11.2 7.5Z"
                  fill="#FF3E5B"
                />
              </svg>
            </span>
          ) : (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7 2.25C7.18122 2.25 7.32813 2.39691 7.32813 2.57812V7.17188H11.9219C12.1031 7.17188 12.25 7.31878 12.25 7.5C12.25 7.68122 12.1031 7.82813 11.9219 7.82813H7.32813V12.4219C7.32813 12.6031 7.18122 12.75 7 12.75C6.81878 12.75 6.67188 12.6031 6.67188 12.4219L6.67188 7.82813H2.07812C1.89691 7.82813 1.75 7.68122 1.75 7.5C1.75 7.31878 1.89691 7.17188 2.07812 7.17188H6.67188L6.67188 2.57812C6.67188 2.39691 6.81878 2.25 7 2.25Z"
                  fill="#FF3E5B"
                />
              </svg>
            </span>
          )}
          <p>{items.text}</p>
        </div>
        {/* right side */}
        <div className="rightSide">
          <span className="labels">{items.count}</span>
        </div>
      </div>
      {/* contents */}
      {isActiveCollapse && (
        <div className="actionItemsCollapsed">
          {items.contents.map((ele) => (
            <div key={ele.id} className="actionItemsCollapsed_content">
              <p>{ele.text}</p>
              {/* divider */}
              <span className="divider"></span>
              {/* date time */}
              <span className="date">{ele.date}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ActionItemsCollapsed;

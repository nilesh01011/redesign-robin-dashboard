import React, { useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import GridContent from "../gridContent/GridContent";

function Accordion({ data, ele }) {
  // console.log(data)
  const theme = useSelector((state) => state.theme);
  const [isExpand, setIsExpand] = useState(false);
  return (
    <div
      className="innerAccordion"
      style={{
        borderColor: theme === "light" ? "#E6E6E6" : "#232324",
        boxShadow:
          theme === "light"
            ? "0px 1px 1px 0px rgba(0, 0, 0, 0.15)"
            : "0px 1px 1px 0px rgba(255, 255, 255, 0.15)",
      }}
    >
      <div
        className="accordionHeader"
        style={{height:24}}
      >
        <h5 style={{ fontSize: 16, fontWeight: 700 }}>{ele.name}</h5>
        <span
          style={{
            cursor: "pointer",
          }}
          onClick={() => setIsExpand(!isExpand)}
        >
          {isExpand === false ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 3C12.3107 3 12.5625 3.25184 12.5625 3.5625V11.4375H20.4375C20.7482 11.4375 21 11.6893 21 12C21 12.3107 20.7482 12.5625 20.4375 12.5625H12.5625V20.4375C12.5625 20.7482 12.3107 21 12 21C11.6893 21 11.4375 20.7482 11.4375 20.4375L11.4375 12.5625H3.5625C3.25184 12.5625 3 12.3107 3 12C3 11.6893 3.25184 11.4375 3.5625 11.4375H11.4375L11.4375 3.5625C11.4375 3.25184 11.6893 3 12 3Z"
                fill="#FF3E5B"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.1992 11.9999C19.1992 12.3313 18.9306 12.5999 18.5992 12.5999L5.39922 12.5999C5.06785 12.5999 4.79922 12.3313 4.79922 11.9999C4.79922 11.6685 5.06785 11.3999 5.39922 11.3999L18.5992 11.3999C18.9306 11.3999 19.1992 11.6685 19.1992 11.9999Z"
                fill="#FF3E5B"
              />
            </svg>
          )}
        </span>
      </div>
      {/* divider */}
      {isExpand && (
        <div
          className="divider"
          style={{
            backgroundColor: theme === "light" ? "#E6E6E6" : "#232324",
          }}
        />
      )}
      {isExpand &&
        ele.contents.map((el) => {
          return (
            <div className="grid">
              {el.contents.map((e, index) => (
                <GridContent data={e} key={index} />
              ))}
            </div>
          );
        })}
    </div>
  );
}

export default Accordion;

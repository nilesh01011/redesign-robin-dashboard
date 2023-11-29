import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";

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

function DropdownCommon({
  items,
  dropdownDirection,
  padding,
  // selected,
  // setSelected,
  width,
  disabled,
}) {
  const theme = useSelector((state) => state.theme);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (!selected) {
      return setSelected(items[0].name);
    } else {
      setSelected(selected);
    }
  }, [selected, setSelected]);

  const wordSlice = (word) => {
    if (word.length > 20) {
      return word.slice(0, 20) + "...";
    } else {
      return word;
    }
  };

  const wordSlice_2 = (word) => {
    if (word.length > 10) {
      return word.slice(0, 10) + "...";
    } else {
      return word;
    }
  };

  let domNode = useClickOutSide(() => {
    setIsDropdownOpen(false);
  });

  return (
    <>
      <div
        className="commonDropdownMenu"
        style={{ display: "none" }}
        ref={domNode}
      >
        <div className="selectOption">
          <div
            // style={{
            //   height: "100%",
            //   borderColor:
            //     isDropdownOpen === true
            //       ? theme === "light"
            //         ? "black"
            //         : "white"
            //       : theme === "light"
            //       ? "black"
            //       : "#545454",
            //   backgroundColor: theme === "light" ? "#FFFFFF" : "#0b0b0c",
            //   padding: padding,
            //   // width:width && width,
            // }}
            style={{
              borderColor: disabled
                ? theme === "light"
                  ? "#E6E6E6"
                  : "#232324"
                : isDropdownOpen === true
                ? theme === "light"
                  ? "#0B0B0C"
                  : "#ffffff"
                : theme === "light"
                ? "#B5B5B6"
                : "#545454",
              cursor: disabled ? "not-allowed" : "pointer",
              backgroundColor: disabled
                ? theme === "light"
                  ? "#E6E6E6"
                  : "#232324"
                : theme === "light"
                ? "#FFFFFF"
                : "#0B0B0C",
            }}
            className="selectOptionContainer"
          >
            {/* select fields */}
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="selectOptionFields"
            >
              <p
                style={{ color: theme === "light" ? "black" : "white" }}
                className="selectFields desktopView"
              >
                {!selected ? wordSlice(items[0].name) : wordSlice(selected)}
                {/* {selected} */}
              </p>

              <p
                style={{ color: theme === "light" ? "black" : "white" }}
                className="selectFields mobileView"
              >
                {!selected ? wordSlice_2(items[0].name) : wordSlice_2(selected)}
                {/* {selected} */}
              </p>

              {/* icons */}
              <div
                style={{
                  transform: isDropdownOpen && "rotate(180deg)",
                  color: theme === "light" ? "black" : "white",
                }}
                className="icons"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.607 4.50858C14.7681 4.65967 14.7763 4.9128 14.6252 5.07397L8.62521 11.474C8.54959 11.5546 8.44396 11.6004 8.3334 11.6004C8.22283 11.6004 8.1172 11.5546 8.04158 11.474L2.04158 5.07397C1.89049 4.9128 1.89866 4.65967 2.05982 4.50858C2.22099 4.35748 2.47412 4.36565 2.62521 4.52681L8.3334 10.6155L14.0416 4.52682C14.1927 4.36565 14.4458 4.35748 14.607 4.50858Z"
                    fill={disabled ? "#858585" : "#FF3E5B"}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* all lists items */}
        {isDropdownOpen && (
          <ul
            style={{
              // position: "absolute",
              // top: direction ? "calc(100% + 10px)" : "",
              // bottom: direction ? "calc(100% + 10px)" : "",
              // left: 0,
              // right: 0,
              backgroundColor: theme === "light" ? "white" : "#1C1C1C",
            }}
            className={`allListItems ${dropdownDirection} ${
              theme === "light" ? "lightTheme" : "darkTheme"
            }`}
          >
            {items.map((ele, id) => {
              return (
                <li
                  key={id}
                  onClick={() => {
                    setSelected(ele.name);
                    setIsDropdownOpen(false);
                  }}
                  className={`allListItemsChild ${
                    theme === "light" ? "lightHover" : "darkHover"
                  }`}
                  style={{
                    color: selected === ele.name && "#FF3E5B",
                    backgroundColor:
                      selected === ele.name
                        ? theme === "light"
                          ? "#F2F2F2"
                          : "#232324"
                        : "",
                  }}
                >
                  {ele.name}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div
        ref={domNode}
        className="dropdownIndividualContainer"
        style={{ width: width }}
      >
        {/* select options fields */}
        <div
          className="optionsContainer"
          style={{
            borderColor: disabled
              ? theme === "light"
                ? "#E6E6E6"
                : "#232324"
              : isDropdownOpen === true
              ? theme === "light"
                ? "#0B0B0C"
                : "#ffffff"
              : theme === "light"
              ? "#B5B5B6"
              : "#545454",
            cursor: disabled ? "not-allowed" : "pointer",
            backgroundColor: disabled
              ? theme === "light"
                ? "#E6E6E6"
                : "#232324"
              : theme === "light"
              ? "#FFFFFF"
              : "#0B0B0C",
          }}
          onClick={() => !disabled && setIsDropdownOpen(!isDropdownOpen)}
        >
          <p
            style={{
              color: disabled
                ? theme === "light"
                  ? "#858585"
                  : "#545454"
                : theme === "light"
                ? "#0B0B0C"
                : "#ffffff",
            }}
            className="selectedItems"
          >
            {selected}
          </p>
          {/* icons */}
          <div
            style={{
              transform: isDropdownOpen && "rotate(180deg)",
            }}
            className="icons"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.607 4.50858C14.7681 4.65967 14.7763 4.9128 14.6252 5.07397L8.62521 11.474C8.54959 11.5546 8.44396 11.6004 8.3334 11.6004C8.22283 11.6004 8.1172 11.5546 8.04158 11.474L2.04158 5.07397C1.89049 4.9128 1.89866 4.65967 2.05982 4.50858C2.22099 4.35748 2.47412 4.36565 2.62521 4.52681L8.3334 10.6155L14.0416 4.52682C14.1927 4.36565 14.4458 4.35748 14.607 4.50858Z"
                fill={disabled ? "#858585" : "#FF3E5B"}
              />
            </svg>
          </div>
        </div>
        {/* dropdown items */}
        {isDropdownOpen && (
          <ul
            className={`dropdownMenuList ${
              theme === "light" ? "lightTheme" : "darkTheme"
            }`}
            style={{
              backgroundColor: theme === "light" ? "#ffffff" : "#1C1C1C",
            }}
          >
            {items.map((ele, index) => {
              return (
                <li
                  key={index}
                  className={`listChild ${
                    theme === "light" ? "lightTheme" : "darkTheme"
                  }`}
                  onClick={() => {
                    setSelected(ele.name);
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                  style={{
                    color: selected === ele.name && "#FF3E5B",
                    backgroundColor:
                      selected === ele.name
                        ? theme === "light"
                          ? "#F2F2F2"
                          : "#232324"
                        : "",
                  }}
                >
                  {ele.name}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}

export default DropdownCommon;

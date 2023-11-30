import React, { useEffect, useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";

function Index({
  tableHead,
  tableBody,
  inputFields,
  // searchDropdownText,
  emptyTableData,
  setDrawerData,
  setDrawerType,
  setIsDrawerOpen,
  selected
}) {
  const theme = useSelector((state) => state.theme);
  // const [tabelScrollbar, setTabelScrollbar] = useState(false);
  const [textTrucat, setTextTrucat] = useState(false);

  // const splitTextToNumber = Number(selected.split(" ")[0]);

  const filterData = tableBody.filter((item) => {
    return inputFields.toLowerCase() === ""
      ? item
      : item.one.toLowerCase().includes(inputFields) ||
          item.two.toLowerCase().includes(inputFields) ||
          item.three.toLowerCase().includes(inputFields) ||
          item.four.toLowerCase().includes(inputFields);
  });

  const wordSlice = (word) => {
    if (word === undefined) {
      return;
    }
    if (word.length > 13) {
      return word.slice(0, 13) + "...";
    } else {
      return word;
    }
  };

  const borderColor = theme === "light" ? "#e6e6e6" : "#232324";

  return (
    <table>
      {/* tabel heading */}
      <thead
        className="tableHeads"
        style={{
          backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
        }}
      >
        <tr className="table">
          {tableHead.map((ele) => (
            <th key={ele.key} style={{ borderColor: borderColor }}>
              {ele.label}
              {/* icons */}
              <span
                style={{
                  display:
                    tableHead[0].key === ele.key ||
                    tableHead[tableHead.length - 1].key === ele.key
                      ? "none"
                      : "",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                >
                  <path
                    d="M8.66055 3.5943L8.66143 3.59522L10.5345 5.55531C10.583 5.60608 10.5953 5.67494 10.5681 5.74367C10.5548 5.77734 10.5352 5.8006 10.5172 5.81386C10.5019 5.82512 10.4828 5.83341 10.4525 5.83341L6.81719 5.83341L3.54362 5.83341C3.5031 5.83341 3.45771 5.81265 3.42973 5.74239C3.4018 5.67225 3.41461 5.60451 3.46162 5.55531L6.48428 2.3923C6.77154 2.0917 7.22991 2.09156 7.51733 2.39189C7.51746 2.39203 7.51759 2.39217 7.51772 2.3923L8.66055 3.5943Z"
                    stroke="#B5B5B6"
                  />
                  <path
                    d="M6.48646 12.6101L6.48647 12.6101L6.48438 12.6079L3.46285 9.44491L3.10131 9.79029L3.46285 9.44491C3.41436 9.39415 3.40213 9.32523 3.42929 9.25644C3.44259 9.22274 3.46225 9.19949 3.48018 9.18625C3.49542 9.17501 3.51443 9.16675 3.54462 9.16675L6.81697 9.16675L10.451 9.16675C10.4811 9.16675 10.5002 9.17499 10.5157 9.18639C10.5338 9.19979 10.5539 9.2234 10.5675 9.25772C10.5955 9.32802 10.5828 9.39717 10.5369 9.44668L8.66615 11.405L7.51704 12.6079C7.22864 12.9098 6.76625 12.9066 6.48646 12.6101Z"
                    fill="white"
                    stroke="#B5B5B6"
                  />
                </svg>
              </span>
            </th>
          ))}
        </tr>
      </thead>
      {/* table body */}
      {filterData.length === 0 || !filterData ? (
        emptyTableData()
      ) : (
        <tbody>
          {filterData.map((ele, index) => (
            <tr
              key={ele.key}
              className={theme === "light" ? "lightHover" : "darkHover"}
              // style={{borderColor:borderColor}}
            >
              <td
                style={{
                  borderColor: borderColor,
                  color: theme === "light" ? "#545454" : "#a3a3a3",
                }}
              >
                {index + 1}
              </td>
              <td
                style={{
                  borderColor: borderColor,
                  color: theme === "light" ? "#545454" : "#a3a3a3",
                }}
              >
                {ele.one}
              </td>
              <td
                style={{
                  borderColor: borderColor,
                  color: theme === "light" ? "#545454" : "#a3a3a3",
                  position: "relative",
                }}
                onMouseEnter={() => ele.two.length > 14 && setTextTrucat(true)}
                onMouseLeave={() => ele.two.length > 14 && setTextTrucat(false)}
              >
                {wordSlice(ele.two)}
                {/* {textTrucat && (
                  <span
                    className="textOverflow"
                    style={{
                      opacity: textTrucat ? "1" : "0",
                      backgroundColor: textTrucat
                        ? theme === "light"
                          ? "#ffffff"
                          : "#0B0B0C"
                        : "",
                    }}
                  >
                    {ele.two}
                  </span>
                )} */}
              </td>
              <td
                style={{
                  borderColor: borderColor,
                  color: theme === "light" ? "#545454" : "#a3a3a3",
                }}
              >
                {ele.three}
              </td>
              <td
                style={{
                  borderColor: borderColor,
                  color: theme === "light" ? "#545454" : "#a3a3a3",
                }}
              >
                {ele.four}
              </td>
              <td
                style={{
                  borderColor: borderColor,
                  color: theme === "light" ? "#545454" : "#a3a3a3",
                }}
              >
                {ele.status ? (
                  <span
                    className={`${ele.five} ${
                      theme === "light" ? "lightTheme" : "darkTheme"
                    } status`}
                  >
                    {ele.five}
                  </span>
                ) : (
                  ele.five
                )}
              </td>
              {ele.six && (
                <td
                  style={{
                    borderColor: borderColor,
                    color: theme === "light" ? "#545454" : "#a3a3a3",
                  }}
                >
                  {ele.six}
                </td>
              )}

              <td
                style={{
                  borderColor: borderColor,
                  color: theme === "light" ? "#545454" : "#a3a3a3",
                }}
              >
                <div
                  className="stickyActions"
                  style={{ display: "flex", alignItems: "center", 
                  // justifyContent:ele.notEdit && "center",
                   gap: 20 }}
                >
                  {/* view data */}
                  <span
                    title="View Details"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setDrawerData(ele);
                      setDrawerType("view");
                      setIsDrawerOpen(true);
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
                        d="M4.37757 7.36505C5.76699 6.21336 7.75481 5 10 5C12.2452 5 14.233 6.21336 15.6224 7.36505C16.3242 7.94678 16.8909 8.52735 17.2824 8.96248C17.4784 9.18037 17.6312 9.36263 17.7358 9.49148C17.7881 9.55593 17.8285 9.60708 17.8561 9.64272C17.87 9.66054 17.8807 9.67449 17.8881 9.6843L17.8969 9.69585L17.8994 9.69924L17.9005 9.7007C17.9005 9.7007 17.9007 9.70099 17.5 10C17.9007 10.299 17.9005 10.2993 17.9005 10.2993L17.9002 10.2997L17.8994 10.3008L17.8969 10.3041L17.8881 10.3157C17.8807 10.3255 17.87 10.3395 17.8561 10.3573C17.8285 10.3929 17.7881 10.4441 17.7358 10.5085C17.6312 10.6374 17.4784 10.8196 17.2824 11.0375C16.8909 11.4726 16.3242 12.0532 15.6224 12.635C14.233 13.7866 12.2452 15 10 15C7.75481 15 5.76699 13.7866 4.37757 12.635C3.67577 12.0532 3.10908 11.4726 2.71765 11.0375C2.52164 10.8196 2.36882 10.6374 2.2642 10.5085C2.21187 10.4441 2.17155 10.3929 2.14387 10.3573C2.13002 10.3395 2.11933 10.3255 2.11187 10.3157L2.10312 10.3041L2.10057 10.3008L2.09976 10.2997L2.09948 10.2993C2.09948 10.2993 2.09926 10.299 2.5 10C2.09926 9.70099 2.09948 9.7007 2.09948 9.7007L2.10057 9.69924L2.10312 9.69585L2.11187 9.6843C2.11933 9.67449 2.13002 9.66054 2.14387 9.64272C2.17155 9.60708 2.21187 9.55593 2.2642 9.49148C2.36882 9.36263 2.52164 9.18037 2.71765 8.96248C3.10908 8.52735 3.67577 7.94678 4.37757 7.36505ZM2.5 10L2.09926 9.70099C1.96691 9.87836 1.96691 10.1216 2.09926 10.299L2.5 10ZM3.14093 10C3.22648 10.1023 3.33376 10.2272 3.4611 10.3687C3.82869 10.7774 4.36032 11.3218 5.01574 11.8651C6.34076 12.9634 8.10294 14 10 14C11.8971 14 13.6592 12.9634 14.9843 11.8651C15.6397 11.3218 16.1713 10.7774 16.5389 10.3687C16.6662 10.2272 16.7735 10.1023 16.8591 10C16.7735 9.89766 16.6662 9.77282 16.5389 9.63127C16.1713 9.22265 15.6397 8.67823 14.9843 8.13495C13.6592 7.03664 11.8971 6 10 6C8.10294 6 6.34076 7.03664 5.01574 8.13495C4.36032 8.67823 3.82869 9.22265 3.4611 9.63127C3.33376 9.77282 3.22648 9.89766 3.14093 10ZM17.5 10L17.9007 10.299C18.0331 10.1216 18.0331 9.87836 17.9007 9.70099L17.5 10ZM8.32062 8.32062C8.76602 7.87522 9.37011 7.625 10 7.625C10.6299 7.625 11.234 7.87522 11.6794 8.32062C12.1248 8.76602 12.375 9.37011 12.375 10C12.375 10.6299 12.1248 11.234 11.6794 11.6794C11.234 12.1248 10.6299 12.375 10 12.375C9.37011 12.375 8.76602 12.1248 8.32062 11.6794C7.87522 11.234 7.625 10.6299 7.625 10C7.625 9.37011 7.87522 8.76602 8.32062 8.32062ZM10 8.625C9.63533 8.625 9.28559 8.76987 9.02773 9.02773C8.76987 9.28559 8.625 9.63533 8.625 10C8.625 10.3647 8.76987 10.7144 9.02773 10.9723C9.28559 11.2301 9.63533 11.375 10 11.375C10.3647 11.375 10.7144 11.2301 10.9723 10.9723C11.2301 10.7144 11.375 10.3647 11.375 10C11.375 9.63533 11.2301 9.28559 10.9723 9.02773C10.7144 8.76987 10.3647 8.625 10 8.625Z"
                        fill="#FF3E5B"
                      />
                    </svg>
                  </span>
                  {/* edit data */}
                  {!ele.notEdit && (
                    <span
                      title="Edit Details"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setDrawerData(ele, "Edit");
                        setDrawerType("edit");
                        setIsDrawerOpen(true);
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
                          d="M15.6711 3.16368L8.82705 10.1252L8.66577 11.6604L10.1173 11.2694L16.6823 4.59169C16.6929 4.5809 16.704 4.57059 16.7156 4.56081C16.8405 4.45489 16.9587 4.23838 16.9915 3.96346C17.0237 3.6934 16.9643 3.44173 16.8333 3.2704C16.7135 3.11376 16.5112 3.01572 16.2654 3.00165C16.0231 2.98778 15.8027 3.06016 15.6711 3.16368ZM16.3226 2.00328C16.7899 2.03003 17.2926 2.22479 17.6277 2.66299C17.9515 3.08651 18.04 3.61606 17.9845 4.08179C17.9305 4.53454 17.7317 4.99982 17.3811 5.30729L10.7352 12.0673C10.6728 12.1308 10.5946 12.1764 10.5087 12.1996L8.22244 12.8154C8.06333 12.8583 7.89331 12.82 7.76793 12.7131C7.64255 12.6061 7.57791 12.4443 7.59513 12.2804L7.85077 9.84699C7.86259 9.7345 7.91219 9.62935 7.99149 9.5487L14.9766 2.44365C14.9872 2.43286 14.9983 2.42256 15.0099 2.41277C15.3677 2.1095 15.861 1.97687 16.3226 2.00328ZM2 3.28989C2 3.01374 2.22386 2.78989 2.5 2.78989H9.84439C10.1205 2.78989 10.3444 3.01374 10.3444 3.28989C10.3444 3.56603 10.1205 3.78989 9.84439 3.78989H3V17H15.9703V10.0683C15.9703 9.79212 16.1942 9.56826 16.4703 9.56826C16.7464 9.56826 16.9703 9.79212 16.9703 10.0683V17.5C16.9703 17.7761 16.7464 18 16.4703 18H2.5C2.22386 18 2 17.7761 2 17.5V3.28989Z"
                          fill="#FF3E5B"
                        />
                      </svg>
                    </span>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
}

export default Index;

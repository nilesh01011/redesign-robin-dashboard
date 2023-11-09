import React, { useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";

function TableRedevelop({
  tableHead,
  tableBody,
  inputFields,
  // searchDropdownText,
  emptyTableData,
  setDrawerData,
  setDrawerType,
  setIsDrawerOpen,
}) {
  const theme = useSelector((state) => state.theme);
  // const [tabelScrollbar, setTabelScrollbar] = useState(false);
  const [textTrucat, setTextTrucat] = useState(false);

  const filterData = tableBody.filter((item) => {
    return inputFields.toLowerCase() === ""
      ? item
      : item.one.includes(inputFields) ||
          item.two.toLowerCase().includes(inputFields) ||
          item.three.includes(inputFields) ||
          item.four.includes(inputFields);
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
    <div className="tableRedevelopContainer">
      {/* table head */}
      <div
        className="tableRedevelopHead"
        style={{ backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C" }}
      >
        {tableHead.map((ele) => (
          <div className="tableHeadItems" key={ele.key}>
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
                  d="M10.898 5.20963L9.02486 3.24954L7.88115 2.04661C7.39683 1.5398 6.60907 1.5398 6.12475 2.04661L3.10209 5.20963C2.7053 5.62485 2.99122 6.33317 3.54557 6.33317L6.81914 6.33317L10.4545 6.33317C11.0147 6.33317 11.2948 5.62485 10.898 5.20963Z"
                  fill="#B5B5B6"
                />
                <path
                  d="M7.88054 12.9531L9.02965 11.7501L10.9021 9.79005C11.2929 9.37482 11.0129 8.6665 10.4529 8.6665L6.81892 8.6665L3.54657 8.6665C2.9866 8.6665 2.70661 9.37482 3.10326 9.79005L6.12479 12.9531C6.6031 13.4599 7.39639 13.4599 7.88054 12.9531Z"
                  fill="#B5B5B6"
                />
              </svg>
            </span>
          </div>
        ))}
      </div>
      {/* table body */}
      <div className="tableRedevelopBody">
     
      </div>
    </div>
  );
}

export default TableRedevelop;

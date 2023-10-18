import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import InputField from "../inputField";

let useClickOutSide = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    if (!domNode.current) {
      return;
    }
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

function Index({
  customersList,
  setInputFields,
  inputFields,
  setSelectedDropdownFilterText,
  selectDropdownFilterText,
}) {
  const theme = useSelector((state) => state.theme);
  const [selected, setSelected] = useState("");
  const [error, setError] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (!selected) {
      return setSelected(customersList[0].name);
    } else {
      setSelected(selected);
    }

    if (selectDropdownFilterText === "") {
      setSelectedDropdownFilterText(customersList[0].search);
    }
  }, [selected, setSelected]);

  const handleSubmitFilter = (e) => {
    e.preventDefault();
    setError(false);
    if (!selected) {
      setError(true);
    }
    // console.log(selected);
  };

  // dropdown
  const selectBoxText = (ele) => {
    // setSelected(ele.target.innerHTML);
    setSelected(ele.name);
    setIsDropdownOpen(!isDropdownOpen);
    setError(false);

    // dropdown text number
    setSelectedDropdownFilterText(ele.search);
  };

  let domNode = useClickOutSide(() => {
    setIsDropdownOpen(false);
  });

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

  return (
    <form
      action="POST"
      onSubmit={handleSubmitFilter}
      className="selectDropdownFilter"
      style={{ marginBottom: error && "10px" }}
      ref={domNode}
    >
      <div
        className="selectDropdownFilterContainer"
        style={{
          backgroundColor: theme === "light" ? "white" : "#0B0B0C",
          borderColor: isDropdownOpen
            ? theme === "light"
              ? "black"
              : "white"
            : error
            ? "#ED302D"
            : theme === "light"
            ? "#B5B5B6"
            : "#232324",
        }}
      >
        {/* dropdown list */}
        <div
          style={{
            width: "auto",
            position: "absolute",
            left: 8,
            top: 6,
            bottom: 6,
          }}
        >
          <div className="selectOption">
            <div
              style={{
                height: "100%",
                borderColor: theme === "light" ? "#DEDEDE" : "#232324",
                backgroundColor: theme === "light" ? "#E6E6E6" : "#232324",
              }}
              className="selectOptionContainer"
            >
              {/* select fields */}
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="selectOptionFields"
              >
                <p
                  style={{ color: theme === "light" ? "black" : "#A3A3A3" }}
                  className="selectFields desktopView"
                >
                  {!selected
                    ? wordSlice(customersList[0].name)
                    : wordSlice(selected)}
                </p>

                <p
                  style={{ color: theme === "light" ? "black" : "#A3A3A3" }}
                  className="selectFields mobileView"
                >
                  {!selected
                    ? wordSlice_2(customersList[0].name)
                    : wordSlice_2(selected)}
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
                    width="16"
                    height="10"
                    viewBox="0 0 16 11"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.058 0.571661C15.2393 0.741639 15.2485 1.02642 15.0785 1.20773L8.32849 8.40773C8.24342 8.49847 8.12458 8.54995 8.00019 8.54995C7.87581 8.54995 7.75697 8.49847 7.6719 8.40773L0.921904 1.20773C0.751924 1.02641 0.761111 0.741639 0.942422 0.57166C1.12373 0.401682 1.40851 0.410868 1.57849 0.592179L8.00019 7.442L14.4219 0.592179C14.5919 0.410869 14.8767 0.401682 15.058 0.571661Z"
                      fill="#ED302D"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* inputs */}
        <div className="inputFieldsContainer">
          <InputField
            placeholder="Search"
            // type={selected === "Customer Name" ? "text" : "number"}
            type="search"
            paddingLeft="175px"
            paddingRight="25px"
            setInputFields={setInputFields}
            inputFields={inputFields}
          />
        </div>

        {/* search buttons */}
        <button type="submit" className="btn">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.43469 0.400024C3.9972 0.400024 0.399902 3.99732 0.399902 8.43481C0.399902 12.8723 3.9972 16.4696 8.43469 16.4696C10.4375 16.4696 12.2691 15.7368 13.6761 14.5248L18.5756 19.4243C18.8099 19.6586 19.1898 19.6586 19.4242 19.4243C19.6585 19.19 19.6585 18.8101 19.4242 18.5758L14.5246 13.6762C15.7367 12.2692 16.4695 10.4376 16.4695 8.43481C16.4695 3.99732 12.8722 0.400024 8.43469 0.400024ZM1.5999 8.43481C1.5999 4.66006 4.65994 1.60002 8.43469 1.60002C12.2094 1.60002 15.2695 4.66006 15.2695 8.43481C15.2695 12.2096 12.2094 15.2696 8.43469 15.2696C4.65994 15.2696 1.5999 12.2096 1.5999 8.43481Z"
              fill={`#FF3E5B`}
            />
          </svg>
        </button>
      </div>
      {error && <span className="error">This field is required</span>}

      {/* dropdown menu items */}
      {/* all lists items */}
      {isDropdownOpen && (
        <ul
          style={{
            position: "absolute",
            top: "calc(100% + 10px)",
            left: 0,
            right: 0,
            backgroundColor: theme === "light" ? "white" : "#1C1C1C",
          }}
          className="allListItems"
        >
          {customersList.map((ele, id) => {
            return (
              <li
                key={id}
                onClick={() => selectBoxText(ele)}
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
    </form>
  );
}

export default Index;

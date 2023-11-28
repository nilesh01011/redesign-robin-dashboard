import React, { useEffect, useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import GridContent from "../gridContent/GridContent";
import Checkbox from "../../../checkboxCustomerMaster/Checkbox";

function AccordionGridForm({
  data,
  type,
  id,
  indicator,
  setIndicator,
  drawerType,
  addressType,
  checked,
  mainData,
  showSubmitResetBtn,
  showBtns,
}) {
  const theme = useSelector((state) => state.theme);
  const [accordionCollapsed, setAccordionCollapsed] = useState(false);

  const [types, setTypes] = useState("");

  // const [indicator, setIndicator] = useState(0);

  // console.log(showBtns);

  const handleChecked = (id) => {
    checked = !checked;
    setIndicator(id);
    // console.log("Id:",id)
    // console.log("Checked:",checked)
  };

  useEffect(() => {
    data.contents.map((ele) => {
      setTypes(ele.type);
    });
  }, [data]);

  return (
    <div
      className="accordionGridForm accordionContainer"
      style={{
        backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
        border: `1px solid ${theme === "light" ? "#E6E6E6" : "#232324"}`,
        boxShadow:
          type === "accordionTwo"
            ? theme === "light"
              ? "0px 1px 1px 0px rgba(0, 0, 0, 0.15)"
              : "0px 1px 1px 0px rgba(255, 255, 255, 0.15)"
            : "",
      }}
    >
      <div className="accordionHeader">
        <span style={{ fontSize: 16, fontWeight: 700 }}>{data.title}</span>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {mainData.checkedBox && type === "accordionTwo" && (
            <div className="markDefault">
              <Checkbox
                label="Mark As Default"
                indicator={indicator}
                setIndicator={setIndicator}
                id={id}
                dataId={mainData}
                checked={checked}
                handleChecked={handleChecked}
                // disabled={id}
                drawerType={drawerType}
              />
              {/* {console.log(id)} */}
              <div
                className="divider"
                style={{
                  backgroundColor: theme === "light" ? "#858585" : "#858585",
                }}
              />

              <span style={{ fontSize: 14, color: "#858585" }}>
                {addressType}
              </span>
            </div>
          )}
          {/* icons */}
          <span
            onClick={() => setAccordionCollapsed(!accordionCollapsed)}
            style={{ cursor: "pointer" }}
          >
            {accordionCollapsed ? (
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
                  d="M19.2002 11.9999C19.2002 12.3313 18.9316 12.5999 18.6002 12.5999L5.4002 12.5999C5.06882 12.5999 4.80019 12.3313 4.80019 11.9999C4.80019 11.6685 5.06882 11.3999 5.4002 11.3999L18.6002 11.3999C18.9316 11.3999 19.2002 11.6685 19.2002 11.9999Z"
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
                  d="M12 3C12.3107 3 12.5625 3.25184 12.5625 3.5625V11.4375H20.4375C20.7482 11.4375 21 11.6893 21 12C21 12.3107 20.7482 12.5625 20.4375 12.5625H12.5625V20.4375C12.5625 20.7482 12.3107 21 12 21C11.6893 21 11.4375 20.7482 11.4375 20.4375L11.4375 12.5625H3.5625C3.25184 12.5625 3 12.3107 3 12C3 11.6893 3.25184 11.4375 3.5625 11.4375H11.4375L11.4375 3.5625C11.4375 3.25184 11.6893 3 12 3Z"
                  fill="#FF3E5B"
                />
              </svg>
            )}
          </span>
        </div>
      </div>

      {/* contents */}
      {accordionCollapsed && (
        <div
          className={`${data.type}`}
          //   style={{
          //     borderTop: `1px solid ${theme === "light" ? "#e6e6e6" : "#232324"}`,
          //     paddingTop: "20px",
          //   }}
        >
          {data.contents.map((ele, index) => {
            if (ele.type === "form") {
              return (
                <div key={index} className="formContainer">
                  {ele.contents.map((el, index) => (
                    <div
                      key={index}
                      className="formProfile"
                      style={{
                        borderColor: theme === "light" ? "#B5B5B5" : "#545454",
                      }}
                    >
                      <div className="formHeader">
                        <span style={{ width: 40, height: 40 }}>
                          {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="56"
                            height="57"
                            viewBox="0 0 56 57"
                            fill="none"
                          >
                            <g filter="url(#filter0_d_5444_173739)">
                              <circle cx="28" cy="24.5" r="20" fill="#70C922" />
                            </g>
                            <path
                              d="M36.8881 17.835L24.6659 30.0572L19.1104 24.5016"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <defs>
                              <filter
                                id="filter0_d_5444_173739"
                                x="0"
                                y="0.5"
                                width="56"
                                height="56"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                              >
                                <feFlood
                                  flood-opacity="0"
                                  result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  result="hardAlpha"
                                />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="4" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 0.129412 0 0 0 0 0.129412 0 0 0 0 0.129412 0 0 0 0.1 0"
                                />
                                <feBlend
                                  mode="normal"
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_5444_173739"
                                />
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_5444_173739"
                                  result="shape"
                                />
                              </filter>
                            </defs>
                          </svg> */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="currentWidth"
                            height="currentHeight"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle cx="12" cy="12" r="12" fill="#70C922" />
                            <path
                              d="M17.3333 8L10 15.3333L6.66667 12"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <p>
                          <span style={{ fontSize: 14, fontWeight: 500 }}>
                            {drawerType === "edit"
                              ? "Upload Successful"
                              : "Contact Profile Image"}
                          </span>
                          <span style={{ fontSize: 12, fontWeight: 500 }}>
                            {el.text}
                          </span>
                        </p>
                      </div>
                      <img src={el.userImg} alt="user-profile" />
                    </div>
                  ))}
                </div>
              );
            }

            if (ele.type === "gridContents") {
              return (
                <div key={index}>
                  <div className={`accordionContents gridContents ${types}`}>
                    {ele.contents.map((el, index) => {
                      return (
                        <GridContent
                          data={el}
                          key={index}
                          //   type={el.type}
                        />
                      );
                    })}
                  </div>
                  {/* button form */}
                  {showSubmitResetBtn && (
                    <div className="submitForm">
                      <button type="button" className="primary btn">
                        Save
                      </button>
                      <button type="button" className="secondary btn">
                        Reset
                      </button>
                    </div>
                  )}
                </div>
              );
            }

            // flexColumnData
            if (ele.type === "flexColumnData") {
              return ele.contents.map((el, index) => (
                <>
                  <div key={index} className="remarkDescription">
                    <p>
                      <span
                        style={{
                          color: theme === "light" ? "#858585" : "#B5B5B6",
                          fontWeight: 400,
                        }}
                      >
                        {el.title}
                      </span>

                      {drawerType === "edit" ? (
                        <textarea
                          placeholder="Enter remark"
                          style={{
                            backgroundColor:
                              theme === "light" ? "#FFFFFF" : "#0B0B0C",
                            borderColor:
                              theme === "light" ? "#B5B5B6" : "#545454",
                          }}
                        ></textarea>
                      ) : (
                        <span
                          style={{
                            color: theme === "light" ? "#0B0B0C" : "#ffffff",
                            fontWeight: 500,
                          }}
                        >
                          {el.text}
                        </span>
                      )}
                    </p>
                  </div>

                  {showBtns && (
                    <div className="submitForm">
                      <button type="button" className="primary btn">
                        Save
                      </button>
                      <button type="button" className="secondary btn">
                        Reset
                      </button>
                    </div>
                  )}
                </>
              ));
            }
          })}
        </div>
      )}
    </div>
  );
}

export default AccordionGridForm;

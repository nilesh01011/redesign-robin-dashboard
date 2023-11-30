import React, { useState } from "react";
import { useSelector } from "react-redux";
import GridAndAccordion from "./components/gridAndAccordion/GridAndAccordion";
// import GridContent from "../components/gridContent/GridContent";
import AccordionGridForm from "../components/accordionGridForm/AccordionGridForm";
import Accordion from "../components/accordion/Accordion";
import NormalData from "../components/normalData/NormalData";
import FormContainer from "../components/formContainer/FormContainer";
// import InputText from "../components/gridContent/inputText/InputText";
import Dropdown from "../../../../../components/dropdown";
import InputText from "../../../../../components/InputText/InputText";
// import DropdownCommon from "./components/dropdown/DropdownCommon";
// import Dropdown from "../components/gridContent/dropdown/Dropdown";
import "./styles.scss"

function IndividualDrawerData({
  individualTabsList,
  drawerType,
  currentTabsTitle,
}) {
  const theme = useSelector((state) => state.theme);
  const [indicator, setIndicator] = useState(0);

  const documentTypes = [
    {
      name: ".pdf",
    },
    {
      name: ".jpg",
    },
    {
      name: ".png",
    },
  ];
  return (
    <>
      {individualTabsList?.map((ele, index) => {
        if (ele.name === currentTabsTitle) {
          return (
            <div
              key={index}
              className={`detailsContainer ${ele.type} ${ele.default}`}
              style={{
                paddingBottom: ele.type === "accordion" && 120,
                paddingBottom: ele.default === "accordionTwo" && 0,
                // padding: ele.type === "gridAndAccordion" && "20px 30px",
                backgroundColor:
                  ele.type === "gridAndAccordion"
                    ? theme === "light"
                      ? "#F2F2F2"
                      : "#1C1C1C"
                    : ele.default === "accordionTwo"
                    ? theme === "light"
                      ? "#F2F2F2"
                      : "#1C1C1C"
                    : "",
                borderRadius: ele.default === "accordionTwo" ? 8 : 4,
              }}
            >
              {ele.type === "gridAndAccordion" &&
                ele.contents.map((el, index) => {
                  return (
                    <GridAndAccordion
                      key={index}
                      data={el}
                      drawerType={drawerType}
                    />
                  );
                })}

              {ele.default === "accordionTwo" && (
                <div className="headerAccordion">
                  <h3 style={{ fontSize: 16, fontWeight: 700 }}>{ele.title}</h3>
                  <div
                    className="divider"
                    style={{
                      backgroundColor:
                        theme === "light" ? "#E6E6E6" : "#232324",
                      marginTop: 20,
                    }}
                  ></div>
                </div>
              )}

              {ele.type === "accordion" &&
                ele.contents.map((el, index) => {
                  if (el.type === "accordionGridForm") {
                    // console.log(el. showSubmitResetBtns)
                    return (
                      <AccordionGridForm
                        key={index}
                        data={el}
                        mainData={ele}
                        type={ele.default}
                        addressType={el.addressType}
                        drawerType={drawerType}
                        checked={el.checked}
                        id={index}
                        // id={ele.key}
                        indicator={indicator}
                        setIndicator={setIndicator}
                        showSubmitResetBtn={el.showSubmitResetBtn}
                        showBtns={el.showSubmitResetBtns}
                      />
                    );
                  } else {
                    return (
                      <Accordion
                        key={index}
                        addressType={el.addressType}
                        checked={el.checked}
                        id={index}
                        drawerType={drawerType}
                        indicator={indicator}
                        setIndicator={setIndicator}
                        data={el}
                        type={ele.default}
                      />
                    );
                  }
                })}

              {ele.type === "normalData" &&
                ele.contents.map((el, index) => {
                  return (
                    <NormalData key={index} data={el} drawerType={drawerType} />
                  );
                })}

              {ele.type === "form" && (
                <div
                  className="formContainer"
                  style={{
                    backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
                  }}
                >
                  {drawerType === "edit" ? (
                    <div className="formDataContainer">
                      {/* documents attachs */}
                      <div className="document_attachs">
                        {/* document types */}
                        <div className="document document_types">
                          <span
                            className="subText"
                            style={{
                              color: theme === "light" ? "#545454" : "#B5B5B6",
                            }}
                          >
                            Document Type
                          </span>
                          {/* dropdown fields */}
                          <Dropdown items={documentTypes} />
                          {/* <DropdownCommon items={documentTypes} /> */}
                        </div>
                        {/* document description */}
                        <div className="document document_description">
                          <span
                            className="subText"
                            style={{
                              color: theme === "light" ? "#545454" : "#B5B5B6",
                            }}
                          >
                            Document Description
                          </span>
                          {/* input fields */}
                          <InputText
                            types="input"
                            placeholder="File Description"
                            inputTypes="text"
                            text=""
                          />
                        </div>
                        <div></div>
                      </div>
                      {/* form uploads */}
                      <div
                        className="formUpload"
                        style={{
                          borderColor:
                            theme === "light" ? "#B5B5B6" : "#545454",
                        }}
                      >
                        <div
                          className="formUploadDiv"
                          style={{
                            borderColor:
                              theme === "light" ? "#B5B5B6" : "#545454",
                          }}
                        >
                          {/* icons */}
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="80"
                              height="80"
                              viewBox="0 0 80 80"
                              fill="none"
                            >
                              <path
                                d="M73.3337 39.9999H53.3337L46.667 49.9999H33.3337L26.667 39.9999H6.66699"
                                stroke="#B5B5B6"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M18.167 17.0333L6.66699 40V60C6.66699 61.7681 7.36937 63.4638 8.61961 64.714C9.86986 65.9643 11.5655 66.6666 13.3337 66.6666H66.667C68.4351 66.6666 70.1308 65.9643 71.381 64.714C72.6313 63.4638 73.3337 61.7681 73.3337 60V40L61.8337 17.0333C61.2817 15.9226 60.4309 14.9879 59.3768 14.3342C58.3228 13.6806 57.1073 13.334 55.867 13.3333H24.1337C22.8934 13.334 21.6779 13.6806 20.6238 14.3342C19.5697 14.9879 18.7189 15.9226 18.167 17.0333V17.0333Z"
                                stroke="#B5B5B6"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>

                          {/* text */}
                          <span>Click or drop your file here</span>

                          {/* sub text */}
                          <span
                            className="subText"
                            style={{
                              color: theme === "light" ? "#545454" : "#545454",
                            }}
                          >
                            to upload the signed and scanned customer form.
                            <br /> (File type should be png, jpg or pdf and max
                            file size to be 5Mb)
                          </span>

                          {/* button */}
                          <button type="button" className="addbutton">
                            upload file
                          </button>
                        </div>
                      </div>
                      {/* rest form data */}
                      {ele.contents.map((el, index) => (
                        <FormContainer
                          key={index}
                          data={el}
                          drawerType={drawerType}
                        />
                      ))}
                    </div>
                  ) : (
                    <>
                      {ele.contents.map((el, index) => (
                        <FormContainer
                          key={index}
                          data={el}
                          drawerType={drawerType}
                        />
                      ))}
                    </>
                  )}
                </div>
              )}
            </div>
          );
        }
      })}
    </>
  );
}

export default IndividualDrawerData;

import React, { useMemo, useState } from "react";
import GridContent from "../components/gridContent/GridContent";
import AccordionGridForm from "../components/accordionGridForm/AccordionGridForm";
import Accordion from "../components/accordion/Accordion";
import NormalData from "../components/normalData/NormalData";
import FormContainer from "../components/formContainer/FormContainer";
import { useSelector } from "react-redux";

function FirmAndCorporate({ tabsList, drawerType, currentTabsTitle }) {
  const theme = useSelector((state) => state.theme);
  const [indicator, setIndicator] = useState(0);
  return (
    <>
      {tabsList?.map((ele, index) => {
        if (ele.name === currentTabsTitle) {
          return (
            <div
              key={index}
              className={`detailsContainer ${ele.type} ${ele.default}`}
              style={{
                paddingBottom: ele.type === "accordion" && 120,
                paddingBottom: ele.default === "accordionTwo" && 0,
                backgroundColor:
                  ele.default === "accordionTwo"
                    ? theme === "light"
                      ? "#F2F2F2"
                      : "#1C1C1C"
                    : "",
              }}
            >
              {ele.type === "gridContents" &&
                ele.contents.map((el, index) => {
                  return <GridContent key={index} data={el} />;
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
                    return (
                      <AccordionGridForm
                        key={index}
                        data={el}
                        type={ele.default}
                        addressType={el.addressType}
                        drawerType={drawerType}
                        checked={el.checked}
                        id={index}
                        indicator={indicator}
                        setIndicator={setIndicator}
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
                  {ele.contents.map((el, index) => (
                    <FormContainer
                      key={index}
                      data={el}
                      drawerType={drawerType}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        }
      })}
    </>
  );
}

export default FirmAndCorporate;

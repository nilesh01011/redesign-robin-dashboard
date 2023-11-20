import React, { useState } from "react";
import { useSelector } from "react-redux";
import GridAndAccordion from "./components/gridAndAccordion/GridAndAccordion";
// import GridContent from "../components/gridContent/GridContent";
import AccordionGridForm from "../components/accordionGridForm/AccordionGridForm";
import Accordion from "../components/accordion/Accordion";

function IndividualDrawerData({
  individualTabsList,
  drawerType,
  currentTabsTitle,
}) {
  const theme = useSelector((state) => state.theme);
  const [indicator, setIndicator] = useState(0);
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
                padding: ele.type === "gridAndAccordion" && "20px 30px",
                backgroundColor:
                  ele.type === "gridAndAccordion"
                    ? theme === "light"
                      ? "#F2F2F2"
                      : "#1C1C1C"
                    : ele.default === "accordionTwo" ? theme === "light" ? "#F2F2F2" : "#1C1C1C" : "",
              }}
            >
              {ele.type === "gridAndAccordion" &&
                ele.contents.map((el, index) => {
                  return <GridAndAccordion key={index} data={el} />;
                })}

              {ele.default === "accordionTwo" && (
                <div className="headerAccordion">
                  {console.log(ele)}
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

              {/* {ele.type === "normalData" &&
            ele.contents.map((el, index) => {
              return (
                <NormalData key={index} data={el} drawerType={drawerType} />
              );
            })} */}

              {/* {ele.type === "form" && (
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
          )} */}
            </div>
          );
        }
      })}
    </>
  );
}

export default IndividualDrawerData;

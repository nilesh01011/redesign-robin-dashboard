import React, { useState } from "react";
import { useSelector } from "react-redux";
import GridContent from "../../../components/gridContent/GridContent";
import "./styles.scss";
import Accordion from "../accordion/Accordion";
import SwitchButton from "./switchButton/SwitchButton";
// import Dropdown from "../../../components/gridContent/dropdown/Dropdown";
import InputText from "../../../components/gridContent/inputText/InputText";
import Dropdown from "../../../../../../../components/dropdown";

function GridAndAccordion({ data, drawerType }) {
  const theme = useSelector((state) => state.theme);
  return (
    <div className={`${data.type}`} style={{ borderRadius: 4 }}>
      {data.type === "gridContents" &&
        data.contents.map((ele, index) => {
          return <GridContent allData={ele} data={ele} key={index} drawerType={drawerType} />;
        })}

      {/* divider */}
      {data.divider && (
        <div
          className="divider"
          style={{
            backgroundColor: theme === "light" ? "#E6E6E6" : "#232324",
          }}
        />
      )}
      {/* accordion data */}
      {data.type === "customerNameAccordion" && (
        <div
          className="customerAccordion"
          style={{ borderColor: theme === "light" ? "#B5B5B6" : "#545454" }}
        >
          {/* title */}
          <h3>{data.name}</h3>
          {/* divider */}
          <div
            className="divider"
            style={{
              backgroundColor: theme === "light" ? "#E6E6E6" : "#232324",
            }}
          />
          {data.contents.map((ele, index) => {
            return (
              <Accordion
                key={index}
                data={data}
                ele={ele}
                drawerType={drawerType}
              />
            );
          })}
        </div>
      )}

      {/* whatAppsGrid */}
      {data.type === "whatAppsGrid" && (
        <div className="whatAppsGridContent">
          {data.contents.map((ele, index) => {
            if (ele.switchStatus) {
              return (
                <SwitchButton key={index} data={ele} drawerType={drawerType} />
              );
            } else {
              return (
                <div
                  key={index}
                  style={{ display: "flex", flexDirection: "column", gap: 4 }}
                >
                  <span
                    style={{ color: theme === "light" ? "#545454" : "#B5B5B6" }}
                  >
                    {ele.title}
                  </span>

                  {drawerType === "edit" ? (
                    <>
                      {ele.text && (
                        <div>
                          {ele.input && (
                            <InputText
                              types={ele.inputType}
                              placeholder={ele.placeholder}
                              data={ele}
                              inputTypes={ele.input}
                              text={ele.text}
                            />
                          )}
                          {ele.dropdownList && (
                            <Dropdown
                              items={ele.dropdownList}
                              disabled={ele.disabled}
                              data={data}
                              // width={90}
                            />
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <span>{ele.text}</span>
                  )}
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}

export default GridAndAccordion;

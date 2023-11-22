import React, { useEffect, useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import GridContent from "../gridContent/GridContent";
import Checkbox from "../../../../../../components/checkbox/Checkbox";

function NormalData({ data, drawerType }) {
  const theme = useSelector((state) => state.theme);
  const [checked, setChecked] = useState(true);

  const handleChecked = () => {
    setChecked(!checked);
  };
  return (
    <div
      className="normalDataContainer"
      style={{ backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C" }}
    >
      {data.contents.map((ele, index) => {
        if (ele.type === "gridContents") {
          return (
            <div key={index} className="gridContents">
              {ele.contents.map((el, index) => {
                // console.log(el)
                return <GridContent key={index} data={el} />;
              })}
            </div>
          );
        }
        if (ele.type === "flexColumnData") {
          return ele.contents.map((el, index) => {
            return (
              <>
                <div key={index} className="remark_vipDealer">
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
                            padding:"5px 12px",
                            borderRadius:4,
                            color:theme === "light" ? "#0B0B0C" : "#ffffff"
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
                  {/* VIP dealer check */}
                  <Checkbox
                    label="VIP Dealer"
                    drawerType={drawerType}
                    handleChecked={handleChecked}
                    checked={checked}
                  />
                </div>
              </>
            );
          });
        }
      })}
    </div>
  );
}

export default NormalData;

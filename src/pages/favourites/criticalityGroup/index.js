import React from "react";
import { useSelector } from "react-redux";
import Title from "../../../components/title";
import "./styles.scss";

function Index() {
  const theme = useSelector((state) => state.theme);
  return (
    <div className="criticalityGroup">
      {/* ============ title ============ */}
      <div
        style={{
          paddingTop: 7,
          // borderBottom: `1px solid ${
          //   theme === "light" ? "#DEDEDE" : "#635D5D"
          // }`,
          background: theme === "light" ? "white" : "#1C1C1C",
          boxShadow:
            theme === "light"
              ? "0px 1px 1px 0px rgba(0, 0, 0, 0.15)"
              : "0px 1px 1px 0px rgba(255, 255, 255, 0.15)",
        }}
        className="container-fluid"
      >
        <Title title="Application Criticality Group Master" />
      </div>
    </div>
  );
}

export default Index;

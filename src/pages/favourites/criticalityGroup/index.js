import React from "react";
import { useSelector } from "react-redux";
import Title from "../../../components/title";

function Index() {
  const theme = useSelector((state) => state.theme);
  return (
    <div className="">
      {/* ============ title ============ */}
      <div
        style={{
          // marginTop: 20,
          borderBottom: `1px solid ${
            theme === "light" ? "#DEDEDE" : "#635D5D"
          }`,
        }}
      >
        <Title title="Application Criticality Group Master" />
      </div>
    </div>
  );
}

export default Index;

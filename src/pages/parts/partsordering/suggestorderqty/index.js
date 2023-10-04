import React from "react";
import Title from "../../../../components/title";
import { useSelector } from "react-redux";

function Index() {
  const theme = useSelector((state) => state.theme);
  return (
    <div className="suggestedorder">
      {/* ============ title ============ */}
      <div
        style={{
          // marginTop: 20,
          borderBottom: `1px solid ${
            theme === "light" ? "#DEDEDE" : "#635D5D"
          }`,
        }}
      >
        <Title title="Suggested Order Qty. (SOQ)" />
      </div>
      {/* =============== Content ================ */}
    </div>
  );
}

export default Index;

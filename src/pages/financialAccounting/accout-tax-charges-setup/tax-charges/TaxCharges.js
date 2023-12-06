import React from "react";
import Title from "../../../../components/title";
import { useSelector } from "react-redux";

function TaxCharges() {
  const theme = useSelector((state) => state.theme);
  return (
    <div>
      {/* ============ title ============ */}
      <div
        style={{
          background: theme === "light" ? "white" : "#1C1C1C",
          boxShadow:
            theme === "light"
              ? "0px 1px 1px 0px rgba(0, 0, 0, 0.15)"
              : "0px 1px 1px 0px rgba(255, 255, 255, 0.15)",
        }}
        className="container-fluid titleContainer"
      >
        <Title title="Tax Charges" />
      </div>
    </div>
  );
}

export default TaxCharges;

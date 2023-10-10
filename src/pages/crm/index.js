import React from "react";
import { useSelector } from "react-redux";
import "./styles.scss";
import Title from "../../components/title";

function Index() {
  const theme = useSelector((state) => state.theme);
  return (
    <div className="crm container-fluid">
      {/* ============ title ============ */}
      <div
        style={{
          marginTop: 20,
          borderBottom: `1px solid ${
            theme === "light" ? "#DEDEDE" : "#635D5D"
          }`,
        }}
      >
        <Title title="CRM" />
      </div>
    </div>
  );
}

export default Index;

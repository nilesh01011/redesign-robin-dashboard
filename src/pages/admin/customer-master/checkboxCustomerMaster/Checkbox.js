import React, { useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";

function Checkbox({
  label,
  indicator,
  id,
  handleChecked,
  drawerType,
}) {
  const theme = useSelector((state) => state.theme);

  return (
    <div
      className="checkboxLabel"
      style={{ cursor: drawerType === "view" ? "not-allowed" : "pointer" }}
      onClick={() => drawerType === "edit" && handleChecked(id)}
    >
      <span style={{ borderColor: theme === "light" ? "#B5B5B6" : "#545454" }}>
        {indicator === id ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
          >
            <path
              d="M3.078 7.15333C2.9091 7.15408 2.74672 7.0882 2.62608 6.97L0.517747 4.86166C0.450577 4.80414 0.396021 4.73335 0.357506 4.65374C0.318991 4.57414 0.297349 4.48743 0.293935 4.39906C0.290522 4.31069 0.305412 4.22256 0.337671 4.14022C0.369931 4.05788 0.418863 3.9831 0.481396 3.92056C0.54393 3.85803 0.618715 3.8091 0.701057 3.77684C0.783399 3.74458 0.87152 3.72969 0.95989 3.7331C1.04826 3.73651 1.13497 3.75816 1.21458 3.79667C1.29419 3.83519 1.36497 3.88974 1.4225 3.95691L3.067 5.60141L7.99041 0.74308C8.04958 0.683242 8.12003 0.635737 8.19768 0.603315C8.27533 0.570893 8.35864 0.554199 8.44279 0.554199C8.52694 0.554199 8.61025 0.570893 8.6879 0.603315C8.76555 0.635737 8.836 0.683242 8.89516 0.74308C9.01468 0.863304 9.08176 1.02594 9.08176 1.19545C9.08176 1.36497 9.01468 1.52761 8.89516 1.64783L3.51983 6.959C3.46336 7.01985 3.39502 7.06848 3.31903 7.10191C3.24304 7.13533 3.16101 7.15283 3.078 7.15333Z"
              fill={
                drawerType === "view"
                  ? theme === "light"
                    ? "#b5b5b6"
                    : "#545454"
                  : "#FF3E5B"
              }
            />
          </svg>
        ) : (
          ""
        )}
      </span>
      {label}
    </div>
  );
}

export default Checkbox;

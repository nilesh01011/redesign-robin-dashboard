import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./styles.scss";

function Index({
  type,
  placeholder,
  paddingLeft,
  paddingRight,
  onChange,
  value,
  onBlur,
  name,
  showPassword,
  inputFields,
  setInputFields
}) {
  const theme = useSelector((state) => state.theme);

  // handle search inputs cancle btn
  const handleCancle = () => {
    setInputFields("");
  };

  return (
    <>
      <input
        name={name}
        type={showPassword && showPassword ? "text" : type}
        placeholder={placeholder}
        className="inputFields"
        style={{
          paddingLeft: paddingLeft && paddingLeft,
          paddingRight: paddingRight && paddingRight,
          color: theme === "light" ? "" : "white",
        }}
        value={type === "search" ? inputFields : value}
        onChange={
          type === "search" ? (e) => setInputFields(e.target.value) : onChange
        }
        autoComplete="off"
        onBlur={onBlur && onBlur}
      />

      {type === "search" && (
        <svg
          role="presentation"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          onClick={handleCancle}
        >
          <circle cx="6" cy="6.00098" r="6" fill="#0B0B0C" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.79465 3.13888C9.055 3.39923 9.01279 3.86356 8.70037 4.17597L4.17488 8.70146C3.86246 9.01388 3.39814 9.05609 3.13779 8.79574C2.87744 8.53539 2.91965 8.07107 3.23207 7.75865L7.75756 3.23317C8.06998 2.92075 8.5343 2.87854 8.79465 3.13888Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.18582 3.13888C3.44617 2.87854 3.91049 2.92075 4.22291 3.23317L8.7484 7.75865C9.06081 8.07107 9.10303 8.53539 8.84268 8.79574C8.58233 9.05609 8.11801 9.01388 7.80559 8.70146L3.2801 4.17597C2.96768 3.86356 2.92547 3.39923 3.18582 3.13888Z"
            fill="white"
          />
        </svg>
      )}
    </>
  );
}

export default Index;

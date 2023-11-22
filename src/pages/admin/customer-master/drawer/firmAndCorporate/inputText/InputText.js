import React, { useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";

function InputText({ data, types, placeholder, inputTypes, text }) {
  const [inputText, setInputText] = useState(text ? text : "");
  const [edit, setEdit] = useState(false);
  const theme = useSelector((state) => state.theme);

  const handleChanged = (e) => {
    // console.log(edit)
    // if (edit === false && types === "phoneNumber") {
    // //   setInputText(e.target.value);
    // setInputText(text);
    // // console.log("not changed");
    // }

    setInputText(e.target.value);
  };

  console.log(inputTypes)
  return (
    <div
      className="inputFormText"
      style={{
        backgroundColor:
          types === "disabled"
            ? theme === "light"
              ? "#E6E6E6"
              : "#232324"
            : theme === "light"
            ? "#FFFFFF"
            : "#0B0B0C",
        borderColor: theme === "light" ? "#B5B5B6" : "#545454",
      }}
    >
      <input
        type={inputTypes}
        maxLength={inputTypes === "tel" ? 10 : null}
        value={inputText}
        onChange={(e) =>
          //    setInputText(e.target.value)
          handleChanged(e)
        }
        placeholder={placeholder}
        style={{
          color:
            types === "disabled"
              ? theme === "light"
                ? "#858585"
                : "#545454"
              : theme === "light"
              ? "#0B0B0C"
              : "#ffffff",
          paddingLeft: types === "phoneNumber" && 79,
        }}
        disabled={types === "disabled" && true}
      />
    </div>
  );
}

export default InputText;

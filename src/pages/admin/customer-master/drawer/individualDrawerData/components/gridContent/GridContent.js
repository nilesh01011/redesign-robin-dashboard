import React from "react";
import { useSelector } from "react-redux";
import "./styles.scss";
// import InputText from "../../../components/gridContent/inputText/InputText";
import Dropdown from "../../../../../../../components/dropdown";
import InputText from "../../../../../../../components/InputText/InputText";
// import Dropdown from "./dropdown/Dropdown";

function GridContent({ data, drawerType }) {
  const theme = useSelector((state) => state.theme); 
  return (
    <div className="content">
      <span
        style={{
          color: theme === "light" ? "#545454" : "#B5B5B6",
        }}
      >
        {data.title}
      </span>

      {/* text */}

      {drawerType === "edit" ? (
        <>
          {data.text && (
            <div>
              {data.input && (
                <InputText
                  types={data.inputType}
                  placeholder={data.placeholder}
                  data={data}
                  inputTypes={data.input}
                  text={data.text}
                />
              )}
              {data.dropdownList && (
                <Dropdown items={data.dropdownList} disabled={data.disabled} width={90} data={data} />
              )}
            </div>
          )}
        </>
      ) : (
        <span>{data.text}</span>
      )}
    </div>
  );
}

export default GridContent;

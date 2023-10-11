import React, { useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";

function ActionItemsCollapsed({
  items,
  setIsDrawerOpen,
  setDrawerSliderID,
  setDrawerType,
}) {
  const theme = useSelector((state) => state.theme);

  const borderColor = theme === "light" ? "#E6E6E6" : "#232324";

  const handleDrawerOpen = (items) => {
    setIsDrawerOpen(true);
    setDrawerSliderID(items.id);
    setDrawerType("Action Items");
    document.body.style.overflow = "hidden";
  };

  return (
    <div
      key={items.id}
      className="actionItems"
      style={{ borderColor: borderColor }}
    >
      {/* heading */}
      <div
        className={`actionItems_heading`}
        onClick={() => handleDrawerOpen(items)}
      >
        {/* left side */}
        <div className="leftSide">
          <p>{items.text}</p>
        </div>
        {/* right side */}
        <div className="rightSide">
          <span className="labels">{items.count}</span>
        </div>
      </div>
    </div>
  );
}

export default ActionItemsCollapsed;

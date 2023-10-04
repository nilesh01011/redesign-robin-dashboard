import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";

function LatestNews({
  items,
  setNewsDrawerID,
  setIsNewsDrawerOpen,
  isNewsDrawerOpen,
}) {
  const theme = useSelector((state) => state.theme);

  const handleDrawer = (id) => {
    setNewsDrawerID(id);
    setIsNewsDrawerOpen(!isNewsDrawerOpen);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="latestNews" onClick={() => handleDrawer(items.id)}>
      {/* text */}
      <div className="text">
        <h5>{items.title}</h5>
        <p style={{ color: "#B5B5B6", fontSize: 14 }}>{items.desc}</p>
      </div>
      {/* date */}
      <p
        className="date"
        style={{
          backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
          borderColor: theme === "light" ? "#E6E6E6" : "#635d5d",
          color: "#858585",
        }}
      >
        {items.date}
      </p>
    </div>
  );
}

export default LatestNews;

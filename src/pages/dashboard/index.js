import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import Title from "../../components/title";
import {
  actionItems,
  billingBarGraphs,
  keyHighlights,
  latestNews,
  retailBarGraphs,
  todayBirthday,
  upcomingBirthday,
} from "../../data";
// import Dropdown from "../../components/dropdown";
// import { MAHINDRA_SPONSOR_BANNER } from "../../assets";
import ActionItemsCollapsed from "./actionitems";
import Graphs from "./graphs";
import LatestNews from "./latestnews";
import Drawer from "./drawer";
import BirthdayCalendar from "./birthdaycalendar";
// import KeyHighlightsCarousel from "./keyhightlightsCarousel";
import KeyHightlightsCarousel from "./keyHightLights_Carousel/KeyHightlightsCarousel";
import BarChart from "./barChart/BarChart";

function DashboardPage() {
  const theme = useSelector((state) => state.theme);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerSliderID, setDrawerSliderID] = useState(0);
  const [drawerType, setDrawerType] = useState("");
  // const [activendex, setActiveIndex] = useState(0);

  // const [currentIndex, setCurrentIndex] = useState(1);

  const handleDrawerClosed = () => {
    setIsDrawerOpen(!isDrawerOpen);
    document.body.style.overflow = "auto";
  };
  // const updateIndex = (newIndex) => {
  //   if (newIndex < 0) {
  //     newIndex = 0;
  //   } else if (newIndex >= keyHighlights.length) {
  //     newIndex = keyHighlights.length - 1;
  //   }
  //   setCurrentIndex(newIndex);
  //   setActiveIndex(newIndex);
  // };

  const borderColor = theme === "light" ? "#E6E6E6" : "#232324";

  return (
    <>
      <div className="dashboard">
        {/* ============ title ============ */}
        <div
          style={{
            paddingTop: 7,
            // borderBottom: `1px solid ${
            //   theme === "light" ? "#DEDEDE" : "#635D5D"
            // }`,
            background: theme === "light" ? "white" : "#1C1C1C",
            boxShadow:
              theme === "light"
                ? "0px 1px 1px 0px rgba(0, 0, 0, 0.15)"
                : "0px 1px 1px 0px rgba(255, 255, 255, 0.15)",
          }}
          className="container-fluid"
        >
          <Title title="Dashboard" />
        </div>
        {/* =============== Content ================ */}
        <div className="boxContainer container-fluid">
          {/* ========== New Design ========== */}

          {/* heading */}
          <div
            className="key_highlights_heading"
            style={{
              color: theme === "light" ? "black" : "white",
              backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
              borderColor: borderColor,
            }}
          >
            {/* left sides */}
            <div className="key_highlights_heading_left heading_side">
              {/* keyhightlight title */}
              <div className="title_heads">
                <h4>Key Highlights</h4>
                <p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.9283 1.94223C12.7584 1.76092 12.4736 1.75173 12.2923 1.92171L5.09228 8.67171C5.00153 8.75678 4.95005 8.87562 4.95005 9.00001C4.95005 9.12439 5.00153 9.24322 5.09228 9.3283L12.2923 16.0783C12.4736 16.2483 12.7584 16.2391 12.9283 16.0578C13.0983 15.8765 13.0891 15.5917 12.9078 15.4217L6.058 9.00001L12.9078 2.5783C13.0891 2.40832 13.0983 2.12354 12.9283 1.94223Z"
                        fill="#FF3E5B"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.07166 1.94223C5.24164 1.76092 5.52642 1.75173 5.70773 1.92171L12.9077 8.67171C12.9985 8.75678 13.05 8.87562 13.05 9.00001C13.05 9.12439 12.9985 9.24323 12.9077 9.3283L5.70773 16.0783C5.52642 16.2483 5.24164 16.2391 5.07166 16.0578C4.90168 15.8765 4.91087 15.5917 5.09218 15.4217L11.942 9.00001L5.09218 2.5783C4.91087 2.40832 4.90168 2.12354 5.07166 1.94223Z"
                        fill="#FF3E5B"
                      />
                    </svg>
                  </span>
                </p>
              </div>
              {/* divide */}
              <div
                className="divider"
                style={{
                  backgroundColor: theme === "light" ? "#B5B5B6" : "#635d5d",
                }}
              ></div>
              {/* carousel slider */}
              {/* <div
                className="key_highlights_carousel"
                style={{ transform: `translate(-${activendex * 100}%)` }}
              >
                {keyHighlights.map((ele) => (
                  <KeyHighlightsCarousel key={ele.key} data={ele} />
                ))}
              </div> */}
              <div className="heads">
                {/* label */}
                <span className="label_name">GST Update</span>
                {/* text */}
                <p className="text" style={{ color: "#FF3E5B" }}>
                  Lorem Ipsum is simply dummy text of the printing Lorem Ipsum
                  is simply dummy text of the printing
                  <span style={{ color: "#858585", marginLeft: 4 }}>
                    5min ago
                  </span>
                </p>
              </div>
            </div>
            {/* <KeyHightlightsCarousel /> */}
            {/* carousel right sides icons */}
            <div className="key_highlights_heading_right heading_side">
              <span
                style={{ cursor: "pointer" }}
                // onClick={() => updateIndex(activendex - 1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.9283 1.94223C12.7584 1.76092 12.4736 1.75173 12.2923 1.92171L5.09228 8.67171C5.00153 8.75678 4.95005 8.87562 4.95005 9.00001C4.95005 9.12439 5.00153 9.24322 5.09228 9.3283L12.2923 16.0783C12.4736 16.2483 12.7584 16.2391 12.9283 16.0578C13.0983 15.8765 13.0891 15.5917 12.9078 15.4217L6.058 9.00001L12.9078 2.5783C13.0891 2.40832 13.0983 2.12354 12.9283 1.94223Z"
                    fill="#FF3E5B"
                  />
                </svg>
              </span>
              <span
                style={{ cursor: "pointer" }}
                // onClick={() => updateIndex(activendex + 1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.07166 1.94223C5.24164 1.76092 5.52642 1.75173 5.70773 1.92171L12.9077 8.67171C12.9985 8.75678 13.05 8.87562 13.05 9.00001C13.05 9.12439 12.9985 9.24323 12.9077 9.3283L5.70773 16.0783C5.52642 16.2483 5.24164 16.2391 5.07166 16.0578C4.90168 15.8765 4.91087 15.5917 5.09218 15.4217L11.942 9.00001L5.09218 2.5783C4.91087 2.40832 4.90168 2.12354 5.07166 1.94223Z"
                    fill="#FF3E5B"
                  />
                </svg>
              </span>
            </div>
          </div>
          {/* key highlights contents */}
          <div
            className="key_highlights_container"
            style={{ backgroundColor: theme === "light" ? "white" : "" }}
          >
            {/* left side */}
            <div
              className="key_highlights_left_side box_Contents"
              style={{ borderColor: borderColor }}
            >
              {/* title */}
              <h4>Action Items</h4>
              {/* contents */}
              <div
                className={`key_hightlights_contents ${
                  theme === "light" ? "light" : "dark"
                }`}
                style={{
                  borderColor: borderColor,
                }}
              >
                {actionItems.map((ele) => {
                  return (
                    <ActionItemsCollapsed
                      key={ele.id}
                      items={ele}
                      setIsDrawerOpen={setIsDrawerOpen}
                      setDrawerSliderID={setDrawerSliderID}
                      setDrawerType={setDrawerType}
                    />
                  );
                })}
              </div>
            </div>
            {/* Ads right side */}
            <div
              className="key_highlights_right_side box_Contents"
              style={{ borderColor: borderColor }}
            >
              {/* images */}
              <div className="images">
                <img
                  src="https://auto.mahindra.com//-/media/project/mahindra/dotcom/mahindra/in-news---home/pr/neo-ambulance/bolero-neo-ambulancefor-website.jpg?rev=cab8637b0f6f4a80a53cd2a23006e0d6&extension=webp"
                  alt="Mahindra Ads"
                />
              </div>
            </div>
          </div>
          {/* dashboard API */}
          <div className="dashboard_api">
            <div className="dashboard_api_title">
              {/* title */}
              <h2>Dashboard KPI</h2>
              {/* buttons */}
              <button type="button" className="addWidgetBtn">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7 1.75C7.18122 1.75 7.32813 1.89691 7.32813 2.07812V6.67188H11.9219C12.1031 6.67188 12.25 6.81878 12.25 7C12.25 7.18122 12.1031 7.32813 11.9219 7.32813H7.32813V11.9219C7.32813 12.1031 7.18122 12.25 7 12.25C6.81878 12.25 6.67188 12.1031 6.67188 11.9219L6.67188 7.32813H2.07812C1.89691 7.32813 1.75 7.18122 1.75 7C1.75 6.81878 1.89691 6.67188 2.07812 6.67188H6.67188L6.67188 2.07812C6.67188 1.89691 6.81878 1.75 7 1.75Z"
                      fill="white"
                    />
                  </svg>
                </span>
                Add Widget
              </button>
            </div>

            {/* graphs contents */}
            <div
              className="graphs_container"
              style={{ borderColor: borderColor }}
            >
              {/* <Graphs title="Retail" /> */}
              <BarChart title="Retail" dataItems={retailBarGraphs} />
              <Graphs title="Billing" />
              {/* <Graphs title="Stock In Days" /> */}
              {/* <BarChart title="Billing" dataItems={billingBarGraphs} /> */}
              <BarChart title="Stock In Days" dataItems={billingBarGraphs} />
            </div>
          </div>
          {/* news and birthdays */}
          <div className="news_birthday">
            {/* news */}
            <div
              className={`newsContainer boxs`}
              style={{ borderColor: borderColor }}
            >
              {/* title */}
              <h4
                style={{
                  backgroundColor: theme === "light" ? "white" : "#0B0B0C",
                }}
              >
                Latest News
              </h4>
              <div
                className={`newsWrapper ${
                  theme === "light" ? "light" : "dark"
                }`}
              >
                {latestNews.map((ele) => (
                  <LatestNews
                    key={ele.id}
                    items={ele}
                    setIsDrawerOpen={setIsDrawerOpen}
                    setDrawerSliderID={setDrawerSliderID}
                    isDrawerOpen={isDrawerOpen}
                    drawerSliderID={drawerSliderID}
                    setDrawerType={setDrawerType}
                  />
                ))}
              </div>
            </div>
            {/* birthday */}
            <div
              className={`birthdaySection boxs`}
              style={{ borderColor: borderColor }}
            >
              {/* title */}
              <h4
                style={{
                  position: "sticky",
                  top: 0,
                  backgroundColor: theme === "light" ? "white" : "#0B0B0C",
                  zIndex: 3,
                }}
              >
                Birthday Calendar
              </h4>

              {/* contents */}
              <div
                className={`birthdatListWapper ${
                  theme === "light" ? "light" : "dark"
                }`}
              >
                <div className="birthdayListContainer">
                  {/* title */}
                  <h5 style={{ marginBottom: 20 }}>Today’s Birthday</h5>

                  {/* birthday username */}
                  <div className="birthdayList">
                    {todayBirthday.map((ele) => (
                      <BirthdayCalendar key={ele.id} userData={ele} />
                    ))}
                  </div>
                </div>

                <div className="birthdayListContainer">
                  {/* title */}
                  <h5 style={{ marginBottom: 20 }}>Upcoming Birthday</h5>

                  {/* birthday username */}
                  <div className="birthdayList">
                    {upcomingBirthday.map((ele) => (
                      <BirthdayCalendar key={ele.id} userData={ele} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News Drawer */}
      <Drawer
        drawerSliderID={drawerSliderID}
        isDrawerOpen={isDrawerOpen}
        drawerType={drawerType}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      {/* overlay */}
      <div
        id="newsDrawerOverlay"
        style={{ display: isDrawerOpen ? "block" : "none" }}
        onClick={() => handleDrawerClosed()}
      ></div>
    </>
  );
}

export default DashboardPage;

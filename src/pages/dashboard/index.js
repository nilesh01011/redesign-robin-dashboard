import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import Title from "../../components/title";
import {
  actionItems,
  billingBarGraphs,
  ibndstock,
  keyHighlights,
  latestNews,
  retailBarGraphs,
  todayBirthday,
  upcomingBirthday,
} from "../../data";
import ActionItemsCollapsed from "./actionitems";
import LatestNews from "./latestnews";
import Drawer from "./drawer";
import BirthdayCalendar from "./birthdaycalendar";
import DoughnutChart from "./graphs/doughnutChart/doughnutChart";
import BarChart from "./graphs/barChart/BarChart";
// Carousel
import Carousel from "./carousel/Carousel";
import Items from "./carousel/items/Items";

function DashboardPage() {
  const theme = useSelector((state) => state.theme);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerSliderID, setDrawerSliderID] = useState(0);
  const [drawerType, setDrawerType] = useState("");

  // scrollbar in action items
  const [actionItemsScrollBar, setActionItemsScrollBar] = useState(false);
  const [latestNewsScrollBar, setLatestNewsScrollBar] = useState(false);
  const [birthdayListScrollBar, setBirthdayListScrollBar] = useState(false);

  const handleDrawerClosed = () => {
    setIsDrawerOpen(!isDrawerOpen);
    document.body.style.overflow = "auto";
  };

  const borderColor = theme === "light" ? "#E6E6E6" : "#232324";

  return (
    <>
      <div className="dashboard minHeight">
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
          <Title title="Home" />
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
            <div
              className="key_highlights_heading_left heading_side"
              style={{ display: "none" }}
            >
              {/* keyhightlight title */}
              {/* <div className="title_heads"> */}
              {/* <h4>Key Highlights</h4> */}
              {/* <p>
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
                </p> */}
              {/* </div> */}
              {/* divide */}
              <div
                className="divider"
                style={{
                  backgroundColor: theme === "light" ? "#B5B5B6" : "#635d5d",
                }}
              ></div>
              {/* contents
              <div className="heads one">
                label
                <span className="label_name">GST Update</span>
                text
                <p className="text" style={{ color: "#FF3E5B" }}>
                  Lorem Ipsum is simply dummy text of the printing Lorem Ipsum
                  is simply dummy text of the printing
                  <span style={{ color: "#858585", marginLeft: 4 }}>
                    5min ago
                  </span>
                </p>
              </div>

              <div className="heads two">
                <div
                  className="headsContainer"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  label
                  <span className="label_name">GST Update</span>
                  <span style={{ color: "#858585", marginLeft: 4 }}>
                    5min ago
                  </span>
                </div>
                text
                <p className="text" style={{ color: "#FF3E5B" }}>
                  Lorem Ipsum is simply dummy text of the printing Lorem Ipsum
                  is simply dummy text of the printing
                </p>
              </div> */}
            </div>

            {/* Carousel Sections */}
            <Carousel>
              {keyHighlights.map((ele) => (
                <Items key={ele.key} data={ele} />
              ))}
            </Carousel>
            {/* Carousel Sections End */}
          </div>
          {/* action items contents */}
          <div
            className="actionItems_container"
            style={{ backgroundColor: theme === "light" ? "white" : "" }}
          >
            {/* left side */}
            <div
              className="actionItems_left_side box_Contents"
              style={{ borderColor: borderColor }}
            >
              {/* title */}
              <h4>Action Items</h4>
              {/* contents */}
              <div
                className={`actionItems_contents ${
                  theme === "light" ? "light" : "dark"
                } ${actionItemsScrollBar && "active"}`}
                style={{
                  borderColor: borderColor,
                }}
                onMouseEnter={() => setActionItemsScrollBar(true)}
                onMouseLeave={() => setActionItemsScrollBar(false)}
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
              className="actionItems_right_side box_Contents"
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
              <h2>Business KPIs</h2>
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
                Add KPI
              </button>
            </div>

            {/* graphs contents */}
            <div
              className="graphs_container"
              // style={{ borderColor: borderColor }}
            >
              <BarChart title="Retail" dataItems={retailBarGraphs} />
              <BarChart title="Billing" dataItems={billingBarGraphs} />
              <DoughnutChart title="IBND Stock" dataItems={ibndstock} />
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
                } ${latestNewsScrollBar && "active"}`}
                onMouseEnter={() => setLatestNewsScrollBar(true)}
                onMouseLeave={() => setLatestNewsScrollBar(false)}
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
                } ${birthdayListScrollBar && "active"}`}
                onMouseEnter={() => setBirthdayListScrollBar(true)}
                onMouseLeave={() => setBirthdayListScrollBar(false)}
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

      <div
        className="footer"
        style={{ backgroundColor: theme === "light" ? "#ffffff" : "#0B0B0C" }}
      >
        <span>Copyright © 2023 ROBIN.</span>
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

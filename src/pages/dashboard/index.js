import React, { useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import Title from "../../components/title";
import {
  actionItems,
  latestNews,
  todayBirthday,
  upcomingBirthday,
} from "../../data";
import Dropdown from "../../components/dropdown";
import { MAHINDRA_SPONSOR_BANNER } from "../../assets";
import ActionItemsCollapsed from "./actionitemsCollapsed";
import Graphs from "./graphs";
import LatestNews from "./latestnews";
import NewsDrawer from "./latestnews/newsDrawer";
import BirthdayCalendar from "./birthdaycalendar";

function DashboardPage() {
  const theme = useSelector((state) => state.theme);
  const [isNewsDrawerOpen, setIsNewsDrawerOpen] = useState(false);
  const [newsDrawerID, setNewsDrawerID] = useState(0);

  return (
    <>
      <div className="dashboard">
        {/* ============ title ============ */}
        <div
          style={{
            // marginTop: 20,
            borderBottom: `1px solid ${
              theme === "light" ? "#DEDEDE" : "#635D5D"
            }`,
          }}
        >
          <Title title="Dashboard" />
        </div>
        {/* =============== Content ================ */}
        <div className="boxContainer">
          {/* ========== New Design ========== */}

          {/* heading */}
          <div
            className="key_highlights_heading"
            style={{
              color: theme === "light" ? "black" : "white",
              backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C",
              borderColor: theme === "light" ? "#E6E6E6" : "#635d5d",
            }}
          >
            {/* left sides */}
            <div className="key_highlights_heading_left heading_side">
              {/* title */}
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
              <div className="heads">
                {/* divide */}
                <div
                  className="divider"
                  style={{
                    backgroundColor: theme === "light" ? "#B5B5B6" : "#635d5d",
                  }}
                ></div>
                {/* label */}
                <span className="label_name">GST Update</span>
                {/* text */}
                <p className="text" style={{ color: "#FF3E5B" }}>
                  Lorem Ipsum is simply dummy text of the printing Lorem Ipsum
                  is simply dummy text of the printing.
                  <span style={{ color: "#858585", marginLeft: 4 }}>
                    5min ago
                  </span>
                </p>
              </div>
            </div>
            {/* right sides icons */}
            <div className="key_highlights_heading_right heading_side">
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
              style={{ borderColor: theme === "light" ? "#E6E6E6" : "#635d5d" }}
            >
              {/* title */}
              <h4>Action Items</h4>
              {/* contents */}
              <div
                className={`key_hightlights_contents ${
                  theme === "light" ? "light" : "dark"
                }`}
                style={{
                  borderColor: theme === "light" ? "#E6E6E6" : "#635d5d",
                }}
              >
                {actionItems.map((ele) => {
                  return <ActionItemsCollapsed key={ele.id} items={ele} />;
                })}
              </div>
            </div>
            {/* Ads right side */}
            <div
              className="key_highlights_right_side box_Contents"
              style={{ borderColor: theme === "light" ? "#E6E6E6" : "#635d5d" }}
            >
              {/* images */}
              <div className="images">
                <img
                  src="https://auto.mahindra.com//-/media/project/mahindra/dotcom/mahindra/in-news---home/pr/neo-ambulance/bolero-neo-ambulancefor-website.jpg?rev=cab8637b0f6f4a80a53cd2a23006e0d6&extension=webp"
                  alt="Mahindra Ads"
                />
              </div>
              {/* contents */}
              <div
                className="key_highlights_right_content_box"
                // style={{backgroundColor:theme === "light" ? "#f2f2f261" : ""}}
              >
                <p>Mahindra to sponsor</p>
                <h4>
                  ICC Men’s Cricket World Cup 2023 on Disney+ Hotstar for its
                  Auto and Farm Business
                </h4>
                <span>5 September 2023</span>
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
              style={{ borderColor: theme === "light" ? "#DEDEDE" : "#635D5D" }}
            >
              <Graphs title="Retail" />
              <Graphs title="Billing" />
              <Graphs title="Stock In Days" />
            </div>
          </div>
          {/* news and birthdays */}
          <div className="news_birthday">
            {/* news */}
            <div
              className="newsContainer boxs"
              style={{ borderColor: theme === "light" ? "#DEDEDE" : "#635D5D" }}
            >
              {/* title */}
              <h4
                style={{
                  backgroundColor: theme === "light" ? "white" : "#0B0B0C",
                }}
              >
                Latest News
              </h4>
              {latestNews.map((ele) => (
                <LatestNews
                  key={ele.id}
                  items={ele}
                  setIsNewsDrawerOpen={setIsNewsDrawerOpen}
                  isNewsDrawerOpen={isNewsDrawerOpen}
                  setNewsDrawerID={setNewsDrawerID}
                />
              ))}
            </div>
            {/* birthday */}
            <div
              className="birthdaySection boxs"
              style={{ borderColor: theme === "light" ? "#DEDEDE" : "#635D5D" }}
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

      {/* News Drawer */}
      <NewsDrawer
        newsDrawerID={newsDrawerID}
        isNewsDrawerOpen={isNewsDrawerOpen}
        setIsNewsDrawerOpen={setIsNewsDrawerOpen}
      />
      {/* overlay */}
      <div
        id="newsDrawerOverlay"
        style={{ display: isNewsDrawerOpen ? "block" : "none" }}
        onClick={() => setIsNewsDrawerOpen(!isNewsDrawerOpen)}
      ></div>
    </>
  );
}

export default DashboardPage;

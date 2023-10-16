import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./styles.scss";
import { Link } from "react-router-dom";
import { notification } from "../../../data";
import NotificationItems from "./notificationItems/NotificationItems";

let useClickOutSide = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    const handlerEvent = (e) => {
      if (!domNode.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handlerEvent);

    return () => {
      document.removeEventListener("mousedown", handlerEvent);
    };
  }, [handler]);

  return domNode;
};

function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Inbox");
  const theme = useSelector((state) => state.theme);
  let domNode = useClickOutSide(() => {
    setIsOpen(false);
  });
  return (
    <>
      <div ref={domNode} className="notification">
        {/* notification button */}
        <button
          type="button"
          title="Notification"
          onClick={() => setIsOpen(!isOpen)}
          style={{ color: theme === "light" ? "black" : "white" }}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M10.3862 3.77595C10.5485 3.00386 11.2124 2.39999 12.0445 2.39999C12.8864 2.39999 13.5562 3.01832 13.7083 3.80359C16.3656 4.60418 18.287 7.15457 18.287 10.1429V14.4328C18.287 14.7362 18.4029 15.0224 18.6017 15.2296L21.3522 18.0969C21.8554 18.6215 21.5486 19.6 20.7254 19.6H14.4951C14.2346 20.7331 13.2526 21.6 12.0445 21.6H11.7704C10.5622 21.6 9.58024 20.7331 9.31974 19.6H3.27463C2.45142 19.6 2.1446 18.6215 2.64783 18.0969L5.39832 15.2296C5.59711 15.0224 5.71296 14.7362 5.71296 14.4328V10.1429C5.71296 7.11926 7.68011 4.54397 10.3862 3.77595Z"
                fill={theme === "light" ? "black" : "white"}
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.25222 2.09071C9.42805 1.25428 10.1472 0.600098 11.0486 0.600098C11.9607 0.600098 12.6863 1.26995 12.8511 2.12066C15.7298 2.98796 17.8114 5.75089 17.8114 8.98819V13.6356C17.8114 13.9643 17.9369 14.2743 18.1523 14.4988L21.132 17.6051C21.6771 18.1734 21.3447 19.2334 20.4529 19.2334H13.7035C13.4213 20.461 12.3575 21.4001 11.0486 21.4001H10.7517C9.44286 21.4001 8.37905 20.461 8.09684 19.2334H1.54797C0.656167 19.2334 0.323775 18.1734 0.868944 17.6051L3.84863 14.4988C4.06399 14.2743 4.18949 13.9643 4.18949 13.6356V8.98819C4.18949 5.71264 6.32058 2.92274 9.25222 2.09071ZM11.0005 3.1387C7.97485 3.17992 5.48949 5.75803 5.48949 8.98819V13.6356C5.48949 14.292 5.23961 14.9267 4.78678 15.3988L2.35538 17.9334H19.6455L17.2141 15.3988C16.7613 14.9267 16.5114 14.292 16.5114 13.6356V8.98819C16.5114 5.75803 14.0261 3.17992 11.0005 3.1387ZM9.45992 19.2334C9.69291 19.7543 10.1961 20.1001 10.7517 20.1001H11.0486C11.6042 20.1001 12.1074 19.7543 12.3404 19.2334H9.45992Z"
                fill="currentColor"
              ></path>
            </svg>
          )}
          {isOpen === false && (
            <small className="notificationContainerCount">1</small>
          )}
        </button>

        {isOpen === true && (
          <div
            className="notificationContainer"
            style={{
              backgroundColor: theme === "light" ? "#ffffff" : "#1C1C1C",
              color: theme === "light" ? "#000000" : "#ffffff",
              border: `1px solid ${theme === "light" ? "#E6E6E6" : "#545454"}`,
            }}
          >
            {/* heading */}
            <div className="notificationHead" style={{ fontSize: 14 }}>
              <h3>Notifications</h3>
              <span
                // to="/parts/parts-ordering/suggest-order-qty"
                style={{ color: "#FF3E5B" }}
              >
                Mark as all read
              </span>
            </div>
            {/* divided */}
            {/* <div
              style={{
                width: "100%",
                height: "1px",
                background: theme === "light" ? "#DEDEDE" : "#545454",
                margin: "10px 0",
              }}
            ></div> */}
            {/* <span className="arrowIcons" style={{ zIndex: 10 }}>
              <svg
                style={{
                  color: theme === "light" ? "#FFFFFF" : "#232324",
                }}
                width="20"
                height="9"
                viewBox="0 0 20 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.75947 1.21387L1.68115 8.15796H17.9152L9.75947 1.21387Z"
                  fill="currentColor"
                  stroke={`${theme === "light" ? "#E6E6E6" : "#545454"}`}
                ></path>
              </svg>
            </span>
            <div className="notificationBody">
              <b style={{ fontSize: "12px" }}>Smart Alert from ProMech!</b>
              <p
                style={{
                  fontSize: "10px",
                  marginTop: "5px",
                  lineHeight: 1.6,
                  color: theme === "light" ? "#635D5D" : "#B5B5B6",
                }}
              >
                Stock up your inventory with Brake Pad Kit (Part
                No:0603BAB0080KT) for XUV700 model as five customers have been
                alerted with brake pad replacement request and they are likely
                to send their vehicle for service in the coming week.
              </p>
              <Link
                to="/parts/parts-ordering/suggest-order-qty"
                style={{
                  marginTop: "8px",
                  marginBottom: "0",
                  color: "#FF3E5B",
                  textDecoration: "underline",
                  fontSize: "10px",
                }}
              >
                View More
              </Link>
            </div> */}

            {/* Arrow Icons */}
            <span className="arrowIcons" style={{ zIndex: 10 }}>
              <svg
                style={{
                  color: theme === "light" ? "#FFFFFF" : "#232324",
                }}
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="12"
                viewBox="0 0 23 12"
                fill="none"
              >
                <path
                  d="M-1.90735e-06 12L23 12L12.944 1.50676C12.1566 0.685173 10.8434 0.685173 10.056 1.50676L-1.90735e-06 12Z"
                  fill="currentColor"
                  stroke={`${theme === "light" ? "#E6E6E6" : "#545454"}`}
                />
              </svg>
            </span>
            {/* notification body contents */}
            <div className="notificationBody">
              {/* tabs */}
              <div
                className="notificationTab"
                style={{
                  borderBottom: `1px solid ${
                    theme === "light" ? "#E6E6E6" : "#545454"
                  }`,
                }}
              >
                {notification.map((ele) => (
                  <button
                    onClick={() => setActiveTab(ele.title)}
                    key={ele.key}
                    className={activeTab === ele.title && "active"}
                  >
                    <span
                      style={{
                        color:
                          activeTab === ele.title
                            ? "#FF3E5B"
                            : theme === "light"
                            ? "black"
                            : "white",
                      }}
                    >
                      {ele.title}
                    </span>
                    <span className="counts">{ele.items.length}</span>
                  </button>
                ))}
              </div>
              {/* contents */}
              <div
                className={`notificationTabsContent ${
                  theme === "light" ? "light" : "dark"
                }`}
              >
                {notification.map((ele) => {
                  if (ele.title === activeTab) {
                    return ele.items.map((el) => (
                      <NotificationItems key={el.key} data={el} />
                    ));
                  }
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Popup;

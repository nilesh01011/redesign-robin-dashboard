"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./styles.scss";
import { useSelector } from "react-redux";

export const item = ({ children }) => <div className="item">{children}</div>;

function Carousel({ children }) {
  const theme = useSelector((state) => state.theme);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [itemWidth, setItemWidth] = useState(0);

  const [translateWidth, setTranslateWidth] = useState(0);

  const itemRef = useRef(null);

  //   prev button
  const prevHandler = (e) => {
    // console.log(e);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  //   next button
  const nextHandler = (e) => {
    // console.log(e);
    if (currentIndex < children.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  useLayoutEffect(() => {
    if (itemRef.current.offsetWidth) {
      // console.log(itemRef.current.offsetWidth);
      setItemWidth(() => itemRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    if (currentIndex && itemWidth) {
      // console.log(window.innerWidth);
      setTranslateWidth(() => currentIndex * itemWidth);
    }
  }, [currentIndex, itemWidth, window.innerWidth]);

  return (
    <div className="carousel">
      {/* title */}
      <div className="title_heads">
        <h4>Key Highlights</h4>

        {/* button */}
        <div
          className="carouselBtn"
          style={{ backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C" }}
        >
          <button
            disabled={currentIndex < 1}
            onClick={prevHandler}
            className="back"
            type="button"
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
          </button>
          {/* next */}
          <button
            disabled={currentIndex >= children.length - 1}
            onClick={nextHandler}
            className="next"
            type="button"
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
          </button>
        </div>
      </div>
      {/* divider */}
      <div
        className="divider"
        style={{
          backgroundColor: theme === "light" ? "#B5B5B6" : "#635d5d",
        }}
      ></div>
      {/* items carousel list */}
      <div className="carouselWrapper">
        <div
          ref={itemRef}
          className="items"
          style={{ transform: `translateX(-${translateWidth}px)` }}
        >
          {children}
        </div>
      </div>

      {/* button */}
      <div
        className="carouselBtn mobileViewBtnHidden"
        style={{ backgroundColor: theme === "light" ? "#F2F2F2" : "#1C1C1C" }}
      >
        <button
          disabled={currentIndex < 1}
          onClick={prevHandler}
          className="back"
          type="button"
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
        </button>
        {/* next */}
        <button
          disabled={currentIndex >= children.length - 1}
          onClick={nextHandler}
          className="next"
          type="button"
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
        </button>
      </div>
    </div>
  );
}

export default Carousel;

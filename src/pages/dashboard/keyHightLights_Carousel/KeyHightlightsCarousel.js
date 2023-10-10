import React, { useState } from "react";
import "./styles.scss";
import KeyHightlightsItems from "./keyhightlightsItems";
import { keyHighlights } from "../../../data";

function KeyHightlightsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= keyHighlights.length) {
      newIndex = keyHighlights.length - 1;
    }

    setActiveIndex(newIndex);
  };

  console.log(activeIndex);

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
          //   width: `calc(${activeIndex === 0 ? 100 : activeIndex * 100}%)`,
            width: `calc(${keyHighlights.length * 100}%)`,
        }}
      >
        {keyHighlights.map((ele) => (
          <KeyHightlightsItems key={ele.key} data={ele} width="100%" />
        ))}
      </div>
      {/* button slider */}
      <div className="sliderBtn">
        <span
          style={{ cursor: "pointer" }}
          //   onClick={() => updateIndex(activendex - 1)}
          onClick={() => updateIndex(activeIndex - 1)}
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
          //   onClick={() => updateIndex(activendex + 1)}
          onClick={() => updateIndex(activeIndex + 1)}
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
  );
}

export default KeyHightlightsCarousel;

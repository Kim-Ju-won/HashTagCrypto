import React from "react";

const RedditKeywords = () => {
  return (
    <div className="bg-crypto-pureWhite p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold text-crypto-navy mb-4">
        실시간 주요 Reddit 키워드
      </h3>
      <div className="flex flex-wrap">
        <span className="m-1 text-crypto-navy" style={{ fontSize: "26px", opacity: 1 }}>
          ETF
        </span>
        <span className="m-1 text-crypto-navy" style={{ fontSize: "22px", opacity: 0.9 }}>
          spot BTC
        </span>
        <span className="m-1 text-crypto-navy" style={{ fontSize: "18px", opacity: 0.85 }}>
          BlackRock
        </span>
        <span className="m-1 text-crypto-navy" style={{ fontSize: "20px", opacity: 0.9 }}>
          SEC
        </span>
        <span className="m-1 text-crypto-navy" style={{ fontSize: "16px", opacity: 0.75 }}>
          halving
        </span>
        <span className="m-1 text-crypto-navy" style={{ fontSize: "17px", opacity: 0.8 }}>
          bullish
        </span>
        <span className="m-1 text-crypto-navy" style={{ fontSize: "14px", opacity: 0.7 }}>
          correction
        </span>
        <span className="m-1 text-crypto-navy" style={{ fontSize: "15px", opacity: 0.7 }}>
          FUD
        </span>
      </div>
    </div>
  );
};

export default RedditKeywords;
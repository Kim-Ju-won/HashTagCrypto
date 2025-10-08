import React from "react";

const MainChart = () => {
  return (
    <div className="bg-crypto-pureWhite p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold text-crypto-navy mb-5">
        소셜 언급량 vs 거래량 추이
      </h2>
      <div className="h-[400px] flex items-center justify-center">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 500 250"
          preserveAspectRatio="xMidYMid meet"
        >
          <rect width="100%" height="100%" fill="#fafafa" />
          <g stroke="#eee" strokeWidth="1">
            <line x1="0" y1="50" x2="500" y2="50" />
            <line x1="0" y1="100" x2="500" y2="100" />
            <line x1="0" y1="150" x2="500" y2="150" />
            <line x1="0" y1="200" x2="500" y2="200" />
          </g>
          <g fill="rgba(163, 217, 165, 0.5)">
            <rect x="30" y="150" width="20" height="80" />
            <rect x="80" y="180" width="20" height="50" />
            <rect x="130" y="120" width="20" height="110" />
            <rect x="180" y="100" width="20" height="130" />
            <rect x="230" y="140" width="20" height="90" />
            <rect x="280" y="80" width="20" height="150" />
            <rect x="330" y="110" width="20" height="120" />
            <rect x="380" y="50" width="20" height="180" />
            <rect x="430" y="70" width="20" height="160" />
          </g>
          <path
            d="M 40 180 L 90 160 L 140 190 L 190 120 L 240 100 L 290 130 L 340 80 L 390 50 L 440 30"
            className="stroke-crypto-blue"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default MainChart;
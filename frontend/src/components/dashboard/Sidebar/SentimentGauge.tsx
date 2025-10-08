import React from "react";

const SentimentGauge = () => {
  return (
    <div className="bg-crypto-pureWhite p-6 rounded-xl shadow-md mb-6">
      <h3 className="text-lg font-semibold text-crypto-navy mb-4">실시간 투자 심리</h3>
      <div className="flex justify-center items-center h-[120px] relative">
        <svg width="200" height="120" viewBox="0 0 200 120">
          <defs>
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-crypto-red)" />
              <stop offset="50%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="var(--color-crypto-green)" />
            </linearGradient>
          </defs>
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            stroke="#eee"
            strokeWidth="20"
            fill="none"
          />
          <path
            d="M 20 100 A 80 80 0 0 1 160 50"
            stroke="url(#gaugeGradient)"
            strokeWidth="20"
            fill="none"
            strokeLinecap="round"
          />
          <line
            x1="100"
            y1="100"
            x2="160"
            y2="50"
            className="stroke-crypto-navy"
            strokeWidth="3"
          />
          <text
            x="100"
            y="115"
            textAnchor="middle"
            fontSize="12"
            fill="var(--color-crypto-navy)"
          >
            공포/탐욕 지수
          </text>
        </svg>
      </div>
    </div>
  );
};

export default SentimentGauge;
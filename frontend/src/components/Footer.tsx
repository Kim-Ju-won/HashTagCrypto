import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-gray-500 text-sm mt-6 px-5 py-10 leading-relaxed">
      <p className="mb-2">
        <strong>데이터 출처:</strong> Reddit (r/CryptoCurrency), X (Twitter), Binance, Upbit
      </p>
      <p>
        <strong>업데이트 주기:</strong> 1분 단위 수집, 5분 단위 집계 (마지막 업데이트:
        2025-10-03 23:00 KST)
      </p>
    </footer>
  );
};

export default Footer;
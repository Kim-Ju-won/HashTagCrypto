import React from "react";

const DashboardHeader = () => {
  return (
    <section className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 py-8">
      <h1 className="text-2xl font-bold text-crypto-navy">BTC 대시보드</h1>
      <div className="flex space-x-2">
        <button className="bg-crypto-pureWhite border border-gray-300 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-crypto-lightLavender transition">
          1H
        </button>
        <button className="bg-crypto-lavender text-crypto-pureWhite border border-crypto-lavender px-4 py-2 rounded-lg text-sm font-semibold">
          24H
        </button>
        <button className="bg-crypto-pureWhite border border-gray-300 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-crypto-lightLavender transition">
          7D
        </button>
      </div>
    </section>
  );
};

export default DashboardHeader;
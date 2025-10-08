import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import MainChart from "@/components/dashboard/MainChart";
import Sidebar from "@/components/dashboard/Sidebar/Sidebar";
import ReportSection from "@/components/dashboard/ReportSection/ReportSection";

const DashboardPage = () => {
  return (
    <>
      {/* 상단 공용 Header */}
      <Header />

      <main className="max-w-6xl mx-auto px-5">
        {/* 대시보드 전용 Header */}
        <DashboardHeader />

        {/* 메인 차트 + 사이드바 */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <MainChart />
          </div>
          <Sidebar />
        </section>

        {/* 리포트 섹션 */}
        <ReportSection />
      </main>

      {/* 하단 공용 Footer */}
      <Footer />
    </>
  );
};

export default DashboardPage;
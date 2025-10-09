import React from "react";
import ReportCard from "./ReportCard";

const ReportSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <ReportCard
        title="긍정 신호 분석"
        icon={
          <svg
            className="text-crypto-green"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 
                3h7.5m-7.5 3h7.5m3-12h.375c.621 0 1.125.504 
                1.125 1.125V18a2.25 2.25 0 0 
                1-2.25 2.25h-13.5A2.25 2.25 0 
                0 1 3 18V6.375c0-.621.504-1.125 
                1.125-1.125H7.5M10.5 6a2.25 
                2.25 0 1 0 0 4.5 2.25 2.25 
                0 0 0 0-4.5ZM13.5 10.5a2.25 
                2.25 0 1 1 4.5 0 2.25 2.25 
                0 0 1-4.5 0Z"
            />
          </svg>
        }
      >
        핵심 키워드인{" "}
        <strong>&apos;spot BTC ETF&apos;</strong>와{" "}
        <strong>&apos;BlackRock&apos;</strong>의 언급량이 급증하며 시장의 기대감이 최고조에
        달하고 있습니다. 다가오는{" "}
        <strong>&apos;halving&apos;</strong>과 맞물려{" "}
        <span className="text-crypto-green font-bold">강력한 상승장(bullish)</span>
        에 대한 논의가 활발합니다.
      </ReportCard>

      <ReportCard
        title="리스크 신호 분석"
        icon={
          <svg
            className="text-crypto-red"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 
                3.376c-.866 1.5.217 3.374 1.948 
                3.374h14.71c1.73 0 2.813-1.874 
                1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 
                0L2.697 16.126ZM12 
                15.75h.007v.008H12v-.008Z"
            />
          </svg>
        }
      >
        <strong>&apos;SEC&apos;</strong>의 최종 결정 지연 가능성과 함께, 단기 급등에 따른{" "}
        <strong>&apos;correction&apos;(조정)</strong>을 경고하는 목소리도 커지고 있습니다. 일부
        채널에서는 의도적인 <strong>&apos;FUD&apos;</strong> 성 정보도 확산되고 있어{" "}
        <span className="text-crypto-red font-bold">신중한 접근</span>이 필요합니다.
      </ReportCard>
    </section>
  );
};

export default ReportSection;
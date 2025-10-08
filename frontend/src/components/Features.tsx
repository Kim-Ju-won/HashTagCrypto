export default function Features() {
  return (
    <section className="py-10 lg:py-20">
      <div className="mx-auto max-w-[1100px] px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* 카드 1 */}
          <div className="bg-crypto-pureWhite rounded-xl shadow-md p-10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 mb-5 text-crypto-lavender mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 
                1.125.504 1.125 1.125V18a2.25 2.25 
                0 0 1-2.25 2.25M16.5 7.5V18a2.25 
                2.25 0 0 0 2.25 2.25M16.5 
                7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 
                3.75 3 4.254 3 
                4.875V18a2.25 2.25 0 0 0 2.25 
                2.25h13.5M6 7.5h3v3H6v-3Z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-crypto-navy mb-2">
              실시간 여론 분석
            </h3>
            <p className="text-sm text-crypto-darkGray">
              SNS와 커뮤니티의 수많은 대화 속에서 투자의 기회를 발견하세요.
            </p>
          </div>

          {/* 카드 2 */}
          <div className="bg-crypto-pureWhite rounded-xl shadow-md p-10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 mb-5 text-crypto-lavender mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 
                0 0 1 15.797 2.101c.727.198 
                1.453-.342 1.453-1.096V18.75M3.75 
                4.5v.75A.75.75 0 0 1 3 
                6h-.75m0 0v-.375c0-.621.504-1.125 
                1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 
                .414.336.75.75.75h.75m-1.5-1.5h.375c.621 
                0 1.125.504 1.125 1.125v9.75c0 
                .621-.504 1.125-1.125 1.125h-15c-.621 
                0-1.125-.504-1.125-1.125v-9.75c0-.621.504-1.125 
                1.125-1.125h1.5"
              />
            </svg>
            <h3 className="text-xl font-semibold text-crypto-navy mb-2">
              핵심 거래 데이터
            </h3>
            <p className="text-sm text-crypto-darkGray">
              주요 거래소의 거래량, 가격 변동 등 의사결정에 필요한 데이터를 추적합니다.
            </p>
          </div>

          {/* 카드 3 */}
          <div className="bg-crypto-pureWhite rounded-xl shadow-md p-10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 mb-5 text-crypto-lavender mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.125C3 12.504 3.504 
                12 4.125 12h2.25c.621 0 
                1.125.504 1.125 1.125v6.75C7.5 
                20.496 6.996 21 6.375 
                21h-2.25A2.25 2.25 0 0 1 
                1.5 18.75V5.25c0-.621.504-1.125 
                1.125-1.125h2.25c.621 0 
                1.125.504 1.125 1.125v2.25c0 
                .621-.504 1.125-1.125 
                1.125h-2.25a2.25 2.25 0 0 0-2.25 
                2.25v6.75ZM16.5 7.5h2.25c.621 
                0 1.125.504 1.125 
                1.125V18a2.25 2.25 0 0 
                1-2.25 2.25h-2.25A2.25 2.25 
                0 0 1 12 18.75V13.5m4.5-6V4.875c0-.621-.504-1.125-1.125-1.125h-2.25c-.621 
                0-1.125.504-1.125 
                1.125v10.5c0 .621.504 
                1.125 1.125 1.125h2.25c.621 
                0 1.125.504 1.125-1.125V13.5"
              />
            </svg>
            <h3 className="text-xl font-semibold text-crypto-navy mb-2">
              직관적인 통합 대시보드
            </h3>
            <p className="text-sm text-crypto-darkGray">
              흩어져 있던 소셜 데이터와 시장 지표를 한 화면에서 비교하고 분석하세요.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

export default function Hero() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          coin: query.toUpperCase(),
          range: "24h",
          metrics: ["chart", "sentiment", "keywords", "reports"],
        }),
      });

      const data = await res.json();

      if (data.success) {
        router.push(`/dashboard?coin=${data.coin}`);
      } else {
        setError(data.error?.message || "해당 코인을 찾을 수 없습니다.");
      }
    } catch {
      setError("서버와의 통신 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 pb-8 text-center">
      <div className="mx-auto max-w-5xl px-5">
        <div className="flex justify-between items-center gap-10 text-left flex-col lg:flex-row">
          {/* 텍스트 영역 */}
          <div className="flex-1 mb-10 lg:mb-0">
            <h1 className="text-5xl md:text-5xl font-bold leading-snug mb-4 text-crypto-navy">
              투자의 확신이 필요할 때, 데이터가 답을 드립니다.
            </h1>
            <p className="text-base md:text-lg text-crypto-darkGray max-w-lg mb-8">
              수많은 정보 속에서 길을 잃지 않도록, 사람들의 목소리와 시장의 흐름을 데이터로 분석하여
              당신만의 투자 나침반이 되어 드립니다.
            </p>
          </div>

          {/* 일러스트 영역 */}
          <div className="flex-1 max-w-sm flex items-center justify-center">
            <svg
              viewBox="0 0 200 150"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
              aria-hidden="true"
            >
              <rect
                x="10"
                y="10"
                width="180"
                height="130"
                rx="10"
                fill="white"
                stroke="#E0E0E0"
                strokeWidth="2"
              />
              <rect x="30" y="90" width="25" height="40" fill="#C7D3F2" />
              <rect x="65" y="60" width="25" height="70" fill="#C7D3F2" />
              <rect x="100" y="75" width="25" height="55" fill="#C7D3F2" />
              <rect x="135" y="40" width="25" height="90" fill="#B4B8E7" />
              <path
                d="M 30 70 Q 65 50, 100 60 T 160 20"
                stroke="#F0C698"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                markerEnd="url(#arrowhead)"
              />
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="0"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill="#F0C698" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>

        {/* 검색 영역 */}
        <div className="mt-8 text-center">
          <form
            onSubmit={handleSubmit}
            className="flex justify-center max-w-xl mx-auto border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-crypto-pureWhite"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="분석하고 싶은 자산을 검색하세요 (예: BTC, ETH, SOL...)"
              className="flex-1 px-5 py-3 text-base outline-none border-none bg-crypto-pureWhite"
              aria-label="분석할 자산 검색 입력창"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 font-semibold bg-crypto-lightLavender text-crypto-navy hover:bg-crypto-lavender transition-colors disabled:opacity-50"
            >
              {loading ? "분석 중..." : "분석"}
            </button>
          </form>

          {error && (
            <p className="mt-3 text-sm text-red-500" role="alert">
              {error}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
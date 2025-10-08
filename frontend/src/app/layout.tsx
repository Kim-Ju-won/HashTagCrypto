import "./globals.css";
import type { Metadata } from "next";
import { Poppins, Noto_Sans_KR } from "next/font/google";

// Google Fonts 최적화 로드
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HashTagCrypto - 데이터 기반 투자 나침반",
  description: "데이터 기반 투자 나침반 서비스",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={`${notoSansKR.className} ${poppins.className} bg-brand-background text-brand-text`}
      >
        {children}
      </body>
    </html>
  );
}
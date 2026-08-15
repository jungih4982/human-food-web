import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/Navbar";

export const metadata: Metadata = {
  title: "휴먼푸드 | 모델하우스·기업 케이터링 & 맞춤 도시락 전문",
  description: "모델하우스 오픈 케이터링, 기업 상주 식사, 고급 맞춤 수제 도시락, 호텔 조식 위탁 운영 전문",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="bg-slate-50 text-slate-900 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

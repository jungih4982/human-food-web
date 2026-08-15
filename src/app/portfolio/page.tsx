"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

function InstagramIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function PortfolioPage() {
  const [tab, setTab] = useState("all");

  const portfolioItems = [
    { title: "부산 해운대 모델하우스 케이터링", category: "catering", date: "2026.08", desc: "모델하우스 케이터링 상차림" },
    { title: "기업체 정기 식사 공급", category: "catering", date: "2026.07", desc: "기업체 중식 뷔페 위탁 운영" },
    { title: "국제 테니스 대회 고급 수제 도시락 납품", category: "lunchbox", date: "2026.08", desc: "VIP용 프리미엄 수제 도시락" },
    { title: "호텔 조식 뷔페 위탁 운영", category: "breakfast", date: "2026.06", desc: "호텔 조식 뷔페 메뉴 구성 및 안정적 운영" },
  ];

  const filteredItems = tab === "all" ? portfolioItems : portfolioItems.filter(i => i.category === tab);

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-block text-orange-600 font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-100 mb-5">
          Portfolio & Reviews
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-snug sm:leading-tight mb-4">
          현장 갤러리 & 후기
        </h1>
        <p className="text-slate-500 text-sm break-keep">
          실제 현장에 제공된 상차림과 운영 사례를 확인하세요.
        </p>
      </div>

      {/* 카테고리 탭 */}
      <div className="flex justify-center gap-2">
        {[
          { key: "all", label: "전체보기" },
          { key: "catering", label: "케이터링" },
          { key: "lunchbox", label: "맞춤 도시락" },
          { key: "breakfast", label: "호텔 조식" },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition ${
              tab === t.key
                ? "bg-orange-600 text-white shadow-sm"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* 갤러리 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {filteredItems.map((item, idx) => (
          <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="h-48 bg-slate-800 flex items-center justify-center text-slate-500 text-sm">
              [ 현장 고화질 상차림 이미지 ]
            </div>
            <div className="p-6 space-y-2">
              <div className="flex justify-between text-xs text-slate-400">
                <span className="font-semibold text-orange-600 uppercase">{item.category}</span>
                <span>{item.date}</span>
              </div>
              <h3 className="font-bold text-slate-900 text-base">{item.title}</h3>
              <p className="text-slate-500 text-xs break-keep">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* SNS 연동 배너 */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 font-bold text-lg">
            <InstagramIcon size={22} />
            <span>공식 인스타그램 & 네이버 블로그</span>
          </div>
          <p className="text-xs text-orange-100 break-keep">
            더 많은 실시간 현장 사진과 생생한 후기를 공식 SNS 채널에서 확인해 보세요.
          </p>
        </div>
        <Link
          href="https://instagram.com"
          target="_blank"
          className="bg-white text-orange-600 px-5 py-2.5 rounded-full font-bold text-xs hover:bg-orange-50 transition flex items-center gap-1.5 shrink-0"
        >
          인스타그램 바로가기
          <ExternalLink size={14} />
        </Link>
      </div>
    </div>
  );
}

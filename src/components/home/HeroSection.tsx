import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 text-white py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold">
            <span>B2B 전문 케이터링 · 맞춤 도시락 · 호텔 조식</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            현장의 품격을 높이는 <br />
            <span className="text-orange-500">맞춤형 프리미엄 케이터링</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            모델하우스 케이터링부터 기업체 식사, 맞춤형 도시락까지. <br className="hidden sm:inline" />
            위생 관리 철학과 정갈한 상차림으로 만족스런 식사를 제공합니다.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/quote"
              className="flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold px-7 py-4 rounded-xl shadow-lg transition-all"
            >
              1분 간편 견적 받기
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/portfolio"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold px-7 py-4 rounded-xl transition-all"
            >
              현장 후기 & 갤러리
            </Link>
          </div>

          <div className="pt-8 border-t border-slate-800/80 flex flex-wrap gap-6 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-orange-500" />
              <span>실시간 견적 알림 시스템</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-orange-500" />
              <span>맞춤형 예산 설계</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-orange-500" />
              <span>철저한 위생 관리 프로세스</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

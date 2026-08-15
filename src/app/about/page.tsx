import { Award, HeartHandshake, UtensilsCrossed } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-20">
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-block text-orange-600 font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-100 mb-5">
          About Human Food
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-snug sm:leading-tight mb-6">
          사람과 음식, <br />그리고 품격을 잇습니다
        </h1>
        <p className="text-slate-600 text-base leading-relaxed break-keep">
          휴먼푸드는 단순한 식사 제공을 넘어 <br className="hidden sm:inline" />
          현장의 분위기와 고객의 품격을 완성하는 맞춤형 케이터링 전문 기업입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
            <UtensilsCrossed size={24} />
          </div>
          <h3 className="text-lg font-bold text-slate-900">신선 식자재 & 당일 조리</h3>
          <p className="text-slate-600 text-sm leading-relaxed break-keep">
            엄선한 당일 신선 농·축·수산물을 바탕으로 당일 조리 원칙을 준수합니다.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
            <Award size={24} />
          </div>
          <h3 className="text-lg font-bold text-slate-900">철저한 위생 관리</h3>
          <p className="text-slate-600 text-sm leading-relaxed break-keep">
            정기적인 조리 시설 소독 및 작업자 위생 안전 검사를 통해 안심할 수 있는 식문화를 만듭니다.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 space-y-4 shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
            <HeartHandshake size={24} />
          </div>
          <h3 className="text-lg font-bold text-slate-900">B2B 맞춤 커스텀</h3>
          <p className="text-slate-600 text-sm leading-relaxed break-keep">
            현장 동선 및 공간 구조에 가장 적합한 테이블웨어와 메뉴를 제안합니다.
          </p>
        </div>
      </div>
    </div>
  );
}

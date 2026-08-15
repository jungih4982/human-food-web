import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function ServicesPage() {
  const serviceList = [
    {
      id: "catering",
      title: "모델하우스 & 기업 케이터링",
      subtitle: "품격 있는 비즈니스 행사를 위한 프리미엄 테이블 세팅",
      desc: "모델하우스 프리미엄 케이터링부터 대형 기업체 상주 인원을 위한 맞춤 식단·뷔페 라인업을 현장에 맞게 설계해 드립니다.",
      features: ["모델하우스 케이터링", "기업 리셉션 맞춤 케이터링", "현장 전문 세팅 및 운영 지원"],
    },
    {
      id: "lunchbox",
      title: "맞춤 수제 도시락",
      subtitle: "신선한 한 끼를 정갈하게 담아낸 단체 프리미엄 도시락",
      desc: "주요 행사, 야외 세미나 등 목적과 예산에 맞춰 한식·양식·일식 정찬 스타일의 수제 도시락을 제작·배송합니다.",
      features: ["맞춤형 로고 스티커 및 패키징", "보온/보냉 완벽 배송", "소규모 주문부터 대형 납품 지원"],
    },
    {
      id: "breakfast",
      title: "호텔 조식 위탁 운영",
      subtitle: "숙박 고객의 만족도를 높이는 안정적인 B2B 뷔페 솔루션",
      desc: "관광호텔 및 비즈니스 호텔을 대상으로 전문 조리팀 파견 또는 케이터링 공급을 통해 안정적인 조식 뷔페 퀄리티를 보장합니다.",
      features: ["호텔 브랜드 맞춤 메뉴 큐레이션", "고정 인건비 절감 효과", "체계적인 위생 및 재고 관리"],
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16">
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-block text-orange-600 font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-100 mb-5">
          Services
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-snug sm:leading-tight mb-4">
          주요 서비스 안내
        </h1>
        <p className="text-slate-500 text-sm">
          휴먼푸드가 보유한 3대 특화 식음 비즈니스 라인업입니다.
        </p>
      </div>

      <div className="space-y-12">
        {serviceList.map((svc) => (
          <div key={svc.id} id={svc.id} className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-orange-600 font-bold text-xs">HUMAN FOOD SERVICE</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{svc.title}</h2>
              <p className="text-slate-500 font-medium text-sm">{svc.subtitle}</p>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{svc.desc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {svc.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-slate-50 p-3.5 rounded-xl border border-slate-100 text-xs font-semibold text-slate-700">
                  <Check size={16} className="text-orange-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-orange-600 text-white text-sm font-semibold px-6 py-3 rounded-xl transition"
              >
                이 서비스 견적 문의하기
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

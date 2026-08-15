import Link from "next/link";
import { Utensils, Box, Hotel, ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    title: "모델하우스 & 기업 케이터링",
    description: "분양 홍보관 VIP 다과부터 기업 행사·상주 인원을 위한 프리미엄 뷔페 세팅을 제공합니다.",
    icon: Utensils,
    tag: "대표 서비스",
    href: "/services#catering",
  },
  {
    title: "맞춤 수제 도시락",
    description: "신선한 식자재로 정갈하게 담아낸 대형 행사용 고급 수제 도시락 및 정기 배달 서비스입니다.",
    icon: Box,
    tag: "단체 주문",
    href: "/services#lunchbox",
  },
  {
    title: "호텔 조식 위탁 운영",
    description: "전문 조리 인력과 체계적인 위생 시스템을 기반으로 한 호텔 조식 뷔페 위탁 솔루션입니다.",
    icon: Hotel,
    tag: "B2B 위탁",
    href: "/services#breakfast",
  },
];

export default function ServiceGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-orange-600 font-semibold text-sm tracking-wider uppercase">Services</p>
          <h2 className="text-3xl font-extrabold text-slate-900">휴먼푸드 3대 핵심 솔루션</h2>
          <p className="text-slate-500 text-sm">고객의 상황과 현장 규모에 맞춘 최적화된 식음 서비스를 제안합니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-50 border border-slate-200/80 rounded-2xl p-8 hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-semibold bg-white border border-slate-200 text-slate-600 px-2.5 py-1 rounded-full">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 group-hover:text-orange-600"
                  >
                    자세히 보기
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

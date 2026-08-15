"use client";

import { useState } from "react";
import { Send, CheckCircle2, Clock, ShieldCheck, Phone } from "lucide-react";

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block text-orange-600 font-bold text-xs uppercase tracking-wider bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-100 mb-5">
          Fast Quote
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-snug sm:leading-tight mb-4">
          1분 맞춤 견적 신청
        </h1>
        <p className="text-slate-500 text-sm">정보를 입력해주시면 담당자가 확인 후 실시간으로 빠르게 연락드립니다.</p>
      </div>

      {submitted ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center space-y-4 shadow-sm">
          <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 size={36} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">견적 문의가 정상 접수되었습니다!</h2>
          <p className="text-slate-600 text-sm max-w-md mx-auto">
            기재해주신 연락처로 담당자가 신속히 상세 견적서와 식단 안내를 전달해 드리겠습니다.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 inline-block bg-slate-900 text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-slate-800 transition"
          >
            추가 문의 작성하기
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
            <div>
              <label className="block text-sm font-bold text-slate-800 mb-2">필요 서비스 선택 *</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {["모델하우스/기업 케이터링", "맞춤 수제 도시락", "호텔 조식 위탁"].map((svc) => (
                  <label key={svc} className="flex items-center gap-2 border border-slate-200 rounded-xl p-3 text-xs font-medium cursor-pointer hover:border-orange-500 transition">
                    <input type="radio" name="serviceType" value={svc} required className="text-orange-600 focus:ring-orange-500" />
                    <span>{svc}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2">행사/납품 장소 *</label>
                <input
                  type="text"
                  required
                  placeholder="예: 부산 해운대구 모델하우스"
                  className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2">예상 인원 (식수) *</label>
                <input
                  type="text"
                  required
                  placeholder="예: 50명"
                  className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2">운영 희망 일정 *</label>
                <input
                  type="text"
                  required
                  placeholder="예: 2026.09.01 ~ 1개월"
                  className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2">담당자 연락처 *</label>
                <input
                  type="tel"
                  required
                  placeholder="010-0000-0000"
                  className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-800 mb-2">추가 요청사항</label>
              <textarea
                rows={3}
                placeholder="예산 범위, 선호 메뉴 스타일, 특별 요청사항을 적어주세요."
                className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-orange-500 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 rounded-xl transition flex items-center justify-center gap-2 shadow-sm"
            >
              {loading ? "전송 중..." : "견적 문의 제출하기"}
              <Send size={16} />
            </button>
          </form>

          <div className="space-y-4">
            <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-4">
              <h3 className="font-bold text-base flex items-center gap-2">
                <Clock className="text-orange-500" size={20} />
                실시간 대응 프로세스
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                문의 접수 즉시 담당자에게 알림톡/메신저가 발송되며 현장 맞춤 제안서를 전달해 드립니다.
              </p>
              <div className="pt-3 border-t border-slate-800 flex items-center gap-2 text-xs text-orange-400">
                <Phone size={14} />
                <span>유선 빠른 상담: 010-0000-0000</span>
              </div>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl space-y-3">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ShieldCheck className="text-orange-600" size={18} />
                휴먼푸드 안심 케어
              </h4>
              <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4">
                <li>당일 조리 및 신선도 유지 배송</li>
                <li>전문 조리 및 자체 위생 점검 프로세스 가동</li>
                <li>세금계산서 및 법인 결제 완벽 지원</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

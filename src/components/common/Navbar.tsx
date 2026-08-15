"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, PhoneCall } from "lucide-react";

const NAV_ITEMS = [
  { label: "회사소개", href: "/about" },
  { label: "주요 서비스", href: "/services" },
  { label: "포트폴리오", href: "/portfolio" },
  { label: "간편 견적 문의", href: "/quote" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight text-slate-900">
            HUMAN<span className="text-orange-600">FOOD</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-600 hover:text-orange-600 font-medium transition-colors text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Link
            href="/quote"
            className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-sm hover:shadow"
          >
            <PhoneCall size={16} />
            1분 견적 신청
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-700"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-slate-700 font-medium py-2 hover:text-orange-600"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/quote"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-orange-600 text-white py-3 rounded-lg font-semibold mt-4"
          >
            1분 간편 견적 신청
          </Link>
        </div>
      )}
    </header>
  );
}

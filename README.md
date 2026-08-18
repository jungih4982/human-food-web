
# 휴먼푸드(Human Food) 공식 웹페이지 프로젝트

SNS 연동 기반 모델하우스·기업 케이터링, 맞춤 도시락, 호텔 조식 수주 웹페이지 제작.

---

## 1. 기술 스택 (Tech Stack)

* **Framework:** Next.js 16+ (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS v4
* **Icons:** Lucide React (브랜드 아이콘은 인라인 SVG 사용)
* **Package Manager:** pnpm
* **Deployment:** Vercel
* **Database & Notification (예정):** Supabase, Slack/알림톡 Webhook

---

## 2. 로컬 개발 환경 세팅 (Quick Start)

### ① 필수 도구 설치
* Node.js LTS (v20 이상 권장)
* pnpm (`npm install -g pnpm` 또는 `brew install pnpm`)

### ② 저장소 클론 및 패키지 설치
```bash
# 레포지토리 클론
git clone [https://github.com/사용자계정/human-food-web.git](https://github.com/사용자계정/human-food-web.git)
cd human-food-web

# 의존성 설치
pnpm install

# 로컬 개발 서버 실행 (localhost:3000)
pnpm dev
```
---

## 3. 프로젝트 디렉토리 구조 (Directory Structure)

```
src/
├── app/
│   ├── layout.tsx         # 공통 레이아웃 및 폰트
│   ├── globals.css        # Tailwind v4 스타일
│   ├── page.tsx           # 메인 홈 화면
│   ├── about/page.tsx     # 회사 소개
│   ├── services/page.tsx  # 3대 핵심 서비스 상세
│   ├── portfolio/page.tsx # 현장 갤러리 및 후기
│   └── quote/page.tsx     # 1분 간편 견적 신청
├── components/
│   ├── common/            # GNB(Navbar), Footer
│   ├── home/              # HeroSection, ServiceGrid
│   └── forms/             # 견적 폼 관련 컴포넌트
├── lib/                   # 유틸리티 및 DB 클라이언트
└── types/                 # 공통 타입 정의
```

---
## 4. 주요 개발 현황 및 향후 과제 (Roadmap)





​[●] 1단계: 프론트엔드 핵심 UI 및 반응형 레이아웃 구축



​[●] GNB / 모바일 드롭다운 메뉴


​[●] 메인 랜딩, 회사소개, 서비스 안내, 포트폴리오 탭 필터링


​[●] 견적 신청 기본 폼 UI







​[ ] 2단계: 백엔드 및 알림 시스템 연동 (다음 작업)



​[ ] 견적 신청 데이터 Supabase(DB) 저장


​[ ] 견적 접수 시 관리자 Slack/카카오 알림톡 실시간 웹훅 발송







​[ ] 3단계: SNS 자동 연동 및 최적화



​[ ] 인스타그램 최신 피드 자동 노출


​[ ] 네이버 블로그 후기 RSS 파싱 연동


​[ ] 검색엔진 최적화(SEO) 및 오픈그래프(OG) 세팅


---

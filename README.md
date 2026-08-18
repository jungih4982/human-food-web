# 휴먼푸드(Human Food) 공식 웹페이지 프로젝트

SNS 연동 기반 모델하우스·기업 케이터링, 맞춤 도시락, 호텔 조식 수주 채널 공식 웹페이지입니다[span_0](start_span)[span_0](end_span).

---

## 1. 기술 스택 (Tech Stack)

* **Framework:** Next.js 16+ (App Router)[span_1](start_span)[span_1](end_span)
* **Language:** TypeScript[span_2](start_span)[span_2](end_span)
* **Styling:** Tailwind CSS v4[span_3](start_span)[span_3](end_span)
* **Icons:** Lucide React (브랜드 아이콘은 인라인 SVG 사용)
* **Package Manager:** pnpm
* **Deployment:** Vercel[span_4](start_span)[span_4](end_span)
* **Database & Notification (예정):** Supabase, Slack/알림톡 Webhook[span_5](start_span)[span_5](end_span)

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

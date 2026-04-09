export type PricingRow = {
  difficulty: string;
  price: string;
  example: string;
};

export const pricingData: PricingRow[] = [
  {
    difficulty: "최하",
    price: "11,000",
    example: "단순 문구 수정, 버튼명 변경, 단순 표시 조건(if) 조정",
  },
  {
    difficulty: "하",
    price: "60,000",
    example: "UI 일부 수정, 필드 노출 변경, 입력값 검증 추가",
  },
  {
    difficulty: "중하",
    price: "90,000",
    example: "단순 API 수정, 쿼리 조건 일부 변경, 신규 컬럼 추가(단순 조회)",
  },
  {
    difficulty: "중",
    price: "110,000",
    example: "일반 기능 추가/수정, 정산 로직 일부 변경, 관리자+API 동시 수정",
  },
  {
    difficulty: "중상",
    price: "180,000",
    example: "출고율·정산 집계 기준 수정, 수치 불일치 원인 분석 및 보정",
  },
  {
    difficulty: "상",
    price: "250,000",
    example: "성능 병목 구간 개선, 대량 데이터 처리 로직 수정",
  },
  {
    difficulty: "최상",
    price: "별도 협의",
    example:
      "핵심 로직 재설계, 대규모 리팩터링 — 기준가 2,200,000원 (분석 후 범위 확정 필요)",
  },
];

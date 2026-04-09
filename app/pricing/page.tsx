import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Ban, Ruler, Calendar, Info, SquareCode } from "lucide-react";
import { pricingData } from "@/constants/pricing";

const difficultyStyle: Record<string, string> = {
  최하: "bg-green-100 text-green-700",
  하: "bg-green-200 text-green-800",
  중하: "bg-yellow-100 text-yellow-800",
  중: "bg-orange-100 text-orange-800",
  중상: "bg-red-100 text-red-800",
  상: "bg-red-200 text-red-900",
  최상: "bg-slate-800 text-slate-100",
};

const principles = [
  <>
    최종 금액은{" "}
    <strong className="font-semibold text-foreground">
      난이도별 기준 단가 × 예상일수(0.5D 단위)
    </strong>
    로 산정합니다. 1D = 1인 1일(8시간) 기준입니다.
  </>,
  <>
    단가에는 기능 구현뿐 아니라{" "}
    <strong className="font-semibold text-foreground">
      운영 영향도, 사이드 이펙트, 테스트 난이도
    </strong>
    가 포함됩니다.
  </>,
  <>
    모든 작업에는{" "}
    <strong className="font-semibold text-foreground">
      코드 분석, 빌드, 배포, 운영 반영 및 기본 검증
    </strong>
    이 기본 포함됩니다.
  </>,
  <>
    요구사항이 불명확하거나 범위가 확장되는 경우{" "}
    <strong className="font-semibold text-foreground">
      공수 및 단가는 협의 후 조정
    </strong>
    될 수 있습니다.
  </>,
  <>
    납기가 산정 공수 대비 과도하게 짧은 경우{" "}
    <strong className="font-semibold text-foreground">
      일정 압축(MAX) 가산
    </strong>
    이 적용될 수 있습니다.
  </>,
];

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-10 md:py-14 bg-secondary/30">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-medium text-primary mb-3">
              현행 기준 · 2026년 적용
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              개발 단가 안내
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              작업 난이도와 예상 공수를 기준으로 개발 비용을 산정합니다. 실제
              견적은 요청 범위와 운영 영향도를 함께 검토한 뒤 확정됩니다.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              ※ 모든 금액은 VAT 별도입니다.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 md:py-14 flex flex-col gap-6">
          {/* 최소 작업 조건 배너 */}
          <div className="flex items-center gap-4 px-6 py-4 bg-orange-50 border-2 border-orange-200 rounded-xl">
            <Ban className="w-6 h-6 text-orange-500 flex-shrink-0" />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-orange-800">
              <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                최소 진행 기준
              </span>
              <span>
                건별 의뢰는{" "}
                <strong className="font-bold underline underline-offset-2">
                  합산 금액 200,000원 이상
                </strong>
                인 경우에만 진행합니다.
              </span>
            </div>
          </div>

          {/* 섹션 1: 단가 산정 기준 */}
          <Card className="bg-card border-border overflow-hidden">
            <div className="px-8 py-5 border-b border-border flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <SquareCode className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-base font-bold text-foreground">
                  단가 산정 기준
                </h2>
                <p className="text-sm text-muted-foreground mt-0.5">
                  단순 작업량이 아닌 리스크·운영 영향도·기술 난이도를 종합해
                  산정합니다.
                </p>
              </div>
            </div>
            <CardContent className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-3">
                {principles.map((content, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-lg bg-muted/40 border border-border hover:border-primary/40 hover:bg-muted/60 transition-all"
                  >
                    <span className="w-6 h-6 rounded-md bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {content}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 섹션 2: 난이도별 기준 단가 */}
          <Card className="bg-card border-border overflow-hidden">
            <div className="px-8 py-5 border-b border-border flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-lg">💰</span>
              </div>
              <div>
                <h2 className="text-base font-bold text-foreground">
                  난이도별 기준 단가
                </h2>
                <p className="text-sm text-muted-foreground mt-0.5">
                  기술적 수준에 따른 기준 단가이며, 실제 비용은{" "}
                  <strong className="font-semibold text-foreground">
                    단가 × 예상일수
                  </strong>
                  로 산정됩니다.
                </p>
              </div>
            </div>
            <CardContent className="p-6 md:p-8">
              <div className="rounded-lg border border-border overflow-hidden">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead className="w-24 font-semibold">
                          난이도
                        </TableHead>
                        <TableHead className="w-36 font-semibold">
                          기준 금액
                        </TableHead>
                        <TableHead className="font-semibold">
                          예시 작업
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pricingData.map((row) => (
                        <TableRow
                          key={row.difficulty}
                          className="hover:bg-muted/30"
                        >
                          <TableCell>
                            <span
                              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ${difficultyStyle[row.difficulty] ?? "bg-muted text-muted-foreground"}`}
                            >
                              {row.difficulty}
                            </span>
                          </TableCell>
                          <TableCell>
                            {row.price === "별도 협의" ? (
                              <span className="text-muted-foreground text-sm">
                                별도 협의
                              </span>
                            ) : (
                              <span className="flex items-baseline gap-1">
                                <span className="text-base font-bold text-foreground">
                                  {row.price}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  원
                                </span>
                              </span>
                            )}
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground leading-relaxed">
                            {row.example}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>

              {/* Info Notes */}
              <div className="mt-5 p-5 rounded-xl bg-blue-50 border border-blue-200 flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-blue-700 space-y-1.5 leading-relaxed">
                  <p>
                    실제 견적은{" "}
                    <strong className="font-semibold">
                      기준 단가 × 예상 공수(0.5D 단위)
                    </strong>
                    로 산정됩니다.
                  </p>
                  <p>
                    단기간 내 집중 요청이나 긴급 대응이 필요한 경우{" "}
                    <strong className="font-semibold">일정 압축 비용</strong>이
                    반영될 수 있습니다.
                  </p>
                  <p>
                    모든 작업 비용에는{" "}
                    <strong className="font-semibold">
                      코드 분석, 검증, 배포 및 운영 반영 공수
                    </strong>
                    가 기본 포함됩니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 섹션 3: 기간제 운영 계약 */}
          <Card className="bg-card border-border overflow-hidden">
            <div className="px-8 py-5 border-b border-border flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-base font-bold text-foreground">
                  기간제 운영 계약
                </h2>
                <p className="text-sm text-muted-foreground mt-0.5">
                  지속적인 수정, 운영 대응, 기능 개선이 필요한 경우 기간 단위로
                  계약할 수 있습니다. 건별 단가와는 별도로 운영됩니다.
                </p>
              </div>
            </div>
            <CardContent className="p-6 md:p-8">
              <div className="grid md:grid-cols-3 gap-5">
                {/* 2주 */}
                <div className="relative border-2 border-primary rounded-xl p-6 flex flex-col gap-3 bg-primary/5">
                  <span className="absolute -top-px right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-b-lg">
                    기본
                  </span>
                  <p className="text-xs font-bold text-muted-foreground tracking-widest uppercase">
                    2주 · 10 근무일
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-foreground">
                      250만
                    </span>
                    <span className="text-sm text-muted-foreground">
                      원 / 2주
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground -mt-1">
                    VAT 별도 · 최소 단위
                  </p>
                  <hr className="border-border" />
                  <ul className="flex flex-col gap-2">
                    {[
                      "건별 요청보다 응답·처리 우선 보장",
                      "작업량 적어도 계약금액 그대로 정산",
                      "추가 건별 단가 없이 기간 내 처리",
                    ].map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary font-bold mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 1개월 */}
                <div className="border border-border rounded-xl p-6 flex flex-col gap-3 bg-card">
                  <p className="text-xs font-bold text-muted-foreground tracking-widest uppercase">
                    1개월 · 20 근무일
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-foreground">
                      450만
                    </span>
                    <span className="text-sm text-muted-foreground">
                      원 / 월
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground -mt-1">
                    VAT 별도
                  </p>
                  <hr className="border-border" />
                  <ul className="flex flex-col gap-2">
                    {[
                      "건별 요청보다 응답·처리 우선 보장",
                      "작업량 적어도 계약금액 그대로 정산",
                      "월 단위 결산 및 진행 보고",
                    ].map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary font-bold mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 장기 */}
                <div className="border border-border rounded-xl p-6 flex flex-col gap-3 bg-card">
                  <p className="text-xs font-bold text-muted-foreground tracking-widest uppercase">
                    장기 · 3개월 이상
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-foreground">
                      별도 협의
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground -mt-1">
                    VAT 별도
                  </p>
                  <hr className="border-border" />
                  <ul className="flex flex-col gap-2">
                    {[
                      "작업 범위·강도 협의 후 확정",
                      "장기 계약 할인 적용 가능",
                      "전담 운영 구조 협의 가능",
                    ].map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary font-bold mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="mt-5 text-xs text-muted-foreground">
                ※ 기간제는 건별 단가표와 별개로 운영됩니다. 기간 중 미사용
                일수는 이월되지 않습니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { pricingData } from "@/constants/pricing"

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            기능별 단가 안내
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            작업 금액은 기능별 난이도 × 예상 투입일수를 기준으로 산정합니다. 아래 표는 견적 산정 시 사용하는 기준 단가입니다.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg">난이도별 단가</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/2">난이도</TableHead>
                    <TableHead className="text-right">단가</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pricingData.map((row) => (
                    <TableRow key={row.difficulty}>
                      <TableCell className="font-medium">
                        {row.difficulty}
                      </TableCell>
                      <TableCell className="text-right text-muted-foreground">
                        {row.price === "별도 협의" ? "별도 협의" : `${row.price}원`}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="mt-6 p-4 rounded-lg bg-muted/50 text-sm text-muted-foreground leading-relaxed">
                <p className="mb-2">
                  실제 견적은 요구사항의 구체성, 화면 수, 연동 범위, 예외 처리, 유지보수 난이도 등에 따라 달라질 수 있습니다.
                </p>
                <p>최종 금액은 검토 후 확정됩니다.</p>
              </div>

              <div className="mt-6 text-center">
                <Button asChild>
                  <Link href="/pricing">
                    단가 안내 전체 보기
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

import { Check } from "lucide-react"

const clientTypes = [
  "작지만 중요한 웹 작업을 맡기고 싶은 분",
  "기존 사이트나 서비스의 수정·유지보수가 필요한 분",
  "요청사항은 있지만 기획 문서가 완벽하게 정리되지 않은 분",
  "기능 추가, 관리자 페이지, 외부 연동이 필요한 팀",
  "배포나 운영 환경 설정까지 함께 필요한 분",
]

export function IdealClientsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              이런 분께 적합합니다
            </h2>
            <p className="text-lg text-muted-foreground">
              2Bee Dev Studio는 명확한 커뮤니케이션과 실무적인 개발 진행을 중요하게 생각합니다.
            </p>
          </div>

          <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
            <ul className="space-y-4">
              {clientTypes.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="p-1 rounded-full bg-primary/10 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

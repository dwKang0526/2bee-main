import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Code2,
  Wrench,
  Puzzle,
  Rocket,
  Bug,
  MessageSquare,
} from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "웹 개발",
    description:
      "랜딩페이지, 회사 소개 페이지, 간단한 웹서비스 제작",
  },
  {
    icon: Wrench,
    title: "유지보수",
    description:
      "기존 프로젝트의 버그 수정, 문구 수정, 레이아웃 조정, 기능 개선",
  },
  {
    icon: Puzzle,
    title: "기능 추가",
    description:
      "관리자 페이지, 입력 폼, 외부 API 연동, 커스텀 기능 개발",
  },
  {
    icon: Rocket,
    title: "배포 지원",
    description:
      "서버 배포, 도메인 연결, 호스팅 설정, 운영 환경 점검",
  },
  {
    icon: Bug,
    title: "기술 수정",
    description:
      "오류 원인 분석, 동작 이상 수정, 실무적인 기술 문제 해결",
  },
  {
    icon: MessageSquare,
    title: "기술 상담",
    description:
      "구조 점검, 범위 검토, 방향 정리가 필요한 프로젝트 상담",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            제공 서비스
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            신규 프로젝트부터 기존 시스템 개선까지, 다양한 실무 웹 개발 작업을 지원합니다.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="bg-card border-border hover:shadow-md transition-shadow"
            >
              <CardHeader className="pb-3">
                <div className="p-2 rounded-lg bg-primary/10 w-fit mb-3">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

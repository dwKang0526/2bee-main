import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code2, Wrench, Rocket, Check } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              {[
                { text: "투명한 단가 안내" },
                { text: "유지보수 대응" },
                { text: "배포 지원 가능" },
              ].map(({ text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20"
                >
                  <Check className="w-3 h-3" />
                  {text}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              빠르게 소통하고
              <br />
              깔끔하게 개발합니다
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              작은 기능 개선부터 유지보수, 배포 지원까지 실제 운영에 필요한 개발
              작업을 빠르고 명확하게 진행합니다.
            </p>

            <p className="text-base text-muted-foreground">
              요구사항이 완전히 정리되지 않아도 괜찮습니다. 현재 상태를 바탕으로
              작업 범위와 방향을 함께 정리해드립니다.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg">
                <Link href="#pricing">단가 보기</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">문의하기</Link>
              </Button>
            </div>

            <div className="border-t border-border pt-4">
              <p className="text-sm text-muted-foreground">
                명확한 범위 산정 · 빠른 피드백 · 실무 중심 개발
              </p>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:block">
            <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-foreground">
                  주요 서비스
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Code2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">웹 개발</p>
                      <p className="text-sm text-muted-foreground">
                        신규 기능, 페이지, 서비스 개발
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Wrench className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">유지보수</p>
                      <p className="text-sm text-muted-foreground">
                        버그 수정, 업데이트, 지속적인 지원
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Rocket className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">배포 지원</p>
                      <p className="text-sm text-muted-foreground">
                        서버 설정 및 운영 환경 구축
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

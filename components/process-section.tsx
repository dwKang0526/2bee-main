import {
  MessageCircle,
  ClipboardList,
  Calculator,
  Code,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "문의 접수",
    description: "요청사항이나 현재 상황을 전달합니다",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "범위 검토",
    description: "작업 내용을 검토하고 필요한 범위를 정리합니다",
  },
  {
    number: "03",
    icon: Calculator,
    title: "견적 안내",
    description: "기능 난이도와 예상 작업량을 기준으로 비용을 안내합니다",
  },
  {
    number: "04",
    icon: Code,
    title: "개발 진행",
    description: "작업을 진행하며 필요한 내용을 확인하고 반영합니다",
  },
  {
    number: "05",
    icon: CheckCircle,
    title: "전달 및 마무리",
    description: "최종 검수 후 전달하며, 필요 시 배포나 후속 지원도 진행합니다",
  },
];

export function ProcessSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            진행 방식
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            신뢰를 바탕으로 실용적인 결과를 전달하기 위한 투명한 진행
            절차입니다.
          </p>
        </div>

        {/* Desktop: Horizontal Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="absolute -top-1 -right-1 text-xs font-bold text-primary bg-card border border-border rounded-full w-6 h-6 flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-7 left-[calc(50%+1rem)] w-[calc(100%-1rem)] h-[2px] bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical Layout */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex gap-4">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="absolute -top-1 -right-1 text-xs font-bold text-primary bg-card border border-border rounded-full w-5 h-5 flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-[2px] h-full bg-border mt-2 flex-1" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="text-base font-semibold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

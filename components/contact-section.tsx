import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, MessageCircle, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            프로젝트를 편하게 문의해보세요
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            처음부터 완벽하게 정리된 기획이 없어도 괜찮습니다. 현재 상황을
            알려주시면 작업 범위와 진행 방향을 함께 정리해드립니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link
                href="https://kmong.com/gig/703294"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 w-4 h-4" />
                크몽으로 문의하기
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link
                href="http://pf.kakao.com/_GRxnxcn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 w-4 h-4" />
                오픈채팅 문의하기
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="mailto:2beedevstudio@gmail.com">
                <Mail className="mr-2 w-4 h-4" />
                이메일 문의하기
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

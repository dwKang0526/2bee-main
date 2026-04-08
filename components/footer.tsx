import Link from "next/link"
import { navLinks } from "@/constants/navigation"

const externalLinks = [
  { name: "단가 안내", href: "https://2bee.dev/pricing/" },
  { name: "크몽", href: "https://kmong.com/gig/703294" },
  { name: "오픈채팅", href: "http://pf.kakao.com/_GRxnxcn" },
]

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              2Bee Dev Studio
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              명확한 범위, 실용적인 개발, 투명한 단가 안내
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">바로가기</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">외부 링크</h4>
            <ul className="space-y-2">
              {externalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} 2Bee Dev Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

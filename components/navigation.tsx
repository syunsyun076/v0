"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sparkles, User, Share2 } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Generate" },
    { href: "/library", label: "Library" },
    { href: "/market", label: "Market" },
    { href: "/pricing", label: "Pricing" },
    { href: "/legal", label: "Legal" },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-3 sm:h-16 sm:px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
          <span className="text-base font-semibold text-foreground sm:text-lg">Redesign</span>
        </Link>

        {/* Center Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200",
                pathname === item.href
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Side - SNS, Shopify, Profile & Upgrade */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          <button
            className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-2 py-1.5 transition-all duration-200 hover:border-primary hover:bg-card/80 sm:gap-2 sm:px-3 sm:py-2"
            title="Connect to SNS"
          >
            <Share2 className="h-4 w-4 text-muted-foreground sm:h-5 sm:w-5" />
            <span className="hidden text-xs font-medium text-foreground sm:inline sm:text-sm">SNS</span>
          </button>

          <button
            className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-2 py-1.5 transition-all duration-200 hover:border-[#96bf48] hover:bg-card/80 sm:gap-2 sm:px-3 sm:py-2"
            title="Connect to Shopify"
          >
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.337 2.126c-.012-.048-.036-.06-.06-.06-.024 0-.132-.012-.132-.012s-1.259-.132-1.763-.636c-.504-.504-.456-1.271-.456-1.271s-.012-.036-.048-.048c-.036-.012-2.891.9-3.011.936-.12.036-.024.156-.024.156l1.403 4.318 3.967-1.211.124-2.172zm-3.443 1.403l-1.115.336.012-1.403c.324.012.66.048.996.108.012.3.036.636.107.959zm1.115-.336l-.096 1.115-1.115.336c.012-.3.048-.636.12-.972.3.084.636.192.972.3.048.072.072.144.119.221zm.456-1.403c-.3-.084-.624-.156-.948-.204.084-.324.216-.432.456-.684l3.611 1.115c-.456.144-.912.288-1.344.217z"
                fill="#95BF47"
              />
              <path
                d="M15.277 2.066c-.024 0-.132-.012-.132-.012s-1.259-.132-1.763-.636c-.192-.192-.3-.432-.372-.684l3.611 1.115c-.456.144-.912.288-1.344.217z"
                fill="#5E8E3E"
              />
              <path
                d="M12.266 7.634l-.66 2.459s-.732-.396-1.607-.396c-1.295 0-1.355.804-1.355 1.007 0 1.115 2.891 1.535 2.891 4.138 0 2.051-1.295 3.371-3.047 3.371-2.099 0-3.167-1.307-3.167-1.307l.564-1.871s1.091.936 2.003.936c.6 0 .852-.468.852-.816 0-1.427-2.375-1.487-2.375-3.899 0-2.003 1.439-3.947 4.342-3.947.996 0 1.559.324 1.559.324z"
                fill="white"
              />
            </svg>
            <span className="hidden text-xs font-medium text-foreground sm:inline sm:text-sm">Shopify</span>
          </button>

          <button className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-2 py-1.5 transition-all duration-200 hover:bg-card/80 sm:gap-2 sm:px-3 sm:py-2">
            <User className="h-3.5 w-3.5 text-muted-foreground sm:h-4 sm:w-4" />
            <span className="text-xs font-medium text-foreground sm:text-sm">Profile</span>
          </button>

          <Button
            size="sm"
            className="bg-primary px-2.5 text-xs text-primary-foreground hover:bg-primary/90 sm:px-4 sm:text-sm"
          >
            Upgrade
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex items-center gap-1 overflow-x-auto border-t border-border px-3 py-2 md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium transition-colors duration-200",
              pathname === item.href
                ? "bg-secondary text-foreground"
                : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground",
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

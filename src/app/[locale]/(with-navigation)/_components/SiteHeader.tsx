"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LocaleSwitcher from "@/features/i18n/components/LocaleSwitcher";
import { Menu } from "lucide-react";
import type { CSSProperties } from "react";

const linksData = [
  {
    label: "Blogs",
    href: "/blogs",
  },
  {
    label: "Blog",
    href: "/blog/demo",
  },
  {
    label: "terms",
    href: "/terms",
  },
  {
    label: "privacy",
    href: "/privacy",
  },
];

export default function SiteHeader() {
  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-6 py-5"
      style={
        {
          "--site-header-height": "var(--h-19)",
        } as CSSProperties
      }
    >
      <nav className="mx-auto flex w-full max-w-[1440px] items-center justify-between">
        <span className="font-sans text-sm tracking-[0.3em] text-foreground/60 uppercase">
          Starter
        </span>
        <nav className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <ul className="hidden items-end justify-center gap-2 text-sm md:flex">
            {linksData.map(({ href, label }) => (
              <li key={href}>
                <Link variant="ghost" href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <LocaleSwitcher className="hidden md:flex" />
          <ThemeToggle />

          {/* Mobile Sheet Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[280px] sm:w-[320px]">
              <SheetHeader>
                <SheetTitle className="pt-2 font-sans text-lg tracking-[0.3em] text-foreground/60 uppercase">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-1">
                {linksData.map(({ href, label }) => (
                  <Link
                    key={href}
                    variant="ghost"
                    href={href}
                    className="justify-start px-4 py-3 text-base"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
              <div className="mt-8 space-y-1 border-t border-border pt-6">
                <LocaleSwitcher className="w-full px-4" />
                <div className="flex items-center justify-between px-4">
                  <span className="text-sm text-foreground/70">Theme</span>
                  <ThemeToggle />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </nav>
    </header>
  );
}

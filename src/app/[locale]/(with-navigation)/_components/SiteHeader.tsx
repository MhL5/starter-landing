import { ThemeToggle } from "@/components/ThemeToggle";
import type { CSSProperties } from "react";

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
        <span
          className="font-(family-name:--font-display-1) text-sm tracking-[0.3em] text-black/60 uppercase dark:text-white/50"
          style={{ letterSpacing: "0.35em" }}
        >
          Starter
        </span>
        <nav className="flex items-center gap-4">
          <ThemeToggle />
        </nav>
      </nav>
    </header>
  );
}

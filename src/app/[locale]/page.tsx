import { ThemeToggle } from "@/components/ThemeToggle";
import { Link } from "@/features/i18n/navigation";
import { Bebas_Neue, DM_Sans } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display-1",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body-1",
  display: "swap",
});

const features = [
  "i18n",
  "Dark theme",
  "TanStack Query · ky",
  "Env validation",
  "Blog",
  "shadcn UI",
];

export default function LandingOne() {
  return (
    <div
      className={`${bebas.variable} ${dmSans.variable} min-h-dvh bg-white font-(family-name:--font-body-1) text-black dark:bg-[#0a0a0a] dark:text-white`}
    >
      <header className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-6 py-5">
        <span
          className="font-(family-name:--font-display-1) text-sm tracking-[0.3em] text-black/60 uppercase dark:text-white/50"
          style={{ letterSpacing: "0.35em" }}
        >
          Starter
        </span>
        <nav className="flex items-center gap-4">
          {[1, 2, 3, 4, 5].map((n) => (
            <Link
              key={n}
              href={`/${n}`}
              className="text-xs text-black/50 hover:text-black dark:text-white/50 dark:hover:text-white"
              aria-label={`Design ${n}`}
            >
              {n}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </header>

      <main className="relative px-6 pt-32 md:px-12 lg:px-20">
        {/* Hero */}
        <section className="flex min-h-dvh flex-col justify-end pb-24 md:pb-32">
          <div className="max-w-4xl">
            <h1
              className="font-(family-name:--font-display-1) text-[clamp(4rem,18vw,12rem)] leading-[0.9] tracking-tighter text-black dark:text-white"
              style={{ letterSpacing: "-0.04em" }}
            >
              Next
              <br />
              <span className="text-[#c23b22] dark:text-[#e85a45]">
                Template
              </span>
              <br />
              Done Right.
            </h1>
            <p className="mt-8 max-w-md text-base text-black/70 md:text-lg dark:text-white/60">
              i18n, dark theme, TanStack Query, ky, env validation, blog, shadcn
              UI. One repo. Zero config headaches.
            </p>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm text-black/50 dark:text-white/50">
              {features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex h-12 items-center border border-black bg-black px-8 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black dark:border-white dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white"
              >
                Get started
              </Link>
              <Link
                href="/"
                className="inline-flex h-12 items-center border border-black/20 px-8 text-sm font-medium text-black transition-colors hover:border-black dark:border-white/30 dark:text-white dark:hover:border-white"
              >
                Docs
              </Link>
            </div>
          </div>
        </section>

        {/* What's inside */}
        <section className="border-t border-black/10 py-24 md:py-32 dark:border-white/10">
          <p className="font-(family-name:--font-display-1) text-sm tracking-[0.35em] text-black/40 uppercase dark:text-white/40">
            What&apos;s inside
          </p>
          <ul className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <li>
              <h3 className="font-(family-name:--font-display-1) text-2xl tracking-tight text-black dark:text-white">
                i18n
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-black/60 dark:text-white/60">
                Multiple locales, RTL support, next-intl. Routing and messages
                wired so you can go global from day one.
              </p>
            </li>
            <li>
              <h3 className="font-(family-name:--font-display-1) text-2xl tracking-tight text-black dark:text-white">
                Dark theme
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-black/60 dark:text-white/60">
                next-themes and CSS variables. Toggle in the header, preference
                persisted. No flicker.
              </p>
            </li>
            <li>
              <h3 className="font-(family-name:--font-display-1) text-2xl tracking-tight text-black dark:text-white">
                Data & HTTP
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-black/60 dark:text-white/60">
                TanStack Query for server state, ky for fetching. Caching and
                loading states handled so you focus on UI.
              </p>
            </li>
            <li>
              <h3 className="font-(family-name:--font-display-1) text-2xl tracking-tight text-black dark:text-white">
                Env validation
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-black/60 dark:text-white/60">
                Typed env with Zod and @t3-oss/env-nextjs. Fail at build or
                runtime if something is missing.
              </p>
            </li>
            <li>
              <h3 className="font-(family-name:--font-display-1) text-2xl tracking-tight text-black dark:text-white">
                Blog
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-black/60 dark:text-white/60">
                MDX-ready structure so you can add a blog or docs without
                rethinking the stack.
              </p>
            </li>
            <li>
              <h3 className="font-(family-name:--font-display-1) text-2xl tracking-tight text-black dark:text-white">
                shadcn UI
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-black/60 dark:text-white/60">
                Buttons, cards, forms, dialogs. Copy-paste components that
                respect your theme and accessibility.
              </p>
            </li>
          </ul>
        </section>

        {/* Why */}
        <section className="border-t border-black/10 py-24 md:py-32 dark:border-white/10">
          <div className="max-w-2xl">
            <h2 className="font-(family-name:--font-display-1) text-4xl leading-tight tracking-tight text-black md:text-5xl dark:text-white">
              Stop configuring.
              <br />
              <span className="text-[#c23b22] dark:text-[#e85a45]">
                Start building.
              </span>
            </h2>
            <p className="mt-8 text-base leading-relaxed text-black/70 dark:text-white/60">
              Every choice in this template is deliberate: proven libraries,
              clear structure, type safety. Clone it, add your content and API
              keys, and ship.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-black/10 py-16 dark:border-white/10">
          <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="font-(family-name:--font-display-1) text-sm tracking-[0.35em] text-black/60 uppercase dark:text-white/50">
                Starter
              </span>
              <p className="mt-4 max-w-sm text-sm text-black/50 dark:text-white/50">
                Next.js template with i18n, dark theme, TanStack Query, ky, env
                validation, blog, and shadcn UI.
              </p>
            </div>
            <nav className="flex flex-wrap gap-8 text-sm">
              <Link
                href="/"
                className="text-black/60 hover:text-black dark:text-white/50 dark:hover:text-white"
              >
                Docs
              </Link>
              <Link
                href="/"
                className="text-black/60 hover:text-black dark:text-white/50 dark:hover:text-white"
              >
                Blog
              </Link>
              <Link
                href="/"
                className="text-black/60 hover:text-black dark:text-white/50 dark:hover:text-white"
              >
                GitHub
              </Link>
            </nav>
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-8 dark:border-white/10">
            <p className="text-xs text-black/40 dark:text-white/40">
              Next.js · TypeScript · Tailwind · shadcn UI
            </p>
            <p className="text-xs text-black/40 dark:text-white/40">
              © {new Date().getFullYear()} Starter. Use freely.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

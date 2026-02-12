import { Link } from "@/components/ui/link";

const linksData = [
  {
    label: "Blogs",
    href: "/blogs",
  },
  {
    label: "blog",
    href: "/blog/demo",
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t px-5 py-16">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="font-sans text-sm tracking-[0.35em] text-foreground/60 uppercase">
            Starter
          </span>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground/70">
            Next.js template with i18n, dark theme, TanStack Query, ky, env
            validation, blog, and shadcn UI.
          </p>
        </div>
        <nav className="flex flex-wrap gap-8">
          {linksData.map((link) => (
            <Link variant="ghost" key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-16 flex w-full max-w-[1440px] flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
        <p className="text-xs leading-relaxed text-foreground/60">
          Next.js · TypeScript · Tailwind · shadcn UI
        </p>
        <p className="text-xs leading-relaxed text-foreground/60">
          © {new Date().getFullYear()} Starter. Use freely.
        </p>
      </div>
    </footer>
  );
}

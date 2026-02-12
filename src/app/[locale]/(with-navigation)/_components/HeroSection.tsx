import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";

const features = [
  "i18n",
  "Dark theme",
  "TanStack Query · ky",
  "Env validation",
  "Blog",
  "shadcn UI",
];

type HeroSectionProps = {
  className?: string;
};

export default function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      className={cn(
        "flex min-h-svh flex-col items-start justify-center",
        className,
      )}
    >
      <div className="max-w-4xl">
        <h1 className="font-sans text-[clamp(4rem,18vw,12rem)] leading-[0.9] tracking-[-0.04em]">
          Next
          <br />
          <span className="text-primary">Template</span>
          <br />
          Done Right.
        </h1>

        <p className="mt-8 max-w-[65ch] text-lg leading-7 text-foreground/80 md:text-xl md:leading-8">
          i18n, dark theme, TanStack Query, ky, env validation, blog, shadcn UI.
          One repo. Zero config headaches.
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-base leading-6 text-foreground/70">
          {features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/"
            variant="default"
            size="lg"
            className="h-12 min-w-32 text-base"
          >
            Get started
          </Link>
          <Link
            href="/"
            variant="outline"
            size="lg"
            className="h-12 min-w-32 text-base"
          >
            Docs
          </Link>
        </div>
      </div>
    </section>
  );
}

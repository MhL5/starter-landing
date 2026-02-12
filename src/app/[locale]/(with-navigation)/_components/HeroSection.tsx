import { cn } from "@/lib/utils";
import { getTranslations } from "next-intl/server";

const features = [
  "i18n",
  "darkTheme",
  "tanstackQuery",
  "envValidation",
  "blog",
  "shadcnUI",
] as const;

type HeroSectionProps = {
  className?: string;
};

export default async function HeroSection({ className }: HeroSectionProps) {
  const t = await getTranslations("app./.components.HeroSection");

  return (
    <section
      className={cn(
        "flex min-h-svh flex-col items-start justify-center",
        className,
      )}
    >
      <div className="max-w-4xl">
        <h1 className="font-sans text-[clamp(4rem,18vw,12rem)] leading-[0.9] tracking-[-0.04em]">
          {t("title1")}
          <br />
          <span className="text-primary">{t("title2")}</span>
          <br />
          {t("title3")}
        </h1>

        <p className="mt-8 max-w-[65ch] text-lg leading-7 text-foreground/80 md:text-xl md:leading-8">
          {t("description")}
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-base leading-6 text-foreground/70">
          {features.map((f) => (
            <li key={f}>{t(`features.${f}`)}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { MotionH1, MotionP, MotionSection, MotionUl } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { getTranslations } from "next-intl/server";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

type HeroSectionMotionProps = {
  className?: string;
};

const featuresTKey = [
  "i18n",
  "darkTheme",
  "tanstackQuery",
  "envValidation",
  "blog",
  "shadcnUI",
] as const;

export default async function HeroSectionMotion({
  className,
}: HeroSectionMotionProps) {
  const t = await getTranslations("app./.components.HeroSection");
  return (
    <MotionSection
      className={cn(
        "flex min-h-svh flex-col items-start justify-center",
        className,
      )}
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="max-w-4xl">
        <MotionH1
          className="font-sans text-[clamp(4rem,18vw,12rem)] leading-[0.9] tracking-[-0.04em]"
          variants={item}
        >
          {t("title1")}
          <br />
          <span className="text-primary">{t("title2")}</span>
          <br />
          {t("title3")}
        </MotionH1>

        <MotionP
          className="mt-8 max-w-[65ch] text-lg leading-7 text-foreground/80 md:text-xl md:leading-8"
          variants={item}
        >
          {t("description")}
        </MotionP>
        <MotionUl
          className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-base leading-6 text-foreground/70"
          variants={item}
        >
          {featuresTKey.map((feature) => (
            <li key={feature}>{t(`features.${feature}`)}</li>
          ))}
        </MotionUl>
      </div>
    </MotionSection>
  );
}

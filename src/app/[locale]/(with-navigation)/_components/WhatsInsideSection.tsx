import { MotionLi, MotionP, MotionSection } from "@/lib/motion";
import { getTranslations } from "next-intl/server";

const featuresTKey = [
  "i18n",
  "darkTheme",
  "remoteStateManagement",
  "envValidation",
  "blog",
  "shadcnUI",
] as const;

export default async function WhatsInsideSection() {
  const t = await getTranslations("app./.components.WhatsInsideSection");

  return (
    <MotionSection
      className="border-t border-border py-24 md:py-32"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <MotionP
        className="text-sm font-medium tracking-widest text-foreground/60 uppercase"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {t("title")}
      </MotionP>
      <ul className="mt-12 grid gap-14 sm:grid-cols-2 lg:grid-cols-3">
        {featuresTKey.map((feature, i) => (
          <MotionLi
            key={feature}
            className="max-w-[50ch]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
              delay: i * 0.08,
            }}
          >
            <h3 className="font-sans text-2xl font-bold tracking-wide text-foreground">
              {t(`features.${feature}`)}
            </h3>
            <p className="mt-4 text-[1.0625rem] leading-7 text-foreground/80">
              {t(`features.${feature}Paragraph`)}
            </p>
          </MotionLi>
        ))}
      </ul>
    </MotionSection>
  );
}

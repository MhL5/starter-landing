import { MotionH2, MotionP, MotionSection } from "@/lib/motion";
import { getTranslations } from "next-intl/server";

export default async function WhySection() {
  const t = await getTranslations("app./.components.WhySection");

  return (
    <MotionSection
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="me-auto w-full border-t border-border py-24 md:py-32"
    >
      <div className="me-auto w-full max-w-2xl">
        <MotionH2
          className="font-sans text-4xl leading-[1.15] tracking-tight text-foreground md:text-5xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.08 }}
        >
          {t.rich("title", {
            strong: (chunks) => (
              <>
                <br />
                <span className="text-primary">{chunks}</span>
              </>
            ),
          })}
        </MotionH2>

        <MotionP
          className="mt-8 max-w-[65ch] text-lg leading-7 text-foreground/80"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.14 }}
        >
          {t("description")}
        </MotionP>
      </div>
    </MotionSection>
  );
}

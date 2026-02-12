import { getTranslations } from "next-intl/server";

export default async function WhySection() {
  const t = await getTranslations("app./.components.WhySection");
  return (
    <section className="me-auto w-full border-t border-border py-24 md:py-32">
      <div className="me-auto w-full max-w-2xl">
        <h2 className="font-sans text-4xl leading-[1.15] tracking-tight text-foreground md:text-5xl">
          {t.rich("title", {
            strong: (chunks) => (
              <>
                <br />
                <span className="text-primary">{chunks}</span>
              </>
            ),
          })}
        </h2>

        <p className="mt-8 max-w-[65ch] text-lg leading-7 text-foreground/80">
          {t("description")}
        </p>
      </div>
    </section>
  );
}

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
    <section className="border-t border-border py-24 md:py-32">
      <p className="text-sm font-medium tracking-widest text-foreground/60 uppercase">
        {t("title")}
      </p>
      <ul className="mt-12 grid gap-14 sm:grid-cols-2 lg:grid-cols-3">
        {featuresTKey.map((feature) => (
          <li key={feature} className="max-w-[50ch]">
            <h3 className="font-sans text-2xl font-bold tracking-wide text-foreground">
              {t(`features.${feature}`)}
            </h3>
            <p className="mt-4 text-[1.0625rem] leading-7 text-foreground/80">
              {t(`features.${feature}Paragraph`)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

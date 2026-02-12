import { getTranslations } from "next-intl/server";

export default async function SiteFooter() {
  const t = await getTranslations("app./.components.SiteFooter");
  return (
    <footer className="border-t px-5 pt-16 pb-5">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="font-sans text-sm tracking-[0.35em] text-foreground/60 uppercase">
            {t("title")}
          </span>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground/70">
            {t("description")}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 flex w-full max-w-[1440px] flex-wrap items-center justify-center gap-4 border-t border-border pt-8">
        <p className="text-xs leading-relaxed text-foreground/60">
          {t.rich("copyright", {
            year: new Date().getFullYear().toString(),
            appName: t("title"),
          })}
        </p>
      </div>
    </footer>
  );
}

const featuresData = [
  {
    title: "i18n",
    description:
      "Multiple locales, RTL support, next-intl. Routing and messages wired so you can go global from day one.",
  },
  {
    title: "Dark theme",
    description:
      "next-themes and CSS variables. Toggle in the header, preference persisted. No flicker.",
  },
  {
    title: "Data & HTTP",
    description:
      "TanStack Query for server state, ky for fetching. Caching and loading states handled so you focus on UI.",
  },
  {
    title: "Env validation",
    description:
      "Typed env with Zod and @t3-oss/env-nextjs. Fail at build or runtime if something is missing.",
  },
  {
    title: "Blog",
    description:
      "MDX-ready structure so you can add a blog or docs without rethinking the stack.",
  },
  {
    title: "shadcn UI",
    description:
      "Buttons, cards, forms, dialogs. Copy-paste components that respect your theme and accessibility.",
  },
];

export default function WhatsInsideSection() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <p className="text-sm font-medium tracking-widest text-foreground/60 uppercase">
        What&apos;s inside
      </p>
      <ul className="mt-12 grid gap-14 sm:grid-cols-2 lg:grid-cols-3">
        {featuresData.map((feature) => (
          <li key={feature.title} className="max-w-[50ch]">
            <h3 className="font-sans text-2xl font-bold tracking-wide text-foreground">
              {feature.title}
            </h3>
            <p className="mt-4 text-[1.0625rem] leading-7 text-foreground/80">
              {feature.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

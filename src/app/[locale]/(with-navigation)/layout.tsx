import SiteFooter from "./_components/SiteFooter";
import SiteHeader from "./_components/SiteHeader";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        className="min-h-[calc(100svh-var(--site-header-height))]"
      >
        {children}
      </main>
      <SiteFooter />
    </>
  );
}

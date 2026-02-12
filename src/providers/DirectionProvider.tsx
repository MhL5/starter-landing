import { DirectionProvider as DirectionProviderShadcn } from "@/components/ui/direction";
import { getDirection } from "@/features/i18n/utils/getDirection";
import { useLocale } from "next-intl";
import type { PropsWithChildren } from "react";

export default function DirectionProvider({ children }: PropsWithChildren) {
  const locale = useLocale();
  return (
    <DirectionProviderShadcn dir={getDirection(locale)}>
      {children}
    </DirectionProviderShadcn>
  );
}

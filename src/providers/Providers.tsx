import { Toaster } from "@/components/ui/sonner";
import { NextIntlClientProvider } from "next-intl";
import type { PropsWithChildren } from "react";

import DirectionProvider from "./DirectionProvider";
import { ThemeProvider } from "./ThemeProvider";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <DirectionProvider>
      <ThemeProvider>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <Toaster richColors closeButton />
      </ThemeProvider>
    </DirectionProvider>
  );
}

import { Toaster } from "@/components/ui/sonner";
import { isDev } from "@/utils/checks";
import { NextIntlClientProvider } from "next-intl";
import type { PropsWithChildren } from "react";

import DirectionProvider from "./DirectionProvider";
import { TanstackFormDevtoolDynamic } from "./TanstackDevtool";
import { ThemeProvider } from "./ThemeProvider";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <DirectionProvider>
      <ThemeProvider>
        {isDev() && <TanstackFormDevtoolDynamic />}

        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        <Toaster richColors closeButton />
      </ThemeProvider>
    </DirectionProvider>
  );
}

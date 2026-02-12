"use client";

import { TanStackDevtools } from "@tanstack/react-devtools";
import { formDevtoolsPlugin } from "@tanstack/react-form-devtools";
import dynamic from "next/dynamic";

export const TanstackFormDevtoolDynamic = dynamic(
  () => import("./TanstackDevtool"),
  {
    ssr: false,
  },
);

export default function TanstackDevtool() {
  return <TanStackDevtools plugins={[formDevtoolsPlugin()]} />;
}

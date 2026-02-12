import { clientEnv } from "@/env/clientEnv";
import ky from "ky";

export const fetcher = ky.extend({
  prefixUrl: clientEnv.NEXT_PUBLIC_BACKEND_DOMAIN,
  timeout: 20_000,
});

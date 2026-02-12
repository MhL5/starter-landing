import { notFound } from "next/navigation";

/**
 * All requests that are matched within the [locale] segment will render the not-found page when an unknown route is encountered (e.g. /en/unknown).
 * without this page, they all hit the root not found page which is not localized
 */
export default function CatchAllPage() {
  notFound();
}

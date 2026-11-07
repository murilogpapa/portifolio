import { getContent } from "@/lib/content";
import { ogSize, renderOg } from "@/lib/og-image";

export const alt = getContent("pt").meta.title;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg("pt");
}

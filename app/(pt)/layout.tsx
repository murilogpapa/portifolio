import { RootDocument, buildMetadata } from "@/components/root-document";

export { viewport } from "@/components/root-document";
export const metadata = buildMetadata("pt");

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootDocument locale="pt">{children}</RootDocument>;
}

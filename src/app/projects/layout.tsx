import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Miko Aro’s side projects—where creativity meets code. From web experiments to cycling-inspired builds and photography integrations, passion fuels every project."
};

export default function ProjectsLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}

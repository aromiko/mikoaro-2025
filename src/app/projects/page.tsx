import type { Metadata } from "next";

import { UnderConstruction } from "@/components/sections/under-construction";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Miko Aro’s side projects—where creativity meets code. From web experiments to cycling-inspired builds and photography integrations, passion fuels every project.",
  alternates: { canonical: "/projects" }
};

export default function ProjectsPage() {
  return <UnderConstruction title="Projects" />;
}

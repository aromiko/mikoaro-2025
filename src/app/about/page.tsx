import type { Metadata } from "next";

import { UnderConstruction } from "@/components/sections/under-construction";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover Miko Aro's journey beyond code—blending a passion for web development with cycling, photography, and creating meaningful digital experiences.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return <UnderConstruction title="About" />;
}

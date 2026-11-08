import type { Metadata } from "next";

import { UnderConstruction } from "@/components/sections/under-construction";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Miko Aro—whether for collaborations, inquiries, or sharing ideas. Let's connect and create something amazing together.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return <UnderConstruction title="Contact" />;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Miko Aro—whether for collaborations, inquiries, or sharing ideas. Let's connect and create something amazing together."
};

export default function ContactLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}

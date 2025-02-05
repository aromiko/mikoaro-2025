import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover Miko Aro's journey beyond code—blending a passion for web development with cycling, photography, and creating meaningful digital experiences."
};

export default function AboutLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}

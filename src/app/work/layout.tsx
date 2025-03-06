import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore Miko Aro’s work experience—journeying through frontend development, building seamless web experiences, and solving real-world challenges with modern technologies."
};

export default function WorkLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

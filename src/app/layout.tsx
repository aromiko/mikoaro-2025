import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./assets/styles/globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: {
    template: "Miko Aro | Frontend Web Developer | %s",
    default: "Miko Aro | Frontend Web Developer"
  },
  description:
    "Miko Aro | Frontend Web Developer crafting dynamic, user-friendly, and performance-optimized web experiences with modern technologies.",
  openGraph: {
    title: "Miko Aro | Frontend Web Developer",
    description:
      "Miko Aro | Frontend Web Developer crafting dynamic, user-friendly, and performance-optimized web experiences with modern technologies.",
    url: "https://miko-aro.com",
    siteName: "Miko Aro",
    images: [
      {
        url: "https://miko-aro.com/assets/images/og-image.png",
        width: 1200,
        height: 628
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

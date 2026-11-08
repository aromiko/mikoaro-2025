import type { Route } from "next";

export type SocialPlatform = "facebook" | "instagram" | "linkedin";

type NavLink = { href: Route; label: string };
type SocialLink = { platform: SocialPlatform; href: string; label: string };

export const siteConfig = {
  name: "Miko Aro",
  title: "Miko Aro | Frontend Web Developer",
  description:
    "Miko Aro | Frontend Web Developer crafting dynamic, user-friendly, and performance-optimized web experiences with modern technologies.",
  url: "https://miko-aro.com",
  email: "contact@miko-aro.com",
  locale: "en_US",
  ogImage: "/assets/images/og-image.png",
  nav: [
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" }
  ] satisfies NavLink[] as NavLink[],
  social: [
    {
      platform: "facebook",
      href: "https://www.facebook.com/miko.aro",
      label: "Facebook"
    },
    {
      platform: "instagram",
      href: "https://www.instagram.com/mikoaro",
      label: "Instagram"
    },
    {
      platform: "linkedin",
      href: "https://www.linkedin.com/in/mikoaro/",
      label: "LinkedIn"
    }
  ] satisfies SocialLink[] as SocialLink[]
};

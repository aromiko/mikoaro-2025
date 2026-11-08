import { Hero } from "@/components/sections/hero";
import { HeroBanner } from "@/components/sections/hero-banner";
import { homeAbout, homeIntro, homeProjects } from "@/lib/data/home/home";

export default function HomePage() {
  return (
    <>
      <Hero {...homeIntro} headingLevel="h1" priority />
      <HeroBanner {...homeAbout} />
      <HeroBanner {...homeProjects} />
    </>
  );
}

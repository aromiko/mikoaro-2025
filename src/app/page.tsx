import Hero from "@/components/hero/hero";
import HeroImageBg from "@/components/hero/hero-image-bg/hero-image-bg";
import {
  homeAboutHeroProps,
  homeMainHeroProps,
  homeProjectsHeroProps
} from "@/lib/data/home/home";

export default function Home() {
  return (
    <>
      <Hero {...homeMainHeroProps} />
      <HeroImageBg {...homeAboutHeroProps} />
      <HeroImageBg {...homeProjectsHeroProps} />
    </>
  );
}

import Hero from "@/components/hero/hero";
import HeroImageBg from "@/components/hero/hero-image-bg/hero-image-bg";
import { homeAboutHeroProps, homeMainHeroProps } from "@/lib/data/home/home";

export default function Home() {
  return (
    <main>
      <Hero {...homeMainHeroProps} />
      <HeroImageBg {...homeAboutHeroProps} />
    </main>
  );
}

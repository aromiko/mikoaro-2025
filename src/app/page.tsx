import profileImage from "@/app/assets/images/miko.png";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <main>
      <Hero
        image={profileImage}
        imageAlt="Miko profile picture"
        headerText="Hi, I'm Miko!"
        bodyText="I am a Frontend Developer passionate about crafting seamless user experiences and high-performance web applications. I have proven expertise in building and optimizing platforms for banking, logistics, workforce solutions, and marketing. I have designed and maintained marketing websites, developed scalable and responsive component libraries, and enhanced digital ecosystems with intuitive design systems."
        ctaUrl="/work"
        ctaText="View my work"
      />
    </main>
  );
}

import aboutHeroBg from "@/app/assets/images/about-hero-bg.jpg";
import profileImage from "@/app/assets/images/miko.jpg";
import type { Hero } from "@/components/sections/hero";
import type { HeroBanner } from "@/components/sections/hero-banner";

type HeroProps = React.ComponentProps<typeof Hero>;
type HeroBannerProps = React.ComponentProps<typeof HeroBanner>;

export const homeIntro = {
  image: { src: profileImage, alt: "Portrait of Miko Aro" },
  heading: "Hi, I'm Miko!",
  body: "I am a Frontend Developer passionate about crafting seamless user experiences and high-performance web applications. I have proven expertise in building and optimizing platforms for banking, logistics, and workforce solutions. I have designed and maintained marketing websites, developed scalable and responsive component libraries, and enhanced digital ecosystems with intuitive design systems.",
  cta: { href: "/work", label: "View my work experience" }
} satisfies HeroProps;

export const homeAbout = {
  // Decorative background: empty alt so screen readers skip it.
  backgroundImage: { src: aboutHeroBg, alt: "" },
  heading: "Creating experiences that fuel work and life",
  body: "Work is not just about fulfilling tasks—it's a part of the bigger picture of my life. I believe in living a well-rounded existence where my passions outside of work play an essential role in fueling my energy and creativity. Whether it's exploring new hobbies, engaging in adventures, or simply finding inspiration in everyday moments, I actively seek experiences that enhance both my personal and professional life. These passions help me stay balanced and motivated, ensuring that I’m constantly growing and evolving in all areas.",
  cta: {
    href: "/about",
    label: "Discover more about me",
    subtext: "Explore the hobbies and experiences that keep me inspired!"
  }
} satisfies HeroBannerProps;

export const homeProjects = {
  heading: "Crafting Beyond the Code",
  body: "Outside of work, my passion for web development extends into personal projects that push creativity and innovation. Whether experimenting with new technologies, refining design aesthetics, or solving real-world problems through code, these projects showcase my curiosity and dedication to continuous learning. Each one is a reflection of my drive to build beyond the usual—turning ideas into interactive, meaningful experiences.",
  cta: { href: "/projects", label: "Explore My Creations" }
} satisfies HeroBannerProps;

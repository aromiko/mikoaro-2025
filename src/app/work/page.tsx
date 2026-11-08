import type { Metadata } from "next";

import { Hero } from "@/components/sections/hero";
import { WorkTimeline } from "@/components/sections/work-timeline";
import { workExperience, workHero } from "@/lib/data/work/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore Miko Aro’s work experience—journeying through frontend development, building seamless web experiences, and solving real-world challenges with modern technologies.",
  alternates: { canonical: "/work" }
};

export default function WorkPage() {
  return (
    <>
      <Hero {...workHero} headingLevel="h1" priority />
      <section className="container px-4 py-12 lg:py-20">
        <WorkTimeline items={workExperience} />
      </section>
    </>
  );
}

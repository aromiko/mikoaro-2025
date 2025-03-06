import Hero from "@/components/hero/hero";
import WorkTimeline from "@/components/timeline/work-timeline";
import { workMainHeroProps, workTimelineItems } from "@/lib/data/work/work";

function WorkPage() {
  return (
    <>
      <Hero {...workMainHeroProps} />
      <section className="container px-4 py-12 lg:py-20">
        <WorkTimeline workTimelineItems={workTimelineItems} />
      </section>
    </>
  );
}

export default WorkPage;

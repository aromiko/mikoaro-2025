import Hero from "@/components/hero/hero";
import WorkTimeline from "@/components/timeline/work-timeline";
import { workMainHeroProps, workTimelineItems } from "@/lib/data/work/work";

function WorkPage() {
  return (
    <>
      <section className="">
        <Hero {...workMainHeroProps} />
        <div className="container px-4 py-12 lg:py-20">
          <WorkTimeline workTimelineItems={workTimelineItems} />
        </div>
      </section>
    </>
  );
}

export default WorkPage;

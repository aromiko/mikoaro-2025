import Hero from "@/components/hero/hero";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle
} from "@/components/ui/timeline";
import { workMainHeroProps, workTimelineItems } from "@/lib/data/work/work";
import { cn } from "@/lib/utils";

function WorkPage() {
  return (
    <main>
      <section className="">
        <Hero {...workMainHeroProps} />
        <div className="container px-4 py-12 lg:py-20">
          <Timeline>
            {workTimelineItems.map((item, index) => (
              <TimelineItem key={index} className={item.className}>
                {index % 2 === 0 ? (
                  <>
                    <TimelineSeparator>
                      <TimelineDot>{item.dotContent}</TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <TimelineTitle
                        className={cn(
                          index % 2 === 0 ? "" : "text-start lg:text-end",
                          "font-bold"
                        )}
                      >
                        {item.title}
                      </TimelineTitle>
                      <TimelineDescription
                        className={
                          index % 2 === 0 ? "" : "text-start lg:text-end"
                        }
                      >
                        {item.description}
                      </TimelineDescription>
                    </TimelineContent>
                  </>
                ) : (
                  <>
                    <TimelineContent>
                      <TimelineTitle
                        className={cn(
                          index % 2 === 0 ? "" : "text-start lg:text-end",
                          "font-bold"
                        )}
                      >
                        {item.title}
                      </TimelineTitle>
                      <TimelineDescription
                        className={
                          index % 2 === 0 ? "" : "text-start lg:text-end"
                        }
                      >
                        {item.description}
                      </TimelineDescription>
                    </TimelineContent>
                    <TimelineSeparator>
                      <TimelineDot>{item.dotContent}</TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                  </>
                )}
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </section>
    </main>
  );
}

export default WorkPage;

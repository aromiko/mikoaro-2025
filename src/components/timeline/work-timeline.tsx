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
import { cn } from "@/lib/utils";
import { JSX } from "react";

import styles from "./work-timeline.module.css";

type WorkTimelineProps = {
  workTimelineItems: {
    title?: string;
    description?: {
      position: string;
      tenure: string;
      work: string;
    };
    dotContent?: JSX.Element;
    className: string;
  }[];
};

function WorkTimeline({ workTimelineItems }: WorkTimelineProps) {
  return (
    <Timeline>
      {workTimelineItems.map((item, index) => (
        <div key={index}>
          {index % 2 === 0 ? (
            <TimelineItem className="lg:before:flex-1">
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
                  className={index % 2 === 0 ? "" : "text-start lg:text-end"}
                >
                  {item.description && (
                    <>
                      <div className={styles.position}>
                        {item.description.position}
                      </div>
                      <div>{item.description.tenure}</div>
                      <p className={styles.workDescription}>
                        {item.description.work}
                      </p>
                    </>
                  )}
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          ) : (
            <TimelineItem className="flex-row-reverse lg:flex-row lg:after:flex-1">
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
                  className={index % 2 === 0 ? "" : "text-start lg:text-end"}
                >
                  {item.description && (
                    <>
                      <div className={styles.position}>
                        {item.description.position}
                      </div>
                      <div>{item.description.tenure}</div>
                      <p className={styles.workDescription}>
                        {item.description.work}
                      </p>
                    </>
                  )}
                </TimelineDescription>
              </TimelineContent>
              <TimelineSeparator>
                <TimelineDot>{item.dotContent}</TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
            </TimelineItem>
          )}
        </div>
      ))}
    </Timeline>
  );
}

export default WorkTimeline;

import { cn } from "cn";
import Image from "next/image";

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
import type { WorkExperience } from "@/lib/types";

/**
 * On mobile the line sits on the left. On large screens entries alternate
 * sides; the empty ::before / ::after pseudo-element is the spacer that
 * pushes each entry to its side of the center line.
 */
export function WorkTimeline({ items }: { items: WorkExperience[] }) {
  return (
    <Timeline aria-label="Work history">
      {items.map((item, index) => {
        const isLeft = index % 2 === 1;

        return (
          <TimelineItem
            key={`${item.company}-${item.tenure}`}
            className={cn(
              isLeft
                ? "lg:flex-row-reverse lg:before:flex-1"
                : "lg:before:flex-1"
            )}
          >
            <TimelineSeparator>
              <TimelineDot>
                <Image
                  src={item.logo}
                  alt={`${item.company} logo`}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className={cn(isLeft && "lg:text-end")}>
              <TimelineTitle>{item.company}</TimelineTitle>
              <TimelineDescription>
                <p className="text-foreground">{item.position}</p>
                <p>{item.tenure}</p>
                <p className="mt-4 text-foreground">{item.summary}</p>
              </TimelineDescription>
            </TimelineContent>
          </TimelineItem>
        );
      })}

      {/* Terminal dot that caps the line */}
      <TimelineItem
        aria-hidden="true"
        className="lg:before:flex-1 lg:after:flex-1"
      >
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
      </TimelineItem>
    </Timeline>
  );
}

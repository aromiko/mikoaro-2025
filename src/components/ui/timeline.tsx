import { cn } from "cn";
import type { ComponentProps } from "react";

// Vertical timeline primitives. Orientation support was dropped because the
// site only ever renders a vertical timeline; this also lets the primitives
// stay server components (no context needed).

function Timeline({ className, ...props }: ComponentProps<"ol">) {
  return (
    <ol
      data-slot="timeline"
      className={cn("flex flex-col", className)}
      {...props}
    />
  );
}

function TimelineItem({ className, ...props }: ComponentProps<"li">) {
  return (
    <li
      data-slot="timeline-item"
      className={cn("flex gap-4", className)}
      {...props}
    />
  );
}

function TimelineSeparator({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline-separator"
      className={cn("flex flex-col items-center", className)}
      {...props}
    />
  );
}

function TimelineDot({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline-dot"
      className={cn(
        "mt-1 flex size-12 items-center justify-center empty:after:block empty:after:size-5 empty:after:rounded-full empty:after:bg-current",
        className
      )}
      {...props}
    />
  );
}

function TimelineConnector({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline-connector"
      className={cn("my-2 w-0.5 flex-1 bg-border", className)}
      {...props}
    />
  );
}

function TimelineContent({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline-content"
      className={cn("flex-1 pb-8", className)}
      {...props}
    />
  );
}

function TimelineTitle({ className, ...props }: ComponentProps<"h2">) {
  return (
    <h2
      data-slot="timeline-title"
      className={cn("font-bold", className)}
      {...props}
    />
  );
}

function TimelineDescription({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="timeline-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

export {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle
};

import { cn } from "cn";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { Cta, ImageAsset } from "@/lib/types";

type HeroProps = {
  heading: string;
  body: string;
  /** Use "h1" only for the first hero on a page. */
  headingLevel?: "h1" | "h2";
  image?: ImageAsset;
  imagePosition?: "left" | "right";
  backgroundImage?: ImageAsset;
  cta?: Cta;
  /** Set on the hero that holds the page's LCP image so it loads immediately. */
  priority?: boolean;
};

export function Hero({
  heading,
  body,
  headingLevel: Heading = "h2",
  image,
  imagePosition = "left",
  backgroundImage,
  cta,
  priority = false
}: HeroProps) {
  const loadingProps = priority
    ? ({ loading: "eager", fetchPriority: "high" } as const)
    : {};

  return (
    <section className="relative">
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage.src}
            alt={backgroundImage.alt}
            fill
            sizes="100vw"
            placeholder="blur"
            className="object-cover"
            {...loadingProps}
          />
          <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        </>
      )}

      <div
        className={cn(
          "relative z-10 container flex flex-col gap-8 px-4 py-12 lg:flex-row lg:py-20",
          imagePosition === "right" && "lg:flex-row-reverse",
          backgroundImage && "text-white"
        )}
      >
        {image && (
          <div className="relative aspect-square w-full min-w-0 lg:min-w-96">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              placeholder="blur"
              className="rounded-lg object-cover"
              {...loadingProps}
            />
          </div>
        )}

        <div>
          <Heading className="text-4xl font-bold text-balance">
            {heading}
          </Heading>
          <p className="mt-4 text-xl text-pretty">{body}</p>
          {cta && (
            <Button size="lg" className="mt-8 w-full lg:w-auto" asChild>
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

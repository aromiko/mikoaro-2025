import { cn } from "cn";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import type { Cta, ImageAsset } from "@/lib/types";

type HeroBannerProps = {
  heading: string;
  body: string;
  backgroundImage?: ImageAsset;
  cta?: Cta & { subtext?: string };
};

/** Centered, full-width banner with an optional darkened background photo. */
export function HeroBanner({
  heading,
  body,
  backgroundImage,
  cta
}: HeroBannerProps) {
  return (
    <section className="relative flex w-full">
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage.src}
            alt={backgroundImage.alt}
            fill
            sizes="100vw"
            placeholder="blur"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        </>
      )}

      <div
        className={cn(
          "relative z-10 container flex w-full flex-col items-center justify-center px-4 py-12 text-center lg:py-20",
          backgroundImage ? "text-white" : "text-foreground"
        )}
      >
        <h2 className="text-4xl font-bold text-balance">{heading}</h2>
        <p className="mt-4 text-xl text-pretty">{body}</p>
        {cta && (
          <>
            <Button
              variant={backgroundImage ? "outline" : "default"}
              size="lg"
              className={cn("mt-8", backgroundImage && "text-primary")}
              asChild
            >
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
            {cta.subtext && <p className="mt-2 text-xs">{cta.subtext}</p>}
          </>
        )}
      </div>
    </section>
  );
}

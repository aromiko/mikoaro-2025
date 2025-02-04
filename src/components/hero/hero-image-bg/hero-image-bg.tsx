import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import styles from "./hero-image-bg.module.css";

type HeroImageBgProps = {
  bgImage?: StaticImageData;
  bgImageAlt?: string;
  headerText: string;
  bodyText: string;
  ctaUrl?: string;
  ctaText?: string;
  ctaSubtext?: string;
};

function HeroImageBg({
  bgImage,
  bgImageAlt,
  headerText,
  bodyText,
  ctaUrl,
  ctaText,
  ctaSubtext
}: HeroImageBgProps) {
  return (
    <section className={styles.mainContainer}>
      {bgImage && (
        <>
          <Image
            src={bgImage}
            alt={bgImageAlt || "Background Image"}
            layout="fill"
            objectFit="cover"
          />
          <div className={styles.overlay}></div>
        </>
      )}

      <div
        className={cn(
          !bgImage ? "text-foreground" : "text-white",
          styles.innerContainer
        )}
      >
        {headerText && <h1 className={styles.header}>{headerText}</h1>}
        {bodyText && <p className={styles.body}>{bodyText}</p>}
        {ctaUrl && (
          <Button
            variant="outline"
            size="lg"
            className="mt-8 text-primary"
            asChild
          >
            <Link href={ctaUrl}>{ctaText || "CTA Text"}</Link>
          </Button>
        )}
        {ctaSubtext && <span className={styles.ctaSubtext}>{ctaSubtext}</span>}
      </div>
    </section>
  );
}

export default HeroImageBg;

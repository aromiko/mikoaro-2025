import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";
import stylesBg from "./hero-image-bg/hero-image-bg.module.css";
import styles from "./hero.module.css";

type HeroProps = {
  bgImage?: StaticImageData;
  bgImageAlt?: string;
  image?: StaticImageData;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  headerText: string;
  bodyText: string;
  ctaUrl?: string;
  ctaText?: string;
};

function Hero({
  bgImage,
  bgImageAlt,
  image,
  imageAlt,
  imagePosition,
  headerText,
  bodyText,
  ctaUrl,
  ctaText
}: HeroProps) {
  return (
    <section
      className={cn(
        { [styles.rowReverse]: imagePosition === "right" },
        styles.mainContainer
      )}
    >
      {bgImage && (
        <>
          <Image
            src={bgImage}
            alt={bgImageAlt || "Background Image"}
            layout="fill"
            objectFit="cover"
          />
          <div className={stylesBg.overlay}></div>
        </>
      )}

      <div className={styles.innerContainer}>
        {image && (
          <div className={styles.imageContainer}>
            <AspectRatio ratio={1 / 1}>
              <Image
                src={image}
                alt={imageAlt || "Image of hero component"}
                className={styles.image}
                layout="fill"
              />
            </AspectRatio>
          </div>
        )}

        <div className={cn({ "text-white z-10": bgImage })}>
          {headerText && <h1 className={styles.header}>{headerText}</h1>}
          {bodyText && <p className={styles.body}>{bodyText}</p>}
          {ctaUrl && (
            <Button variant="default" size="lg" className={styles.cta} asChild>
              <Link href={ctaUrl}>{ctaText || "CTA Text"}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;

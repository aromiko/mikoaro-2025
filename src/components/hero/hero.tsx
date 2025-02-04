import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import { Button } from "../ui/button";
import styles from "./hero.module.css";

type HeroProps = {
  image: StaticImageData;
  imageAlt?: string;
  headerText: string;
  bodyText: string;
  ctaUrl?: string;
  ctaText?: string;
};

function Hero({
  image,
  imageAlt,
  headerText,
  bodyText,
  ctaUrl,
  ctaText
}: HeroProps) {
  return (
    <section className={styles.mainContainer}>
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
      <div>
        {headerText && <h1 className={styles.header}>{headerText}</h1>}
        {bodyText && <p className={styles.body}>{bodyText}</p>}
        {ctaUrl && (
          <Button variant="default" size="lg" className={styles.cta} asChild>
            <Link href={ctaUrl}>{ctaText || "CTA Text"}</Link>
          </Button>
        )}
      </div>
    </section>
  );
}

export default Hero;

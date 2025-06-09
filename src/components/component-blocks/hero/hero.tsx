import Media from "@/components/building-blocks/media/media";
import { TypeComponentHero } from "@/lib/types";

export default function Hero({
  heroTitle,
  heroBody,
  heroImage
}: TypeComponentHero) {
  return (
    <section className="justify-items-center">
      <div className="container flex gap-4">
        <div className="rounded-2xl border p-6">
          {heroTitle && <h2 className="text-2xl font-bold">{heroTitle}</h2>}
          {heroTitle && <p>{heroBody}</p>}
        </div>
        {heroImage && (
          <>
            <div>
              <Media
                data={heroImage}
                wrapperCssClass="size-96"
                imageCssClass="object-cover rounded-2xl"
              />
            </div>

            <div>
              <Media
                data={heroImage}
                wrapperCssClass="size-96"
                imageCssClass="object-cover rounded-2xl"
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
}

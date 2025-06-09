import { MediaLink } from "@/components/building-blocks/media/media-link/media-with-link";
import { TypeComponentMedia } from "@/lib/types";
import { cn } from "@/lib/utils/classnames";
import Image from "next/image";

interface MediaProps {
  data: TypeComponentMedia;
  imageCssClass?: string;
  wrapperCssClass?: string;
}

export default function Media({
  data,
  imageCssClass,
  wrapperCssClass
}: MediaProps) {
  if (data.mediaFill) {
    return (
      <MediaLink url={data.mediaLinkUrl} isExternal={data.mediaLinkIsExternal}>
        <div className={cn("relative", wrapperCssClass)}>
          <Image
            className={imageCssClass}
            src={data.mediaImage.url}
            alt={
              data.mediaAltText ||
              data.mediaImage.description ||
              "Basic media image"
            }
            fill={true}
            loading={data.mediaEager ? "eager" : "lazy"}
          />
        </div>
      </MediaLink>
    );
  }

  return (
    <MediaLink url={data.mediaLinkUrl} isExternal={data.mediaLinkIsExternal}>
      <div className={wrapperCssClass}>
        <Image
          className={imageCssClass}
          src={data.mediaImage.url}
          alt={
            data.mediaAltText ||
            data.mediaImage.description ||
            "Basic media image"
          }
          height={data.mediaHeight || data.mediaImage.height}
          width={data.mediaWidth || data.mediaImage.width}
          loading={data.mediaEager ? "eager" : "lazy"}
        />
      </div>
    </MediaLink>
  );
}

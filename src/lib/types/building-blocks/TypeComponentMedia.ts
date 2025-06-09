import { TypeComponentContentfulMedia } from "@/lib/types";

export interface TypeComponentMedia {
  mediaName?: string;
  mediaImage: TypeComponentContentfulMedia;
  mediaAltText: string;
  mediaWidth?: number;
  mediaHeight?: number;
  mediaFill: boolean;
  mediaEager: boolean;
  mediaLinkUrl?: string;
  mediaLinkIsExternal: boolean;
}

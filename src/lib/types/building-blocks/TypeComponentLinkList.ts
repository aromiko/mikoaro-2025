import { TypeComponentLink } from "@/lib/types";

export interface TypeComponentLinkList {
  linkListName: string;
  linkListHeader?: string;
  linkListGroupCollection?: { items: TypeComponentLink[] };
}

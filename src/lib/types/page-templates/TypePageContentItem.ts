import { TypeComponentFooter } from "@/lib/types/component-blocks/TypeComponentFooter";
import { TypeComponentHeader } from "@/lib/types/component-blocks/TypeComponentHeader";

import { TypeComponentHero } from "../component-blocks/TypeComponentHero";

export type TypePageContentItem =
  | TypeComponentHeader
  | TypeComponentFooter
  | TypeComponentHero;

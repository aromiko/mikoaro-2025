import { TypeComponentBase, TypeComponentMedia } from "@/lib/types";

export interface TypeComponentHero extends TypeComponentBase {
  __typename: "ComponentHero";
  sys: { id: string };
  heroName: string;
  heroTitle?: string;
  heroBody?: string;
  heroImage?: TypeComponentMedia;
}

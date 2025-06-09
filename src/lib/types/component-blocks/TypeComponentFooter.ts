import { TypeComponentBase } from "@/lib/types";

export interface TypeComponentFooter extends TypeComponentBase {
  __typename: "ComponentFooter";
  sys: { id: string };
  footerName: string;
}

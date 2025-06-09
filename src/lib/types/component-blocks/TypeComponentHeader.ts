import { TypeComponentBase, TypeComponentBasicMedia } from "@/lib/types";

export interface TypeComponentHeader extends TypeComponentBase {
  __typename: "ComponentHeader";
  sys: { id: string };
  headerName: string;
  headerLogo?: TypeComponentBasicMedia;
}

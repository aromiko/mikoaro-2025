import { ComponentTypenames } from "@/lib/configurations/component-registry";

export interface TypeComponentBase {
  __typename: ComponentTypenames;
  sys: {
    id: string;
  };
}

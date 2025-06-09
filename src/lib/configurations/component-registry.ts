export const ComponentRegistry = {
  // Building Blocks
  Link: "ComponentLink",
  LinkList: "ComponentLinkList",
  Media: "ComponentMedia",

  // Component Blocks
  Footer: "ComponentFooter",
  Header: "ComponentHeader",
  Hero: "ComponentHero"
} as const;

export type ComponentTypenames =
  | (typeof ComponentRegistry)[keyof typeof ComponentRegistry]
  | undefined;

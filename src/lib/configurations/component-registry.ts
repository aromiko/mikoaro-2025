export const ComponentRegistry = {
  // Building Blocks
  BasicLink: "ComponentBasicLink",
  BasicLinkList: "ComponentBasicLinkList",
  BasicMedia: "ComponentBasicMedia",

  // Component Blocks
  Footer: "ComponentFooter",
  Header: "ComponentHeader",
  Hero: "ComponentHero"
} as const;

export type ComponentTypenames =
  | (typeof ComponentRegistry)[keyof typeof ComponentRegistry]
  | undefined;

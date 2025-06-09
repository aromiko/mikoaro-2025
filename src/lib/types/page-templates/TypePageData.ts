import { TypePageContentItem } from "./TypePageContentItem";

export interface TypePageData {
  componentPageCollection?: {
    items: {
      pageName: string;
      pageSlug?: string;
      pageContentsCollection?: {
        // Make inner collections optional too
        items: (TypePageContentItem | null)[]; // Items can be null if there's a resolution issue
      } | null;
    }[];
  } | null;
}

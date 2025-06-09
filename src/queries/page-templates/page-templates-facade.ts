import { ContentfulDataService } from "@/lib/services/contentful-data-service";
import QUERY_PAGE_BY_SLUG from "@/queries/page-templates/page.gql";
import { print as graphQLPrint } from "graphql";

export const PageTemplatesFacade = {
  async getPageBySlug(slug: string) {
    try {
      const data = await ContentfulDataService.fetchDataBySlug(
        QUERY_PAGE_BY_SLUG,
        slug
      );

      return data?.componentPageCollection?.items?.[0] ?? null;
    } catch (error: unknown) {
      const err = error instanceof Error ? error : new Error(String(error));

      console.error("[PageTemplatesFacade Error]", {
        slug,
        query: graphQLPrint(QUERY_PAGE_BY_SLUG),
        message: err.message,
        stack: err.stack
      });

      throw new Error(
        `[PageTemplatesFacade]: Failed to fetch page by slug "${slug}"\n${err.message}`
      );
    }
  }
};

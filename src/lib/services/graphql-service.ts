import { DefaultAppSettings } from "@/lib/defaults/default-app.settings";
import { GraphQLClient } from "graphql-request";

const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ENVIRONMENT,
  CONTENTFUL_GRAPHQL_ENDPOINT,
  CONTENTFUL_API_MODE,
  CONTENTFUL_DELIVERY_ACCESS_TOKEN,
  CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  SSR_REVALIDATE_TIME
} = process.env;

// Determine access token based on API mode
const accessToken =
  CONTENTFUL_API_MODE === "delivery"
    ? CONTENTFUL_DELIVERY_ACCESS_TOKEN
    : CONTENTFUL_PREVIEW_ACCESS_TOKEN;

// Fallbacks from default settings
const environment =
  CONTENTFUL_ENVIRONMENT || DefaultAppSettings.contentfulEnvironment;
const graphqlEndpoint =
  CONTENTFUL_GRAPHQL_ENDPOINT || DefaultAppSettings.contentfulGraphqlEndpoint;
const revalidateTime = parseInt(SSR_REVALIDATE_TIME ?? "60", 10);

const CONTENTFUL_GRAPHQL_URL = `${graphqlEndpoint}/spaces/${CONTENTFUL_SPACE_ID}/environments/${environment}`;

const GraphQLService = new GraphQLClient(CONTENTFUL_GRAPHQL_URL, {
  headers: {
    Authorization: `Bearer ${accessToken}`
  },
  fetch: async (url, options) => {
    try {
      const response = await fetch(url, {
        ...options,
        next: { revalidate: revalidateTime }
      });

      if (!response.ok) {
        const message =
          response.status === 401
            ? "Unauthorized (401) - Invalid or expired access token"
            : response.status === 400
              ? "Bad Request (400) - Malformed request"
              : `HTTP Error ${response.status}`;

        throw new Error(`[GraphQLService]: ${message}`);
      }

      return response;
    } catch (error: unknown) {
      const err = error instanceof Error ? error : new Error(String(error));

      console.error("[GraphQLService Fetch Error]", {
        url,
        options,
        error: err.message || error
      });

      throw new Error(`[GraphQLService]: Fetch failed. ${err.message}`);
    }
  }
});

export default GraphQLService;

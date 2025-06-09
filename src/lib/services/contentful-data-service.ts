import GraphQLService from "@/lib/services/graphql-service";
import { TypePageData } from "@/lib/types";
import { DocumentNode } from "graphql";

const isPreview = process.env.CONTENTFUL_API_MODE === "preview";

// Private helper for executing GraphQL requests and handling common errors
async function _executeGraphQLRequest<TResponse>(
  requestFn: () => Promise<TResponse>,
  operationContext: string
): Promise<TResponse> {
  try {
    return await requestFn();
  } catch (error) {
    const baseMessage = `[ContentfulDataService]: An error occurred during ${operationContext}.`;
    if (error instanceof Error) {
      throw new Error(
        `${baseMessage}\nOriginal Error: ${error.message}\nStack: ${error.stack}`
      );
    } else {
      throw new Error(`${baseMessage}\nDetails: ${String(error)}`);
    }
  }
}

export const ContentfulDataService = {
  async fetchDataByQuery<TResponse>(
    query: DocumentNode,
    variables: Record<string, unknown> = {}
  ): Promise<TResponse> {
    const queryName =
      query.definitions[0]?.kind === "OperationDefinition"
        ? query.definitions[0].name?.value
        : "unnamed query";
    return _executeGraphQLRequest<TResponse>(
      () =>
        GraphQLService.request<TResponse>(query, { ...variables, isPreview }),
      `WorkspaceDataByQuery (query: ${queryName || "GraphQL Query"})`
    );
  },

  async fetchDataById<TResponse>(
    query: DocumentNode,
    id: string,
    additionalVariables: Record<string, unknown> = {}
  ): Promise<TResponse> {
    const queryName =
      query.definitions[0]?.kind === "OperationDefinition"
        ? query.definitions[0].name?.value
        : "unnamed query";
    return _executeGraphQLRequest<TResponse>(
      () =>
        GraphQLService.request<TResponse>(query, {
          id,
          ...additionalVariables,
          isPreview
        }),
      `WorkspaceDataById (query: ${queryName || "GraphQL Query"}, id: ${id})`
    );
  },

  async fetchDataBySlug(
    query: DocumentNode,
    slug: string,
    additionalVariables: Record<string, unknown> = {} // Use 'unknown'
  ): Promise<TypePageData> {
    const queryName =
      query.definitions[0]?.kind === "OperationDefinition"
        ? query.definitions[0].name?.value
        : "unnamed query";
    return _executeGraphQLRequest<TypePageData>(
      () =>
        GraphQLService.request<TypePageData>(query, {
          slug,
          ...additionalVariables,
          isPreview
        }),
      `WorkspaceDataBySlug (query: ${queryName || "GraphQL Query"}, slug: ${slug})`
    );
  }
};

// src/components/component-blocks/adaptive-renderers/component-renderer/component-renderer.tsx
// Adjust the path as per your project structure
import { TypePageContentItem } from "@/lib/types";
// Adjust path
import { JSX } from "react";

import ComponentSelector from "./component-selector";

// Adjust path to your new file

interface ComponentRendererProps {
  data: TypePageContentItem;
}

export default function ComponentRenderer({
  data
}: ComponentRendererProps): JSX.Element | null {
  // Safely get __typename and id for logging, even if content or its properties are sparse initially.
  const logReadyTypeName: string = String(data?.__typename); // Handles potential null/undefined content
  const logReadyId: string = data?.sys?.id || "unknown ID";

  try {
    if (!data) {
      console.warn("[ComponentRenderer] Content item is null or undefined.");
      return <div>Error: Content item invalid.</div>;
    }

    const typeName = data.__typename;

    if (!typeName) {
      console.warn(
        `[ComponentRenderer] Content item (ID: "${logReadyId}") has a falsy __typename: '${typeName}'.`,
        data
      );
      return <div>Error: Component type unknown.</div>;
    }

    // typeName is now a validated string.
    // Delegate the actual component rendering to ComponentSelector.
    return <ComponentSelector data={data} typeName={typeName} />;
  } catch (error) {
    console.error(
      `[ComponentRenderer] Critical error during component selection/rendering (type: "${logReadyTypeName}", id: "${logReadyId}"):`,
      error
    );
    // This is a generic fallback UI.
    return <div>Error rendering component. Please check application logs.</div>;
  }
}

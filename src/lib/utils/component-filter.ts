// Filter components based on the content entry's "__typename" to prepare for SectionRenderer component assembly process under a section
import { ComponentTypenames } from "@/lib/configurations/component-registry";
import { TypePageContentItem } from "@/lib/types";

export function filterComponentsForAssembly(
  components: ReadonlyArray<TypePageContentItem | null | undefined>, // Good practice to make input components readonly too
  allowedTypes: ReadonlyArray<ComponentTypenames> // <--- CHANGE THIS LINE
): TypePageContentItem[] {
  if (!components) return [];
  return components.filter((component): component is TypePageContentItem => {
    // Type guard for filtering out nulls/undefined
    if (!component?.__typename) return false;
    // 'includes' method is available on ReadonlyArray
    return allowedTypes.includes(component.__typename as ComponentTypenames);
  });
}

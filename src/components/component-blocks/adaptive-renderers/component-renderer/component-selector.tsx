// src/components/component-blocks/adaptive-renderers/component-selector/component-selector.tsx
// Adjust the path as per your project structure
import Footer from "@/components/component-blocks/footer/footer";
// Adjust path as needed

// Import all your actual presentational components that can be rendered
import Header from "@/components/component-blocks/header/header";
import Hero from "@/components/component-blocks/hero/hero";
import { ComponentTypenames } from "@/lib/configurations/component-registry";
import {
  TypeComponentFooter,
  TypeComponentHeader,
  TypeComponentHero,
  TypePageContentItem
} from "@/lib/types";
import { JSX } from "react";

// import Hero from '@/components/component-blocks/hero/hero';
// ... import other components (TextBlock, etc.)

interface ComponentSelectorProps {
  // 'content' is the full data object for the component.
  // It's already been validated to exist and have a __typename by the ComponentRenderer.
  data: TypePageContentItem;
  // 'typeName' is the validated, non-empty string __typename.
  typeName: ComponentTypenames;
}

export default function ComponentSelector({
  data,
  typeName
}: ComponentSelectorProps): JSX.Element | null {
  // The typeName is guaranteed by ComponentRenderer to be a valid, non-falsy string here.
  // The content object corresponds to this typeName.

  switch (typeName) {
    case "ComponentHeader":
      // We cast 'content' to its specific type, which is safe due to the 'typeName' check.
      return <Header {...(data as TypeComponentHeader)} />;
    case "ComponentFooter":
      return <Footer {...(data as TypeComponentFooter)} />;
    case "ComponentHero":
      return <Hero {...(data as TypeComponentHero)} />;
    default:
      // Fallback for __typename values that are valid strings but have no matching component.
      // The initial console.warn can be here or in the ComponentRenderer.
      // For consistency, if ComponentRenderer already warns, this could just be the fallback UI.
      console.warn(
        `[ComponentSelector] No component implemented for __typename: "${typeName}" (ID: ${data.sys.id})`
      );
      return <div>{`Component type "${typeName}" not found.`}</div>;
  }
}

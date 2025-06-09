import SectionRenderer from "@/components/component-blocks/adaptive-renderers/section-renderer/section-renderer";
import { ComponentSections } from "@/lib/configurations/component-sections";
import { TypePageContentItem } from "@/lib/types";
import { filterComponentsForAssembly } from "@/lib/utils/component-filter";
import { PageTemplatesFacade } from "@/queries/page-templates/page-templates-facade";
import { notFound } from "next/navigation";

interface PageProps {
  slug: string;
}

export default async function Page({ slug }: PageProps) {
  // This facade method should now return page data with all component fields populated
  const page = await PageTemplatesFacade.getPageBySlug(slug);

  if (!page || slug === "404") {
    return notFound();
  }

  // The items in page.pageContentsCollection.items now contain full data
  const allComponents = page.pageContentsCollection
    ?.items as TypePageContentItem[];

  const headerComponents = filterComponentsForAssembly(
    allComponents,
    ComponentSections.Header
  );

  const mainComponents = filterComponentsForAssembly(
    allComponents,
    ComponentSections.Main
  );

  const footerComponents = filterComponentsForAssembly(
    allComponents,
    ComponentSections.Footer
  );

  return (
    <>
      <SectionRenderer components={headerComponents} sectionAs="header" />
      <SectionRenderer components={mainComponents} sectionAs="main" />
      <SectionRenderer components={footerComponents} sectionAs="footer" />
    </>
  );
}

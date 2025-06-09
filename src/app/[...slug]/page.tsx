import Page from "@/components/page-templates/page/page";

interface DynamicPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function DynamicPage({ params }: DynamicPageProps) {
  const { slug } = await params;
  const fullSlug = slug.join("/");

  return <Page slug={fullSlug} />;
}

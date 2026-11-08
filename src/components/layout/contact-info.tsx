import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-1 pt-4">
      <Button variant="link" size="inline" className="w-fit" asChild>
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
      </Button>
      <small className="text-sm">
        © {new Date().getFullYear()} {siteConfig.name}
      </small>
    </div>
  );
}

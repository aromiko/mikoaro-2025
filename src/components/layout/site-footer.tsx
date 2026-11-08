import { ContactInfo } from "@/components/layout/contact-info";
import { SocialLinks } from "@/components/layout/social-links";

export function SiteFooter() {
  return (
    <footer className="border-t-2 bg-background text-foreground">
      <div className="container flex flex-col px-4 py-12">
        <SocialLinks />
        <ContactInfo />
      </div>
    </footer>
  );
}

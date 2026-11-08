import { socialIcons } from "@/components/icons/social-icons";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function SocialLinks() {
  return (
    <ul className="flex gap-2">
      {siteConfig.social.map(({ platform, href, label }) => {
        const Icon = socialIcons[platform];

        return (
          <li key={platform}>
            <Button variant="ghost" size="icon-xl" asChild>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} (opens in a new tab)`}
              >
                <Icon />
              </a>
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

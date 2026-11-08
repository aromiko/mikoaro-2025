import { NavLink } from "@/components/layout/nav-link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function MainNav() {
  return (
    <nav aria-label="Main">
      <ul className="flex gap-4">
        {siteConfig.nav.map(({ href, label }) => (
          <li key={href}>
            <Button
              variant="link"
              className="aria-[current=page]:underline"
              asChild
            >
              <NavLink href={href}>{label}</NavLink>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

import { Menu } from "lucide-react";
import Link from "next/link";

import { ContactInfo } from "@/components/layout/contact-info";
import { NavLink } from "@/components/layout/nav-link";
import { SocialLinks } from "@/components/layout/social-links";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { siteConfig } from "@/lib/site";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Open navigation menu">
          <Menu className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-6">
        <SheetHeader className="flex-row items-center gap-4 p-0 pt-4">
          <ThemeToggle />
          <SheetTitle asChild>
            <SheetClose asChild>
              <Button
                variant="link"
                size="inline"
                className="text-2xl font-extrabold text-foreground"
                asChild
              >
                <Link href="/">miko aro</Link>
              </Button>
            </SheetClose>
          </SheetTitle>
          <SheetDescription className="sr-only">
            Site navigation
          </SheetDescription>
        </SheetHeader>
        <nav aria-label="Main">
          <ul className="mt-4 flex flex-col gap-4">
            {siteConfig.nav.map(({ href, label }) => (
              <li key={href}>
                <SheetClose asChild>
                  <Button
                    variant="link"
                    size="inline"
                    className="aria-[current=page]:underline"
                    asChild
                  >
                    <NavLink href={href}>{label}</NavLink>
                  </Button>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
        <SheetFooter className="p-0">
          <ContactInfo />
          <SocialLinks />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

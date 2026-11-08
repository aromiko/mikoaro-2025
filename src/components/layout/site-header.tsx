import Link from "next/link";

import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background shadow-sm">
      <div className="container flex items-center justify-between p-4">
        <Button
          variant="link"
          size="inline"
          className="text-2xl font-extrabold text-foreground"
          asChild
        >
          <Link href="/">miko aro</Link>
        </Button>
        <div className="hidden items-center gap-4 lg:flex">
          <MainNav />
          <ThemeToggle />
        </div>
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

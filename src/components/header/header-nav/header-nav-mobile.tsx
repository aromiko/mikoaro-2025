import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { links } from "@/lib/data/header/header-nav";
import { Menu } from "lucide-react";
import Link from "next/link";

import styles from "./header-nav-mobile.module.css";

function HeaderNavMobile() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={24} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className={styles.sheetHeader}>
          <SheetTitle className={styles.sheetTitle}>
            <ThemeToggle />
            <SheetClose asChild>
              <Button
                variant="link"
                size="link-no-padding"
                className="font-extrabold text-2xl text-foreground outline-foreground"
                asChild
              >
                <Link href="/">miko aro</Link>
              </Button>
            </SheetClose>
          </SheetTitle>
        </SheetHeader>
        <nav className={styles.mainContainer}>
          <ul className={styles.links}>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <SheetClose asChild>
                  <Button variant="link" size="link-no-padding" asChild>
                    <Link href={href} className={styles.link}>
                      {label}
                    </Link>
                  </Button>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default HeaderNavMobile;

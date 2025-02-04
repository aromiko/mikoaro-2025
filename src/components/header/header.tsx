import HeaderNav from "@/components/header/header-nav/header-nav";
import HeaderNavMobile from "@/components/header/header-nav/header-nav-mobile";
import Link from "next/link";

import { ThemeToggle } from "../theme/theme-toggle";
import { Button } from "../ui/button";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.mainContainer}>
      <div className={styles.innerContainer}>
        <Button
          variant="link"
          size="link-no-padding"
          asChild
          className="text-foreground font-extrabold text-2xl"
        >
          <Link href="/">miko aro</Link>
        </Button>
        <div className={styles.navContainer}>
          <HeaderNav />
          <ThemeToggle />
        </div>

        <div className={styles.mobileNavContainer}>
          <HeaderNavMobile />
        </div>
      </div>
    </header>
  );
}

export default Header;

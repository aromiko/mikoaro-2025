import HeaderNav from "@/components/header/header-nav/header-nav";
import Link from "next/link";

import { ThemeToggle } from "../theme/theme-toggle";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.mainContainer}>
      <div className={styles.innerContainer}>
        <Link href="/" className="font-extrabold text-2xl">
          miko aro
        </Link>
        <div className={styles.navContainer}>
          <HeaderNav />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;

import { Button } from "@/components/ui/button";
import { links } from "@/lib/data/header/header-nav";
import Link from "next/link";

import styles from "./header-nav.module.css";

function HeaderNav() {
  return (
    <nav className={styles.mainContainer}>
      <ul className={styles.links}>
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <Button variant="link">
              <Link href={href} className={styles.link}>
                {label}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderNav;

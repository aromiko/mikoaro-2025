import { Button } from "@/components/ui/button";
import { footerLinks } from "@/lib/data/footer/footer-links";

import styles from "./footer-links.module.css";

function FooterLinks() {
  return (
    <ul className={styles.links}>
      {footerLinks.map(({ href, icon }) => (
        <li key={href}>
          <Button variant="ghost" size="icon-lg" asChild>
            <a href={href} target="_blank" rel="noopener noreferrer">
              {icon}
            </a>
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default FooterLinks;

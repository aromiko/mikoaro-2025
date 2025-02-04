import { Button } from "../ui/button";
import FooterLinks from "./footer-links/footer-links";
import styles from "./footer.module.css";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={styles.mainContainer}>
      <div className={styles.innerContainer}>
        <FooterLinks />
        <div className={styles.emailContainer}>
          <Button variant="link" size="link-no-padding">
            <a href="mailto:contact@miko-aro.com">contact@miko-aro.com</a>
          </Button>
          <span>{`© ${year}`}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

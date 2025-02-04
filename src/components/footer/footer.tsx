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
        <Button variant="link" className={styles.email}>
          <a href="mailto:contact@miko-aro.com">contact@miko-aro.com</a>
        </Button>
        <span className="px-4">{`© ${year}`}</span>
      </div>
    </footer>
  );
}

export default Footer;

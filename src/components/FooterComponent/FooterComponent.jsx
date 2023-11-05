import styles from "./FooterComponent.module.css";
import InfoIcons from "../InfoIcons/InfoIcons";
import Logo from "../Logo/Logo";

export const FooterComponent = ({ isMobile }) => {
  return (
    <footer className={`${styles.footer} section`}>
      <div className={styles.background}>
        <img src="images/footer.jpg" alt="background image" />
      </div>
      <div className={styles.index}>
        <div className={styles.info}>
          <div className={styles.card__item}>
            <div className={styles.icon}>
              <InfoIcons type="email" />
            </div>
            <a href="mailto:info@saruqtijara.com" className={styles.card__text}>
              info@saruqtijara.com
            </a>
          </div>
          <div className={styles.card__item}>
            <div className={styles.icon}>
              <InfoIcons type="phone" />
            </div>
            <a href="tel:+85225308135" className={styles.card__text}>
              +852 2530 8135
            </a>
          </div>
          <div className={styles.card__item}>
            <div className={styles.icon}>
              <InfoIcons type="address" />
            </div>
            <p className={styles.card__text}>
              Suite 2207-09, 22/F, Tower Two, Lippo Centre, 89 Queensway,
              Admiralty, Hong Kong
            </p>
          </div>
        </div>
        <div className={styles.logo}>
          <Logo color="#fff" />
        </div>
        <nav className={styles.navigation}>
          <a
            data-scroll={!isMobile ? "scroll__nav" : ""}
            href="#services"
            className={styles.link}
          >
            Services
          </a>
          <a
            data-scroll={!isMobile ? "scroll__nav" : ""}
            href="#about"
            className={styles.link}
          >
            About Us
          </a>
        </nav>
      </div>
    </footer>
  );
};

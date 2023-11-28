import styles from "./Hero.module.css";

export const Hero = ({ isMobile }) => {
  return (
    <section id="hero" className="section">
      <div className={styles.content}>
        <div data-animation="hero__image" className={styles.image__wrapper}>
          <img src="images/heroImg.jpg" alt="Hero image" />
        </div>
        <div data-animation="hero__card" className={styles.card__wrapper}>
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
          <div className={styles.rotated}>Emirates</div>
          <div className={styles.rectangle}></div>
          <div className={styles.card}>
            <h1 className={styles.main_heading}>Supply from UAE</h1>
            <p className={styles.sub_heading}>Confidence in every step</p>
            <div className={styles.divider}></div>
            <p className={styles.motto}>
              Doing business with emirates has never been so easy
            </p>
            <div className={styles.btn__wrapper}>
              <a
                data-scroll={!isMobile ? "scroll__nav" : ""}
                href="#contact"
                className={styles.main_btn}
              >
                Find the supplier
              </a>
              <a
                data-scroll={!isMobile ? "scroll__nav" : ""}
                href="#contact"
                className={styles.sub_btn}
              >
                Calculate shipping cost
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

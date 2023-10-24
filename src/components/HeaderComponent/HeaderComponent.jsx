import Logo from "../Logo/Logo.jsx";
import Burger from "../Burger/Burger.jsx";
import Arrow from "../Sidebar/Arrow.jsx";
import styles from "./HeaderComponent.module.css";

export const HeaderComponent = () => {
  return (
    <header>
      <div className={styles.logo}>
        <Logo color="#4A1A61" />
      </div>
      <div className={styles.burger}>
        <Burger />
      </div>
      {/* <div className={styles.menu}>
        <div className={styles.arrow}>
          <Arrow></Arrow>
        </div>
        <nav className={styles.nav}>
          <a href="#" className={styles.link}>
            Services
          </a>

          <a href="#" className={styles.link}>
            Tasks
          </a>

          <a href="#" className={styles.link}>
            About Us
          </a>
        </nav>
      </div> */}
    </header>
  );
};

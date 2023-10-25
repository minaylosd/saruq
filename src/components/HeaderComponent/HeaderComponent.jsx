import Logo from "../Logo/Logo.jsx";
import Burger from "../Burger/Burger.jsx";
import Arrow from "../Sidebar/Arrow.jsx";
import styles from "./HeaderComponent.module.css";

export const HeaderComponent = () => {
  return (
    <header className="header">
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
       <nav className={styles.navigation}>
            <div className={`${styles.link} scroll__nav`}>Services</div>
            <div className={`${styles.link} scroll__nav`}>Tasks</div>
            <div className={`${styles.link} scroll__nav`}>About Us</div>
          </nav>
      </div> */}
    </header>
  );
};

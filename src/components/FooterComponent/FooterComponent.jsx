import styles from "./FooterComponent.module.css";
import InfoIcons from "../InfoIcons/InfoIcons";
import Logo from "../Logo/Logo";
import Image from "next/image";
import Background from "./footer.jpg";

export const FooterComponent = () => {
  const infoItems = [
    {
      type: "phone",
      value: "+852 2530 8135",
    },
    {
      type: "email",
      value: "info@ips-pacific.com",
    },
    {
      type: "address",
      value:
        "Suite 2207-09, 22/F, Tower Two, Lippo Centre, 89 Queensway, Admiralty, Hong Kong",
    },
  ];
  return (
    <footer className={`${styles.footer} section`}>
      <div className={styles.background}>
        <Image src={Background} fill={true} alt="background image" />
      </div>
      <div className={styles.index}>
        <div className={styles.info}>
          {infoItems.map((item, index) => (
            <div className={styles.card__item} key={index}>
              <div className={styles.icon}>
                <InfoIcons type={item.type} />
              </div>
              <div className={styles.flex}>
                <p className={styles.card__text}>{item.value}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.logo}>
          <Logo color="#fff" />
        </div>
        <nav className={styles.navigation}>
          <div className={`${styles.link} scroll__nav`}>Services</div>
          <div className={`${styles.link} scroll__nav`}>Tasks</div>
          <div className={`${styles.link} scroll__nav`}>About Us</div>
        </nav>
      </div>
    </footer>
  );
};

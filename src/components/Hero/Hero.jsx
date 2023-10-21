import Photo from "./heroImg.jpg";
import Image from "next/image";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section>
      <div className={styles.image__wrapper}>
        <Image src={Photo} fill={true} alt="Hero image" />
      </div>
      <div className={styles.card__wrapper}>
        <div className={styles.rotated}>Emirates</div>
        <div className={styles.rectangle}></div>
        <div className={styles.card}>
          <h1 className={styles.main_heading}>Supply from UAE</h1>
          <p className={styles.sub_heading}>Confidence in every step</p>
          <div className={styles.divider}></div>
          <p className={styles.motto}>
            Doing business with emirates was never been so easy
          </p>
          <div className={styles.btn__wrapper}>
            <button className={styles.main_btn}>Find the supplier</button>
            <button className={styles.sub_btn}>Calculate shipping cost</button>
          </div>
        </div>
      </div>
    </section>
  );
};

import Photo from "./clientImg.jpg";
import Image from "next/image";
import Square from "../Square/Square";
import styles from "./Goal.module.css";

export const Goal = () => {
  return (
    <section className="section">
      <div
        data-animation="goal__heading"
        className={`${styles.heading__wrapper}`}
      >
        <h1 className={styles.heading}>Specify your goal</h1>
        <div className={styles.heading__line}></div>
      </div>
      <div className={styles.content}>
        <div data-animation="goal__label" className={styles.label}>
          <div className={styles.flex}>
            <div className={styles.square}>
              <Square />
            </div>
            <div className={styles.label__txt}>New</div>
          </div>
          <div className={styles.label__txt}>client</div>
        </div>
        <div data-animation="goal__image" className={styles.image}>
          <Image src={Photo} fill={true} alt="Goal" />
          <div className={styles.card}>
            <p className={styles.subHeading}>Orders below 10 000$</p>
            <p className={styles.description}>
              Aiming to expand its client base, the company offers collaboration
              with UAE, provided certain criteria are met, with order volume
              being the primary one. For low and mid-priced goods, orders must
              be a multiple of the container, while air delivery suits
              high-value items. Service efficiency depends on application
              accuracy, and if an order doesn&apos;t meet minimum requirements,
              the company will suggest volume adjustment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

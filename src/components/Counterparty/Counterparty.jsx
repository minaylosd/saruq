import Photo from "./counterpartyImg.jpg";
import Image from "next/image";
import Rectangle from "../Rectangle/Rectangle";
import styles from "./Counterparty.module.css";

export const Counterparty = () => {
  return (
    <section className="section">
      <div className={styles.content}>
        <div className={styles.image}>
          <Image src={Photo} fill={true} alt="Counterparty" />
          <div className={styles.card}>
            <p className={styles.subHeading}>Deals from 20 000$</p>
            <p className={styles.description}>
              If you&apos;re already working with UAE and facing delays, quality
              issues, or untrustworthy supplier issues, verify information
              accuracy, optimize logistics or, in some cases, reach directly to
              the manufacturer, bypassing intermediate suppliers. If you need a
              partner to handle contract changes, payment schedules, and resolve
              supplier problems, we&apos;re here to assist and ensure reliable
              supplies, saving you from any unnecessary headaches.
            </p>
          </div>
        </div>
        <div className={styles.label}>
          <div className={styles.rectangle}>
            <Rectangle />
          </div>
          <h1 className={styles.label__txt}>Change of the counterparty</h1>
        </div>
      </div>
    </section>
  );
};

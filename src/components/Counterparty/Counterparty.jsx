import Rectangle from "../Rectangle/Rectangle";
import styles from "./Counterparty.module.css";

export const Counterparty = () => {
  return (
    <section className="section">
      <div className={styles.content}>
        <div data-animation="counterparty__image" className={styles.image}>
          <div className={styles.image__wrapper}>
            <img src="images/counterpartyImg.jpg" alt="Counterparty" />
          </div>
          <div className={styles.card}>
            <p className={styles.subHeading}>Deals from 20 000$</p>
            <p className={styles.description}>
              If you are already working with UAE and facing delays, quality
              issues, or untrustworthy supplier issues, we can verify
              information accuracy, optimize logistics or, in some cases, reach
              directly to the manufacturer, bypassing intermediate suppliers. If
              you need a partner to handle contract changes, payment schedules,
              and resolve supplier problems, we are here to assist and ensure
              reliable supplies, saving you from any unnecessary headaches.
            </p>
          </div>
        </div>
        <div data-animation="counterparty__label" className={styles.label}>
          <div className={styles.rectangle}>
            <Rectangle />
          </div>
          <h1 className={styles.label__txt}>Change of the counterparty</h1>
        </div>
      </div>
    </section>
  );
};

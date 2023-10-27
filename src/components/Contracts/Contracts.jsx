import Photo from "./cityImg.jpg";
import Image from "next/image";
import Rectangle from "../Rectangle/Rectangle";
import styles from "./Contracts.module.css";

export const Contracts = () => {
  return (
    <section className="section">
      <div className={styles.content}>
        <div data-animation="contracts__label" className={styles.label}>
          <div className={styles.rectangle}>
            <Rectangle />
          </div>
          <h1 className={styles.label__txt}>Medium to high-value contracts</h1>
        </div>
        <div data-animation="contracts__image" className={styles.image}>
          <Image src={Photo} fill={true} alt="City" />
          <div data-animation="contracts__card" className={styles.card}>
            <p className={styles.subHeading}>Deals from 50 000$</p>
            <p className={styles.description}>
              As a prominent player in the market, your business model may still
              require optimization. We will be happy to tackle the most
              challenging tasks as even minor improvements may give tangible
              results. From negotiating with existing suppliers about the best
              logistics route and forms of payments to restructuring your
              company that unveils hidden advantages. Whether it’s streamlining
              operations or identifying cost-saving opportunities, we are here
              to help.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

import Photo from "./aboutImg.jpg";
import Image from "next/image";
import Square from "../Square/Square";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section>
      <div className={styles.spacing}>
        <div className={styles.characteristics}>
          <div className={styles.characteristics__item}>
            <b>17 years</b> of experiece
          </div>
          <div className={styles.characteristics__divider}></div>
          <div className={styles.characteristics__item}>
            <b>500+</b> satisfied customers
          </div>
          <div className={styles.characteristics__divider}></div>
          <div className={styles.characteristics__item}>
            <b>800+</b> processed requests
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.card}>
          <div className={styles.rotated}>Quality</div>
          <div className={styles.image__wrapper}>
            <div className={styles.image}>
              <Image src={Photo} fill={true}></Image>
            </div>
          </div>
          <div className={styles.txt__section}>
            <div className={styles.heading__wrapper}>
              <h1 className={styles.heading}>Why choose Us?</h1>
              <div className={styles.heading__line}></div>
            </div>
            <p className={styles.description}>
              We offer high-quality products, an extensive range of diverse
              products, competitive pricing, reliable delivery, excellent
              customer service, and a trusted reputation.
            </p>
            <div className={styles.geometry__wrapper}>
              <div className={styles.geometry}>
                <div className={styles.geometry__line}></div>
                <div className={styles.geometry__line}></div>
                <div className={styles.geometry__line}></div>
                <div className={styles.geometry__line}></div>
              </div>
              <div>
                <div className={styles.rectangle__wrapper}>
                  <div className={styles.rectangle}></div>
                  <div className={styles.square}>
                    <Square />
                  </div>
                </div>
                <ul className={styles.list}>
                  <li className={styles.list__item}>
                    Our outsourcing services cover both Mainland and Free Zones
                    as well as China Mainland and Hong Kong SAR and other
                    Southwest Asian countries. We work with clients from all
                    over the world.
                  </li>
                  <li className={styles.list__item}>
                    Our cooperation with the client is based on the transparency
                    of work, trust and mutual interest. We always show the
                    supplier and work in a team with the client.
                  </li>
                  <li className={styles.list__item}>
                    Our clients can understand from the first contact that they
                    are dealing with a well-coordinated team of certified
                    specialists.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import Background from "./background.jpg";
import Image from "next/image";
import styles from "./Stages.module.css";

export const Stages = () => {
  const cardItems = [
    {
      id: "#1",
      txt: "Receiving a request, searching for a manufacturer, offering options, getting approval for selected manufacturer. Logistics calculation, contract signing.",
    },
    {
      id: "#2",
      txt: "Placing an order with the manufacturer, agreeing on the production delivery dates, making advance payment, supervising contract execution",
    },
    {
      id: "#3",
      txt: "Quality control, shipment control, balance payments for goods, customs clearance in China.",
    },
    {
      id: "#4",
      txt: "Obtaining the necessary permits for customs clearance in the destination country and doing customs clearance upon client’s request. Delivering to your door.",
    },
  ];
  return (
    <section className="section">
      <div className={styles.content}>
        <div className={styles.position}>
          <div className={styles.image}>
            <Image src={Background} fill={true} alt="City" />
          </div>
        </div>

        <div className={styles.index}>
          <div className={styles.heading__wrapper}>
            <div className={styles.heading__line}></div>
            <h1 className={styles.heading}>Shall we begin?</h1>
            <div className={styles.heading__line}></div>
          </div>
          <p className={styles.description}>
            We are ready to start working with you at any stage of the
            transaction
          </p>
          <div className={styles.card__wrapper}>
            {cardItems.map((item) => (
              <div className={styles.card} key={item.id}>
                <div className={styles.card__number}>{item.id}</div>
                <div className={styles.card__txt}>{item.txt}</div>
                <div className={styles.card__bottom}>
                  Fill in an inquiry form
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

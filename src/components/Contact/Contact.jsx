import styles from "./Contact.module.css";
import Rectangle from "../Rectangle/Rectangle";
import WideRectangle from "./WideRectangle";
import InfoIcons from "../InfoIcons/InfoIcons";

export const Contact = () => {
  const infoItems = [
    {
      type: "email",
      value: "info@saruqtijara.com",
    },
    {
      type: "phone",
      value: "+971 56 808 2046",
    },
    {
      type: "address",
      value:
        "Business Center 1, M Floor, The Meydan Hotel, Nad Al Sheba, Dubai, U.A.E.",
    },
  ];
  return (
    <section className="section">
      <div className={styles.geometry}>
        <div className={styles.rectangle}>
          <Rectangle turn={false} left={true} />
        </div>
        <div className={styles.line}></div>
        <div className={styles.heading__wrapper}>
          <div className={styles.flex}>
            <h1 className={styles.heading}>Contact us</h1>
            <div className={styles.divider}></div>
          </div>
          <p className={styles.description}>
            Feel free to contact us any time. We will get back to you as soon as
            we can!
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <form className={styles.form}>
          <div className={styles.form__group}>
            <input
              className={styles.form__input}
              type="text"
              placeholder="Name"
              id="name"
              required
            />
          </div>
          <div className={styles.form__group}>
            <input
              className={styles.form__input}
              type="email"
              placeholder="Email"
              id="email"
              required
            />
          </div>
          <div className={styles.form__group}>
            <textarea
              className={styles.form__input}
              placeholder="Message"
              id="message"
              required
            />
          </div>
          <button className={styles.form__button}>Send</button>
        </form>
        <div className={styles.card}>
          <div className={styles.card__heading__wrapper}>
            <h3 className={styles.card__heading}>Our info</h3>
            <div className={styles.card__rectangle}>
              <WideRectangle />
            </div>
          </div>
          {infoItems.map((item, index) => (
            <div className={styles.card__item} key={index}>
              <div className={styles.icon}>
                <InfoIcons type={item.type} />
              </div>
              <p className={styles.card__text}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

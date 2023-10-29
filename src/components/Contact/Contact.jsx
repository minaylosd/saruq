import styles from "./Contact.module.css";
import Rectangle from "../Rectangle/Rectangle";
import WideRectangle from "./WideRectangle";
import InfoIcons from "../InfoIcons/InfoIcons";
import { useState } from "react";

const initValues = { name: "", email: "", message: "" };

const initState = { values: initValues };

export const Contact = () => {
  const [state, setState] = useState(initState);

  const { values } = state;

  const handleChange = ({ target }) => {
    setState((prev) => ({
      ...prev,
      values: { ...prev.values, [target.name]: target.value },
    }));
  };

  return (
    <section id="contact" className="section">
      <div data-animation="contact__heading" className={styles.geometry}>
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
          <div data-animation="contact__form" className={styles.form__group}>
            <input
              className={styles.form__input}
              type="text"
              placeholder="Name"
              id="name"
              name="name"
              required
              autoComplete="on"
              value={values.name}
              onChange={handleChange}
            />
          </div>
          <div data-animation="contact__form" className={styles.form__group}>
            <input
              className={styles.form__input}
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              required
              autoComplete="on"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div data-animation="contact__form" className={styles.form__group}>
            <textarea
              className={styles.form__input}
              placeholder="Message"
              id="message"
              name="message"
              required
              value={values.message}
              onChange={handleChange}
            />
          </div>
          <button
            data-animation="contact__form"
            className={styles.form__button}
          >
            Send
          </button>
        </form>
        <div data-animation="contact__card" className={styles.card}>
          <div className={styles.card__heading__wrapper}>
            <h3 className={styles.card__heading}>Our info</h3>
            <div className={styles.card__rectangle}>
              <WideRectangle />
            </div>
          </div>
          <div className={styles.card__item}>
            <div className={styles.icon}>
              <InfoIcons type="email" />
            </div>
            <a href="mailto:info@ips-pacific.com" className={styles.card__text}>
              info@ips-pacific.com
            </a>
          </div>
          <div className={styles.card__item}>
            <div className={styles.icon}>
              <InfoIcons type="phone" />
            </div>
            <a href="tel:+85225308135" className={styles.card__text}>
              +852 2530 8135
            </a>
          </div>
          <div className={styles.card__item}>
            <div className={styles.icon}>
              <InfoIcons type="address" />
            </div>
            <p className={styles.card__text}>
              Suite 2207-09, 22/F, Tower Two, Lippo Centre, 89 Queensway,
              Admiralty, Hong Kong
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

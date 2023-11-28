import styles from "./Contact.module.css";
import Rectangle from "../Rectangle/Rectangle";
import WideRectangle from "./WideRectangle";
import InfoIcons from "../InfoIcons/InfoIcons";
import { useState, useEffect } from "react";

const initValues = { name: "", email: "", message: "" };

const initState = { values: initValues };

export const Modal = ({
  modalMsg,
  isModalOpen,
  openModalTween,
  closeModalTween,
}) => {
  const handleWheel = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };
  useEffect(() => {
    document.getElementById("modal").addEventListener("wheel", handleWheel);
    openModalTween();
  }, [isModalOpen]);
  return (
    <>
      <div
        id="modal"
        data-animation="modal-bg"
        className={styles.modal__background}
      >
        <div data-animation="modal-card" className={styles.modal__card}>
          <div className={styles.modal__heading__wrapper}>
            <h2 className={styles.modal__heading}>{modalMsg.heading}</h2>
            <div onClick={closeModalTween} className={styles.cross}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={"100%"}
                height={"100%"}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  stroke="var(--primary)"
                  strokeLinecap="round"
                  strokeWidth={2}
                  d="M3.414 3 21 20.586M3 21 21 3"
                />
              </svg>
            </div>
          </div>
          <p className={styles.modal__txt}>{modalMsg.text}</p>
        </div>
      </div>
    </>
  );
};

export const Contact = ({ openModal }) => {
  const [state, setState] = useState(initState);

  const { values } = state;

  const handleChange = ({ target }) => {
    setState((prev) => ({
      ...prev,
      values: { ...prev.values, [target.name]: target.value },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("message", values.message);

    let emailSent = false;

    try {
      const response = await fetch("./phpmailer/sendEmail.php", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();

        if (data.success) {
          setState(initState);
          emailSent = true;
        } else {
          handleEmailError(data.message);
        }
      } else {
        handleNetworkError();
      }
    } catch (error) {
      handleFetchError(error);
    }
    openModal(emailSent);
  };

  function handleEmailError(errorMessage) {
    console.error(errorMessage);
  }

  function handleNetworkError() {
    console.error("Network error");
  }

  function handleFetchError(error) {
    console.error("Error:", error);
  }

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
        <form className={styles.form} onSubmit={handleSubmit}>
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
            <a href="mailto:info@saruqtijara.com" className={styles.card__text}>
              info@saruqtijara.com
            </a>
          </div>
          <div className={styles.card__item}>
            <div className={styles.icon}>
              <InfoIcons type="phone" />
            </div>
            <a href="tel:+971568082046" className={styles.card__text}>
              +971 56 808 2046
            </a>
          </div>
          <div className={styles.card__item}>
            <div className={styles.icon}>
              <InfoIcons type="address" />
            </div>
            <p className={styles.card__text}>
              Business Center 1, M Floor, The Meydan Hotel, Nad Al Sheba, Dubai,
              U.A.E
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

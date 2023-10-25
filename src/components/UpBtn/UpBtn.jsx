import Triangle from "./Triangle";
import styles from "./UpBtn.module.css";

export const UpBtn = () => {
  return (
    <div className={`${styles.button} up__btn`}>
      <div className={styles.triangle}>
        <Triangle />
      </div>
      <div className={styles.text}>Up</div>
    </div>
  );
};

import Image from "next/image";
import styles from "../styles/Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <Image height="250" width="250" src="/images/pullup.jpg" alt="pull up" />
      <h4 className={styles.title}>Upper body workout</h4>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
        laboriosam!
      </p>
      <button className={styles.button}>learn more</button>
    </div>
  );
};

export default Card;

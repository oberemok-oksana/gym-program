import Image from "next/image";
import styles from "../styles/Exercise.module.css";

const Exercise = (props) => {
  return (
    <div className={styles.exercise}>
      <Image
        className={styles.img}
        src="/images/pullups.png"
        alt="pull ups"
        width="64"
        height="64"
      />
      <h4 className={styles.title}>Pull Ups</h4>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente
        libero
      </p>
      <a href="#" className={styles.button}>
        Learn More
      </a>
    </div>
  );
};

export default Exercise;

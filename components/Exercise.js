import Image from "next/image";
import styles from "../styles/Exercise.module.css";
import Link from "next/link";

const Exercise = ({ program }) => {
  return (
    <div className={styles.exercise}>
      <Image
        className={styles.img}
        src="/images/pullups.png"
        alt="pull ups"
        width="64"
        height="64"
      />
      <h4 className={styles.title}>{program.subtitle}</h4>
      <p className={styles.description}>{program.description}</p>
      <Link href={`/programs/${program.id}`} className={styles.button}>
        Learn More
      </Link>
    </div>
  );
};

export default Exercise;

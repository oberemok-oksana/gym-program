import Image from "next/image";
import styles from "../styles/Card.module.css";
import Link from "next/link";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <Image
        height="270"
        width="220"
        src={props.image}
        alt="pull up"
        className={styles.image}
      />
      <h4 className={styles.title}>{props.subtitle}</h4>
      <p className={styles.description}>{props.description}</p>
      <Link href={`/workouts/${props.id}`} className={styles.button}>
        learn more
      </Link>
    </div>
  );
};

export default Card;

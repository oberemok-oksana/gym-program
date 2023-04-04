import { getAllWorkoutIds, getWorkoutData } from "@/lib/workouts";
import Image from "next/image";
import styles from "../../styles/Workout.module.css";

const Workout = ({ workoutData }) => {
  return (
    <div className={styles.bg}>
      <div className={styles.card}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>{workoutData.subtitle}</h2>
        </div>
        <Image
          className={styles.image}
          width="300"
          height="200"
          alt="text"
          src={workoutData.image}
        />
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: workoutData.contentHtml }}
        ></div>

        <iframe
          className={styles.video}
          width="700"
          height="415"
          src={workoutData.video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Workout;

export const getStaticPaths = async () => {
  const paths = getAllWorkoutIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const workoutData = await getWorkoutData(params.id);

  return {
    props: {
      workoutData,
    },
  };
};

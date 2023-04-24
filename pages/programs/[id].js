import Header from "@/components/Header";
import styles from "../../styles/Program.module.css";

import { getAllProgramsIds, getProgramData } from "@/lib/programs";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

function isClient() {
  return typeof window !== "undefined";
}

const Program = ({ program }) => {
  const initialWorkout = [
    { sets: 0, reps: 0, weights: 0 },
    { sets: 0, reps: 0, weights: 0 },
    { sets: 0, reps: 0, weights: 0 },
    { sets: 0, reps: 0, weights: 0 },
    { sets: 0, reps: 0, weights: 0 },
  ];
  const programId = program.id;
  const [workout, setWorkout] = useState(
    isClient()
      ? JSON.parse(localStorage.getItem(programId)) ?? initialWorkout
      : initialWorkout
  );

  useEffect(() => {
    localStorage.setItem(programId, JSON.stringify(workout));
  }, [workout, programId]);

  const changeSets = (i, value) => {
    setWorkout((oldWorkout) => {
      return oldWorkout.map((arr, index) => {
        return i === index ? { ...arr, sets: value } : arr;
      });
    });
  };

  const changeReps = (i, value) => {
    setWorkout((oldWorkout) => {
      return oldWorkout.map((arr, index) => {
        return i === index ? { ...arr, reps: value } : arr;
      });
    });
  };

  const changeWeights = (i, value) => {
    setWorkout((oldWorkout) => {
      return oldWorkout.map((arr, index) => {
        return i === index ? { ...arr, weights: value } : arr;
      });
    });
  };

  return (
    <>
      <div className={styles.bg}>
        <Header />
        <div className={styles.card}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>{program.subtitle}</h2>
          </div>
          <div className={styles.warmup}>
            <h3>Warm up:</h3>
            <ul className={styles.list}>
              {program.warmUp.map((item, i) => (
                <li key={i + 1}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="wrap">
            <table className="table">
              <thead>
                <tr className="head-row">
                  <th>Exercise</th>
                  <th>Sets</th>
                  <th>Reps</th>
                </tr>
              </thead>
              <tbody>
                {program.exercises.map((exercise) => (
                  <tr key={exercise.exercise}>
                    <td className="table-cell">{exercise.exercise}</td>
                    <td className="table-cell">{exercise.sets}</td>
                    <td className="table-cell">{exercise.reps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table className="table">
              <thead>
                <tr className="head-row">
                  <th>Exercise</th>
                  <th>Sets</th>
                  <th>Reps</th>
                  <th>Weights</th>
                </tr>
              </thead>
              <tbody>
                {program.exercises.map((exercise, i) => (
                  <tr key={exercise.exercise}>
                    <td className="table-cell">{exercise.exercise}</td>
                    <td className="table-cell">
                      <input
                        className={styles.input}
                        type="number"
                        name="sets"
                        value={workout[i].sets}
                        onChange={(e) => changeSets(i, e.target.value)}
                      />
                    </td>
                    <td className="table-cell">
                      <input
                        className={styles.input}
                        type="number"
                        name="reps"
                        value={workout[i].reps}
                        onChange={(e) => changeReps(i, e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        className={styles.input}
                        type="number"
                        name="weights"
                        value={workout[i].weights}
                        onChange={(e) => changeWeights(i, e.target.value)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: programData.contentHtml }}
          ></div> */}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Program;

export const getStaticPaths = async () => {
  const paths = getAllProgramsIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const program = await getProgramData(params.id);

  return {
    props: {
      program,
    },
  };
};

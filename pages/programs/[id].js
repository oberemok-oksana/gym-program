import Image from "next/image";
import styles from "../../styles/Program.module.css";
import Header from "@/components/Header";
import { getAllProgramsIds, getProgramData } from "@/lib/programs";
import Footer from "@/components/Footer";

const Program = ({ programData }) => {
  return (
    <>
      <div className={styles.bg}>
        <Header />

        <div className={styles.card}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>{programData.subtitle}</h2>
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
                {programData.exercises.map((exercise) => (
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
                {programData.exercises.map((exercise) => (
                  <tr key={exercise.exercise}>
                    <td className="table-cell">{exercise.exercise}</td>
                    <td className="table-cell">
                      <input className={styles.input} type="number" />
                    </td>
                    <td className="table-cell">
                      <input className={styles.input} type="number" />
                    </td>
                    <td>
                      {" "}
                      <input className={styles.input} type="number" />
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
  const programData = await getProgramData(params.id);
  console.log(programData);
  return {
    props: {
      programData,
    },
  };
};

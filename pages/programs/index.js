import { getSortedProgramsData } from "@/lib/programs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "../../styles/Program.module.css";
import Exercise from "@/components/Exercise";

export const getStaticProps = () => {
  const allProgramsData = getSortedProgramsData();

  return {
    props: {
      allProgramsData,
    },
  };
};

const Programs = ({ allProgramsData }) => {
  return (
    <div className={styles.bg}>
      <div className="container">
        <Header />
        <div className={styles.wrapper}>
          <h1 className={styles.title}>All Programs</h1>
        </div>
        <ul className={styles.cards}>
          {allProgramsData.map((programData) => (
            <li key={programData.id}>
              <Exercise program={programData} />
            </li>
          ))}
        </ul>
        <Footer />
      </div>
    </div>
  );
};

export default Programs;

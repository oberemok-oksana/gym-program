import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { getSortedWorkoutsData } from "@/lib/workouts";
import Link from "next/link";
import styles from "../../styles/Workouts.module.css";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

export const getStaticProps = () => {
  const allWorkoutsData = getSortedWorkoutsData();

  return {
    props: {
      allWorkoutsData,
    },
  };
};

const Workouts = ({ allWorkoutsData }) => {
  return (
    <>
      <Layout>
        <Header />

        <div className="container">
          <div className={styles.workouts}>
            <div className={styles.wrapper}>
              <h1 className={styles.title}>All Workouts</h1>
            </div>
            <ul className="cards">
              {allWorkoutsData.map((workoutData) => {
                return (
                  <li key={workoutData.id}>
                    <Card
                      subtitle={workoutData.subtitle}
                      id={workoutData.id}
                      description={workoutData.description}
                      image={workoutData.cover}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export default Workouts;

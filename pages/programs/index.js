import { getSortedProgramsData } from "@/lib/programs";
import Program from "./[id]";

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
    <ul>
      {allProgramsData.map((program) => (
        <li key={program.id}>
          {" "}
          <Program programData={program} />
        </li>
      ))}
    </ul>
  );
};

export default Programs;

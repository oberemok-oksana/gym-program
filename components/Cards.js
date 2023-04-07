import Card from "./Card";

const Cards = ({ workouts }) => {
  return (
    <ul className="cards">
      {workouts.map((workout) => {
        return (
          <li key={workout.id}>
            <Card
              subtitle={workout.subtitle}
              id={workout.id}
              description={workout.description}
              image={workout.cover}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Cards;

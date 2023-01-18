import Card from "../UI/Card";
import classes from "./AvailableMeal.module.css";
import MealItem from "./MealItems/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Salad",
    description: "Fresh veggies",
    price: 150,
  },
  {
    id: "m2",
    name: "Thali",
    description: "Panjabi Thali !",
    price: 300,
  },
  {
    id: "m3",
    name: "Momos",
    description: "Chinese",
    price: 100,
  },
  {
    id: "m4",
    name: "Chicken Curry",
    description: "Fresh chicken with Delicious Taste ",
    price: 250,
  },
];
const Availablemeals = () => {
  const mealList = DUMMY_MEALS.map((meal) =>(
    <MealItem
    key={meal.id}
    id={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}/>
  ))
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList} </ul>
      </Card>
    </section>
  );
};
export default Availablemeals;

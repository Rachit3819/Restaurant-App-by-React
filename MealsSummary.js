import classes from "./MealsSummary.module.css";
function MealsSummary() {
  return (
    <div className={classes.summary}>
      <h1>Delicious Food, Delivered to You!!!</h1>
      <p>
        Choose Your Favorite meal from our board section of avaliable meals and
        enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All meals are cooked from highQuality ingrediants,just-in-time and
        ofcourse by experiance chef!!
      </p>
    </div>
  );
}
export default MealsSummary;

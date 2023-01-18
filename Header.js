import { Fragment } from "react";
import Mealsimage from "../../assets/Meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
function Header(props) {
  return (
    <Fragment>
      <header className={classes.header} >
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={Mealsimage} alt="A table of delicious food!!!" />
      </div>
      
    </Fragment>
  );
}
export default Header;

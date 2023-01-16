import { Fragment } from "react";
import Mealsimage from '../../assets/Meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

function Header (){
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={Mealsimage}
            alt="A table of delicious food!!!"/>
        </div>
    </Fragment>
}
export default Header;
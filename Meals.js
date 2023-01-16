import { Fragment } from "react";
import Availablemeals from "./Availablemeals";
import MealsSummary from "./MealsSummary";
function Meals(){
    return <Fragment>
        <MealsSummary/>
        <Availablemeals/>
    </Fragment>
}
export default Meals
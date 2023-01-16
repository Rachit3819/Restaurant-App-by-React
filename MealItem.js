import classes from './MealItem.module.css'
function MealItem(props){
    return (
        <div className={classes.meal}>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{props.price}</div>
        </div>
    )
}
export default MealItem
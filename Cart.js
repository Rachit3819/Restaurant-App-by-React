import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
function Cart(props) {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: 'm3', name:'Momos', amount: 2, price: 32.28 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Amount</span>
        <span>35.43</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}
export default Cart;

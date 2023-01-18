import CardContext from "./Cart-Context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalamount: 0,
};
const CartReducer = (state, actions) => {
  if (actions.type === "ADD") {
    const updateItems = state.items.concat(actions.item);
    const updatedTotalAmount =
      state.totalamount + actions.item.price * actions.item.amount;
    return {
      items: updateItems,
      amount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    CartReducer,
    defaultCartState
  );

  const addItemtoCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemtoCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const CartContext = {
    items: cartState.items,
    totalamount: cartState.totalamount,
    addItem: addItemtoCartHandler,
    removeItem: removeItemtoCartHandler,
  };
  return (
    <CardContext.Provider value={CartContext}>
      {props.children}
    </CardContext.Provider>
  );
};
export default CartProvider;

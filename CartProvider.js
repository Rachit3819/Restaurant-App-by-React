import CardContext from "./Cart-Context";
 
const CartProvider = (props) => {
  const addItemtoCartHandler = (item) => {};
  const removeItemtoCartHandler = (id)  => {};
  const CartContext = {
    items: [],
    totalamount: 0,
    addItem: addItemtoCartHandler,
    removeItem: removeItemtoCartHandler,
  };
  return <CardContext.Provider value={CartContext}>
    {props.children}
  </CardContext.Provider>;
};
export default CartProvider
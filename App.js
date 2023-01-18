import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";

function App() {
   const [cartIsOpen,setCartIsOpen]=useState(false)
   const showCartHandler=()=>{
    setCartIsOpen(true)
   }
   const hideCartHandler=()=>{
    setCartIsOpen(false)
   } 
  return <CartProvider>
    {cartIsOpen && <Cart onClose={hideCartHandler}/>}
    <Header onShowCart={showCartHandler}/>
    <main>
      <Meals/>
    </main>
  </CartProvider>
}

export default App;

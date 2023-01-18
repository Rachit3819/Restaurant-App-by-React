import { Fragment,useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {
   const [cartIsOpen,setCartIsOpen]=useState(false)
   const showCartHandler=()=>{
    setCartIsOpen(true)
   }
   const hideCartHandler=()=>{
    setCartIsOpen(false)
   } 
  return <Fragment>
    {cartIsOpen && <Cart onClose={hideCartHandler}/>}
    <Header onShowCart={showCartHandler}/>
    <main>
      <Meals/>
    </main>
  </Fragment>
}

export default App;

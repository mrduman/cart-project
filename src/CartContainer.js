import React, { useContext } from "react";
import { AppContext, useGlobalContext } from "./context";
import CartItem from "./CartItem";

function CartContainer() {
  const { cart, clearCart, amount, total } = useGlobalContext();

  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>

      <div class="empty-cart">
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <div class="cart-total">
          <h4>total</h4>
          <h4>{total}</h4>
        </div>
        <button className="btn clear-btn" onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
}

export default CartContainer;

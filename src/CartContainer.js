import React, { useContext } from "react";
import { AppContext, useGlobalContext } from "./context";
import CartItem from "./CartItem";

function CartContainer() {
  const { cart, clearCart, amount, total } = useGlobalContext();

  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
        <h4 className="empty-cart">is currently empty</h4>
      </header>

      <div class="empty-cart">
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <div class="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
          <h4></h4>
        </div>
        <button className="btn clear-btn" onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
}

export default CartContainer;

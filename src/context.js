import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const initialState = {
    cart: cartItems,
    total: 0,
    amount: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const removeCart = (id) => {
    dispatch({ type: "REMOVE_CART", payload: id });
  };

  const cartIncrease = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const cartDecrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const toggleAmount = (id, type) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };

  useEffect(() => {
    dispatch({ type: "TOTAL_CART" });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        toggleAmount,
        ...state,
        cartIncrease,
        clearCart,
        removeCart,
        cartDecrease,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

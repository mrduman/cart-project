import React, { useContext } from "react";
import Navbar from "./Navbar";
import CartItem from "./CartItem";
import CartContainer from "./CartContainer";
import { AppContext } from "./context";

function App() {
  const data = useContext(AppContext);
  const { loading } = data;

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <CartContainer />
    </>
  );
}

export default App;

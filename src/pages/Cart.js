import { useState } from "react";
import "./cart.css";
import Nav from "../components/Nav";

export default function Cart() {
  const [count, setCount] = useState(3);
  function subtractCount() {
    if (count > 0) {
      return setCount((prevCount) => prevCount - 1);
    } else {
      return count;
    }
  }

  function addCount() {
    if (count < 10) {
      return setCount((prevCount) => prevCount + 1);
    } else {
      return count;
    }
  }
  return (
    <div className="cart-container">
      <Nav />
      <h1>Cart</h1>
      <div className="cart-div">
        <button onClick={subtractCount}>Minus</button>
        <p>{count} </p>
        <button onClick={addCount}>Add</button>
      </div>
    </div>
  );
}

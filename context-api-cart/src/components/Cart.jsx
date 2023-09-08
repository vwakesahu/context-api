import React, { useContext } from "react";
import { CartContext } from "../context/Cart";

const Cart = () => {
  const cart = useContext(CartContext);
  const total = cart.items.reduce((a, b) => a + b.price, 0 );
  return (
    <div>
      <ul>
        <li>
          {cart &&
            cart.items.map((item) => (
              <div>
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
            ))}
          <p>Totalbil - `${total}`</p>
        </li>
      </ul>
    </div>
  );
};

export default Cart;

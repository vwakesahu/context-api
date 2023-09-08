import React, { useContext } from "react";
import { CartContext } from "../context/Cart";

const Item = ({ name, price }) => {
  const cart = useContext(CartContext);
  console.log(cart);
  const handleClick = () => {
    cart.setItems([...cart.items, { name: name, price: price }]);
  };

  return (
    <div>
      <h3>{name}</h3>
      <h4>${price}</h4>
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  );
};

export default Item;

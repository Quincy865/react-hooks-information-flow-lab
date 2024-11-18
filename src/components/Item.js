import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleAddToCartClick() {
    setIsInCart((prevState) => !prevState);
  }

  return (
    <li className={`item ${isInCart ? "in-cart" : ""}`}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={`cart-btn ${isInCart ? "remove" : "add"}`}
        onClick={handleAddToCartClick}
        aria-label={isInCart ? `Remove ${name} from cart` : `Add ${name} to cart`}
      >
        {isInCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;


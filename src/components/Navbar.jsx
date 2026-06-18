import React from "react";

export default function Navbar({ totalItems, onCartOpen, onLogoClick }) {
  return (
    <nav className="nb">
      <div className="nb-brand" onClick={onLogoClick}>
        Flare<span>Eats</span>
      </div>
      <button className="cart-btn" onClick={onCartOpen}>
        🛒 Cart
        {totalItems > 0 && (
          <span className="cart-badge">{totalItems}</span>
        )}
      </button>
    </nav>
  );
}

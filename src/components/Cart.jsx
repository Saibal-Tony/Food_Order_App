import React from "react";

export default function Cart({ cart, totalPrice, onClose, onQtyChange, onCheckout }) {
  return (
    <div className="cart-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="cart-panel">

        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="cart-empty">
              Your cart is empty.<br />Add something delicious 🍕
            </p>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <span className="cart-item-emoji">{item.emoji}</span>
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <span className="cart-item-price">
                    ${(item.price * item.qty).toFixed(2)}
                  </span>
                </div>
                <div className="qty-controls">
                  <button className="qty-btn" onClick={() => onQtyChange(item.id, -1)}>−</button>
                  <span className="qty-num">{item.qty}</span>
                  <button className="qty-btn" onClick={() => onQtyChange(item.id, 1)}>+</button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button className="checkout-btn" onClick={onCheckout}>
              Place Order →
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

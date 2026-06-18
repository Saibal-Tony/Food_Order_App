import { X } from 'lucide-react';

export default function Cart({ items, onClose, onQtyChange, onCheckout }) {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <div className="cart-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="cart-panel">
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-btn" onClick={onClose}><X size={16} /></button>
        </div>

        <div className="cart-items">
          {items.length === 0
            ? <p className="cart-empty">Your cart is empty.<br />Add something delicious 🍕</p>
            : items.map(item => (
              <div className="cart-item" key={item.id}>
                <span className="cart-item-emoji">{item.emoji}</span>
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <span>${(item.price * item.qty).toFixed(2)}</span>
                </div>
                <div className="qty-controls">
                  <button className="qty-btn" onClick={() => onQtyChange(item.id, -1)}>−</button>
                  <span className="qty-num">{item.qty}</span>
                  <button className="qty-btn" onClick={() => onQtyChange(item.id, 1)}>+</button>
                </div>
              </div>
            ))}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
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
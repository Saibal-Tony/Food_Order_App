import React, { useState } from "react";
import "./App.css";
import { useCart } from "./hooks/useCart";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import MenuPage from "./pages/MenuPage";
import OrderTracker from "./pages/OrderTracker";

export default function App() {
  const { cart, addItem, changeQty, clearCart, totalItems, totalPrice } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [page, setPage] = useState("menu"); // "menu" | "tracking"
  const [orderId, setOrderId] = useState(null);
  const [orderSnapshot, setOrderSnapshot] = useState([]);

  function handleCheckout() {
    const id = Math.random().toString(36).substring(2, 8).toUpperCase();
    setOrderId(id);
    setOrderSnapshot([...cart]);
    clearCart();
    setCartOpen(false);
    setPage("tracking");
  }

  function handleLogoClick() {
    setPage("menu");
  }

  return (
    <div className="app">
      <Navbar
        totalItems={totalItems}
        onCartOpen={() => setCartOpen(true)}
        onLogoClick={handleLogoClick}
      />

      {page === "menu" && (
        <MenuPage onAdd={addItem} />
      )}

      {page === "tracking" && (
        <OrderTracker
          orderItems={orderSnapshot}
          orderId={orderId}
          onBack={() => setPage("menu")}
        />
      )}

      {cartOpen && (
        <Cart
          cart={cart}
          totalPrice={totalPrice}
          onClose={() => setCartOpen(false)}
          onQtyChange={changeQty}
          onCheckout={handleCheckout}
        />
      )}
    </div>
  );
}

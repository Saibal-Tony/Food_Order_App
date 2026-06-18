import { useState } from 'react';
import './App.css';
import { menuItems } from './data/menuData';
import Navbar from './components/Navbar';
import CategoryFilter from './components/CategoryFilter';
import MenuCard from './components/MenuCard';
import Cart from './components/Cart';
import OrderTracker from './components/OrderTracker';

export default function App() {
  const [category, setCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [page, setPage] = useState('menu'); // 'menu' | 'tracking'
  const [orderId, setOrderId] = useState(null);
  const [orderSnapshot, setOrderSnapshot] = useState([]);

  const filtered = category === 'All' ? menuItems : menuItems.filter(i => i.category === category);
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  function addToCart(item) {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      return existing
        ? prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i)
        : [...prev, { ...item, qty: 1 }];
    });
  }

  function changeQty(id, delta) {
    setCart(prev =>
      prev
        .map(i => i.id === id ? { ...i, qty: i.qty + delta } : i)
        .filter(i => i.qty > 0)
    );
  }

  function placeOrder() {
    const id = Math.random().toString(36).substring(2, 8).toUpperCase();
    setOrderId(id);
    setOrderSnapshot([...cart]);
    setCart([]);
    setCartOpen(false);
    setPage('tracking');
  }

  return (
    <>
      <Navbar
        cartCount={cartCount}
        onCartOpen={() => setCartOpen(true)}
        onLogoClick={() => setPage('menu')}
      />

      {page === 'menu' && (
        <>
          <div className="hero">
            <h1>Cravings, delivered<br /><span>blazing fast.</span></h1>
            <p>Restaurant-quality food at your door. Live order tracking included.</p>
          </div>

          <CategoryFilter active={category} onChange={setCategory} />

          <div className="menu-grid">
            {filtered.map(item => (
              <MenuCard key={item.id} item={item} onAdd={addToCart} />
            ))}
          </div>
        </>
      )}

      {page === 'tracking' && (
        <OrderTracker
          orderItems={orderSnapshot}
          orderId={orderId}
          onBack={() => setPage('menu')}
        />
      )}

      {cartOpen && (
        <Cart
          items={cart}
          onClose={() => setCartOpen(false)}
          onQtyChange={changeQty}
          onCheckout={placeOrder}
        />
      )}
    </>
  );
}
import { Clock } from 'lucide-react';

export default function MenuCard({ item, onAdd }) {
  return (
    <div className="menu-card">
      <div className="menu-card-top">
        <span className="menu-card-emoji">{item.emoji}</span>
        {item.popular && <span className="popular-badge">Popular</span>}
      </div>
      <h3>{item.name}</h3>
      <p>{item.desc}</p>
      <div className="menu-card-footer">
        <div>
          <div className="menu-price">${item.price.toFixed(2)}</div>
          <div className="menu-time"><Clock size={12} />{item.time}</div>
        </div>
        <button className="add-btn" onClick={() => onAdd(item)}>+</button>
      </div>
    </div>
  );
}
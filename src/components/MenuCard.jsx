import React from "react";

export default function MenuCard({ item, onAdd }) {
  return (
    <div className="menu-card">
      <div className="menu-card-top">
        <span className="menu-emoji">{item.emoji}</span>
        {item.popular && <span className="popular-badge">Popular</span>}
      </div>
      <h3>{item.name}</h3>
      <p className="menu-desc">{item.desc}</p>
      <div className="menu-footer">
        <div>
          <div className="menu-price">${item.price.toFixed(2)}</div>
          <div className="menu-time">⏱ {item.time}</div>
        </div>
        <button className="add-btn" onClick={() => onAdd(item)}>
          +
        </button>
      </div>
    </div>
  );
}

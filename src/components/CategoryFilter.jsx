import React from "react";
import { CATEGORIES } from "../data/menuData";

export default function CategoryFilter({ active, onChange }) {
  return (
    <div className="cats">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          className={`cat-btn${active === cat ? " active" : ""}`}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

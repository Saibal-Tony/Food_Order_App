import React, { useState } from "react";
import { MENU_ITEMS } from "../data/menuData";
import CategoryFilter from "../components/CategoryFilter";
import MenuCard from "../components/MenuCard";

export default function MenuPage({ onAdd }) {
  const [category, setCategory] = useState("All");

  const filtered =
    category === "All"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === category);

  return (
    <>
      <div className="hero">
        <h1>
          Cravings delivered<br />
          <span>blazing fast.</span>
        </h1>
        <p>Restaurant-quality food at your door. Live order tracking included.</p>
      </div>

      <CategoryFilter active={category} onChange={setCategory} />

      <div className="menu-grid">
        {filtered.map((item) => (
          <MenuCard key={item.id} item={item} onAdd={onAdd} />
        ))}
      </div>
    </>
  );
}

import { categories } from '../data/menuData';

export default function CategoryFilter({ active, onChange }) {
  return (
    <div className="categories">
      {categories.map(cat => (
        <button
          key={cat}
          className={`cat-btn ${active === cat ? 'active' : ''}`}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
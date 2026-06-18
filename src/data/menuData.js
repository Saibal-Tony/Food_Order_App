export const CATEGORIES = ["All", "Burgers", "Pizza", "Sushi", "Desserts", "Drinks"];

export const MENU_ITEMS = [
  { id: 1,  name: "Classic Smash Burger",  category: "Burgers",  price: 12.99, emoji: "🍔", desc: "Double smash patty, cheddar, pickles, special sauce",  time: "15 min", popular: true  },
  { id: 2,  name: "BBQ Bacon Stack",        category: "Burgers",  price: 14.99, emoji: "🥩", desc: "Bacon, BBQ glaze, crispy onions, jalapeños",           time: "18 min", popular: false },
  { id: 3,  name: "Veggie Crunch Burger",   category: "Burgers",  price: 11.49, emoji: "🥦", desc: "Black bean patty, avocado, sriracha mayo",             time: "12 min", popular: false },
  { id: 4,  name: "Margherita Pizza",       category: "Pizza",    price: 13.99, emoji: "🍕", desc: "San Marzano tomato, fresh mozzarella, basil",          time: "20 min", popular: true  },
  { id: 5,  name: "Pepperoni Inferno",      category: "Pizza",    price: 15.49, emoji: "🔥", desc: "Double pepperoni, chilli oil, honey drizzle",          time: "22 min", popular: true  },
  { id: 6,  name: "Truffle Mushroom Pizza", category: "Pizza",    price: 16.99, emoji: "🍄", desc: "Truffle cream, wild mushrooms, parmesan",              time: "22 min", popular: false },
  { id: 7,  name: "Salmon Nigiri (6pc)",    category: "Sushi",    price: 14.99, emoji: "🍣", desc: "Fresh Atlantic salmon over seasoned rice",             time: "10 min", popular: true  },
  { id: 8,  name: "Dragon Roll",            category: "Sushi",    price: 17.99, emoji: "🐉", desc: "Shrimp tempura, avocado, unagi sauce",                time: "12 min", popular: false },
  { id: 9,  name: "Spicy Tuna Roll (8pc)",  category: "Sushi",    price: 15.49, emoji: "🌶️", desc: "Tuna, sriracha mayo, cucumber, sesame",               time: "10 min", popular: false },
  { id: 10, name: "Lava Chocolate Cake",    category: "Desserts", price: 7.99,  emoji: "🍫", desc: "Warm dark chocolate, vanilla bean ice cream",          time: "8 min",  popular: true  },
  { id: 11, name: "Mango Sorbet",           category: "Desserts", price: 5.99,  emoji: "🥭", desc: "Alphonso mango, coconut milk, lime zest",             time: "5 min",  popular: false },
  { id: 12, name: "Craft Lemonade",         category: "Drinks",   price: 4.49,  emoji: "🍋", desc: "Freshly squeezed, mint, sea salt",                    time: "3 min",  popular: false },
  { id: 13, name: "Mango Lassi",            category: "Drinks",   price: 4.99,  emoji: "🥛", desc: "Chilled mango, yogurt, cardamom",                     time: "3 min",  popular: true  },
  { id: 14, name: "Cold Brew Coffee",       category: "Drinks",   price: 5.49,  emoji: "☕", desc: "12-hour cold brew, oat milk option",                  time: "2 min",  popular: false },
];

export const ORDER_STEPS = [
  { label: "Order Placed",      desc: "We received your order",     emoji: "✅", time: "Just now" },
  { label: "Preparing",         desc: "Chef is cooking your food",  emoji: "👨‍🍳", time: "~10 min" },
  { label: "Out for Delivery",  desc: "Rider is on the way",        emoji: "🛵", time: "~10 min" },
  { label: "Delivered",         desc: "Enjoy your meal!",           emoji: "🎉", time: "" },
];

export const STEP_PROGRESS = [10, 40, 75, 100];
export const STEP_ETA      = ["35 min", "25 min", "10 min", "Delivered!"];

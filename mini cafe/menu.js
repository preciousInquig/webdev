const menuItems = [
  {
    name: "Matcha Latte",
    price: 3.00,
    desc: "Smooth Japanese green tea latte topped with foam.",
    emoji: "🍵"
  },
  {
    name: "Sakura Milk Tea",
    price: 3.40,
    desc: "Sweet floral milk tea inspired by cherry blossoms.",
    emoji: "🧋"
  },
  {
    name: "Strawberry Frappé",
    price: 3.80,
    desc: "Icy blend of strawberries and cream, perfect for summer.",
    emoji: "🍓"
  }
];

const menuList = document.getElementById("menu-list");

menuItems.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("menu-card");

  card.innerHTML = `
    <h3>${item.emoji} ${item.name} - $${item.price.toFixed(2)}</h3>
    <p>${item.desc}</p>
    <button onclick="orderItem('${item.name}')">Order Now</button>
  `;

  menuList.appendChild(card);
});

function orderItem(item) {
  alert(`You ordered: ${item}!`);
}

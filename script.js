const phones = [
  ["Galaxy S25", "79,999", "📱"],
  ["iPhone 16", "69,999", "🍎"],
  ["Pixel 9", "64,999", "🤖"],
  ["OnePlus 13", "59,999", "⚡"],
];
let n = 0;
shop.innerHTML = phones.map(
  ([name, price, icon]) =>
    `<div class="card">
      <span>${icon}</span><br>
      <b>${name}</b>
      <p>₹${price}</p>
      <button onclick="add()">Buy Now</button>
    </div>`
).join("");
function add() {
  count.textContent = ++n;
}

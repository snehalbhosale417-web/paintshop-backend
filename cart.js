function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");

  container.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>
    `;

    container.appendChild(div);
    total += item.price;
  });

  totalEl.innerText = "Total: ₹" + total;
}

function clearCart() {
  localStorage.removeItem("cart");
  alert("Cart cleared");
  loadCart();
}

loadCart();
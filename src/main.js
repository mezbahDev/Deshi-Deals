import "./index.css";

// access the cart value

const totalPrice = document.getElementById("totalPrice");
const total = document.getElementById("total");
const discount = document.getElementById("discount");

let currentTotal = 0;

// access the buy button of product

const buyBtns = document.querySelectorAll(".buyButton");
const productPrice = document.querySelectorAll(".productPrice");

buyBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    const productCard = e.target.closest(".productCard");
    const priceElement = productCard.querySelector(".productPrice");
    const price = parseInt(priceElement.textContent);

    currentTotal += price;

    totalPrice.innerHTML = currentTotal;
  });
});

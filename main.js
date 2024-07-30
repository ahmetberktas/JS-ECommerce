const categoryList = document.querySelector(".categories");
const productList = document.querySelector(".products");
const modal = document.querySelector(".modal-wrapper");
const basketBtn = document.querySelector(".basket");
const closeBtn = document.querySelector("#close-btn");
const basketList = document.querySelector("#list");
const totalInfo = document.querySelector("#total");

document.addEventListener("DOMContentLoaded", () => {
  fetchCategories();
  fetchProducts();
});

basketBtn.addEventListener("click", () => {
  modal.classList.add("active");
  renderBasket();
});

document.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("modal-wrapper") ||
    e.target.id === "close-btn"
  ) {
    modal.classList.remove("active");
  }
});

const baseUrl = "https://fakestoreapi.com";

function fetchCategories() {
  fetch(`${baseUrl}/products/categories`)
    .then((response) => response.json())
    .then(renderCategories);
}

function renderCategories(categories) {
  categories.forEach((category) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category");
    const randomNum = Math.round(Math.random() * 1000);
    categoryDiv.innerHTML = `
              <img src="https://picsum.photos/300/300?r=${randomNum}" />
              <h2>${category}</h2>
      `;
    categoryList.appendChild(categoryDiv);
  });
}

let data;
async function fetchProducts() {
  try {
    const response = await fetch(`${baseUrl}/products`);
    data = await response.json();
    renderProducts(data);
  } catch (err) {}
}

function renderProducts(products) {
  const cardsHTML = products
    .map(
      (product) => `
           <div class="card">
              <div class="img-wrapper">
                  <img src="${product.image}" />
              </div>
              <h4>${product.title}</h4>
              <h4>${product.category}</h4>
              <div class="info">
                <span>${product.price}$</span>
                <button onclick="addToBasket(${product.id})">Sepete Ekle</button>
              </div>
            </div>
    `
    )
    .join(" ");

  productList.innerHTML = cardsHTML;
}

let basket = [];
let total = 0;

function addToBasket(id) {
  const product = data.find((i) => i.id === id);
  const found = basket.find((i) => i.id == id);
  if (found) {
    found.amount++;
  } else {
    basket.push({ ...product, amount: 1 });
  }

  /* Bildirim ekleme */
  Toastify({
    text: "Product added to cart",
    duration: 3000,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
}

function renderBasket() {
  basketList.innerHTML = basket
    .map(
      (item) => `
        <div class="item">
            <img src="${item.image}" />
            <h3 class="prod-title">${item.title.slice(0, 20) + "..."}</h3>
            <h4 class="prod-price">${item.price} $</h4>
            <p>Miktar: ${item.amount}</p>
            <img onclick="handleDelete(${
              item.id
            })" id="delete-img" src="./assets/images/delete.png" alt="" />
          </div>
    `
    )
    .join(" ");
  calculateTotal();
}

function calculateTotal() {
  const total = basket.reduce((sum, i) => sum + i.price * i.amount, 0);
  const amount = basket.reduce((sum, i) => sum + i.amount, 0);
  totalInfo.innerHTML = `
   <span class="count">${amount} Product</span>
          Total Price:
          <span class="price">${total.toFixed(2)} </span>$
          `;
}

function handleDelete(deleteId) {
  const newArray = basket.filter((i) => i.id !== deleteId);
  basket = newArray;
  renderBasket();
  calculateTotal();
}

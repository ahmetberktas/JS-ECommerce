const categoryList = document.querySelector(".categories");
const productList = document.querySelector(".products");
const modal = document.querySelector(".modal-wrapper");
const basketBtn = document.querySelector(".basket");
const closeBtn = document.querySelector("#close-btn");

document.addEventListener("DOMContentLoaded", () => {
  fetchCategories();
  fetchProducts();
});

basketBtn.addEventListener("click", () => {
  modal.classList.add("active");
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

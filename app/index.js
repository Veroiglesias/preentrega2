// ARCH GALLERY App🏰
const mySection = document.getElementById("articles-container");
const cartModal = document.getElementById("cartModal");
const carritoItem = document.getElementById("carritoItem");
const closeCartButton = document.getElementById("closeCart");
const toggleCartButton = document.getElementById("toggleCart");
let cart = [];

function agregarAlCarrito(item) {
  const repetido = cart.some((carritoItem) => carritoItem.title === item.title);

  if (repetido) {
    alert("Ya se encuentra en favoritos");
  } else {
    cart.push(item);
    renderCart();
  }
}

function renderCart() {
  if (cart.length === 0) {
    carritoItem.innerHTML =
      "<p>Todavía no agregaste repuestos en tu service</p>";
  } else {
    carritoItem.innerHTML = cart
      .map(
        (item, index) => `
                          <div class="cart-item">
                            <img src="${item.imageUrl}" style="width: 400px; height: 200px;">
                            <button onclick="removeFromCart(${index})" 
                                    class="mb-4 px-6 bg-gray-800 remove-btn rounded font-mono" >
                              Remove
                            </button>
                          </div>
                         `
      )
      .join("");
  }

  localStorage.setItem("My Favorites", JSON.stringify(cart));
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

myData.forEach((item) => {
  const myArticle = `
                      <article class="px-8 py-2 text-center border-b-4 border-cyan-800">
                        <h2 class="text-4xl font-mono">${item.titulo}</h2>
                        <p class="text-sm mb-2">${item.descripcion}</p>
                        <img src="${item.imageUrl}" class="mb-2 rounded-lg border-2 border-cyan-800" />
                        <p class="text-sm mb-2">${item.precio}</p>
                        <button class="py-2 px-6 font-bold rounded hover:bg-gray-800 like-btn">Like it</button>
                      </article>
                    `;

  mySection.innerHTML += myArticle;
});

// creo variable acá porque este button fue agreagado en la línea 48
// agregas like-btn en su "class" para manipularlo mejor
const likeButtons = document.querySelectorAll(".like-btn");
likeButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    agregarAlCarrito(myData[index]);
  });
});

closeCartButton.addEventListener("click", function hideCart() {
  cartModal.classList.add("hidden");
});
toggleCartButton.addEventListener("click", function showCart() {
  cartModal.classList.remove("hidden");
});

// **onload or event load**
// Al hacer f5 me guarda todo en el carrito y en el Local
window.addEventListener("load", function () {
  const savedCart = localStorage.getItem("cartItems");
  if (savedCart) {
    cart = JSON.parse(savedCart);
    renderCart();
  }
});

// ARCH GALLERY App🏰
const mySection = document.getElementById("articles-container");
const panelServicios = document.getElementById("panelServicios");
const serviceItem = document.getElementById("serviceItem");
const botonCerrar = document.getElementById("cerrar");
const toggleServiceButton = document.getElementById("toggleService");
let tuService = [];

function agregarService(item) {
  const repetido = tuService.some(
    (carritoItem) => carritoItem.descripcion === item.descripcion
  );

  if (repetido) {
    alert("Ya se encuentra en tu service");
  } else {
    tuService.push(item);
    repuestosService();
  }
}

function repuestosService() {
  if (tuService.length === 0) {
    serviceItem.innerHTML =
      "<p>Todavía no agregaste repuestos en tu service</p>";
  } else {
    serviceItem.innerHTML = tuService
      .map(
        (item, index) => `
                          <div class="cart-item">
                            <img src="${item.imageUrl}" style="width: 200px; height: 200px;">
                            <h2 class="text-4xl font-sans">${item.titulo}</h2>
                            <p class="text-sm mb-2">${item.precio}</p>
                            <button onclick="sacarService(${index})" 
                                    class="mb-4 px-6 bg-gray-800 remove-btn rounded font-sans" >
                              Remover
                            </button>
                          </div>
                         `
      )
      .join("");
  }
}

function sacarService(index) {
  tuService.splice(index, 1);
  repuestosService();
}

repuestos.forEach((item) => {
  const articulos = `
                      <article class="px-8 py-2 text-center border-b-4 border-black">
                        <h2 class="text-4xl font-sans">${item.titulo}</h2>
                        <p class="text-sm mb-2 mt-2">${item.descripcion}</p>
                        <img src="${item.imageUrl}" style="width: 500px; height: 500px class="mb-2 rounded-lg border-2 border-stone-800" />
                        <p class="text-2xl mb-2 mt-2">${item.precio}</p>
                        <button class="py-2 px-6 font-bold rounded hover:bg-gray-800 agregar-btn">Agregar</button>
                      </article>
                    `;

  mySection.innerHTML += articulos;
});

// creo variable acá porque este button fue agreagado en la línea 48
// agregas like-btn en su "class" para manipularlo mejor
const agregarBtn = document.querySelectorAll(".agregar-btn");
agregarBtn.forEach((button, index) => {
  button.addEventListener("click", () => {
    agregarService(repuestos[index]);
  });
});

botonCerrar.addEventListener("click", function hideCart() {
  panelServicios.classList.add("hidden");
});
toggleServiceButton.addEventListener("click", function showCart() {
  panelServicios.classList.remove("hidden");
});

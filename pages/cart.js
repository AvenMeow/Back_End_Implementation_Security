const contenedorTarjetas = document.getElementById("containerCart");
const cantidadElement = document.getElementById("quantity");
const precioElement = document.getElementById("price");
const carritoVacioElement = document.getElementById("emptyCart");
const totalesContainer = document.getElementById("total");

/** Crea las tarjetas de productos teniendo en cuenta lo guardado en localStorage */
function crearTarjetasProductosCarrito() {
  contenedorTarjetas.innerHTML = "";
  const productos = JSON.parse(localStorage.getItem("bicicletas"));
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
      const nuevoItem = document.createElement("div");
      nuevoItem.classList = "tarjeta-producto";
      nuevoItem.innerHTML = `
    <img src="./img/productos/${producto.id}.jpg" alt="Bicicleta 1">
    <h3>${producto.nombre}</h3>
    <span>$${producto.price}</span>
    <div>
    <button>-</button>
    <span class="quantity">${producto.quantity}</span>
    <button>+</button>
    </div>
    `;
      contenedorTarjetas.appendChild(nuevoItem);
      nuevoItem
        .getElementsByTagName("button")[0]
        .addEventListener("click", (e) => {
          const cantidadElement = e.target.parentElement.getElementsByClassName("quantity")[0];
          cantidadElement.innerText = restarAlCarrito(producto);
          crearTarjetasProductosCarrito();
          actualizarTotales();
        });
      nuevoItem
        .getElementsByTagName("button")[1]
        .addEventListener("click", (e) => {
          const cantidadProductos = e.target.parentElement.getElementsByClassName("quantity")[0];
          cantidadProductos.innerText = agregarAlCarrito(producto);
          actualizarTotales();
        });
    });
  }
  revisarMensajeVacio();
  actualizarTotales();
  actualizarNumeroCarrito();
}

crearTarjetasProductosCarrito();

/** Actualiza el total de precio y unidades de la página del carrito */
function actualizarTotales() {
  const productos = JSON.parse(localStorage.getItem("bicicletas"));
  let quantity = 0;
  let price = 0;
  if (productos && productos.length > 0) {
    productos.forEach((producto) => {
        quantity += producto.quantity;
        price += producto.price * producto.quantity;
    });
  }
  cantidadElement.innerText = quantity;
  precioElement.innerText = price;
  if(price === 0) {
    reiniciarCarrito();
    revisarMensajeVacio();
  }
}

document.getElementById("reiniciar").addEventListener("click", () => {
  contenedorTarjetas.innerHTML = "";
  reiniciarCarrito();
  revisarMensajeVacio();
});

/** Muestra o esconde el mensaje de que no hay nada en el carrito */
function revisarMensajeVacio() {
  const productos = JSON.parse(localStorage.getItem("bicicletas"));
  carritoVacioElement.classList.toggle("escondido", productos);
  totalesContainer.classList.toggle("escondido", !productos);
}
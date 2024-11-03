const contenedorTarjetas = document.getElementById("containerProduct");
const unidadesElementos = document.getElementById("quantity");
const precioElementos = document.getElementById("price");
const carritoVacioElement = document.getElementById("emptyCart");
const containerTotal = document.getElementById("total");

/* Crea las tarjetas de productos teniendo en cuenta lo guardado en localStorage */
function crearTarjetasProductosInicio(){
  contenedorTarjetas.innerHTML = "";
  const productos = JSON.parse(localStorage.getItem("items"));
  console.log(productos);
  if (productos && productos.length > 0){
    productos.forEach(producto => {
      const nuevoItem = document.createElement("div");
      nuevoItem.classList = "cardProduct";
      nuevoItem.innerHTML = `<img src="img/productos/${producto.id}.jpeg">
      <h3 class="product-name">${producto.nombre}</h3>
      <p class="product-price">$${producto.precio}</p>
      <div class="quantity-controls">
       <button class="decrement-btn">-</button>
       <span class="product-quantity">${producto.cantidad}</span>
       <button class="increment-btn">+</button>
      </div>`;
      contenedorTarjetas.appendChild(nuevoItem);
  
      nuevoItem.getElementsByTagName("button")[1].addEventListener("click", (e)=>{ 
        const numeroElementos = e.target.parentElement.getElementsByTagName("span")[0];
        numeroElementos.innerText = agregarAlCarrito(producto);
        actualizarTotales();
      });
      nuevoItem.getElementsByTagName("button")[0].addEventListener("click", (e)=>{
        restarAlCarrito(producto);
        crearTarjetasProductosInicio();
        actualizarTotales();
      });
    });
  }
}

crearTarjetasProductosInicio();
actualizarTotales();

/* Actualiza el total de precio y unidades de la página del carrito */
function actualizarTotales(){
  const productos = JSON.parse(localStorage.getItem("items"));
  let unidades = 0;
  let precio = 0;
  if (productos && productos.length > 0){
    productos.forEach(producto => {
      unidades += producto.cantidad;
      precio += producto.precio * producto.cantidad;
    });
    unidadesElementos.innerText = unidades;
    precioElementos.innerText = precio;
  }
}

/* Muestra o esconde el mensaje de que no hay nada en el carrito */
function revisarMensajeVacio() {
  const productos = JSON.parse(localStorage.getItem("items"));
  carritoVacioElement.classList.toggle("hidden", productos && productos.length > 0);
  containerTotal.classList.toggle("hidden", !(productos && productos.length > 0));
}

revisarMensajeVacio();
const contenedorTarjetas = document.getElementById("containerProduct");
const unidadesElementos = document.getElementById("quantity");
const precioElementos = document.getElementById("price");
const carritoVacioMensaje = document.getElementById("emptyCart");
const contenedorTotales = document.getElementById("total");
const carritoComprado = document.getElementById("fullCart");
const carritoBorrado = document.getElementById("reboot");

/* Crea las tarjetas de productos teniendo en cuenta lo guardado en localStorage */
function crearTarjetasProductosInicio(){
  contenedorTarjetas.innerHTML = "";
  const productos = JSON.parse(localStorage.getItem("items"));
  console.log(productos);
  if (productos && productos.length > 0){
    productos.forEach(producto=> {
      const nuevoItem = document.createElement("div");
      nuevoItem.classList = "cardProduct";
      nuevoItem.innerHTML = `<img src="img/productos/${producto.pid}.jpeg">
      <h3 class="product-name">${producto.name}</h3>
      <p class="product-price">$${producto.price}</p>
      <div class="quantity-controls">
       <button class="decrement-btn">-</button>
       <span class="product-quantity">${producto.quantity}</span>
       <button class="increment-btn">+</button>
      </div>`;
      contenedorTarjetas.appendChild(nuevoItem);
  
      nuevoItem.getElementsByTagName("button")[1].addEventListener("click", (e)=> { 
        const numeroElementos = e.target.parentElement.getElementsByTagName("span")[0];
        numeroElementos.innerText = agregarAlCarrito(producto);
        actualizarTotales();
      });
      nuevoItem.getElementsByTagName("button")[0].addEventListener("click", (e)=> {
        restarAlCarrito(producto);
        crearTarjetasProductosInicio();
        actualizarTotales();
      });
    });
  }
  mostrarCarritoVacioMensaje();
}

crearTarjetasProductosInicio();
actualizarTotales();

/* Actualiza el total de precio y unidades de la página del carrito */
function actualizarTotales(){
  const productos = JSON.parse(localStorage.getItem("items"));
  let unidades = 0;
  let precio = 0;
  if (productos && productos.length > 0){
    productos.forEach(producto=> {
      unidades += producto.quantity;
      precio += producto.price * producto.quantity;
    });
    unidadesElementos.innerText = unidades;
    precioElementos.innerText = precio;
    if(precio === 0){
      reinicarCarrito();
      mostrarCarritoVacioMensaje();
    }
  }
}

/* P4. front-end cart */
carritoComprado.addEventListener("click", async()=> { //Envía el contenido actual del carrito de compras almacenado en localStorage al servidor */
  const currentCart = JSON.parse(localStorage.getItem("items"));
  if (currentCart && currentCart.length > 0){
    const res = await fetch("http://localhost:3000/currentCart/fullCart", {
      method: "POST", //Especifica una solicitud POST para enviar datos al servidor
      headers: {"Content-Type": "application/json"}, //Define el tipo de contenido como JSON
      body: JSON.stringify(currentCart) //Convierte el carrito a JSON para enviarlo
    });
    if (res.ok){
      reinicarCarrito(); //Elimina los elementos de localStorage
      window.location.href = "http://127.0.0.1:5500/pages/welldone!.html" //Redirige al usuario a una página de confirmación de compra exitosa
    } 
  }
});

/* Borra todos los elementos guardados en el carrito */
carritoBorrado.addEventListener("click", reinicarCarrito)
function reinicarCarrito(){
  localStorage.removeItem("items");
  actualizarTotales();
  crearTarjetasProductosInicio();
}

/* Muestra o esconde el mensaje de que no hay nada en el carrito */
function mostrarCarritoVacioMensaje(){
  const productos = JSON.parse(localStorage.getItem("items"));
  carritoVacioMensaje.classList.toggle("hidden", productos && productos.length > 0);
  contenedorTotales.classList.toggle("hidden", !(productos && productos.length > 0));
}
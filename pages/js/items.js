const contenedorTarjetas = document.getElementById("containerProduct");

/* Crea las tarjetas de productos teniendo en cuenta el archivo lista.js */
function crearTarjetasProductosInicio(productos){
  
  productos.forEach(producto=> {
    const nuevoItem = document.createElement("div");
    nuevoItem.classList = "cardProduct";
    nuevoItem.innerHTML = `<img src="img/productos/${producto.pid}.jpeg">
    <h3>${producto.name}</h3>
    <p class="precio">$${producto.price}</p>
    <button>Agregar al carrito</button>`

    contenedorTarjetas.appendChild(nuevoItem);

    nuevoItem.getElementsByTagName("button")[0].addEventListener("click", ()=> agregarAlCarrito(producto));
  });
}

/* P3. back-end data in front-end */
getProducts().then(items=> { //Recibe la lista de productos y luego muestra esos productos en la interfaz de usuario
  crearTarjetasProductosInicio(items);
})
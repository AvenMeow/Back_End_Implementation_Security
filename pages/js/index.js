const contenedorTarjetas = document.getElementById("containerProduct");

/* Crea las tarjetas de productos teniendo en cuenta el archivo lista.js */
function crearTarjetasProductosInicio(productos){
  //Orden aleatorio y selección de los primeros seis productos
  const productosAleatorios = productos.sort(() => 0.5 - Math.random()).slice(0, 6);
  
  productosAleatorios.forEach(producto=> {
    const nuevoItem = document.createElement("div");
    nuevoItem.classList = "cardProduct";
    nuevoItem.innerHTML = `<img src="img/productos/${producto.id}.jpeg">
      <h3>${producto.nombre}</h3>
      <p class="precio">$${producto.precio}</p>
      <button>Agregar al carrito</button>`;

    contenedorTarjetas.appendChild(nuevoItem);

    nuevoItem.getElementsByTagName("button")[0].addEventListener("click", () => agregarAlCarrito(producto));
  });
}

getItems().then(items=> {
  crearTarjetasProductosInicio(items);
})
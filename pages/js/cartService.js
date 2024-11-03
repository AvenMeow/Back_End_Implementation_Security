/* Toma un producto o un objeto con al menos un ID y lo agrega al carrito */
function agregarAlCarrito(producto){
  //Revisa si el producto está en el carrito
  const memoria = JSON.parse(localStorage.getItem("items"));
  console.log(memoria);
  let conteo = 0;
  //Si no hay localStorage, se agrega
  if (!memoria){
    const productoNuevo = getNuevoProductoParaMemoria(producto);
    localStorage.setItem("items",JSON.stringify([productoNuevo]));
    conteo = 1;
  } else {
    //Si hay localStorage, fijarse si el artículo ya está ahí
    const productoIndice = memoria.findIndex(item => item.pid === producto.pid);
    console.log(productoIndice);
    const memoriaNueva = memoria;
    //Si el producto no está en el carrito, se agrega
    if (productoIndice === -1) {
      memoriaNueva.push(getNuevoProductoParaMemoria(producto));
      conteo = 1;
    } else {
      //Si el producto está en el carrito, 1 a la cantidad
      memoriaNueva[productoIndice].quantity++;
      conteo = memoriaNueva[productoIndice].quantity;
    }
    localStorage.setItem("items",JSON.stringify(memoriaNueva));
  }
  actualizarConteoCarrito();
  return conteo;
}

/* Resta una unidad de un producto del carrito */
function restarAlCarrito(producto){
  const memoria = JSON.parse(localStorage.getItem("items"));
  const productoIndice = memoria.findIndex(item => item.pid === producto.pid);
  if (memoria[productoIndice].quantity === 1){
    memoria.splice(productoIndice, 1);
  } else {
    memoria[productoIndice].quantity--;
  }
  localStorage.setItem("items",JSON.stringify(memoria));
  actualizarConteoCarrito();
}

/* Agrega cantidad a un producto */
function getNuevoProductoParaMemoria(producto){
  const productoNuevo = producto;
  productoNuevo.quantity = 1;
  return productoNuevo;
}

/* Actualiza el número del carrito del header */
const contadorCarritoElementos = document.getElementById("counter");
function actualizarConteoCarrito(){
  const memoria = JSON.parse(localStorage.getItem("items"));
  if (memoria && memoria.length > 0){
    const contador = memoria.reduce((acum, current)=> acum+current.quantity, 0);
    contadorCarritoElementos.innerText = contador;
    console.log(contador);
  } else {
    contadorCarritoElementos.innerText = 0;
  }
}

actualizarConteoCarrito();
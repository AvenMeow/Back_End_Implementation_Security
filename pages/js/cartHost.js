async function getProducts() {
    const res = await fetch("http://localhost:3000/products"); // fetch para hacer la solicitud al servidor y obtener los datos de la base de datos
    const result = await res.json(); // Esperando la respuesta de 'res.json()'
    return result;
}
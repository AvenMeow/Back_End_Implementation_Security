/* P3. back-end data in front-end */
async function getProducts() {
    const res = await fetch("http://localhost:3000/products"); //fetch envía una solicitud GET al servidor en el endpoint localhost:3000/products
    const result = await res.json(); //Se procesa el cuerpo de la respuesta y se convierte a un objeto JavaScript (JSON)
    return result; //Devuelve como el resultado los datos de productos obtenidos del servidor
}
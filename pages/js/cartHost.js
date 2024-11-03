async function getItems() {
    const res = await fetch("http://localhost:5500"); // fetch para hacer solicitudes de red
    const resJson = await res.json(); // Esperando la respuesta de 'red.json()'
    return resJson;
}
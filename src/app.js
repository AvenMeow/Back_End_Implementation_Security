import express from 'express' // Creación de aplicaciones web y APIs
import morgan from 'morgan' // Registro de solicitudes HTTP en servidores Express
import db from '../src/database/connection.database.js'

//setup
const app = express() // Instancia del framework Express
const port = 4000 // Asignación del puerto
app.listen(port, ()=> // Configuración de comunicación del puerto
    console.log('Server running on port ' + port)
)

//middlewares
app.use(morgan('dev')) // Detalles de solicitudes del script "dev"

//routes
app.get('/', async(req, res)=> { // Configuración de ruta y respuesta del API
    const result = await db.query('SELECT * FROM products')
    console.log(result.rows) // Muestra los resultados en la consola
    res.json(result.rows) // Envía los resultados como respuesta en formato JSON
})
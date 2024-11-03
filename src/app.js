import express from 'express' // Creación de aplicaciones web y APIs
import morgan from 'morgan' // Registro de solicitudes HTTP en servidores Express
import cors from 'cors' // Control del acceso a recursos en un servidor desde diferentes dominios
import db from '../src/database/connection.database.js'

//setup
const app = express() // Instancia del framework Express
const port = 3000 // Asignación del puerto
app.listen(port, ()=> // Configuración de comunicación del puerto
    console.log('Server running on port ' + port)
)

//middlewares
app.use(morgan('dev')) // Detalles de solicitudes del script "dev"
app.use(cors({
    origin: 'http://127.0.0.1:5500' /* Cambia el puerto según donde esté corriendo tu frontend */
})) 

//routes
app.get('/products', async(req, res)=> { // Configuración de ruta y respuesta del API con la base de datos
    const result = await db.query('SELECT * FROM products')
    res.json(result.rows) // Envía los datos de la base de datos como JSON
})
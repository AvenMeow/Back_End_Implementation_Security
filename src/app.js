import express from 'express' // Creación de aplicaciones web y APIs
import morgan from 'morgan' // Registro de solicitudes HTTP en servidores
import cors from 'cors' // Control del acceso a recursos en servidores
import db from '../src/database/connection.database.js'

/* P1. setup */
const app = express() // Instancia del framework Express
const port = 3000 // Asignación del puerto
app.listen(port, ()=> // Configuración de comunicación del puerto
    console.log('Server running on port ' + port)
)

/* middlewares */
app.use(morgan('dev')) // Ver solicitudes HTTP con el script "dev"
app.use(cors({ // Recibir solicitudes HTTP desde orígenes especificados
    origin: 'http://127.0.0.1:5500' /* Cambia el puerto según donde esté corriendo tu front-end */
}))
app.use(express.json()) // Habilitar el análisis de cuerpos de solicitudes HTTP en formato JSON en el servidor

/* P2. database route */
app.get('/products', async(req, res)=> { // Configuración de ruta y respuesta de la base de datos con el API
    const result = await db.query('SELECT * FROM products')
    res.json(result.rows) // Envío de los datos de la base de datos como respuesta JSON
})

/* P4. front-end route */
app.post('/currentCart/fullCart', async(req, res)=> { // Configuración de ruta y respuesta del front-end con el API
    if (req.body && req.body.length > 0){
        return res.sendStatus(200) // Estado de respuesta exitosa
    }
    res.sendStatus(400) // Estado de respuesta incorrecta
})
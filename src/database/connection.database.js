import pg from 'pg' // Interacción con bases de datos PostgreSQL
import 'dotenv/config' // Gestión de configuraciones sensibles

/* P2. database connection */
const {Pool} = pg // Instancia del framework Postgre
const db = new Pool({ // Configuración de conexión de la base de datos
    allowExitOnIdle: true,
    connectionString: process.env.DATABASE_URL // .env
});

try { // Verificar si la conexión a la base de datos está activa y funcionando
    await db.query('SELECT NOW()')
    console.log('Connecting to the database... OK!')
} catch (error) {
    console.log('Connecting to the database... ERROR!')
}

export default db
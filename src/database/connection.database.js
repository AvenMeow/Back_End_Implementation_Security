import pg from 'pg' // Interacción con bases de datos PostgreSQL
import 'dotenv/config' // Gestión de configuraciones sensibles, como contraseñas o credenciales

const {Pool} = pg // Instancia del framework PG

const db = new Pool({ // Configuración de conexión de la base de datos
    allowExitOnIdle: true,
    connectionString: process.env.DATABASE_URL
});

try { // Verificar si la conexión a la base de datos está activa y funcionando
    await connection.query('SELECT NOW()')
    console.log('Connecting to the database... OK!')
} catch (error) {
    console.log('Connecting to the database... ERROR!')
}

export default db
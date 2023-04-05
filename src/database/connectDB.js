const mongoose = require('mongoose'); // importa mongoose para usarlo en el proyecto
require('dotenv').config(); // importa dotenv para usarlo en el proyecto
const connectionDB = process.env.DB_CONNECTION // obtiene la cadena de conexión de la base de datos desde el archivo .env

// conexion a la base de datos mongoDB
mongoose.connect(connectionDB) // conecta a la base de datos
    .then(() => {
        console.log('🚀 Database connected') // muestra un mensaje en la consola si la conexión es exitosa
    }).catch((err) => {
        console.log(err) // muestra un mensaje en la consola si la conexión falla
    });





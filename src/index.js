const express = require('express'); //importa express para un proyecto
const app = express(); //crea una instancia de express para el proyecto actual
const port = process.env.PORT || 3000; //puerto en el que se ejecutará el servidor
const notFoundHandlerMiddleware = require('./middleware/404'); //importa el middleware de manejo de errores 404
const v1CharactersRouter = require('./v1/routes/charactersRoutes'); //importa el router de la versión 1


// *********esta ruta ya no es necesaria porque se usa el router de la versión 1**********
// app.get('/', (req, res) => { //crea una ruta para el servidor
//     res.send('Hello World!'); //envía un mensaje al cliente
// });   
app.use(express.json()); //usa el middleware de express para poder usar json en el proyecto

app.use('/api/v1/characters', v1CharactersRouter); //usa el router de la versión 1 en la ruta /api/v1

// Middleware para manejar errores 404
app.use(notFoundHandlerMiddleware.notFoundHandler); //usa el middleware de manejo de errores 404
  
  // Manejo de errores
app.use(notFoundHandlerMiddleware.errorManagment); //usa el middleware de manejo de errores 404


app.listen(port, () => { //inicia el servidor
    console.log(`🚀 Server running on port:${port}`); //muestra un mensaje en la consola

});
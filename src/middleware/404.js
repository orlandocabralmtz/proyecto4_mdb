const createError = require('http-errors'); //importa el paquete de errores de http de express



const notFoundHandler = (req, res, next) => {
    next(createError(404));
};

const  errorManagment = (err, req, res, next)  => {  //usa el middleware de express para manejar errores 404. err es el error que se envía, req 
    //es la petición, res es la respuesta y next es la función que se usa para pasar al siguiente middleware o al controlador

    res.status(err.status || 500);  //envía el status del error o 500 para indicar que es un error interno
    res.send({ //envía un mensaje de error
        error: {
            status: err.status || 500, //envía el status del error o 500 para indicar que es un error interno
            message: err.message,
        },
    });
}



module.exports = {
    notFoundHandler,
    errorManagment,
}
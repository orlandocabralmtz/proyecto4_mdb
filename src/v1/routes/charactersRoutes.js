const express = require('express');
const router = express.Router(); // crea una instancia de router para el proyecto actual para poder crear rutas
const charactersController = require('../../controllers/charactersController'); //importa el controlador de characters

// esto srive para que el router de la versión 1 pueda usar el router de characters
// esto se acomoda asi porque el router de characters se usa en el router de la versión 1
router
    .get('/', charactersController.getAllCharacters) // obtiene todos los personajes
    // (req, res) => { //crea una ruta para el servidor   
    //     res.send(`Get all characters`);    // esta parte se elimina por que ahora se usa el controlador
    // })
    .get('/:id', charactersController.getOneCharacterById) // obtiene un personaje por id
    .post('/', charactersController.newCharacter) // crea un nuevo personaje
    .put('/:characterId', charactersController.updateCharacter) // actualiza un personaje por id
    .delete('/:characterId', charactersController.deleteCharacter) // elimina un personaje por id


module.exports = router; //exporta el router para que pueda ser usado en otros archivos